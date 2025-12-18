'use strict'
fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(products => {
    for (let i = 0; i < 20; i++) {
      document.getElementById(`img${i + 1}`).src = products[i].image;
      document.getElementById(`name${i + 1}`).textContent = products[i].title;
      document.getElementById(`price${i + 1}`).textContent = `$${products[i].price}`;
      document.getElementById(`rev${i + 1}`).textContent = `(${products[i].rating.count})`;
    }
  });






let right = document.getElementById('right');
let right1 = document.getElementById('right1');
let right2 = document.getElementById('right2');
let right3 = document.getElementById('right3');
let right4 = document.getElementById('right4');
let left = document.getElementById('left');
let left1 = document.getElementById('left1');
let left2 = document.getElementById('left2');
let left3 = document.getElementById('left3');
let left4 = document.getElementById('left4');
let carousel = document.getElementById('carousel');
let carousel1 = document.getElementById('carousel1');
let carousel2 = document.getElementById('carousel2');
let carousel3 = document.getElementById('carousel3');
let carousel4 = document.getElementById('carousel4');


function onClickRight() {
  carousel1.style.display = 'block';
  carousel.style.display = 'none';
}

function onClickRight1() {
  carousel2.style.display = 'block';
  carousel1.style.display = 'none';
}

function onClickRight2() {
  carousel3.style.display = 'block';
  carousel2.style.display = 'none';
}

function onClickRight3() {
  carousel4.style.display = 'block';
  carousel3.style.display = 'none';
}

function onClickRight4() {
  carousel.style.display = 'block';
  carousel4.style.display = 'none';
}

function onClickLeft() {
  carousel4.style.display = 'block';
  carousel.style.display = 'none';
}

function onClickLeft1() {
  carousel.style.display = 'block';
  carousel1.style.display = 'none';
}

function onClickLeft2() {
  carousel1.style.display = 'block';
  carousel2.style.display = 'none';
}

function onClickLeft3() {
  carousel2.style.display = 'block';
  carousel3.style.display = 'none';
}

function onClickLeft4() {
  carousel3.style.display = 'block';
  carousel4.style.display = 'none';
}




right.addEventListener('click', onClickRight);
right1.addEventListener('click', onClickRight1);
right2.addEventListener('click', onClickRight2);
right3.addEventListener('click', onClickRight3);
right4.addEventListener('click', onClickRight4);
left4.addEventListener('click', onClickLeft4);
left3.addEventListener('click', onClickLeft3);
left2.addEventListener('click', onClickLeft2);
left1.addEventListener('click', onClickLeft1);
left.addEventListener('click', onClickLeft);




let viewall = document.getElementById('viewall');
let hiddenproducts = document.getElementById('hiddenproducts');
let collapse = document.getElementById('collapse');

function viewAll() {
  hiddenproducts.style.display = 'block';
  viewall.style.display = "none";
  collapse.style.display = 'block';
}

function collapseProducts() {
  hiddenproducts.style.display = 'none';
  viewall.style.display = "block";
  collapse.style.display = 'none';
}


viewall.addEventListener('click', viewAll);
collapse.addEventListener('click', collapseProducts);

let hidefirst = document.getElementById('hidefirst');
let exploremore = document.getElementById('exploremore');
let showmore = document.getElementById('showmore');
let collapseall = document.getElementById('collapseall');
let open1 = document.getElementById('open1');
let open2 = document.getElementById('open2');

function openFirst() {
  open1.style.display = 'flex';
  showmore.style.display = 'block';
  exploremore.style.display = 'none';
}

function collapseAll() {
  open1.style.display = 'none';
  open2.style.display = 'none';
  exploremore.style.display = 'block';
  collapseall.style.display = 'none';
}

exploremore.addEventListener('click', openFirst);
collapseall.addEventListener('click', collapseAll);

let accountdrop = document.getElementById('accountdrop');
let account = document.getElementById('component');
function showAccountDropdown() {
  if (accountdrop.style.display == 'none') {
    accountdrop.style.display = 'flex';
  } else if (accountdrop.style.display = 'flex') {
    accountdrop.style.display = 'none';
  }
}
account.addEventListener("click", showAccountDropdown);


let cellphone = document.getElementById('cellphone');
let computer = document.getElementById('computer');
let watch = document.getElementById('watch');
let camera = document.getElementById('camera');
let headphone = document.getElementById('headphone');
let gaming = document.getElementById('gaming');
let phonescategory = document.getElementById('phonescategory');
let computerscategory = document.getElementById('computerscategory');
let watchcategory = document.getElementById('watchcategory');
let cameracategory = document.getElementById('cameracategory');
let headphonecategory = document.getElementById('headphonecategory');
let gamingcategory = document.getElementById('gamingcategory');

function cameraCateg() {
  phonescategory.style.display = "block";
  computerscategory.style.display = "block";
  document.body.style.backgroundColor = "blue";
}

cellphone.addEventListener("click", cameraCateg);



