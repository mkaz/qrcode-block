
// IIFE
( function() {

	const elem = document.getElementById("qrcode");
	const url = elem.dataset.url; // reads data-url
	const qrcode = new QRCode(elem, {
		text: url,
		width: 256,
		height: 256,
		colorDark : "#000000",
		colorLight : "#ffffff",
		correctLevel : QRCode.CorrectLevel.H
	});

})();
