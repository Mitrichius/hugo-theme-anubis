# Anubis Theme for Hugo

Anubis is a simple minimalist theme for [Hugo blog engine](https://gohugo.io/).

![Anubis Screenshot](https://raw.githubusercontent.com/mitrichius/hugo-theme-anubis/master/images/screenshot.png)

## Features

- Pagination
- Tags/Categories support
- Archive
- Mobile support
- Google Analytics
- Disqus
- RSS feeds
- Translations (en, ru, fr, pl)
- Multilingual mode 
- Robots.txt 
- Favorite posts
- Pagination on post single page

## Installation

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
disqusShortname: yourdiscussshortname
googleAnalytics: UA-123-45
enableRobotsTXT: true

menu:
  main:
  - identifier: archive
    name: Archive
    title: Archive
    url: /posts/
    weight: 0

params:
  author: ""
  description: ""
  images:
    - images/og-featured.png # relative path to "static" directory
  customCSS:
    - css/my.css # relative path to "static" directory
  dateFormat: "2006-01-02"
  paginationSinglePost: true
```

### Check your site

In order to see your site in action, run Hugo's built-in local server.

`$ hugo server`

Now enter [`localhost:1313`](http://localhost:1313/) in the address bar of your browser.

## Feature Settings

### Google Analytics
Only works for production environment. You either build your site with variable like
`HUGO_ENV=production hugo --minify`
or just put `env: production` to `params` section of config.

### Multilingual mode 
Check config/example usage in [exampleSiteMultilingual](https://github.com/Mitrichius/hugo-theme-anubis/tree/master/exampleSiteMultilingual) directory and documentation on [Hugo site](https://gohugo.io/content-management/multilingual/).

### Robots.txt
Based on environment.  
For production — allow all, for other — disallow all.

### Favorite posts
To mark posts as favorite just add `favorite: true` in post's front matter. It adds a "★" icon nearby post's title. 

### Pagination on post single page
Enabled by `paginationSinglePost` param in `params` section of config.

## Contributing

If you find a bug or have an idea for a feature, feel free to write an [issue](https://github.com/mitrichius/hugo-theme-anubis/issues).

## TODO
See [issues](https://github.com/mitrichius/hugo-theme-anubis/issues).

## License
MIT

(c) Dmitry Kolosov
2020
