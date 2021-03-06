Title: Heroku Toolbelt and Mac OS X 10.11 "El Capitan"  
Date: 2015-10-12 22:37  
Description: El Capitan broke the Heroku Toolbelt. Here's how to fix it.  
Tags: Power User, Camel  
Image: https://d.pr/i/1bik6+  

![El Cap. Oh, how you frustrated me on this one.][1]
<!-- {.border} -->

If you use the [Heroku CLI][2], and you tried to re-install the [Heroku Toolbelt][3] because you messed something up in your project directory,[^1] you might have noticed Terminal throwing `bash` errors:

```nohighlight
-bash: brew: command not found
```

Don't worry, you're not alone. I was with you, up until a few hours ago.For the past few months, I always thought it was just me---that I had done something catastrophic with my root directory. Due to a lack of knowledge, as well as sheer laziness, I planned on just riding the wave of never having to use the official `heroku` commands again.[^2]

My plan was thwarted when I realized today that a `git push` command wasn't going to execute due to large file wonkiness. Rather than deal with the failure to `git push`, I did what any reasonably impatient, fake-it-till-you-make-it-static-blogger would do: I decided to give up and start over. I was going to just re-clone the latest instance of my project, copying over the most recently-changed files afterwards. This would have effectively given me a perfect copy of my project on both my local machine and Dropbox.

Having been a while since I last used a `heroku` command, I was caught off-guard when I got the error

```nohighlight
$ heroku login$ -bash: heroku: command not found
```

Oh yeah, that `-bash` problem.

In a moment of desperation, I went to Twitter:

<blockquote lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/caseyliss" title="Casey Liss on Twitter">@caseyliss</a> Have you noticed that the Heroku CLI is broken in El Capitan? I thought <a href="https://twitter.com/heroku" title="Heroku on Twitter">@heroku</a> would have fixed that by now… (Rootless thing?)</p>&mdash; Anthony Craig (@ToniWonKanobi) <a href="https://twitter.com/ToniWonKanobi/status/653741132627578880" title="Asking Casey about the Toolbelt">October 13, 2015</a></blockquote>

And, in true newbie fashion, less than a minute after Tweeting my question, I stumbled onto Heroku's GitHub repository, where a [pull request][4] had been initiated by someone experiencing the same problem as me!

Somewhat frustratingly, pull request originated in [early June][5], days after El Capitan betas started going out to developers. I'm not sure how I missed that pull request, but there it was nonetheless.

I followed the advice in the pull request's thread: 

1. First, I installed [Homebrew][6]:

	```ruby
	/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
	```

2. After that, I was able to install Heroku without using the Toolbelt:

	```nohighlight
	$ brew install heroku
	```

3. Next, Terminal threw an error, saying that it couldn't install heroku:

	```nohighlight
	$ brew install heroku
	==> Downloading https://s3.amazonaws.com/assets.heroku.com/heroku-client/heroku-
	######################################################################## 100.0%
	Error: The `brew link` step did not complete successfully
	The formula built, but is not symlinked into /usr/local
	Could not symlink bin/heroku
	Target /usr/local/bin/heroku
	already exists. You may want to remove it:
	  rm '/usr/local/bin/heroku'
	To force the link and overwrite all conflicting files:
	  brew link --overwrite heroku-toolbelt

	To list all files that would be deleted:
	  brew link --overwrite --dry-run heroku-toolbelt

	Possible conflicting files are:
	/usr/local/bin/heroku -> /usr/local/heroku
	==> Caveats
	Unlike the standalone download for Heroku Toolbelt, the Homebrew package does not come with Foreman. It is available via RubyGems, direct download,and other installation methods. See https://ddollar.github.io/foreman/ for more info.
	==> Summary
	🍺  /usr/local/Cellar/heroku-toolbelt/3.42.17: 985 files, 8.6M, built in 5 seconds
	```

4. Reviewing the output, it was clear I needed to remove the old [likely corrupted] instance of Heroku on my root directory, and overwrite it with a fresh one:

	```nohighlight
	$ rm '/usr/local/bin/heroku'
	$ brew link --overwrite heroku-toolbelt
	Linking /usr/local/Cellar/heroku-toolbelt/3.42.17... 1 symlinks created
	```

5. Finally, I could re-establish a link to Heroku:

	```nohighlight
	$ heroku login
	$ Enter your Heroku credentials.
	```

(And the rest is history.)

The author of Camel himself, Casey Liss, has had no Heroku problems while on El Capitan:

<blockquote lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/ToniWonKanobi" title="Me on Twitter">@ToniWonKanobi</a> no. Not at all.</p>&mdash; Casey Liss (@caseyliss) <a href="https://twitter.com/caseyliss/status/653749713372622848" title="Casey responding to my question">October 13, 2015</a></blockquote>

Maybe he never used the Toolbelt to install Heroku (Casey is an actual developer)?

Either way, I'm glad this is sorted. Hope this helps someone who's pulling their hair out over this weird Heroku Toolbelt issue in El Capitan.

[^1]: 🙋🏾
[^2]: `git push heroku master`, the final command I use to deploy changes to my project (blog), doesn't actually use the `heroku` command (Duh?)

[1]: https://d.pr/i/1bik6+ "Sigh, Terminal, sigh."
[2]: https://devcenter.heroku.com/articles/heroku-command "Heroku Command Line Tools"
[3]: https://toolbelt.heroku.com/ "Heroku Toolbelt"
[4]: https://github.com/heroku/heroku/pull/1615 "Toolbelt issues, part 1"
[5]: https://github.com/heroku/heroku/pull/1615#issue-88082389 "Toolbelt issues, part 2"
[6]: http://brew.sh "Homebrew"