# Signalwerk Style
[![Build Status](https://ci.signalwerk.ch/api/badges/signalwerk/signalwerk.styles/status.svg)](https://ci.signalwerk.ch/signalwerk/signalwerk.styles)

## Usage

```html
<link rel="stylesheet" href="https://raw.githack.com/signalwerk/signalwerk.styles/gh-pages/styles/main.critical.css" media="all" />
<link rel="stylesheet" href="https://raw.githack.com/signalwerk/signalwerk.styles/gh-pages/styles/main.rest.css" media="print" onload="this.media='all'">
```

## Versioned
Replace `gh-pages` in the url with the full commit-hash and change subdomain `raw` to `rawcdn`. Example:

```html
<link rel="stylesheet" href="https://rawcdn.githack.com/signalwerk/signalwerk.styles/de2666d/styles/main.critical.css" media="all" />
<link rel="stylesheet" href="https://rawcdn.githack.com/signalwerk/signalwerk.styles/de2666d/styles/main.rest.css" media="print" onload="this.media='all'">
```

## ToDo
Set Build with [static site generator webpack plugin](https://github.com/markdalgleish/static-site-generator-webpack-plugin).
