/** @type {string[]} */
var targets = Array.from(document.querySelectorAll('[id^="!/"]')).map(function(
	target
) {
	return target.id
})
/** @type {string} */
var page_title = document.title

/** */
function on_hashchange() {
	/** @type {string} */
	var hash = location.hash.slice(1)

	if (hash.endsWith('/')) {
		location.hash = '#' + hash.slice(0, -1)
	} else if (targets.indexOf(hash) === -1) {
		location.hash = '#' + targets[0]
	} else {
		document.title = [document.getElementById(hash).dataset.title, page_title]
			.filter(Boolean)
			.join(' | ')
	}
}

window.addEventListener('hashchange', on_hashchange)

on_hashchange()
