# mustardseed

> "Truly I tell you, if you have faith as small as a mustard seed, you can say
> to this mountain, ‘Move from here to there,’ and it will move. Nothing will
> be impossible for you."
> Jesus in Matthew 17:20, the bible

This is a collection of CSS components and JavaScript utilities that prove to be
useful in creating _minimal websites_ (that still offer decent functionality
while maintaining instant performance).

Websites making use of the mustardseed components will typically consist only
of a single html file, maybe accompanied by a small set of asset images/media.

CSS components and JavaScript utilities can be referenced independently, it is
even recommended to inline them into the actual html file that represents the
website.

## routing

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

## fold

A `.fold` is a technique to uncover content on demand. Mustardseed realizes that
with a hidden checkbox that is triggered by a connected label. Every
`.fold__show` sibling of the `.fold` will initially be hidden and only shown
when the fold is checked, `.fold__hide` will be initially visible and hidden
when the fold is checked.

```html
<!DOCTYPE html>
<html>
	<head>
		<link rel="stylesheet" href="styles/fold.css" />
	</head>
	<body>
		<p>above the fold</p>
		<input type="checkbox" id="myfold" class="fold" />
		<label for="myfold" class="fold__hide">unfold</label>
		<p class="fold__show">below the fold</p>
	</body>
</html>
```

## pageheader

The `.pageheader` is visible on all `.view` elements (see [routing](#routing)).

```html
<!DOCTYPE html>
<html>
	<head>
    <title>My Website</titleY>
		<link rel="stylesheet" href="styles/pageheader.css" />
		<link rel="stylesheet" href="styles/view.css" />
	</head>
	<body>
		<header class="pageheader">
			<a href="#!/"><img src="logo.svg" alt="my website"/></a>
		</header>
		<section class="view" id="!/" data-title="Home"></section>
		<script src="scripts/routing.js"></script>
	</body>
</html>
```

## grid

The `.grid` offers a 12-column grid implemented with the css grid.
`.grid__item--${n}` will span `n` columns of the grid. Columns > 12 wrap. In
small viewports ("S" form factor, mobile devices), the grid items will be
stacked.

```html
<!DOCTYPE html>
<html>
	<head>
		<link rel="stylesheet" href="styles/grid.css" />
	</head>
	<body>
		<section class="view grid" id="!/" data-title="Home">
			<article class="grid__item--3"><!-- 3 columns --></article>
			<article class="grid__item--6"><!-- 6 columns --></article>
			<article class="grid__item--2"><!-- 2 columns --></article>
			<article class="grid__item--1"><!-- 1 column --></article>
			<article class="grid__item--4"><!-- 4 columns, wraps --></article>
		</section>
	</body>
</html>
```
