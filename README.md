# Signalwerk Style
[![Build Status](https://ci.signalwerk.ch/api/badges/signalwerk/signalwerk.styles/status.svg)](https://ci.signalwerk.ch/signalwerk/signalwerk.styles)

## Usage

```html
<link rel="stylesheet" href="https://raw.githack.com/signalwerk/signalwerk.styles/gh-pages/styles/main.critical.css" media="all" />
<link rel="preload" as="style" onload="this.onload=null;this.rel='stylesheet'" href="https://raw.githack.com/signalwerk/signalwerk.styles/gh-pages/styles/main.rest.css" media="all" />
```

## Versioned
Replace `gh-pages` in the url with the full commit-hash and change subdomain `raw` to `rawcdn`. Example:

```html
<link rel="stylesheet" href="https://rawcdn.githack.com/signalwerk/signalwerk.styles/738cf7dbad4d3d11609b429176489d6bbb9dbc19/styles/main.critical.css" media="all" />
<link rel="preload" as="style" onload="this.onload=null;this.rel='stylesheet'" href="https://rawcdn.githack.com/signalwerk/signalwerk.styles/738cf7dbad4d3d11609b429176489d6bbb9dbc19/styles/main.rest.css" media="all" />
```
