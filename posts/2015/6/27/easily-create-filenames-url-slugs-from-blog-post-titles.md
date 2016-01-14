Title: Easily Create Filenames & URL Slugs From Blog Post Titles  
Date: 2015-06-27 17:26  
Description: I wanted a quick and easy way to select the text in the title of a post and create a URL-friendly ASCII string. Here's how I did it (with help).  
Tags: Power User, Blogging  
Image: https://d.pr/i/155iQ+  

### The Problem

My workflow for naming files has never been anything to write home about. Squarespace had a nifty 'auto-create-a-URL-slug' feature that I sorely missed after transitioning to Camel. For the past month, I had been doing it by hand. And frankly, it was just long and tedious as you can imagine.

For instance, suppose I wanted to create the filename (and in Camel, the resultant URL slug) for this post:

```nohighlight
Easily Create Filenames & URL Slugs From Blog Post Titles
```

It isn't the longest I've ever dreamt up, but it certainly isn't the shortest, either. If I wanted to create a URL-friendly filename, it would take *several* steps. 

1. First, I would select and copy the [title's text][1]
2. Next, `Command-S` to invoke the [save dialog box][2]
3. Then I paste the previously selected text into the [Save As field][3]:
4. After that, I start manually changing the uppercase letters to lowercase, removing spaces and replacing them with hyphens, and deleting URL-unfriendly characters like `&`:

<figure>
	<img class="twoinline" src="https://d.pr/i/15iqM+" alt="Starting the process" title="Starting the process">
	<img class="twoinline" src="https://d.pr/i/184Ox+" alt="This takes forever" title="This takes forever">
	<figcaption style="font-style: normal;">😑</figcaption>
</figure>

There had to be a better way.

### The Solution

I tried a few browser searches, but nothing came up. I decided it would be a good idea to ask the king of scripting (at least amongst my Twitter follow's):

<blockquote lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/ToniWonKanobi" title="Me on Twitter">@ToniWonKanobi</a> I wrote a Python function that does that as part of a blog-posting script. You could build a script/service from it.</p>&mdash; Dr. Drang (@drdrang) <a href="https://twitter.com/drdrang/status/614814467923120129" title="Dr. Drang responding to my question">June 27, 2015</a></blockquote>

The [good][4] [doctor][5] was kind enough to send me an email with the contents of a Python script. 

> On June 27, 2015 at 8:34:20 AM, Dr. Drang (drdrang@gmail.com) wrote: 
> 
> This takes the title as standard input and returns the 
> hyphen-separated 
> slug on standard output. You'll need to install the unidecode library. 
> 
> <hr class="long"> 
> 
> ```python
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
> ```
> 
> <hr class="long"> 
> Regards,  
> Dr. Drang

I tried getting it to work, but, alas, it was beyond my understanding. 

```
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

<blockquote lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/ToniWonKanobi" title="Me on Twitter">@ToniWonKanobi</a> tons. Look up &quot;slugify&quot;.</p>&mdash; Brett Terpstra (@ttscoff) <a href="https://twitter.com/ttscoff/status/614904337735651328" title="Brett Terpstra's response to me">June 27, 2015</a></blockquote>

Ah. [Slugify][6]. I went back and double-checked Dr. Drang's script. It was basically leveraging Slugify.

After a bit more searching, I found this [page][7], in which Alex Plumb shared his [AppleScript][8], cribbed from [two][9] other AppleScripts he found elsewhere online.

After some cribbing of my own, here is the contents of my version of Alex's script:

```
# Takes as input a potentially unsafe-for-URLs string of text (such as a blog post in Title Case) and creates a URL-safe version
# `This Is a Title of a Post!` --> `this-is-a-title-of-a-post`

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
set theresult to replace_chars(theresult, ",", "")
set theresult to replace_chars(theresult, ".", "")
set theresult to replace_chars(theresult, "'", "")
set theresult to replace_chars(theresult, "/", "")
set theresult to replace_chars(theresult, "?", "")
set theresult to replace_chars(theresult, ":", "")
set theresult to replace_chars(theresult, "@", "")
set theresult to replace_chars(theresult, "=", "")
set theresult to replace_chars(theresult, "$", "")
set theresult to replace_chars(theresult, "(", "")
set theresult to replace_chars(theresult, ")", "")
set theresult to replace_chars(theresult, "\"", "")
set theresult to change_case(theresult)
```

And here's a screenshot of the workflow (it's actually a Service):![Make URL Slug.workflow][10]

### Explanation

Essentially, what `Make URL Slug.workflow` does is take selected text and automate the changes I was making to the title text previously. It makes uppercase letters lowercase, and it removes spaces and funky characters and replaces them with hyphens.

I also assigned a keyboard shortcut to the service, so that I don't have to invoke the 'right-click' submenu.

![Shift-Option-Command-R][11]

This couldn't get any easier.

<figure>
	<img class="twoinline" src="https://d.pr/i/10cCw+" alt="Select the text" title="Select the text">
	<img class="twoinline" src="https://d.pr/i/11dN3+" alt="And ...done." title="And ...done.">
	<figcaption style="font-style: normal;">😑 &#10142; 😄</figcaption>
</figure>

### Source

You can check out `Make URL Slug.workflow` on [GitHub][12].

<aside class="update">

### Update: Fixed Some Errors in Make URL Slug

November 21, 2015
<!-- {.updatetime} -->

Found some errors in my script, such as not removing commas. So, I fixed that. (For posterity's sake, I left the code above alone.)

</aside>

[1]: https://d.pr/i/MDC4+ "Highlighting the post title"
[2]: https://d.pr/i/BPjq+ "Invoking the Save command"
[3]: https://d.pr/i/14x3d+ "Pasting the text"
[4]: http://www.leancrew.com/all-this/ "Dr. Drang's blog, And Now It's All This"
[5]: https://twitter.com/drdrang "Dr. Drang on Twitter"
[6]: https://github.com/cocur/slugify "Slugify's GitHub page"
[7]: http://superuser.com/questions/635351/process-clipboard-content-on-mac-os "Superuser: Process clipboard content on Mac OS?"
[8]: http://superuser.com/revisions/635370/2 "The basis for my version of Slugify"
[9]: http://www.macosxautomation.com/applescript/sbrt/sbrt-06.html "AppleScript tutorial"
[10]: https://d.pr/i/107X5+ "Finished workflow"
[11]: https://d.pr/i/1lBKU+ "Keyboard shortcut for Make URL Slug.workflow"
[12]: https://gist.github.com/ToniWonKanobi/a1a761a95fcc32625370#file-make-url-slug-workflow "View my `Make URL Slug.workflow` on GitHub"