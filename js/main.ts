const hamburger = document.querySelector<HTMLElement>(".hamburger__nav");
const cross = document.querySelector<HTMLElement>(".hamburger__nav--cross");
const slider = document.querySelector<HTMLImageElement>(".product__image");
const prev = document.querySelector<HTMLElement>(".product__previous");
const next = document.querySelector<HTMLElement>(".product__next");
const img: string[] = [
  "images/image-product-1.jpg",
  "images/image-product-2.jpg",
  "images/image-product-3.jpg",
  "images/image-product-4.jpg",
];
let count: number = 0;
const plus = document.querySelector<HTMLElement>(".plus");
const minus = document.querySelector<HTMLElement>(".minus");
const quantity = document.querySelector<HTMLElement>(".quantity__number");
// const cartBtn = document.querySelector<HTMLElement>(".cartBtn");
const cart = document.querySelector<HTMLElement>(".cart");
const mobileNav = () => {
  hamburger!.style.width = "calc(100% - 60%)";
  hamburger!.style.visibility = "visible";
  hamburger!.style.transition = "width 0.5s";
  console.log("hello");
};

const menuClose = () => {
  hamburger!.style.visibility = "visible";
  hamburger!.style.width = "0";
  hamburger!.style.transition = " width 0.5s ";
};

const nextImg = () => {
  count++;
  if (count >= img.length) {
    count = 0;
    slider!.src = img[count];
  } else {
    slider!.src = img[count];
  }
  slider!.style.transition = "all 0.5s";
};

const prevImg = () => {
  count--;
  slider!.style.transition = "all 0.5s";
  if (count < 0) {
    count = img.length - 1;
    slider!.src = img[count];
  } else {
    slider!.src = img[count];
  }
};

const increase = () => {
  count++;
  quantity!.textContent = count.toString();
};
const decrease = () => {
  if (parseInt(quantity!.textContent ?? "") <= 0) return;
  count--;
  quantity!.textContent = count.toString();
};

const cartClick = () => {
  cart!.classList.toggle("cart__active");
  cart!.style.transition = " width 0.5s ";
};

const imgSlide = (smallImg: HTMLImageElement) => {
  slider!.style.transition = "all 0.5s";
  smallImg.style.transition = "all 0.5s";
  if (smallImg.id == "1") {
    slider!.src = "images/image-product-1.jpg";
    smallImg.style.opacity = "0.5";
    smallImg.style.outline = "5px solid hsl(26, 100%, 55%)";
    setTimeout(() => {
      smallImg.style.opacity = "1";
      smallImg.style.outline = "none";
    }, 1000);
  } else if (smallImg.id == "2") {
    slider!.src = "images/image-product-2.jpg";
    smallImg.style.opacity = "0.5";
    smallImg.style.outline = "5px solid hsl(26, 100%, 55%)";
    setTimeout(() => {
      smallImg.style.opacity = "1";
      smallImg.style.outline = "none";
    }, 1000);
  } else if (smallImg.id == "3") {
    slider!.src = "images/image-product-3.jpg";
    smallImg.style.opacity = "0.5";
    smallImg.style.outline = "5px solid hsl(26, 100%, 55%)";
    setTimeout(() => {
      smallImg.style.opacity = "1";
      smallImg.style.outline = "none";
    }, 1000);
  } else if (smallImg.id == "4") {
    slider!.src = "images/image-product-4.jpg";
    smallImg.style.opacity = "0.5";
    smallImg.style.outline = "5px solid hsl(26, 100%, 55%)";
    setTimeout(() => {
      smallImg.style.opacity = "1";
      smallImg.style.outline = "none";
    }, 1000);
  }
};
