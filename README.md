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
		<link rel="stylesheet" href="styles/view.css" />
	</head>
	<body>
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
