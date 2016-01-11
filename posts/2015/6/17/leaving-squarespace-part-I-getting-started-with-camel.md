Title: Leaving Squarespace Part I: Getting Started With Camel  
Date: 2015-06-17 17:02  
Description: Getting Camel setup required some command-line hackery, as well as lots of help from Casey Liss and Roger Stringer.  
Tags: Meta, Camel, Leaving Squarespace  
Image: https://d.pr/i/1go0O+  

<p><em class="topStory">This is Part I of my series entitled <a href="tags/Leaving%20Squarespace" title="Posts tagged 'Leaving Squarespace'">Leaving Squarespace</a>. After reading this piece, you can read the <a href="/2015/6/26/leaving-squarespace-part-ii-modifying-files-to-play-nice-with-camelnext" rel="next" title="Link to Part II of the 'Leaving Squarespace' series">next</a> post in the series. Note that much of this post (and future posts) was made possible due to <a href="https://twitter.com/freekrai" title="Roger Stringer on Twitter">Roger Stringer</a>. Check out his Camel installation guide found <a href="http://www.sitepoint.com/deploying-camel-js-blog-heroku/" title="Roger Stringer's post on SitePoint about Camel">here</a>. Because I wasn't a master at the command line before Camel&mdash;I'm still not&mdash;and because you may not be a command line master yourself, I thought it would be useful to detail a step-by-step procedure on how I got Camel working on my local machine. Note that this post will not discuss the actual deployment of the site to Heroku. That comes later.</em></p>

#### Following The Leader

If you take a look at the Camel's [GitHub page][1], it would seem, at first glance, that everything is straightforward enough. However, [Casey Liss][2] is an *actual* developer. And although he fashions himself as merely a 'GitHub novice,' even an unexperienced GitHub-er might unintentionally omit the absolute *basics* of how the command line works.[^1]

Take a look at Casey's installation [instructions][3]:

1. Install [Node][4] & [npm][5]
2. Clone the repository
3. Get all the dependencies using NPM: `npm install`
4. `node ./camel.js`

I was lost at step 1. 

