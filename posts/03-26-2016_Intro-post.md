---
layout: post
title: CMS.js is working!
---

So I've got a blog...now what?

### How It Works

CMS.js is a content management system with similar functionality to Jekyll. Its main advantage is that it runs entirely client-side, so there's no need to have a server generate a static site every time you make a change. Any time a client views a page, they are *always* getting the latest version! It also means I can make a new blog post entirely from a web browser, using GitHub's built-in text editor as a crude web admin interface. This is great because it's simple enough that I can probably script it for use at home, but I can still post if I get spare time at a school computer or something. It's perfect for me!

### How I Tweaked CMS.js

The stock version of CMS.js is not really a finished site. It's more of a backbone, a foundation on which you build your own tweaked version of the CMS. I needed a few key features  in a CMS:

- Ability to write in raw HTML/CSS
- Ability to embed my own JavaScript widgets on posts
- jQuery already running on every page for easy use
- MaterializeCSS or Bootstrap already running on every page (I like both, but I went with Materialize because I like the aesthetic)
- Syntax highlighting in plain ol' Markdown code blocks
- Tweakability for the future!
- Responsive embeds/images with no extra hassle

CMS.js, being written in JavaScript, was super easy for me to mess with and adjust to fit my needs. I accomplished everything I wanted to:

- ``code snippets`` and syntax highlighting with Prism.js
- Responsive embeds/images with a simple jQuery script to add some wrapper ``<div>`` tags to every ``<iframe>`` and ``<img>`` tag.
- Ability to write in pure HTML/CSS/JS
- Markdown without any weird syntactical quirks
- MaterializeCSS/jQuery on every page
- Custom JavaScript very easily

### Demonstrations:

Here are a few quick demos of the site's abilities.

---
##### Responsive Embeds/Images

<iframe width="560" height="315" src="https://www.youtube.com/embed/vioL_VRc_kU" frameborder="0" allowfullscreen></iframe>

![](http://i.imgur.com/IpMXhOk.jpg)

---

#### Syntax Highlighting

This is powered by Prism.js

```python
print("Syntax highlighting totally works y'all!")
```

```javascript
var syntaxHighlighting = true;
var awesomeness;
if (syntaxHighlighting == true) {
  awesomeness = true
}
```

Both those examples used standard GitHub-Flavored-Markdown syntax; no additional work is required for highlighting.

---

As you can see, my simple tweaks have turned this excellent blog-boilerplate into the perfect platform for my writing. I finally have something that is simple enough that I can effectively maintain it, but also sophisticated enough that it will get out of my way and let me write, rather than fighting with syntax and other issues.

I am excited to see what the future holds!
