/*! bespoke-hash v0.1.1 © 2013 Mark Dalgleish, Licensed MIT */

(function(e){e.plugins.hash=function(e){var t,n=function(){var t=window.location.hash.slice(1),n=parseInt(t,10);t&&(n?r(n-1):e.slides.forEach(function(e,n){e.getAttribute("data-bespoke-hash")===t&&r(n)}))},r=function(n){n!==t&&e.slide(n)};setTimeout(function(){n(),e.on("activate",function(e){var n=e.slide.getAttribute("data-bespoke-hash");window.location.hash=n||e.index+1,t=e.index}),window.addEventListener("hashchange",n)},0)}})(bespoke);
