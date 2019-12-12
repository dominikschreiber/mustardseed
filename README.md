# mustardseed

> "Truly I tell you, if you have faith as small as a mustard seed, you can say
> to this mountain, ‘Move from here to there,’ and it will move. Nothing will
> be impossible for you."
> Jesus in Matthew 17:20, the bible

This is a collection of CSS components and JavaScript utilities that prove to be
useful in creating _minimal websites_ (that still offer decent functionality
while maintaining instant performance). Just as a mustard seed is "minimal"
faith in Jesus' teaching.

Websites making use of the mustardseed components will typically consist only
of a single html file, maybe accompanied by a small set of asset images/media.

CSS components and JavaScript utilities can be referenced independently, it is
even recommended to inline them into the actual html file that represents the
website.

## Components

1. [Button](#button)
2. [Fold](#fold)
3. [Grid](#grid)
4. [Iframe](#iframe)
5. [Page](#page)
6. [Pageheader](#pageheader)
7. [Section](#section)
8. [Text](#text)
9. [View](#view)

For specific CSS (e.g. for a single `.section`) you are encouraged to add
classes to identify the elements and styles to give them a special look:

```html
<link rel="stylesheet" href="styles/section.css" />
<style>
	.section--mysection {
		background-color: #c0ffee;
	}
</style>
<article class="section section--mysection"></article>
```

### Button

A `.button` styles an element to appear as a button. Comes with alternatives:

- `.button--outline` only visualizes a border
- `.button--large` makes it a tad larger.

```html
<link rel="stylesheet" href="styles/button.css" />
<button type="button" class="button">A Button</button><br />
<a href="#!/" class="button button--outline">An outline Button</a><br />
<label for="myfold" class="button button--large fold__hide">
	A large<br /><span class="button__subtitle">Button</span>
</label>
```

### Fold

A `.fold` is a technique to uncover content on demand. Mustardseed realizes that
with a hidden checkbox that is triggered by a connected label. Every
`.fold__show` sibling of the `.fold` will initially be hidden and only shown
when the fold is checked, `.fold__hide` will be initially visible and hidden
when the fold is checked.

```html
<link rel="stylesheet" href="styles/fold.css" />
<p>above the fold</p>
<input type="checkbox" id="myfold" class="fold" />
<label for="myfold" class="fold__hide">unfold</label>
<p class="fold__show">below the fold</p>
```

### Grid

The `.grid` offers a 12-column grid implemented with the css grid.
`.grid__item--${n}` will span `n` columns of the grid. Columns > 12 wrap. In
small viewports ("S" form factor, mobile devices), the grid items will be
stacked.

```html
<link rel="stylesheet" href="styles/grid.css" />
<section class="view grid" id="!/" data-title="Home">
	<article class="grid__item--3"><!-- 3 columns --></article>
	<article class="grid__item--6"><!-- 6 columns --></article>
	<article class="grid__item--2"><!-- 2 columns --></article>
	<article class="grid__item--1"><!-- 1 column --></article>
	<article class="grid__item--4"><!-- 4 columns, wraps --></article>
</section>
```

### Iframe

The `.iframe` styles an `<iframe>` so that it spans the whole screen minus the
[pageheader](#pageheader):

```html
<link rel="stylesheet" href="styles/iframe.css" />
<link rel="stylesheet" href="styles/pageheader.css" />
<header class="pageheader"></header>
<iframe class="iframe" src="https://my.embedded.content"></iframe>
```

### Page

The `.page` is a (more than) minimal reset on the `body` that sets `margin:0`
and a `font-family`:

```html
<link rel="stylesheet" href="styles/page.css" />
<body class="page"></body>
```

### Pageheader

The `.pageheader` is visible at the top of all `.view` elements (see
[routing](#routing)).

```html
<link rel="stylesheet" href="styles/pageheader.css" />
<link rel="stylesheet" href="styles/view.css" />
<header class="pageheader">
	<a href="#!/"><img src="logo.svg" alt="my website"/></a>
</header>
<section class="view" id="!/" data-title="Home"></section>
```

### Section

A `.view` is often split into multiple `.section`s. These create space for
different topics. Height can either depend on content (with potentially large
paddings) or the min-height can be viewport-based.

```html
<link rel="stylesheet" href="styles/button.css" />
<link rel="stylesheet" href="styles/pageheader.css" />
<link rel="stylesheet" href="styles/section.css" />
<link rel="stylesheet" href="styles/view.css" />
<style>
	.section--mysection {
		background-image: linear-gradient(#000b 0, #000b 100%),
			url(assets/mybackground.png);
	}
</style>
<header class="pageheader"></header>
<section class="view" id="!/" data-title="Home">
	<article class="section">
		<h2>height based on content<h2>
	</article>
	<article class="section section--large">
		<h2>height based on content</h2>
		<p>has larger paddings</p>
	</article>
	<article class="section section--stretch">
		<h2>minimum 80vh high</h2>
	</article>
	<article class="section section--overlaybackground section--mysection">
		<h2>custom background-image</h2>
		<p>with dark semi-transparent overlay</p>
		<button type="button" class="button button--outline">an outline-button</button>
	</article>
</section>
```

### Text

Makes content copy readable with an eye-pleasing `line-height`, `margin` and
`max-width`.

```html
<link rel="stylesheet" href="styles/text.css" />
<p class="text">Lorem ipsum dolor sit amet</p>
```

### View

See [Routing](#routing).

## Utilities

1. [Routing](#routing)

### Routing

Mustardseed offers hash-routing, because that works client-side even without
JavaScript. The only advantage is that `document.title` will automatically be
updated based on `data-title` of the current route, and that unknown routes will
be redirected to the first route in the document.

Routes are defined by elements that have an `[id^="!/"]`. They are referenced by
anchors to `#${id}`. The view matching the current route will be visible, all
others will be hidden.

```html
<!DOCTYPE html>
<html>
	<head>
		<title>Mustardseed</title>
		<link rel="stylesheet" href="styles/pageheader.css" />
		<link rel="stylesheet" href="styles/view.css" />
	</head>
	<body>
		<header class="pageheader"></header>
		<section class="view" id="!/home" data-title="Home">
			<a href="#!/about">about</a>
		</section>
		<section class="view" id="!/about" data-title="About">
			<a href="#!/home">home</a>
		</section>
		<script src="scripts/routing.js"></script>
	</body>
</html>
```
