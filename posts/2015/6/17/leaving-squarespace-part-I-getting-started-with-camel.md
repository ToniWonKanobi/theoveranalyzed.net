@@ Title=Leaving Squarespace Part I: Getting Started With Camel  
@@ Date=2015-06-17 17:02  
@@ Description=Getting Camel setup required some command-line hackery, as well as lots of help from Casey Liss and Roger Stringer.  
@@ Tags=Camel, Leaving Squarespace, TheOverAnalyzed, TheOverAnalyzed 3.0, meta  
@@ Image=http://d.pr/i/1go0O+  

<center class="topstory"><em>This is Part I of my series entitled [Leaving Squarespace][ls]. Note that much of this post (and future posts) was made possible due to [Roger Stringer][rs]. Check out his Camel installation guide found [here][he]. Because I wasn't a master at the command line before Camel -- I'm still not -- and because you may not be a command line master yourself, I thought it would be useful to detail a step-by-step procedure on how I got Camel working on my local machine. Note that this post will not discuss the actual deployment of the site to Heroku. That comes later.</em></center>

<h2>Following The Leader</h2>

If you take a look at the Camel's [GitHub page][github], it would seem, at first glance, that everything is straightforward enough. However, [Casey Liss][twitter] is an *actual* developer. And although he fashions himself as merely a 'GitHub novice,' even an unexperienced GitHub-er might unintentionally omit the absolute *basics* of how the command line works.[^it]

Take a look at Casey's installation [instructions][github 2]:

1. 	Install [Node][nodejs] & [npm][npmjs]
2. Clone the repository
3. Get all the dependencies using NPM: `npm install`
4. `node ./camel.js`

I was lost at step 1. 

Allow me to take you through each of his steps, [like you're two year old][youtube].

<h2>Contents</h2>

[[TOC]]

# Step 1 - Installing Node & npm

Here's the thing: I tried visiting the Node and npm pages for help with Casey's instructions. According to the documentation on the npm site, npm is installed whenever Node is. If that's the case, why did Casey write "Install Node & npm?" Why not just "Install Node [which installs Node as well]?" 

Turns out, all I had to do was install Node via this [package][nodejs 2].[^os] Once Node (and npm) were installed, I could use `node` and `npm` commands in the command line. I was ready for step 2.

# Step 2 - Cloning The Repository

The next step involves copying Camel's website framework to you local machine. This is called 'cloning the repository.' Before the actual cloning process, you should decide where you want Camel to live on the local machine. I chose `~/Desktop/camel` (for purposes of this tutorial), but you could choose whatever destination you like. Once you've decided where you want the repository to reside, you're ready to begin. 

From the command line interface of your choice ([Terminal.app][wikipedia]) for me), navigate to your desired destination:[^th]

```md
Anthonys-MacBook:~ Anthony$ cd ~/Desktop/camel
```

You're now ready to clone the repository. Note that if you've never tried the [`git`][git-scm] command before, Terminal will [prompt you to install][git-scm 2] the [Xcode Command Line Tools][housepub]. You should do so. Afterwards, clone the repository:

```md
Anthonys-MacBook:camel Anthony$ git clone https://github.com/cliss/camel.git
```

# Step 3 - Get The Dependencies

Once the Camel repository has been 'copied' to your local machine, you'll need to install Camel's dependencies as well. Casey designed Camel to use several open-source libraries to power Camel. Because they are other developers' work, he didn't crib everything and copy it into `camel.js`. Instead, he references them in his script, as well as the [`package.json`][d]. You need to install those dependencies in your Camel folder, so that `camel.js` knows where to find them when it needs them.[^he]

Assuming you are still 'in' Camel's location:[^if]

```md
Anthonys-MacBook:camel Anthony$ npm install
```

The output should look something like this:

```md
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

# Step 4 - Initializing Camel

If you're confident `npm install` did its thing, run the following command to initialize Camel:[^be]

```md
Anthonys-MacBook:camel Anthony$ node camel.js
```

If successful, the Terminal output should look like this:

```md
Anthonys-MacBook:camel Anthony$ node camel.js
Camel v1.5.0 server started on port 5000
```

You're almost done. To test that Camel is indeed up and running, query `localhost:5000` in the address bar of your browser. You should then be able to navigate a [rather sparse looking] version of 'stock' Camel:

![][d 2]

<hr class="small" />

If you didn't have too much trouble with this tutorial, I doubt you'll have any with future posts in this series. The next step: making all the old files work with Camel. Stay tuned.

[^be]: Be sure that you are still in the directory where Camel lives (e.g., `~/Desktop/camel` in my example)
[^he]: Note that the dependencies are not required after deploying. Since part of the `camel.js` script includes dependencies for various packages, the script will locate those online. This is why, after deploying and linking to Dropbox, the `node_packages` folder does not show up in the Dropbox version of your site. More on this in a future post. 
[^if]: If not, you can always `cd`  to Camel's location
[^it]: It could be argued that using GitHub is already a pretty developer-focused endeavor, and because of that, Casey is okay in assuming that the people who try Camel should know a little about the command line. And really, I can't really disagree. 
[^th]: The [`cd`][wikipedia 2]) command is an abbreviation for "change directory," and is part of the Unix/Linux OS shell
[^os]: This guide, as well as all that follow, are OS X based. Apologizes to Windows users.

[d]: http://d.pr/i/1hkag+
[d 2]: http://d.pr/i/1lmVC+
[git-scm]: http://git-scm.com
[git-scm 2]: http://git-scm.com/book/en/v2/Getting-Started-Installing-Git#Installing-on-Mac
[github]: https://github.com/cliss/camel
[github 2]: https://github.com/cliss/camel#installation
[he]: http://www.sitepoint.com/deploying-camel-js-blog-heroku/
[housepub]: http://jtimberman.housepub.org/blog/2012/02/26/xcode-command-line-tools/
[ls]: http://www.theoveranalyzed.net/tags/Leaving%20Squarespace
[nodejs]: http://nodejs.org/
[nodejs 2]: http://nodejs.org/dist/v0.12.4/node-v0.12.4.pkg
[npmjs]: https://www.npmjs.org/
[rs]: https://twitter.com/freekrai
[twitter]: https://twitter.com/caseyliss
[wikipedia]: https://en.wikipedia.org/wiki/Terminal_(OS_X
[wikipedia 2]: https://en.wikipedia.org/wiki/Cd_(command
[youtube]: https://www.youtube.com/watch?v=AR6eXWNJzoY