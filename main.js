// JavaScript Document
const navbar = document.querySelector('.navbar');
const navlink = document.querySelector('nav');

navbar.addEventListener('click',()=>
{
	navlink.classList.toggle("open");
	navbar.classList.toggle("active");
});
