// skills progress

let percent = document.querySelectorAll('.progress-skills__number');
const scrollBar = () => {
    let lines = document.querySelectorAll('.progress-skills__line');

    for (let i = 0; i < percent.length; i++) {
        percent[i].dataset.to;
        for (let j = 0; j < lines.length; j++) {
            lines[i].style.width = percent[i].dataset.to + '%';
        }
    }
}

let updateTimer = function() {
    scrollBar();
    percent.forEach(item => {
        let count = +item.innerHTML;
        let dataTo = +item.getAttribute("data-to");

        if (count < dataTo) {
            item.innerHTML = +item.innerHTML + 1;
        }
    })
}

let sectionSkills = document.querySelector(".skills");
window.addEventListener("scroll", function() {
    if(sectionSkills.offsetTop - 200  < pageYOffset) {
        setInterval(updateTimer, 20);
    }
})


// counter numbers

let number = document.querySelectorAll(".work-content__number");

let numberCount = function() {
    number.forEach(item => {
        let startCount = +item.innerHTML;
        let countTo = +item.getAttribute("data-count");

        if (startCount < countTo) {
            item.innerHTML = +item.innerHTML + 1;
        }
    })
}

let sectionResultsWork = document.querySelector(".results-work");
window.addEventListener("scroll", function() {
    if(sectionResultsWork.offsetTop - 600 < scrollY) {
        setInterval(numberCount, 20);
    }
})


// button load more work

let buttonLoadMore = document.querySelectorAll(".gallery__button");
let galleryImages = document.querySelector(".gallery__image-column");

for( let i = 0; i < buttonLoadMore.length; i++) {
    buttonLoadMore[i].addEventListener('click', function () {
        if (galleryImages.classList.contains("gallery__block-images")) {
            galleryImages.classList.remove("gallery__block-images");
            document.getElementById("gallery__button").innerHTML = "Load more work";
        } else {
            galleryImages.classList.add("gallery__block-images");
            document.getElementById("gallery__button").innerHTML = "Hide work";
        }
    });
}

// Slider

const swiper = new Swiper('.swiper-slider', {
    keyboard: {
      enabled: true,
    }, 

    pagination: {   
        el: '.swiper-pagination',
        clickable: true,
      },

      autoplay: {
        delay: 5000,
      },

      loop: true,
  },
);

const swiperPartners = new Swiper('.swiper-partners', {
    // slidesPerView: 5,
    // spaceBetween: 10,

      autoplay: {
        delay: 2000,
      },

      loop: true,

      breakpoints: {

        480: {
          slidesPerView: 2
        },

        680: {
            slidesPerView: 3
        },

        992: {
            slidesPerView: 5
        },
    }
}
);

// затемнення меню при скролі

const header = document.querySelector(".header");

function showMenu () {
    if((window.scrollY > 600)) {
        header.classList.add("header__scroll");
    } else {
        header.classList.remove("header__scroll");
    }
}

window.addEventListener("scroll", showMenu)


// Активний клас меню при скролі

window.addEventListener('scroll', () => {
    const scrollDistance = window.scrollY;
    document.querySelectorAll('.section').forEach((el, i) => {
        if((el.offsetTop - document.querySelector('.header__container').clientHeight <= scrollDistance + 20) && (window.matchMedia("(min-width: 678px)").matches)) {
            document.querySelectorAll('nav a').forEach((el) => {
                if(el.classList.contains('menu__link--active')) {
                    el.classList.remove('menu__link--active');
                }
            })

            document.querySelectorAll('nav li')[i].querySelector('a').classList.add('menu__link--active')
        }
    })
})


// Плавний перехід по меню

const links = document.querySelectorAll('a[href*="#"]');

links.forEach(linkMenu => {
    linkMenu.addEventListener("click", function (event) {
         event.preventDefault();
         const linkId = linkMenu.getAttribute('href');
         document.querySelector(''+ linkId).scrollIntoView({
            behavior: "smooth",
            block: "start"
         })

    })
})

// бургер-меню

const menu = document.querySelector(".header__menu");
const burger = document.querySelector(".burger");
const menuLinks = document.querySelectorAll(".menu__link");

burger.addEventListener("click", function() {
    burger.classList.toggle("header__menu--active");
    if(burger.classList.contains("header__menu--active")) {
        menu.classList.add("header__menu--active");
    } else {
        menu.classList.remove("header__menu--active");
    }
})

menuLinks.forEach(links => {
    links.addEventListener("click", function() {
        burger.classList.remove("header__menu--active");
        menu.classList.remove("header__menu--active");
    })
})