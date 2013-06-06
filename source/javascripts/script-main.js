bespoke.horizontal.from('article', {
	hash: true
})

var skycons = new Skycons({"color": "#3892E3"})
skycons.add("raining", Skycons.RAIN)
skycons.play()

document.body.onclick = function(e) {
	bespoke.prev()
	return false
}

document.oncontextmenu = function (e) { 
    bespoke.next()
    return false
}