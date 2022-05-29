# Anubis Theme for Hugo [![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT) [![Netlify Status](https://api.netlify.com/api/v1/badges/7d9ea909-ad7e-4e47-b7c9-eefb7522d8c6/deploy-status)](https://app.netlify.com/sites/hugo-theme-anubis/deploys) [![Donate](https://img.shields.io/badge/Donate-PayPal-blue.svg)](https://www.paypal.com/paypalme/mitrichius/1)

Anubis is a simple minimalist theme for [Hugo blog engine](https://gohugo.io/).

[Demo](https://hugo-theme-anubis.netlify.app/)

![Anubis Screenshot](https://raw.githubusercontent.com/mitrichius/hugo-theme-anubis/master/images/screenshot.png)

## Features

- Dark mode (automatic / by switcher)
- Pagination
- Tags/Categories support
- Archive
- Open Graph and Twitter Cards support
- Mobile support
- Social icons
- Google Analytics
- Comment systems: Disqus, ISSO, Utteranc.es, GraphComment
- RSS feeds
- Related posts (Read Next section)
- Deploy via Netlify (config included in example site)
- Hiding posts from the RSS feed
- Hidden posts (available only by link)
- Translations (en, ru, fr, pl)
- Custom CSS/JS
- Multilingual mode 
- Robots.txt 
- Favorite posts
- Pagination on post single page
- Optional "Read more" link
- webmentions

## Installation

You need to install an extended version of Hugo to run this theme.

Inside the folder of your Hugo site run:

    $ git submodule add https://github.com/mitrichius/hugo-theme-anubis.git themes/anubis

For more information read the official [setup guide](//gohugo.io/overview/installing/) of Hugo.

## Getting started
After installing the theme successfully it requires a just a few more steps to get your site running.

### Update config file
If you have toml config (which is by default), you should rename it to config.yaml or adapt this config for toml syntax.

Example of config.yaml:
```yaml
languageCode: "en-us"
baseUrl: ""
title: "Anubis"
theme: "anubis"
paginate: 10
disqusShortname: "yourdiscussshortname"
googleAnalytics: "G-12345"
enableRobotsTXT: true

menu:
  main:
  - identifier: archive
    name: Archive
    title: Archive
    url: /posts/
    weight: 0

params:
  author: "John Doe"
  email: mail@example.org # used for microformats
  avatar: "/images/me.png" # used for microformats
  description: ""
  # Uncomment if you need this
  # images:
  #   - images/og-featured.png # relative path to "static" directory
  # customCSS:
  #   - css/my.css # relative path to "assets" directory (don't use main.css filename)
  # customJS:
  #   - js/main.js # relative path to "assets" directory
  dateFormat: "2006-01-02"
  paginationSinglePost: true
  style: light-without-switcher
  readMore: false # show read more button
  readNextPosts: 5  # show 5 related posts, 0 by default
  disableSummary: false
  copyCodeButton: true # true by default
  rssAsSocialIcon: true
  # utteranc.es support
  utterancesRepo: ""  # mandatory
  utterancesTheme: "" # optional
  utterancesIssue: "" # optional
  utterancesLabel: "" # optional
  # isso support
  isso:
    enabled: true # mandatory
    data: "https://comments.example.com/" # mandatory
    jsLocation: "https://comments.example.com/js/embed.min.js" # mandatory
    css: true # optional
    lang: "de" # optional
    replyToSelf: true # mandatory
    requireAuthor: true # mandatory
    requireEmail: true # mandatory
    id: "thread-id" # optional
    avatar: true # optional
    avatar-bg: "#f0f0f0" # optional
    feed: false # optional
  graphcommentId: ""
  webmentions:
    url: https://yourdomain.com/webemntions/receive
    login: hugo-theme-anubis
    pingback: true
  social:
  - id: github
    name: gohugoio
#  - id: hugo
#    url: "https://gohugo.io/"
#    icon: "hugo"

markup:
  goldmark:
    renderer:
      unsafe: true # enable raw HTML in Markdown
```

### Check your site

In order to see your site in action, run Hugo's built-in local server.

`$ hugo server`

Now enter [`localhost:1313`](http://localhost:1313/) in the address bar of your browser.

## Feature Settings

### Dark Mode
Customize via `style` param in `params` section of config.
Options:
- `light-without-switcher` - light theme, without switcher (by default)
- `dark-without-switcher` - dark theme, without switcher
- `auto-without-switcher` - theme based on user system settings, without switcher
- `light` - light theme by default, can be switched by user to dark theme and back. Theme settings are saved for user 
- `dark` - dark theme by default, can be switched by user to light theme and back. Theme settings are saved for user 
- `auto` - theme based on user system settings by default, can be switched by user to dark/light theme. Theme settings are saved for user (by default in example sites)

### Social icons
#### Predefined icons
To add icon from predefined list, add to `params.social` config:
- id of social network
- name for placeholder (usually it's your nickname or login)  

Predefined list:
 - email
 - facebook
 - github
 - instagram
 - linkedin
 - patreon
 - reddit
 - snapchat
 - soundcloud
 - spotify
 - telegram
 - twitch
 - twitter
 - vk
 - youtube

Example:
```
  - id: github
    name: gohugoio
```
Config like this generate github icon with "https://github.com/gohugoio" url.

#### Predefined icons with custom url
To add prefedined icon with custom url, add to `params.social` config:
- id of social network
- full url to your network  

Example:
```
  - id: github
    url: "https://github.com/gohugoio/hugo"
```
Config like this generate github icon with "https://github.com/gohugoio/hugo" url.

#### Custom icons
To add custom icon, add to `params.social` config:
- id of social network/site
- full url to your network/site  

Also you need to create directory `static/fa-icons` and add svg icon of your network/site with name equals to `id` from config.

Example:
```
  - id: google
    url: "https://www.google.com/search?q=I'm+lucky"
```
Icon should be "static/fa-icons/google.svg"

If you want font awesome icons, download "Font Awesome For Desktop" and open svg directory.

### Google Analytics
Only works for production environment.

### Multilingual mode 
Check config/example usage in [exampleSiteMultilingual](https://github.com/Mitrichius/hugo-theme-anubis/tree/master/exampleSiteMultilingual) directory and documentation on [Hugo site](https://gohugo.io/content-management/multilingual/).

### RSS 
RSS is available by site url + /index.xml. Also available for specific language, section, taxonomy.  
`rssAsSocialIcon` parameter enables rss sosial icon with link to site current language RSS.

### Robots.txt
Based on environment.  
For production — allow all, for other — disallow all.

### Favorite posts
Add `favorite: true` to post front matter. It adds a "★" icon nearby post's title. 

### Related posts (Read Next section)
Based on `readNextPosts` config parameter. Check [this article](https://gohugo.io/content-management/related/#configure-related-content) for configuration details.

### Hiding posts from RSS
Add `disable_feed: true` to post front matter.

### Make post available only by link
Add `hidden: true` to post front matter. Post also is not available in RSS feed.

### Pagination on post single page
Enabled by `paginationSinglePost` param in `params` section of config.

### Webmentions
To provide webmention support you can **either** specify your webmention.io username with `login: webmentionusername` **or** specify a link to your custom webmention endpoint with `url: https://yourdomain.com/webemntions/receive`.
If you use webmention.io you can also enable pingback with `pingback: true` 

### Disabling comments per-page basis
Add `disableComments: true` to post front matter.

## Contributing

If you find a bug or have an idea for a feature, feel free to write an [issue](https://github.com/mitrichius/hugo-theme-anubis/issues) or make a PR.

## TODO
See [issues](https://github.com/mitrichius/hugo-theme-anubis/issues).

## License
MIT

© Dmitry Kolosov
2020
