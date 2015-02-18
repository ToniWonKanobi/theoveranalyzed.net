"Camel" is a blogging platform written in [Node.js][n]. It is designed to be fast, simple, and lean.

[n]: http://nodejs.org/

---

This is a slightly modified version that is used on the [Data McFly Blog](http://blog.datamcfly.com). Some of the changes we've made include:

* Added a `/sitemap.xml` route
* Added support for tagging posts, to help better organize posts.
* Separated some templates from index.md into their own individual files, just to make it easier to manage the blog's layout.

# Design Goals

More specifically, the design goals were:

* Easy posting using [Markdown][m]
* Basic metadata, stored in each file
* Basic templating, with a site header/footer and post header stored separately from content
* Extremely quick performance, by caching rendered HTML output
* Support for a RSS feed

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
4. Open up `config.js` and set your site info.
5. `node ./camel.js`

[npm]: https://www.npmjs.org/

## Configuration

* Open up `config.js` and enter your site info.
* There's a group of "statics" near the top of the file
* The parameters in the `/rss` route will need to be modified
* The headers/footers:
    * `header.html` - site header; shown at the top of every page
    * `footer.html` - site footer; shown at the bottom of every page
    * `default.html` - default metadata; merged with page metadata (page wins)
    * `postHeader.html` - post header; shown at the top of every post not marked with `@@ HideHeader=true`. See below.
    * `postFooter.html` - post footer; shown at the bottom of every post not marked with `@@ HideHeader=true`. See below.
	* `DayTemplate.html` - used to render a day
    * `ArticlePartial.html` – used to render a single article in a day
    * `FooterTemplate.html` - used to render pagination
    * `pageHeader.html` - used to render page headers on pages
    * `pageFooter.html` - used to render page footer
    * `singleHeader.html` - wrapper for posts, called before `postHeader` or `pageHeader`
    * `singleFooter.html` - wrapper for posts, called after `postFooter` or `pageFooter`
    * `postBodyStart.html` - wrapper for post content, called after `postHeader` or `pageHeader`
    * `postBodyEnd.html` - wrapper for post content, called before `postFooter` or `pageFooter`
    * `rssFooter.html` - RSS footer; intended to only show anything on the bottom of
       link posts in RSS, but is appended to all RSS entries.

* It's worth noting there are some [Handlebars][hb] templates in use:
	* `postHeader.html` - Placed on every post between the site header and post content
* If you'd like to have Camel post to Twitter, you need to set four environment variables (see below)

[hb]: http://handlebarsjs.com/

## Files

To use Camel, the following files are required:

    Root
      +-- camel.js
      |   Application entry point
      +-- config.js
      |   Application config file
      +-- package.json
      |   Node package file
      +-- templates/
      |     +-- defaultTags.html
      |     |   Site-level default , such as the site title, decprecated for `config.js`
      |     +-- header.html
      |     |   Site header (top of every page)
      |     +-- footer.html
      |     |   Site footer (bottom of every page)
      |     +-- postHeader.html
      |     |   Post header (top of every post, after the site header. Handlebars template.)
      |     +-- postFooter.html
      |     |   Post footer (bottom of every post, displayed only on post single, after the post content. Handlebars template.)
      |     +-- pageHeader.html
      |     |   Page header (top of every page, after the site header. Handlebars template.)
      |     |   Called if `HideHeader` is set to `false`, and `BodyClass` is set to `post`
      |     +-- pageFooter.html
      |     |   Page footer (bottom of every page, displayed only on page single, after the post content. Handlebars template.)
      |     +-- DayTemplate.html
      |     |   The day loop, Used to render a day
      |     +-- ArticlePartial.html
      |     |   Single article listing, used to render a single article in a day loop
      |     +-- singleHeader.html
      |     |   Single article entry (before the start of any article or page. Handlebars template.)
      |     +-- singleFooter.html
      |     |   Single article entry end (at the end of any article or page. Handlebars template.)
      |     +-- PostBodyStart.html
      |     |   Display after `postHeader` and before post content
      |     +-- PostBodyEnd.html
      |     |   Display after post content and before `postFooter`
      |     +-- FooterTemplate.html
      |     |   Page footer, used to render pagination
      |     +-- rssFooter.html
      |         RSS footer (at the end of every RSS item)
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
	@@ Description=This is a short description used in Twitter cards and Facebook Open Graph.
	@@ Image=http://somehost.com/someimage.png

	This is a *test post* entitled "@@Title@@".

The `Title` and `Date` are required. Any other metadata, such as `Description` and `Image`, is optional.	

### Link Posts

As of version 1.3, link posts are supported. To create a link post, simply add a `Link` metadata item:

    @@ Title=Sample Link Post
    @@ Date=2015-02-06 12:00
    @@ Link=http://www.vt.edu/

    This is a sample *link* post.

The presence of a `Link` metadata item indicates this is a link post. The formatting for
link and non-link post headers is controlled by the `postHeader.html` template.

In the RSS feed, the link for a link post is the *external* link. Thus, `rssFooter.html`
is used to add a permalink to the Camel site at the bottom of each link post. It is
important to note that this footer is shown on *every* post; it is up to the footer to
decide whether or not to show anything for the post in question. The example included in
this repo behaves as intended.


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

If you have a post in more than one tag, then separate the tag by a comma (,):

    @@ Title=Test Post
    @@ Date=2014-05 17:50
    @@ Tags=stuff, more stuff
	

    This is a *test post* entitled "@@Title@@".

This will display a list of tags for the post to use.

### Hide the post header and post footer

If you want a post to not display the `postHeader` and `postFooter` (or `pageHeader`) templates, you can add the following metadata:

	@@ Title=About Page
	@@ BodyClass=post
	@@ HideHeader=true
	
	This is a sample about page, that can be accessed via `/about`.


### Redirects

As of version 1.1, redirects are supported. To do so, a specially formed file is placed
in the `posts/` tree. The file should have two lines; the first should be the status code
of the redirect ([301][301] or [302][302]). The second line should be the target URL.

Suppose you wanted to redirect `/2014/12/10/source` to `/2014/12/10/destination`. You will
add the file `/posts/2014/12/10/source.redirect`; it will contain the following:

    302
    /2014/12/10/destination

Redirects to both internal and external URLs are supported. Providing an invalid status
code will result in that status code being used blindly, so tread carefully.

[301]: http://en.wikipedia.org/wiki/HTTP_301
[302]: http://en.wikipedia.org/wiki/HTTP_302

### Automatic tweets

As of version 1.4, Camel can automatically tweet when a new post is discovered. This
requires a custom app to be set up for your blog; you can set this up [at Twitter][tdev].
To enable, specify four environment variables to correspond to those Twitter issues:

* `TWITTER_CONSUMER_KEY`
* `TWITTER_CONSUMER_SECRET`
* `TWITTER_ACCESS_TOKEN`
* `TWITTER_TOKEN_SECRET`

Additionally, a couple of variables up at the top of the file need to be set inside `config.js`:

* `twitterUsername` - the username of the Twitter account that will be tweeted from.
* `twitterClientNeedle` - a portion of the client's name

These variables are located inside the `config.js` file.

Upon startup, and when the caches are cleaned, Camel will look at the most recent tweets
by the account in question by the app with a name that contains `twitterClientNeedle`. It
will look to see the most recent URL tweeted. If the URL does not match the most recent
post's URL, then a tweet is fired off.

[tdev]: https://apps.twitter.com

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

Camel is functional, and is presently running [www.caseyliss.com][c]. There are lots of
features that probably *could* be added, but none that I'm actively planning.

Data McFly is running Camel on [The Data McFly Blog][d], and on [rogerstringer.com][rs]

Please update this file & issue a pull request if you'd like your site featured here.

[c]: http://www.caseyliss.com/
[d]: http://blog.datamcfly.com/
[rs]: http://rogerstringer.com/


# License

Camel is MIT-Licensed.

I'd appreciate it you provided a link back to either this repository, or [my website][c],
on any sites that run Camel.

Should you happen to use Camel, I'd love to know. Please [contact me][co].

[co]: http://www.caseyliss.com/contact

# Change Log

Our own changes:

* Post tagging
* Added config.js so you are changing camel.js less for each site.
* Broke out the templates in index.md to separate files inside the templates folder
* sitemap.xml support
* Featured Image support

Casey's changes:

* __1.4.5__ Fix auto-tweeter not considering too-long titles
  (issue #[21](https://github.com/cliss/camel/issues/21))
* __1.4.4__ Add support for Facebook Open Graph.
* __1.4.3__ Add support for Twitter cards; thanks to [@tofias](https://twitter.com/tofias)
  for the help.
* __1.4.2__ Now provides for `/rss-alternate`, which points link posts to internal links
  instead of external ones.
* __1.4.1__ Refactored to satisfy [JSLint](http://jslint.it). Fixed issue where a day that
  only had a redirect in it caused duplicate day breaks to show on the homepage.
* __1.4.0__ Added support for auto-tweeting.
* __1.3.1__ Updated RSS feed such that link posts open the external link, and have a
  "Permalink" to the site is shown at the bottom of the post.
* __1.3.0__ Added link posts.
* __1.2.1__ Significant cleanup/restructuring. Now less embarrassing! Removal of lots of
similar-sounding functions and more liberal use of data that we've already collected in
`allPostsSortedAndGrouped()`.
* __1.2.0__ Changes from [marked](https://github.com/chjj/marked) to
[markdown-it](https://github.com/markdown-it/markdown-it), adds support for footnotes.
* __1.1.0__ Fix post regex issue, adds support for redirects, adds `/count` route,
prevents year responses for unreasonable years
* __1.0.1__ Adds x-powered-by header, upgrades to packages
* __1.0.0__ Initial release