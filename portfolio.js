// variables
const hire = document.querySelector('.hire');
const designs = document.querySelector('.next');
const project1 = document.querySelector('.btn1');
const project2 = document.querySelector('.btn2');
const project3 = document.querySelector('.btn3');
const linkedIn = document.querySelector('.in');
const github = document.querySelector('.p');
const buttons = document.querySelector('.box');


// event listeners

hire.addEventListener('click', hireMe);
linkedIn.addEventListener('click', myLinkedin);
github.addEventListener('click', myGithub);
project1.addEventListener('click', myProject);
project2.addEventListener('click', myProject1);
project3.addEventListener('click', myProject2);
//functions
function hireMe(){
    window.open('mailto:bintasani992@gmail.com?subject=subject&body=body');
};

function myProject() {
    window.open('https://bintasani.github.io/weatherapp/weather%20site/weatherHtml');
    
};
function myProject1() {
    window.open('https://bintasani.github.io/quote-generator/htmldom4.html');
    
};
function myProject2() {
    window.open('https://crownstores.netlify.app/');
    
};
function myLinkedin(){
   window.open('https://www.linkedin.com/in/binta-sani-123015248');
};
function myGithub(){
    window.open('https://github.com/BintaSani');
};





