window.addEventListener('load', function () {
	"use strict";

	/* Basic Node elements */
	let div = document.querySelector(".div"),
		p = document.querySelector(".p"),
		btn = document.querySelector(".btn"),
		span = document.querySelector(".span"),
		h1 = document.querySelector(".h1"),
		a = document.querySelector(".a");

	// console.dir(div); // HtmlDivElement => HtmlElement => Element => Node => Event.Target => Object
	// console.dir(p); // HTMLParagraphElement => HtmlElement => Element => Node => Event.Target => Object
	// console.dir(btn); // HTMLButtonElement => HtmlElement => Element => Node => Event.Target => Object
	// console.dir(span); // HTMLSpanElement => HtmlElement => Element => Node => Event.Target => Object
	// console.dir(h1); // HTMLHeadingElement => HtmlElement => Element => Node => Event.Target => Object
	// console.dir(a); // HTMLAnchorElement => HtmlElement => Element => Node => Event.Target => Object


	/* Semantic elements */
	let section = document.querySelector(".section"),
		header = document.querySelector(".header"),
		nav = document.querySelector(".nav"),
		footer = document.querySelector(".footer"),
		aside = document.querySelector(".aside");

	// console.dir(section); // HtmlElement => Element => Node => Event.Target => Object
	// console.dir(header); // HtmlElement => Element => Node => Event.Target => Object
	// console.dir(nav); // HtmlElement => Element => Node => Event.Target => Object
	// console.dir(footer); // HtmlElement => Element => Node => Event.Target => Object
	// console.dir(aside); // HtmlElement => Element => Node => Event.Target => Object



	const rootWrapper = document.querySelector(".wrapper");
	let NodeList = rootWrapper.querySelectorAll("p"),
		HTMLCollection = rootWrapper.getElementsByTagName("p");
	// console.log(NodeList); // NodeList(3) [p, p, p]
	// console.log(HTMLCollection); // HTMLCollection(3) [p, p, p]

});

