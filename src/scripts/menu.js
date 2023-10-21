document.addEventListener("click", (event) => {
	const navLinks = document.querySelector(".nav-links");
	const hamburger = document.querySelector(".hamburger");

	/* if clicks outside menu & close icon */
	if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
		navLinks.classList.remove("expanded");
		document.querySelector(".line-one").classList.remove("line-one-open");
		document.querySelector(".line-two").classList.remove("line-two-open");
		document.querySelector(".line-three").classList.remove("line-three-open");
	}
});

document.addEventListener("focusin", (event) => {
	const navLinks = document.querySelector(".nav-links");
	const hamburger = document.querySelector(".hamburger");

	/* if focus outside menu & hamburger */
	if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
		navLinks.classList.remove("expanded");
	}
});

// clicks on hamburger icon
document.querySelector(".hamburger").addEventListener("click", () => {
	document.querySelector(".nav-links").classList.toggle("expanded");
	document.querySelector(".hamburger").classList.toggle("open-burger");
	document.querySelector(".line-one").classList.toggle("line-one-open");
	document.querySelector(".line-two").classList.toggle("line-two-open");
	document.querySelector(".line-three").classList.toggle("line-three-open");
});
