// htmlcss progress circular bar 
let htmlProgress = document.querySelector(".html-css"),
  htmlValue = document.querySelector(".html-progress");

let htmlStartValue = 0,
  htmlEndValue = 90,
  htmlspeed = 30;

let progresshtml = setInterval(() => {
  htmlStartValue++;

  htmlValue.textContent = `${htmlStartValue}%`;
  htmlProgress.style.background = `conic-gradient(#fca61f ${
    htmlStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (htmlStartValue == htmlEndValue) {
    clearInterval(progresshtml);
  }
}, htmlspeed);

// javasript progress circular bar 
let javascriptProgress = document.querySelector(".javascript"),
  javascriptValue = document.querySelector(".javascript-progress");

let javascriptStartValue = 0,
  javascriptEndValue = 75,
  jsspeed = 30;

let progressjs = setInterval(() => {
  javascriptStartValue++;

  javascriptValue.textContent = `${javascriptStartValue}%`;
  javascriptProgress.style.background = `conic-gradient(#7d2ae8 ${
    javascriptStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (javascriptStartValue == javascriptEndValue) {
    clearInterval(progressjs);
  }
}, jsspeed);

// php progress circular bar 
let phpProgress = document.querySelector(".php"),
  phpValue = document.querySelector(".php-progress");

let phpStartValue = 0,
  phpEndValue = 80,
  phpspeed = 30;

let progressphp = setInterval(() => {
  phpStartValue++;

  phpValue.textContent = `${phpStartValue}%`;
  phpProgress.style.background = `conic-gradient(#20c997 ${
    phpStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (phpStartValue == phpEndValue) {
    clearInterval(progressphp);
  }
}, phpspeed);



// Excel Progress
let excelProgress = document.querySelector(".excel");
let excelValue = document.querySelector(".excel-progress");

let excelStartValue = 0;
let excelEndValue = 85;  // 85% untuk Excel
let excelSpeed = 30;

let progressExcel = setInterval(() => {
  excelStartValue++;

  excelValue.textContent = `${excelStartValue}%`;
  excelProgress.style.background = `conic-gradient(#fca61f ${excelStartValue * 3.6}deg, #ededed 0deg)`;

  if (excelStartValue === excelEndValue) {
    clearInterval(progressExcel);
  }
}, excelSpeed);




// Word Progress
let wordProgress = document.querySelector(".word");
let wordValue = document.querySelector(".word-progress");

let wordStartValue = 0;
let wordEndValue = 80;  // 80% untuk Word
let wordSpeed = 30;

let progressWord = setInterval(() => {
  wordStartValue++;

  wordValue.textContent = `${wordStartValue}%`;
  wordProgress.style.background = `conic-gradient(#fca61f ${wordStartValue * 3.6}deg, #ededed 0deg)`;

  if (wordStartValue === wordEndValue) {
    clearInterval(progressWord);
  }
}, wordSpeed);

// Canva Progress
let canvaProgress = document.querySelector(".canva");
let canvaValue = document.querySelector(".canva-progress");

let canvaStartValue = 0;
let canvaEndValue = 75;  // 75% untuk Canva
let canvaSpeed = 30;

let progressCanva = setInterval(() => {
  canvaStartValue++;

  canvaValue.textContent = `${canvaStartValue}%`;
  canvaProgress.style.background = `conic-gradient(#6f34fe ${canvaStartValue * 3.6}deg, #ededed 0deg)`;

  if (canvaStartValue === canvaEndValue) {
    clearInterval(progressCanva);
  }
}, canvaSpeed);

// CapCut Progress
let capcutProgress = document.querySelector(".capcut");
let capcutValue = document.querySelector(".capcut-progress");

let capcutStartValue = 0;
let capcutEndValue = 70;  // 70% untuk CapCut
let capcutSpeed = 30;

let progressCapcut = setInterval(() => {
  capcutStartValue++;

  capcutValue.textContent = `${capcutStartValue}%`;
  capcutProgress.style.background = `conic-gradient(#fca61f ${capcutStartValue * 3.6}deg, #ededed 0deg)`;

  if (capcutStartValue === capcutEndValue) {
    clearInterval(progressCapcut);
  }
}, capcutSpeed);

// VN Progress
let vnProgress = document.querySelector(".vn");
let vnValue = document.querySelector(".vn-progress");

let vnStartValue = 0;
let vnEndValue = 75;  // 75% untuk VN
let vnSpeed = 30;

let progressVn = setInterval(() => {
  vnStartValue++;

  vnValue.textContent = `${vnStartValue}%`;
  vnProgress.style.background = `conic-gradient(#6f34fe ${vnStartValue * 3.6}deg, #ededed 0deg)`;

  if (vnStartValue === vnEndValue) {
    clearInterval(progressVn);
  }
}, vnSpeed);


// filter using javascript
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".post").show("1000");
    } else {
      $(".post")
        .not("." + value)
        .hide("1000");
      $(".post")
        .filter("." + value)
        .show("1000");
    }
  });
});


// javascript for sticky navbar even if u scroll the navbar will be fixed
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar-top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar-top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 


// adding funtionality to back to top button 

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click",function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});