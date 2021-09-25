# Signalwerk Style

[![Build Status](https://ci.signalwerk.ch/api/badges/signalwerk/signalwerk.styles/status.svg)](https://ci.signalwerk.ch/signalwerk/signalwerk.styles)

## Usage

```html
<link rel="preconnect" href="https://fonts.signalwerk.ch" />
<link
  href="https://fonts.signalwerk.ch/css/latest/family=OpenSans:ital,wght@0,300..800;1,300..800.css"
  rel="stylesheet"
/>
<link
  rel="stylesheet"
  href="https://raw.githack.com/signalwerk/signalwerk.styles/gh-pages/styles/main.critical.css"
  media="all"
/>
<link
  rel="preload"
  as="style"
  onload="this.onload=null;this.rel='stylesheet'"
  href="https://raw.githack.com/signalwerk/signalwerk.styles/gh-pages/styles/main.rest.css"
  media="all"
/>
```

## Versioned

Replace `gh-pages` in the url with the full commit-hash and change subdomain `raw` to `rawcdn`. Example:

```html
<link rel="preconnect" href="https://fonts.signalwerk.ch" />
<link
  href="https://fonts.signalwerk.ch/css/latest/family=OpenSans:ital,wght@0,300..800;1,300..800.css"
  rel="stylesheet"
/>
<link
  rel="stylesheet"
  href="https://rawcdn.githack.com/signalwerk/signalwerk.styles/9ed8de8/styles/main.critical.css"
  media="all"
/>
<link
  rel="preload"
  as="style"
  onload="this.onload=null;this.rel='stylesheet'"
  href="https://rawcdn.githack.com/signalwerk/signalwerk.styles/9ed8de8/styles/main.rest.css"
  media="all"
/>
```

## ToDo

Set Build with [static site generator webpack plugin](https://github.com/markdalgleish/static-site-generator-webpack-plugin).
