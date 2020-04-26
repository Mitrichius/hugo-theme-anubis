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
- Translations (en, ru, fr) 

## Installation

Inside the folder of your Hugo site run:

    $ git submodule add https://github.com/mitrichius/hugo-theme-anubis.git themes/anubis

For more information read the official [setup guide](//gohugo.io/overview/installing/) of Hugo.

## Getting started
After installing the theme successfully it requires a just a few more steps to get your site running.

### Update config file

Example:
```yaml
languageCode: "en-us"
baseUrl: ""
title: "Anubis"
theme: "anubis"
paginate: 10
disqusShortname: yourdiscussshortname
googleAnalytics: UA-123-45

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
    - images/og-featured.png
  customCSS:
    - css/my.css
```

### Check your site

In order to see your site in action, run Hugo's built-in local server.

`$ hugo server`

Now enter [`localhost:1313`](http://localhost:1313/) in the address bar of your browser.

## Contributing

If you find a bug or have an idea for a feature, feel free to write an [issue](https://github.com/mitrichius/hugo-theme-anubis/issues).

## TODO
See [issues](https://github.com/mitrichius/hugo-theme-anubis/issues).

## License
MIT

(c) Dmitry Kolosov
2020