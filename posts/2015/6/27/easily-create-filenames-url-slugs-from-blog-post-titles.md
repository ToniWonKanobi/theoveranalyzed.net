@@ Title=Easily Create Filenames & URL Slugs From Blog Post Titles   
@@ Date=2015-06-27T17:26:00+00:00
@@ Description=I wanted a quick and easy way to select the text in the title of a post and create a URL-friendly ASCII string. Here's how I did it (with help).  
@@ Tags=blogging, filesystem, AppleScript, scripts, tech tips  
@@ Image=http://d.pr/i/155iQ+  

# The Problem

My workflow for naming files has never been anything to write home about. Squarespace had a nifty 'auto-create-a-URL-slug' feature that I sorely missed after transitioning to Camel. For the past month, I had been doing it by hand. And frankly, it was just long and tedious as you can imagine.

For instance, suppose I wanted to create the filename (and in Camel, the resultant URL slug) for this post:

```md
Easily Create Filenames & URL Slugs From Blog Post Titles
```

It isn't the longest I've ever dreamt up, but it certainly isn't the shortest, either. If I wanted to create a URL-friendly filename, it would take *several* steps. 

1. First, I would select and copy the [title's text][d]
2. Next, `Cmd + S` to invoke the [save dialog box][d 2]
3. Then I paste the previously selected text into the [Save As field][d 3]:
4. After that, I start manually changing the uppercase letters to lowercase, removing spaces and replacing them with hyphens, and deleting URL-unfriendly characters like `&`:

<figure class="twoleft">
	<a class="nohover" href="http://d.pr/i/15iqM+">
		<img src="http://d.pr/i/15iqM+" alt="starting the process" />
	</a>
	<figcaption style="font-style: normal;">😐</figcaption>
</figure>

<figure class="tworight">
	<a class="nohover" href="http://d.pr/i/184Ox+">
		<img src="http://d.pr/i/184Ox+" alt="this takes forever" />
	</a>
	<figcaption style="font-style: normal;">😑</figcaption>
</figure>

There had to be a better way.

# The Solution

I tried a few browser searches, but nothing came up. I decided it would be a good idea to ask the king of scripting (at least amongst my Twitter follow's):

<blockquote class="twitter-tweet tw-align-center" lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/ToniWonKanobi">@ToniWonKanobi</a> I wrote a Python function that does that as part of a blog-posting script. You could build a script/service from it.</p>&mdash; Dr. Drang (@drdrang) <a href="https://twitter.com/drdrang/status/614814467923120129">June 27, 2015</a></blockquote> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

The [good][leancrew] [doctor][twitter] was kind enough to send me an email with the contents of a Python script. 

```md
> On June 27, 2015 at 8:34:20 AM, Dr. Drang (drdrang@gmail.com) wrote: 
> 
> This takes the title as standard input and returns the 
> hyphen-separated 
> slug on standard output. You'll need to install the unidecode library. 
> 
> --------------------- 
> 
> #!/usr/bin/env python 
> # coding: utf8 
> 
> from sys import stdin, stdout 
> from unidecode import unidecode 
> from datetime import datetime 
> import re 
> 
> def slugify(u): 
> "Convert Unicode string into blog slug." 
> u = re.sub(u'[–—…/:;,.]', '-', u) # replace separating 
> punctuation 
> a = unidecode(u).lower() # best ASCII substitutions, 
> lowercased 
> a = re.sub(r'[^a-z0-9 -]', '', a) # delete any other characters 
> a = a.replace(' ', '-') # spaces to hyphens 
> a = re.sub(r'-+', '-', a) # condense repeated hyphens 
> a = a.strip('-') # delete leading and trailing 
> hyphens 
> return a 
> 
> title = stdin.read().strip() 
> 
> slug = slugify(title.decode('utf8')) 
> stdout.write(slug) 
> 
> --------------------- 
> Regards, 
> Dr. Drang 
```

I tried getting it to work, but, alas, it was beyond my understanding. 

```md
Anthonys-MacBook:Unidecode-0.04.18 Anthony$ python setup.py install
running install
Checking .pth file support in /Library/Python/2.7/site-packages/
error: can't create or remove files in install directory

The following error occurred while trying to add or remove files in the
installation directory:

    [Errno 13] Permission denied: '/Library/Python/2.7/site-packages/test-easy-install-3529.pth'

The installation directory you specified (via --install-dir, --prefix, or
the distutils default setting) was:

    /Library/Python/2.7/site-packages/

Perhaps your account does not have write access to this directory?  If the
installation directory is a system-owned directory, you may need to sign in
as the administrator or "root" account.  If you do not have administrative
access to this machine, you may wish to choose a different installation
directory, preferably one that is listed in your PYTHONPATH environment
variable.

For information on other options, you may wish to consult the
documentation at:

  https://pythonhosted.org/setuptools/easy_install.html

Please make the appropriate changes for your system and try again.

Anthonys-MacBook:Unidecode-0.04.18 Anthony$  
```

Brett Terpstra's suggestion ended up being the winner:

<blockquote class="twitter-tweet tw-align-center" lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/ToniWonKanobi">@ToniWonKanobi</a> tons. Look up &quot;slugify&quot;.</p>&mdash; Brett Terpstra (@ttscoff) <a href="https://twitter.com/ttscoff/status/614904337735651328">June 27, 2015</a></blockquote> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Ah. [Slugify][github]. I went back and double-checked Dr. Drang's script. It was basically leveraging Slugify.

After a bit more searching, I found this [page][superuser], in which Alex Plumb shared his [AppleScript][superuser 2], cribbed from [two][macosxautomation] [other][j-schell] AppleScripts he found elsewhere online.

After some cribbing of my own, here is the contents of my version of Alex's script:

```
set theclip to the clipboard contents
on normalize(the_string)
	set p_script to ¬
		"# -*- coding: utf-8 -*-
import unicodedata, sys

def normalize(x):
    normal_form_1 = 'NFKD'
    normal_form_2 = 'NFC'
    x = unicodedata.normalize(normal_form_2, x)
    x = x.lower()
    x = x.replace(u'ß', u'ss')
    x = x.replace(u'å', u'aa')
    x = unicodedata.normalize(normal_form_1, x)
    x = u''.join([c for c in x if not unicodedata.combining(c)])
    x = x.encode('utf-8')
    return x
arg = sys.argv[1].decode('utf-8')
x = normalize(arg)
print x"
	
	set p_script to quoted form of p_script
	set the_string to quoted form of the_string
	
	return (do shell script ("python -c " & p_script & " " & the_string))
end normalize
on change_case(this_text)
	set the comparison_string to "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
	set the source_string to "abcdefghijklmnopqrstuvwxyz"
	set the new_text to ""
	repeat with this_char in this_text
		set x to the offset of this_char in the comparison_string
		if x is not 0 then
			set the new_text to (the new_text & character x of the source_string) as string
		else
			set the new_text to (the new_text & this_char) as string
		end if
	end repeat
	return the new_text
end change_case
on replace_chars(this_text, search_string, replacement_string)
	set AppleScript's text item delimiters to the search_string
	set the item_list to every text item of this_text
	set AppleScript's text item delimiters to the replacement_string
	set this_text to the item_list as string
	set AppleScript's text item delimiters to ""
	return this_text
end replace_chars

set theresult to normalize(theclip)
set theresult to replace_chars(theresult, " - ", "-")
set theresult to replace_chars(theresult, " & ", "-")
set theresult to replace_chars(theresult, " -- ", "-")
set theresult to replace_chars(theresult, " ", "-")
set theresult to replace_chars(theresult, "%", "")
set theresult to replace_chars(theresult, "<", "")
set theresult to replace_chars(theresult, ">", "")
set theresult to replace_chars(theresult, "#", "")
set theresult to replace_chars(theresult, "{", "")
set theresult to replace_chars(theresult, "}", "")
set theresult to replace_chars(theresult, "|", "")
set theresult to replace_chars(theresult, "\\", "")
set theresult to replace_chars(theresult, "^", "")
set theresult to replace_chars(theresult, "~", "")
set theresult to replace_chars(theresult, "[", "")
set theresult to replace_chars(theresult, "]", "")
set theresult to replace_chars(theresult, "`", "")
set theresult to replace_chars(theresult, ";", "")
set theresult to replace_chars(theresult, "/", "")
set theresult to replace_chars(theresult, "?", "")
set theresult to replace_chars(theresult, ":", "")
set theresult to replace_chars(theresult, "@", "")
set theresult to replace_chars(theresult, "=", "")
set theresult to replace_chars(theresult, "$", "")
set theresult to change_case(theresult)
```

And here's a screenshot of the workflow (it's actually a Service):

<figure>
	<a class="nohover" href="http://d.pr/i/107X5+">
		<img src="http://d.pr/i/107X5+" alt="finished workflow" />
	</a>
	<figcaption><code>Slugify.workflow</code></figcaption>
</figure>

# Explanation

Essentially, what `Slugify.workflow` does is take selected text and automate the changes I was making to the title text previously. It makes uppercase letters lowercase, and it removes spaces and funky characters and replaces them with hyphens.

I also assigned a keyboard shortcut to the service, so that I don't have to invoke the 'right-click' submenu.

<figure>
	<a class="nohover" href="http://d.pr/i/1lBKU+">
		<img src="http://d.pr/i/1lBKU+" alt="keyboard shortcut for slugify.workflow" />
	</a>
	<figcaption><code>Cmd + Opt + Shift + R</code></figcaption>
</figure>

This couldn't get any easier.

<figure class="twoleft">
	<a class="nohover" href="http://d.pr/i/10cCw+">
		<img src="http://d.pr/i/10cCw+" alt="select the text" />
	</a>
	<figcaption style="font-style: normal;">😐 → 😊</figcaption>
</figure>

<figure class="tworight">
	<a class="nohover" href="http://d.pr/i/11dN3+">
		<img src="http://d.pr/i/11dN3+" alt="and done" />
	</a>
	<figcaption style="font-style: normal;">😑 → 😄</figcaption>
</figure>

# Download

You can download `Slugify.workflow` [here][d 4]. 

[d]: http://d.pr/i/MDC4+
[d 2]: http://d.pr/i/BPjq+
[d 3]: http://d.pr/i/14x3d+
[d 4]: http://d.pr/f/1lx3X
[github]: https://github.com/cocur/slugify
[j-schell]: http://www.j-schell.de/node/269
[leancrew]: http://www.leancrew.com/all-this/
[macosxautomation]: http://www.macosxautomation.com/applescript/sbrt/sbrt-06.html
[superuser]: http://superuser.com/questions/635351/process-clipboard-content-on-mac-os
[superuser 2]: http://superuser.com/revisions/635370/2
[twitter]: https://twitter.com/drdrang