Allow me to take you through each of his steps, [like you're two year old][6].

### Step 1: Installing Node & npm

Here's the thing: I tried visiting the Node and npm pages for help with Casey's instructions. According to the documentation on the npm site, npm is installed whenever Node is. If that's the case, why did Casey write "Install Node & npm"? Why not just "Install Node [which installs Node as well]"?

Turns out, all I had to do was install Node via this [package][7].[^2] Once Node (and npm) were installed, I could use `node` and `npm` commands in the command line. I was ready for step 2.

### Step 2: Cloning The Repository

The next step involves copying Camel's website framework to you local machine. This is called 'cloning the repository.' Before the actual cloning process, you should decide where you want Camel to live on the local machine. I chose `~/Desktop/camel` (for purposes of this tutorial), but you could choose whatever destination you like. Once you've decided where you want the repository to reside, you're ready to begin.

From the command line interface of your choice ([Terminal.app][8] for me), navigate to your desired destination:[^3]

```nohighlight
Anthonys-MacBook:~ Anthony$ cd ~/Desktop/camel
```

You're now ready to clone the repository. Note that if you've never tried the [`git`][9] command before, Terminal will [prompt you to install][10] the [Xcode Command Line Tools][11]. You should do so. Afterwards, clone the repository:

```nohighlight
Anthonys-MacBook:camel Anthony$ git clone https://github.com/cliss/camel.git
```

### Step 3: Get The Dependencies

Once the Camel repository has been 'copied' to your local machine, you'll need to install Camel's dependencies as well. Casey designed Camel to use several open-source libraries to power Camel. Because they are other developers' work, he didn't crib everything and copy it into `camel.js`. Instead, he references them in his script, as well as the [`package.json`][12]. You need to install those dependencies in your Camel folder, so that `camel.js` knows where to find them when it needs them.[^4]

Assuming you are still 'in' Camel's location:[^5]

```nohighlight
Anthonys-MacBook:camel Anthony$ npm install
```

The output should look something like this:

```nohighlight
Anthonys-MacBook:camel Anthony$ npm install
basic-auth@1.0.2 node_modules/basic-auth

markdown-it-footnote@0.1.0 node_modules/markdown-it-footnote

underscore@1.8.3 node_modules/underscore

rss@1.1.1 node_modules/rss
├── xml@1.0.0
└── mime-types@2.1.1 (mime-db@1.13.0)

compression@1.5.0 node_modules/compression
├── bytes@2.1.0
├── vary@1.0.0
├── on-headers@1.0.0
├── debug@2.2.0 (ms@0.7.1)
├── compressible@2.0.3 (mime-db@1.13.0)
└── accepts@1.2.9 (negotiator@0.5.3, mime-types@2.1.1)

express@4.12.4 node_modules/express
├── merge-descriptors@1.0.0
├── utils-merge@1.0.0
├── cookie-signature@1.0.6
├── methods@1.1.1
├── cookie@0.1.2
├── fresh@0.2.4
├── escape-html@1.0.1
├── range-parser@1.0.2
├── finalhandler@0.3.6
├── content-type@1.0.1
├── vary@1.0.0
├── parseurl@1.3.0
├── serve-static@1.9.3
├── content-disposition@0.5.0
├── path-to-regexp@0.1.3
├── depd@1.0.1
├── qs@2.4.2
├── debug@2.2.0 (ms@0.7.1)
├── on-finished@2.2.1 (ee-first@1.1.0)
├── etag@1.6.0 (crc@3.2.1)
├── send@0.12.3 (destroy@1.0.3, ms@0.7.1, mime@1.3.4)
├── proxy-addr@1.0.8 (forwarded@0.1.0, ipaddr.js@1.0.1)
├── accepts@1.2.9 (negotiator@0.5.3, mime-types@2.1.1)
└── type-is@1.6.3 (media-typer@0.3.0, mime-types@2.1.1)

body-parser@1.13.1 node_modules/body-parser
├── bytes@2.1.0
├── content-type@1.0.1
├── depd@1.0.1
├── qs@2.4.2
├── on-finished@2.3.0 (ee-first@1.1.1)
├── debug@2.2.0 (ms@0.7.1)
├── http-errors@1.3.1 (inherits@2.0.1, statuses@1.2.1)
├── raw-body@2.1.1 (unpipe@1.0.0)
├── type-is@1.6.3 (media-typer@0.3.0, mime-types@2.1.1)
└── iconv-lite@0.4.10

sugar@1.4.1 node_modules/sugar

q-io@1.13.1 node_modules/q-io
├── mimeparse@0.1.4
├── url2@0.0.0
├── mime@1.3.4
├── qs@1.2.2
├── q@1.4.1
└── collections@0.2.2 (weak-map@1.0.0)

markdown-it@3.1.0 node_modules/markdown-it
├── uc.micro@0.1.0
├── mdurl@1.0.0
├── linkify-it@0.1.5 (uc.micro@1.0.0)
└── argparse@1.0.2 (sprintf-js@1.0.2, lodash@3.9.3)

twitter@1.2.5 node_modules/twitter
├── deep-extend@0.3.3
└── request@2.58.0 (caseless@0.10.0, aws-sign2@0.5.0, stringstream@0.0.4, forever-agent@0.6.1, tunnel-agent@0.4.0, oauth-sign@0.8.0, isstream@0.1.2, extend@2.0.1, json-stringify-safe@5.0.1, node-uuid@1.4.3, qs@3.1.0, mime-types@2.0.14, combined-stream@1.0.5, tough-cookie@2.0.0, http-signature@0.11.0, form-data@1.0.0-rc1, bl@0.9.4, hawk@2.3.1, har-validator@1.7.1)

handlebars@2.0.0 node_modules/handlebars
├── optimist@0.3.7 (wordwrap@0.0.3)
└── uglify-js@2.3.6 (async@0.2.10, source-map@0.1.43)
Anthonys-MacBook:camel Anthony$
```

### Step 4: Initializing Camel

If you're confident `npm install` did its thing, run the following command to initialize Camel:[^6]

```nohighlight
Anthonys-MacBook:camel Anthony$ node camel.js
```

If successful, the Terminal output should look like this:

```nohighlight
Anthonys-MacBook:camel Anthony$ node camel.jsCamel v1.5.0 server started on port 5000
```

You're almost done. To test that Camel is indeed up and running, query `localhost:5000` in the address bar of your browser. You should then be able to navigate a [rather sparse looking] version of 'stock' Camel:

![Sample site launched!][13]

### Step V: Enable Manual Cache Tossing (Optional)

The default setting for cache tossing is every 30 minutes. This is fine once your site is up and running. However, while you are tweaking things (especially CSS), it would be a lot easier to be able to instantly preview your changes.

To accomplish this, uncomment the these lines of code in `camel.js`

```js
//  app.get('/tosscache', function (request, response) {
//  emptyCache();
//  response.status(200).send(205);
//  });
```

like so

```js
app.get('/tosscache', function (request, response) {
	emptyCache();
	response.status(200).send(205);
});
```

What this does is allow you to make changes to CSS, or posts, or whatever---all without having to close and re-deploy the local version of your site.[^7]

***

If you didn't have too much trouble with this tutorial, I doubt you'll have any with future posts in this series. The next step: making all the old files work with Camel. Stay tuned.

[^1]: It could be argued that using GitHub is already a pretty developer-focused endeavor, and because of that, Casey is okay in assuming that the people who try Camel should know a little about the command line. And really, I can't really disagree.
[^2]: This guide, as well as all that follow, are OS X based. Apologizes to Windows users.
[^3]: The [`cd`][a] command is an abbreviation for "change directory," and is part of the Unix/Linux OS shell
[^4]: Note that the dependencies are not required after deploying. Since part of the `camel.js` script includes dependencies for various packages, the script will locate those online. This is why, after deploying and linking to Dropbox, the `node_packages` folder does not show up in the Dropbox version of your site. More on this in a future post. 
[^5]: If not, you can always `cd`  to Camel's location
[^6]: Be sure that you are still in the directory where Camel lives (e.g., `~/Desktop/camel` in my example)
[^7]: The exception here is changes made to any of the template files, or the actual JavaScript files that power Camel. If you make changes to those files, you *still* have to close and re-deploy the site via the command line.

[a]: https://en.wikipedia.org/wiki/Cd_(command) "Wikipedia: UNIX command `cd`"

[1]: https://github.com/cliss/camel "GitHub page for Camel"
[2]: https://twitter.com/caseyliss "Casey Liss on Twitter"
[3]: https://github.com/cliss/camel#installation "Section of Camel's GitHub page devoted to installation"
[4]: http://nodejs.org/ "Node.js website"
[5]: http://nodejs.org/ "Node.js website"
[6]: https://www.youtube.com/watch?v=AR6eXWNJzoY "Philadelphia - Explain This To Me Like I'm a Two Year Old (Denzel Washington)"
[7]: http://nodejs.org/dist/v0.12.4/node-v0.12.4.pkg "Latest node.js package"
[8]: https://en.wikipedia.org/wiki/Terminal_(OS_X) "Wikipedia: Terminal for OS X"
[9]: http://git-scm.com "Website for Git"
[10]: http://git-scm.com/book/en/v2/Getting-Started-Installing-Git#Installing-on-Mac "Installing Git on your Mac"
[11]: http://jtimberman.housepub.org/blog/2012/02/26/xcode-command-line-tools/ "Installing the command line tools for OS X"
[12]: https://d.pr/i/1hkag+ "Camel's dependencies, shown in the `package.json`"
[13]: https://d.pr/i/1lmVC+ "Sample site launched!"