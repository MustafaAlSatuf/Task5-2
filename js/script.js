/*START NAVBAR*/

/* START COUNTRIES MENU */
const wrapper = document.querySelector(".wrapper"),
  selectLan = wrapper.querySelector(".select-btn");
const options = document.querySelector(".options");
const image = document.querySelector(".select-btn img");
const seLan = document.querySelector(".select-btn span");
const pagesMenu = document.querySelector(".pages");
const collectionMenu = document.querySelector(".collection");
const mobileMenuHeader = document.querySelector(".mobile-menu-header");
const menuBack = mobileMenuHeader.querySelector(".menu-back");
const menuClose = mobileMenuHeader.querySelector(".menu-close");
const mobileMenuTrigger = document.querySelector(".mobile-menu-trigger");
const navMobile = document.querySelector(".navbar-nav");
const menuOverlay = document.querySelector(".menu-overlay");

const productsGallery = document.querySelector(".section-8 .products-gallery");
const productImage = document.querySelectorAll(
  ".section-8 .card .product-image img"
);
const nextBtn = document.querySelector(".controls .next-btn");
const preBtn = document.querySelector(".controls .pre-btn");

selectLan.addEventListener("click", (e) => {
  wrapper.classList.toggle("active");
});
//API FOR COUNTRIES CODE AND FLAGS
fetch("https://restcountries.com/v3.1/all")
  .then(function (result) {
    return result.json();
  })
  .then((result) => {
    return displayCountries(result);
  });

const displayCountries = function (countries) {
  seLan.innerText = countries[10].flag;
  image.src = countries[10].flags.png;
  image.style.width = "20px";
  countries.forEach((country) => {
    const countryName = document.createElement("li");
    const countryFlag = document.createElement("img");
    countryName.onclick = function () {
      wrapper.classList.toggle("active");
      seLan.innerText = country.flag;
      image.src = country.flags.png;
      image.style.width = "20px";
    };
    options.appendChild(countryName);
    countryName.innerText = country.flag;
    countryName.appendChild(countryFlag);
    countryFlag.src = country.flags.png;
    countryFlag.style.width = "20px";
    countryFlag.style.marginLeft = "10px";
  });
};

collectionMenu.addEventListener("click", (e) => {
  if (!navMobile.classList.contains("active")) {
    return;
  }
  mobileMenuHeader.classList.add("active");
  mobileMenuHeader.querySelector(".title").innerText = "COLLECTIONS";
  collectionMenu.querySelector(".collection-content").classList.add("active");
  collectionMenu.querySelector(".collection-content").style.animation =
    "slideLeft 0.5s ease forwards";
});

pagesMenu.addEventListener("click", (e) => {
  if (!navMobile.classList.contains("active")) {
    return;
  }
  mobileMenuHeader.classList.add("active");
  mobileMenuHeader.querySelector(".title").innerText = "PAGES";
  pagesMenu.querySelector(".pages-content").classList.add("active");

  pagesMenu.querySelector(".pages-content").style.animation =
    "slideLeft2 0.5s ease forwards";
});

menuBack.addEventListener("click", (e) => {
  mobileMenuHeader.classList.remove("active");
  mobileMenuHeader.querySelector(".title").innerText = "";

  setTimeout(() => {
    collectionMenu
      .querySelector(".collection-content")
      .classList.remove("active");
  }, 1000);

  collectionMenu.querySelector(".collection-content").style.animation =
    "slideRight 1s ease forwards";
  setTimeout(() => {
    collectionMenu
      .querySelector(".collection-content")
      .classList.remove("active");
    pagesMenu.querySelector(".pages-content").classList.remove("active");
  }, 1000);

  pagesMenu.querySelector(".pages-content").style.animation =
    "slideRight2 1s ease forwards";
});

menuClose.addEventListener("click", () => {
  navMobile.classList.remove("active");
  menuOverlay.classList.toggle("active");
});

mobileMenuTrigger.addEventListener("click", () => {
  navMobile.classList.add("active");
  menuOverlay.classList.toggle("active");
});
/* END COUNTRIES MENU */
/*END NAVBAR*/

/* start section 2*/
var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: false,
  initialSlide: 1,
  speed: 500,

  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 10,
    stretch: 0,

    depth: 400,
    modifier: 1,
    slideShadows: true,
  },
  spaceBetween: 100,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
/*End section 2*/

/*START PRODUCTS*/
fetch("https://dummyjson.com/products")
  .then(function (result) {
    return result.json();
  })
  .then((result) => {
    return displayProducts(result);
  });

function displayProducts(result) {
  console.log(result.products);
  for (let i = 0; i < 6; i++) {
    productsGallery.innerHTML += `<div class="card">
    <picture>
      <img src=${result.products[i].images[0]} alt="" />
    </picture>
    <div class="details">
      <p>
        <b>${result.products[i].title}</b><br />
        <small>New Arrivle</small>
      </p>
      <samp>${result.products[i].price}$</samp>
    </div>
    <div class="button">
      <p class="start">
        <strong>${
          Math.floor(result.products[i].rating) > 0 ? "&starf;" : "&star;"
        }</strong>
        <strong>${
          Math.floor(result.products[i].rating) > 1 ? "&starf;" : "&star;"
        }</strong>
        <strong>${
          Math.floor(result.products[i].rating) > 2 ? "&starf;" : "&star;"
        }</strong>
        <strong>${
          Math.floor(result.products[i].rating) > 3 ? "&starf;" : "&star;"
        }</strong>
        <strong>${
          Math.floor(result.products[i].rating) > 4 ? "&starf;" : "&star;"
        }</strong>
      </p>
      <a href="#">Add-cart</a>
    </div>
    <div class="discount">${result.products[i].discountPercentage}% OFF</div>
  </div>`;
  }
}
productsGallery.addEventListener("wheel", (e) => {
  e.preventDefault();
  productsGallery.scrollLeft += e.deltaY;
});
nextBtn.addEventListener("click", (e) => {
  productsGallery.style.scrollBehavior = "smooth";

  productsGallery.scrollLeft += 300;
});

preBtn.addEventListener("click", (e) => {
  productsGallery.style.scrollBehavior = "smooth";
  productsGallery.scrollLeft -= 250;
});

/*END PRODUCTS */
