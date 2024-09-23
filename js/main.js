var hamburger = document.querySelector(".hamburger__nav");
var cross = document.querySelector(".hamburger__nav--cross");
var slider = document.querySelector(".product__image");
var prev = document.querySelector(".product__previous");
var next = document.querySelector(".product__next");
var img = [
    "images/image-product-1.jpg",
    "images/image-product-2.jpg",
    "images/image-product-3.jpg",
    "images/image-product-4.jpg",
];
var count = 0;
var plus = document.querySelector(".plus");
var minus = document.querySelector(".minus");
var quantity = document.querySelector(".quantity__number");
// const cartBtn = document.querySelector<HTMLElement>(".cartBtn");
var cart = document.querySelector(".cart");
var mobileNav = function () {
    hamburger.style.width = "calc(100% - 60%)";
    hamburger.style.visibility = "visible";
    hamburger.style.transition = "width 0.5s";
    console.log("hello");
};
var menuClose = function () {
    hamburger.style.visibility = "visible";
    hamburger.style.width = "0";
    hamburger.style.transition = " width 0.5s ";
};
var nextImg = function () {
    count++;
    if (count >= img.length) {
        count = 0;
        slider.src = img[count];
    }
    else {
        slider.src = img[count];
    }
    slider.style.transition = "all 0.5s";
};
var prevImg = function () {
    count--;
    slider.style.transition = "all 0.5s";
    if (count < 0) {
        count = img.length - 1;
        slider.src = img[count];
    }
    else {
        slider.src = img[count];
    }
};
var increase = function () {
    count++;
    quantity.textContent = count.toString();
};
var decrease = function () {
    var _a;
    if (parseInt((_a = quantity.textContent) !== null && _a !== void 0 ? _a : "") <= 0)
        return;
    count--;
    quantity.textContent = count.toString();
};
var cartClick = function () {
    cart.classList.toggle("cart__active");
    cart.style.transition = " width 0.5s ";
};
var imgSlide = function (smallImg) {
    slider.style.transition = "all 0.5s";
    smallImg.style.transition = "all 0.5s";
    if (smallImg.id == "1") {
        slider.src = "images/image-product-1.jpg";
        smallImg.style.opacity = "0.5";
        setTimeout(function () {
            smallImg.style.opacity = "1";
        }, 1000);
    }
    else if (smallImg.id == "2") {
        slider.src = "images/image-product-2.jpg";
        smallImg.style.opacity = "0.5";
        setTimeout(function () {
            smallImg.style.opacity = "1";
        }, 1000);
    }
    else if (smallImg.id == "3") {
        slider.src = "images/image-product-3.jpg";
        smallImg.style.opacity = "0.5";
        setTimeout(function () {
            smallImg.style.opacity = "1";
        }, 1000);
    }
    else if (smallImg.id == "4") {
        slider.src = "images/image-product-4.jpg";
        smallImg.style.opacity = "0.5";
        setTimeout(function () {
            smallImg.style.opacity = "1";
        }, 1000);
    }
};
