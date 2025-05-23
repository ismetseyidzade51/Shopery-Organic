// burger menu side
const menuIcon = document.querySelector(".menu-icon");
const navMenu = document.querySelector(".nav-ul");

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("open");
    navMenu.classList.toggle("open");
});

// products side scroll animation side

document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll(
        ".pp-cats .pp-cnt .pro-ctg-box .box"
    );

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    boxes.forEach((box) => {
        observer.observe(box);
    });
});

// popular products scroll side animation

document.addEventListener("DOMContentLoaded", function () {
    const boxes = document.querySelectorAll(
        ".pp-pdcs .pp-cont .prdcts-ctg-box .box"
    );

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.4,
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    boxes.forEach((box) => {
        observer.observe(box);
    });
});

// countdown box side (countdown-box)

let time = {
    hours: 2,
    minutes: 18,
    seconds: 46,
};

const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

const animateUpClass = "animate-up";
const animateDownClass = "animate-down";

function updateCountdown() {
    animateNumberChange(hoursElement, time.hours);
    animateNumberChange(minutesElement, time.minutes);
    animateNumberChange(secondsElement, time.seconds);

    if (time.seconds > 0) {
        time.seconds--;
    } else {
        if (time.minutes > 0) {
            time.minutes--;
            time.seconds = 59;
        } else {
            if (time.hours > 0) {
                time.hours--;
                time.minutes = 59;
                time.seconds = 59;
            }
        }
    }
}

function animateNumberChange(element, newValue) {
    const currentValue = parseInt(element.textContent);

    if (currentValue !== newValue) {
        element.classList.add(animateUpClass);

        setTimeout(() => {
            element.textContent = newValue;
            element.classList.add(animateDownClass);

            setTimeout(() => {
                element.classList.remove(animateUpClass);
                element.classList.remove(animateDownClass);
            }, 500);
        }, 500);
    }
}

setInterval(updateCountdown, 1000);

// company card side scroll top 

document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll(".box"); 
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible"); 
                observer.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.1 });
    
    boxes.forEach(box => observer.observe(box)); 
});

// Hot deals side countdown (ht-dels-sd)

let countdownTimeDeals = {
    hours: 23,
    minutes: 34,
    seconds: 57,
};

const countdownElementsDeals = {
    days: document.getElementById("days-deals"),
    hours: document.getElementById("hours-deals"),
    minutes: document.getElementById("minutes-deals"),
    seconds: document.getElementById("seconds-deals"),
};

const countdownAnimateUpClassDeals = "deals-animate-up";
const countdownAnimateDownClassDeals = "deals-animate-down";

function updateCountdownDeals() {
    updateElementCountdownDeals(countdownElementsDeals.hours, countdownTimeDeals.hours);
    updateElementCountdownDeals(countdownElementsDeals.minutes, countdownTimeDeals.minutes);
    updateElementCountdownDeals(countdownElementsDeals.seconds, countdownTimeDeals.seconds);

    if (countdownTimeDeals.seconds > 0) {
        countdownTimeDeals.seconds--;
    } else {
        if (countdownTimeDeals.minutes > 0) {
            countdownTimeDeals.minutes--;
            countdownTimeDeals.seconds = 59;
        } else {
            if (countdownTimeDeals.hours > 0) {
                countdownTimeDeals.hours--;
                countdownTimeDeals.minutes = 59;
                countdownTimeDeals.seconds = 59;
            }
        }
    }
}

function updateElementCountdownDeals(element, newValue) {
    const currentValue = parseInt(element.textContent);

    if (currentValue !== newValue) {
        element.classList.add(countdownAnimateUpClassDeals);

        setTimeout(() => {
            element.textContent = newValue < 10 ? `0${newValue}` : newValue;

            element.classList.remove(countdownAnimateUpClassDeals);
            element.classList.add(countdownAnimateDownClassDeals);

            setTimeout(() => {
                element.classList.remove(countdownAnimateDownClassDeals);
            }, 500); 
        }, 500); 
    }
}

setInterval(updateCountdownDeals, 1000);

// hot deals box scroll side 

window.addEventListener("scroll", function() {
    const bigBox = document.querySelector(".big-box");
    const smallBoxes = document.querySelectorAll(".small-box");
  
    const windowHeight = window.innerHeight;
    

    const bigBoxRect = bigBox.getBoundingClientRect();
    if (bigBoxRect.top <= windowHeight && bigBoxRect.bottom >= 0) {
      bigBox.classList.add("visible");
    } else {
      bigBox.classList.remove("visible");
    }
  

    smallBoxes.forEach(function(smallBox) {
      const smallBoxRect = smallBox.getBoundingClientRect();
      if (smallBoxRect.top <= windowHeight && smallBoxRect.bottom >= 0) {
        smallBox.classList.add("visible");
      } else {
        smallBox.classList.remove("visible");
      }
    });
  });
  
  
