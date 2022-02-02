# Signalwerk Style

[![Build Status](https://ci.signalwerk.ch/api/badges/signalwerk/signalwerk.styles/status.svg)](https://ci.signalwerk.ch/signalwerk/signalwerk.styles)

## Breaking

⚠️ The last version before the split to `doc.css` and `blog.css` was `86d595b` (`86d595b/styles/main.critical.css`, `86d595b/styles/main.rest.css`).

## Usage for Documents · versioned

```html
<!-- fonts -->
<link rel="preconnect" href="https://fonts.signalwerk.ch" />
<link
  href="https://fonts.signalwerk.ch/css/latest/family=Open+Sans:ital,wght@0,300..800;1,300..800.css"
  rel="stylesheet"
/>
<!-- styles -->
<link
  rel="stylesheet"
  href="https://rawcdn.githack.com/signalwerk/signalwerk.styles/72d62b5/styles/doc.critical.css"
  media="all"
/>
<link
  rel="preload"
  as="style"
  onload="this.onload=null;this.rel='stylesheet'"
  href="https://rawcdn.githack.com/signalwerk/signalwerk.styles/72d62b5/styles/doc.rest.css"
  media="all"
/>
```

## Usage for Blogs · versioned

```html
<!-- fonts -->
<link rel="preconnect" href="https://fonts.signalwerk.ch" />
<link
  href="https://fonts.signalwerk.ch/css/latest/family=Open+Sans:ital,wght@0,300..800;1,300..800.css"
  rel="stylesheet"
/>
<!-- styles -->
<link
  rel="stylesheet"
  href="https://rawcdn.githack.com/signalwerk/signalwerk.styles/72d62b5/styles/blog.critical.css"
  media="all"
/>
<link
  rel="preload"
  as="style"
  onload="this.onload=null;this.rel='stylesheet'"
  href="https://rawcdn.githack.com/signalwerk/signalwerk.styles/72d62b5/styles/blog.rest.css"
  media="all"
/>
```

## Fonts from Google

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
  rel="stylesheet"
/>
```

## ToDo

- No ligatures in Code/pre
- Implement Code-Font
- Implement Blog-Font
- Webpack with multiple entrypoints (now multiple uns)

## Usage

- [Signalwerk · Webtypo](https://webtypo.signalwerk.ch/

<!--
npm run start-blog
npm run start-doc

http://signalwerk.styles.local.signalwerk.ch:8081/
 -->
