
document.getElementById('js-modal-close').addEventListener('click', function(event) {
	document.getElementById("js-modal__panel").classList.remove("bounceIn");
	document.getElementById("js-modal__panel").classList.add("bounceOut");
});

document.getElementById('js-modal-email').addEventListener('click', function(event) {
	document.getElementById("js-modal-email").classList.add("pulse");

});