// Featured Products Swiper Side 

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 5,               
    spaceBetween: 0,                 
    loop: true,                     
    autoplay: {
        delay: 4000,                 
        disableOnInteraction: false, 
    },
    slidesPerGroup: 1,               
    pagination: {
        el: '.swiper-pagination-ft', 
        clickable: true, 
    },
    breakpoints: {
        1200: {
            slidesPerView: 5          
        },
        1024: {
            slidesPerView: 3          
        },
        768: {
            slidesPerView: 3         
        },
        480: {
            slidesPerView: 2          
        },
        425: {
            slidesPerView: 1          
        }
    }
});

function togglePaginationVisibility() {
    const windowWidth = window.innerWidth;
    const pagination = document.querySelector('.swiper-pagination-ft');
    
    // Pagination sadece 425px ve daha küçük ekranlarda görünsün
    if (windowWidth <= 425) {
        pagination.style.display = 'block'; 
    } else {
        pagination.style.display = 'none'; 
    }
}

// Sayfa yüklendiğinde ve pencere boyutu değiştiğinde fonksiyonu çağır
window.addEventListener('load', togglePaginationVisibility);
window.addEventListener('resize', togglePaginationVisibility);



// swiper side latest news 

const swiperWrapperNew = document.querySelector('.swiper-container-lt .swiper-wrapper');
const swiperSlidesOld = document.querySelectorAll('.swiper-container-lt .swiper-slide');

swiperSlidesOld.forEach((slide) => {
  const clone = slide.cloneNode(true);
  swiperWrapperNew.appendChild(clone);
});

var swiperLt = new Swiper('.swiper-container-lt', {
    slidesPerView: 3,                
    spaceBetween: 10,                 
    loop: true,                       
    autoplay: {
        delay: 4000,                  
        disableOnInteraction: false,  
    },
    slidesPerGroup: 1,                
    pagination: {
        el: '.swiper-pagination-lt', 
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next-lt',  
        prevEl: '.swiper-button-prev-lt'   
    },
    breakpoints: {
        1200: {
            slidesPerView: 3
        },
        1024: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 2
        },
        425: {
            slidesPerView: 1
        }
    }
});

function togglePaginationVisibility() {
    const windowWidth = window.innerWidth;
    const pagination = document.querySelector('.swiper-pagination-lt');
    
    if (windowWidth <= 425) {
        pagination.style.display = 'block'; 
    } else {
        pagination.style.display = 'none'; 
    }
}

window.addEventListener('load', togglePaginationVisibility);
window.addEventListener('resize', togglePaginationVisibility);


// client testimonilas swiper side 

const swiperWrapperNews = document.querySelector('.swiper-container-cl .swiper-wrapper');
const swiperSlidesOlds = document.querySelectorAll('.swiper-container-cl .swiper-slide');

swiperSlidesOlds.forEach((slide, index) => {
    if (index < 3) {  
        const clone = slide.cloneNode(true);
        swiperWrapperNews.appendChild(clone);
    }
});

var swiperCl = new Swiper('.swiper-container-cl', {
    slidesPerView: 3, 
    spaceBetween: 20, 
    loop: true,       
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    slidesPerGroup: 1,
    navigation: {
        nextEl: '.right-btn a',
        prevEl: '.left-btn a'
    },
    pagination: {
        el: '.swiper-pagination-cl',
        clickable: true,
    },
    breakpoints: {
        1200: {
            slidesPerView: 3
        },
        1024: {
            slidesPerView: 3
        },
        768: {
            slidesPerView: 3
        },
        425: {
            slidesPerView: 1,
            onInit: function () {
                document.querySelector('.swiper-pagination-cl').style.display = 'block';
            }
        }
    }
});

function togglePaginationVisibility() {
    const windowWidth = window.innerWidth;
    const pagination = document.querySelector('.swiper-pagination-cl');
    
    if (windowWidth <= 425) {
        pagination.style.display = 'block'; 
    } else {
        pagination.style.display = 'none'; 
    }
}

window.addEventListener('load', togglePaginationVisibility);
window.addEventListener('resize', togglePaginationVisibility);










