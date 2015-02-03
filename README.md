"Camel" is a blogging platform written in [Node.js][n]. It is designed to be fast, simple, and lean.

[n]: http://nodejs.org/

---

This is a slightly modified version that is used on the [Data McFly Blog](http://blog.datamcfly.com). Some of the changes we've made include:

* Added a `/sitemap.xml` route
* Added Linked List support
* Separated some templates from index.md into their own individual files, just to make it easier to manage the blog's layout.

# Design Goals

More specifically, the design goals were:

* Easy posting using [Markdown][m]
* Basic metadata, stored in each file
* Basic templating, with a site header/footer and post header stored separately from content
* Extremely quick performance, by caching rendered HTML output
* Support RSS

[m]: http://daringfireball.net/projects/markdown


# Approach

Camel is neither a static blogging platform nor a truly dynamic one. It is a little
from column A, and a little from column B. The first time a post is loaded, it is rendered
by converting from Markdown to HTML, and then post-pocessed by adding headers & footer, as well
as making metadata replacements. Upon a completed render, the resultant HTML is stored
and used from that point forward.

# Usage

## Installation

1. Install [Node][n] & [npm][npm]
2. Clone the repository
3. Get all the dependencies using NPM: `npm install`
4. `node ./camel.js`

[npm]: https://www.npmjs.org/

## Configuration

* There's a group of "statics" near the top of the file
* The parameters in the `/rss` route will need to be modified.
* The headers/footer:
    * `header.html` - site header; shown at the top of every page
    * `footer.html` - site footer; shown at the bottom of every page
    * `defaultTags.html` - default metadata; merged with page metadata (page wins)
    * `postHeader.html` - post header; shown at the top of every post not marked with `@@ HideHeader=true`. See below.
    * `postFooter.html` - post footer; shown at the bottom of every post not marked with `@@ HideHeader=true`. See below.
	* `DayTemplate.html` - used to render a day
    * `ArticlePartial.html` – used to render a single article in a day
    * `FooterTemplate.html` - used to render pagination

* It's worth noting there are some [Handlebars][hb] templates in use:
    * `postHeader.html` - Placed on every post between the site header and post content

[hb]: http://handlebarsjs.com/

## Files

To use Camel, the following files are required:

    Root
      +-- camel.js
      |   Application entry point
      +-- package.json
      |   Node package file
      +-- templates/
      |     +-- defaultTags.html
      |     |   Site-level default tags, such as the site title
      |     +-- header.html
      |     |   Site header (top of every page)
      |     +-- footer.html
      |     |   Site footer (bottom of every page)
      |     +-- postHeader.html
      |     |   Post header (top of every post, after the site header. Handlebars template.)
      |     +-- postFooter.html
      |     |   Post footer (bottom of every post, displayed only on post single, after the post content. Handlebars template.)
      |     +-- DayTemplate.html
      |     |   The day loop, Used to render a day
      |     +-- ArticlePartial.html
      |     |   Single article listing, used to render a single article in a day
      |     +-- FooterTemplate.html
      |         Page footer, used to render pagination
      +-- public/
      |     +-- Any static files, such as images/css/javascript/etc.
      +-- posts/
          All the pages & posts are here. Pages in the root, posts ordered by day. For example:
            +-- index.md
            |   Root file; note that DayTemplate, ArticlePartial, and FooterTemplate are
            |   all Handlebars templates
            +-- about.md
            |   Sample about page
            +-- 2014/
            |   Year
            |     +-- 04/
            |     |   Month
            |     |   +-- 29/
            |     |   |   Day
            |     |   |    +-- some-blog-post.md
            |     |   +-- 30/
            |     |        +-- some-other-post.md
            |     |        +-- yet-another-post.md
            |     +-- 5/
            |         +-- 01/
            |             +-- newest-blog-post.md
            +-- etc.
            
## Metadata

For each post, metadata is specified at the top, and can be leveraged in the body. For example:

    @@ Title=Test Post
    @@ Date=2014-05 17:50
	

    This is a *test post* entitled "@@Title@@".
    
The title and date are required. Any other metadata is optional.


### Tagged Posts

If you want to add tags to a post, then you can add the tag to the post metadata. For example:

    @@ Title=Test Post
    @@ Date=2014-05 17:50
    @@ Tags=stuff
	

    This is a *test post* entitled "@@Title@@".
	
This would tell Camel to add the post to the tag called `stuff`, then you could use the `{{{TaggedIn}}` template code to add the tag link to the post, generally inside postFooter.html.

The `TaggedIn` template tag will be wrapped inside a `p` called `taggedIn` so you can then style that as you see fit.

This will also create a `/tags` page that acts as an archive that displays a list of all tags and associated posts and a direct `/tags/tag` page.

For example, in the above sample post, we created a tag called `stuff`, so then going to `/tags/stuff` would display a link to this post as well as any other posts.

Tags are useful for organizing posts.

Any post that does not have a tag assigned to it will get grouped into the `Uncategorized` tag.

### Linked Lists

If you want to make a post a linked post, then you would use the following metadata:

    @@ Title=Test Post
    @@ Date=2014-05 17:50
	@@ Linked=Yes
	@@ Link=http://datamcfly.com
	

    This is a *test post* entitled "@@Title@@".

This would tell Camel to treat the post as a linked post.

### Hide the post header and post footer

If you want a post to not display the `postHeader` and `postFooter` templates, you can add the following metadata:

	@@ Title=About Page
	@@ BodyClass=post
	@@ HideHeader=true
	
	This is a sample about page, that can be accessed via `/about`.


# Quirks

There are a couple of quirks, which don't bother me, but may bother you.


## Adding a Post

When a new post is created, if you want an instant refresh, you'll want to restart the
app in order to clear the caches. There is a commented out route `/tosscache` that will also
do this job, if you choose to enable it.

Otherwise, the internal caches will reset every 30 minutes.

Additionally, there is no mechanism within Camel for transporting a post to the `posts/`
directory. It is assumed that delivery will happen by way of a `git push` or equivalent.
That is, for example, how it would work when run on [Heroku][h].

[h]: http://www.heroku.com/

## Pagination

Camel uses a semi-peculiar pagination model which is being referred to as "loose pagination".
Partly due to laziness, and partly because it seems better, pagination isn't strict. Rather
than always cutting off a page after N posts, instead, pagination is handled differently.

Starting with the most recent day's posts, all the posts in that day are added to a logical
page. Once that page contains N *or more* posts, that page is considered complete. The next
page is then started.

Therefore, all the posts in a single day will __always__ be on the same page. That, in turns, means
that pages will have *at least* N posts, but possibly more. In fact, a single page could have
quite a few more than N posts if, say, on one lucrative day there are 1.5*N or 2*N posts.

Pagination is only necessary on the homepage, and page numbers are 1-based. Pages greater than
1 are loaded by passing the query string parameter p. For example, `hostname/?p=3` for page 3.

# Status

Camel is functional, and is presently running [www.caseyliss.com][c]. It could probably stand
to be cleaned up a little bit, but it is considered feature complete.

[c]: http://www.caseyliss.com/

# License

Camel is MIT-Licensed.

Should you happen to use Camel, I'd love to know. Please [contact me][co].

[co]: http://www.caseyliss.com/contact
