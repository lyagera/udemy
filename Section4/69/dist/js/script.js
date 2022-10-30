"use strict";
// /******/ (function (modules) {
//   // webpackBootstrap
//   /******/ // The module cache
//   /******/ var installedModules = {};
//   /******/
//   /******/ // The require function
//   /******/ function __webpack_require__(moduleId) {
//     /******/
//     /******/ // Check if module is in cache
//     /******/ if (installedModules[moduleId]) {
//       /******/ return installedModules[moduleId].exports;
//       /******/
//     }
//     /******/ // Create a new module (and put it into the cache)
//     /******/ var module = (installedModules[moduleId] = {
//       /******/ i: moduleId,
//       /******/ l: false,
//       /******/ exports: {},
//       /******/
//     });
//     /******/
//     /******/ // Execute the module function
//     /******/ modules[moduleId].call(
//       module.exports,
//       module,
//       module.exports,
//       __webpack_require__
//     );
//     /******/
//     /******/ // Flag the module as loaded
//     /******/ module.l = true;
//     /******/
//     /******/ // Return the exports of the module
//     /******/ return module.exports;
//     /******/
//   }
//   /******/
//   /******/
//   /******/ // expose the modules object (__webpack_modules__)
//   /******/ __webpack_require__.m = modules;
//   /******/
//   /******/ // expose the module cache
//   /******/ __webpack_require__.c = installedModules;
//   /******/
//   /******/ // define getter function for harmony exports
//   /******/ __webpack_require__.d = function (exports, name, getter) {
//     /******/ if (!__webpack_require__.o(exports, name)) {
//       /******/ Object.defineProperty(exports, name, {
//         enumerable: true,
//         get: getter,
//       });
//       /******/
//     }
//     /******/
//   };
//   /******/
//   /******/ // define __esModule on exports
//   /******/ __webpack_require__.r = function (exports) {
//     /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
//       /******/ Object.defineProperty(exports, Symbol.toStringTag, {
//         value: "Module",
//       });
//       /******/
//     }
//     /******/ Object.defineProperty(exports, "__esModule", { value: true });
//     /******/
//   };
//   /******/
//   /******/ // create a fake namespace object
//   /******/ // mode & 1: value is a module id, require it
//   /******/ // mode & 2: merge all properties of value into the ns
//   /******/ // mode & 4: return value when already ns object
//   /******/ // mode & 8|1: behave like require
//   /******/ __webpack_require__.t = function (value, mode) {
//     /******/ if (mode & 1) value = __webpack_require__(value);
//     /******/ if (mode & 8) return value;
//     /******/ if (
//       mode & 4 &&
//       typeof value === "object" &&
//       value &&
//       value.__esModule
//     )
//       return value;
//     /******/ var ns = Object.create(null);
//     /******/ __webpack_require__.r(ns);
//     /******/ Object.defineProperty(ns, "default", {
//       enumerable: true,
//       value: value,
//     });
//     /******/ if (mode & 2 && typeof value != "string")
//       for (var key in value)
//         __webpack_require__.d(
//           ns,
//           key,
//           function (key) {
//             return value[key];
//           }.bind(null, key)
//         );
//     /******/ return ns;
//     /******/
//   };
//   /******/
//   /******/ // getDefaultExport function for compatibility with non-harmony modules
//   /******/ __webpack_require__.n = function (module) {
//     /******/ var getter =
//       module && module.__esModule
//         ? /******/ function getDefault() {
//             return module["default"];
//           }
//         : /******/ function getModuleExports() {
//             return module;
//           };
//     /******/ __webpack_require__.d(getter, "a", getter);
//     /******/ return getter;
//     /******/
//   };
//   /******/
//   /******/ // Object.prototype.hasOwnProperty.call
//   /******/ __webpack_require__.o = function (object, property) {
//     return Object.prototype.hasOwnProperty.call(object, property);
//   };
//   /******/
//   /******/ // __webpack_public_path__
//   /******/ __webpack_require__.p = "";
//   /******/
//   /******/
//   /******/ // Load entry module and return exports
//   /******/ return __webpack_require__(
//     (__webpack_require__.s = "./src/js/main.js")
//   );
//   /******/
// })(
//   /************************************************************************/
//   /******/ {
//     /***/ "./src/js/main.js":
//       /*!************************!*\
//   !*** ./src/js/main.js ***!
//   \************************/
//       /*! no static exports found */
//       /***/ function (module, exports) {
//         /***/
//       },

//     /******/
//   }
// );
// //# sourceMappingURL=script.js.map
// Tabs
window.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tabheader__item"),
        tabsContent = document.querySelectorAll(".tabcontent"),
        tabsParent = document.querySelector(".tabheader__items");
    function hideTabContent() {
        tabsContent.forEach((item) => {
            item.style.display = "none";
        });
        tabs.forEach((item) => {
            item.classList.remove("tabheader__item_active");
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].style.display = "block";
        tabs[i].classList.add("tabheader__item_active");
    }
    hideTabContent();
    showTabContent();

    tabsParent.addEventListener("click", (event) => {
        const target = event.target;
        if (target && target.classList.contains("tabheader__item")) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    // Timer

    const deadLine = "2024-11-21";

    function getTimeRemaining(endtime) {
        let days, hours, minutes, seconds;
        const t = Date.parse(endtime) - Date.parse(new Date());
        if (t <= 0) {
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
        } else {
            days = Math.floor(t / (1000 * 60 * 60 * 24));
            hours = Math.floor((t / (1000 * 60 * 60)) % 24);
            minutes = Math.floor((t / (1000 * 60)) % 60);
            seconds = Math.floor((t / 1000) % 60);
        }
        return {
            total: t,
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds,
        };
    }
    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }
    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector("#days"),
            hours = timer.querySelector("#hours"),
            minutes = timer.querySelector("#minutes"),
            seconds = timer.querySelector("#seconds"),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);
            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }
    setClock(".timer", deadLine);

    //--------------------------------
    // Modal

    const modalTrigger = document.querySelectorAll("[data-modal]"),
        modal = document.querySelector(".modal");
    // modalCloseBtn = document.querySelector("[data-close]");
    // console.log(modalTrigger);
    // console.log(modal);
    // console.log(modalCloseBtn);

    modalTrigger.forEach((btn) => {
        btn.addEventListener("click", openModal);
    });

    function openModal() {
        modal.classList.add("show");
        modal.classList.remove("hide");
        document.body.style.overflow = "hidden";
        clearInterval(modalTimerId);
    }

    function closeModal() {
        modal.classList.add("hide");
        modal.classList.remove("show");
        document.body.style.overflow = "";
    }
    // modalCloseBtn.addEventListener("click", closeModal);
    modal.addEventListener("click", (e) => {
        if (e.target === modal || e.target.getAttribute("data-close") == "") {
            closeModal();
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.code === "Escape" && modal.classList.contains("show")) {
            closeModal();
        }
    });

    const modalTimerId = setTimeout(openModal, 50000);

    function showModalByScroll() {
        if (
            window.pageYOffset + document.documentElement.clientHeight >=
            document.documentElement.scrollHeight - 1
        ) {
            openModal();
            window.removeEventListener("scroll", showModalByScroll);
        }
    }
    window.addEventListener("scroll", showModalByScroll);
    //---------------
    // Clases
    //---------------

    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.changeToUAH();
        }

        changeToUAH() {
            this.price = this.price * this.transfer;
        }
        render() {
            const element = document.createElement("div");
            if (this.classes.length === 0) {
                this.element = "menu__item";
                element.classList.add(this.element);
            } else {
                this.classes.forEach((className) =>
                    element.classList.add(className)
                );
            }
            element.innerHTML = `
                  <img src=${this.src} alt=${this.alt}>
                  <h3 class="menu__item-subtitle">${this.title}</h3>
                  <div class="menu__item-descr">${this.descr}</div>
                  <div class="menu__item-divider"></div>
                  <div class="menu__item-price">
                      <div class="menu__item-cost">Цена:</div>
                      <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                  </div>
              `;
            this.parent.append(element);
        }
    }
    const getResurse = async (url) => {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error();
        }
        return await res.json(`Could not ${url}, status: ${res.status}`);
    };
    //---------------------------next
    // getResurse("http://localhost:3000/menu").then((data) => {
    //     data.forEach(({ img, altimg, title, descr, price }) => {
    //         new MenuCard(
    //             img,
    //             altimg,
    //             title,
    //             descr,
    //             price,
    //             ".menu .container"
    //         ).render();
    //     });
    // });
    //-----------------------next metod
    //     getResurse("http://localhost:3000/menu").then((data) => createCard(data));
    //     function createCard(data) {
    //         data.forEach(({ img, altimg, title, descr, price }) => {
    //             const element = document.createElement("div");
    //             price *= 27;
    //             element.classList.add("menu__item");
    //             element.innerHTML = `<img src=${img} alt=${altimg}>
    // <h3 class="menu__item-subtitle">${title}</h3>
    // <div class="menu__item-descr">${descr}</div>
    // <div class="menu__item-divider"></div>
    // <div class="menu__item-price">
    //     <div class="menu__item-cost">Цена:</div>
    //     <div class="menu__item-total"><span>${price}</span> грн/день</div>
    // </div>`;
    //             document.querySelector(".menu .container").append(element);
    //         });
    //     }
    //-----------------------next axios
    axios.get("http://localhost:3000/menu").then((data) => {
        data.data.forEach(({ img, altimg, title, descr, price }) => {
            new MenuCard(
                img,
                altimg,
                title,
                descr,
                price,
                ".menu .container"
            ).render();
        });
    });
    //-----------------------next
    // new MenuCard(
    //     "img/tabs/vegy.jpg",
    //     "vegy",
    //     'Меню "Фитнес"',
    //     'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов.
    //  Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    //     9,
    //     ".menu .container"
    // ).render();

    // new MenuCard(
    //     "img/tabs/elite.jpg",
    //     "elite",
    //     "Меню “Премиум”",
    //     "В меню “ Премиум ” мы используем не только красивый дизайн упаковки,
    // но и качественное исполнение блюд.  Красная рыба,  морепродукты , фрукты -
    //  ресторанное меню без похода в ресторан!",
    //     15,
    //     ".menu .container",
    //     "menu__item"
    // ).render();

    // new MenuCard(
    //     "img/tabs/post.jpg",
    //     "post",
    //     'Меню "Постное"',
    //     "Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов
    //  животного происхождения, молоко из миндаля, овса, кокоса или гречки,
    //  правильное количество белков за счет тофу и импортных вегетарианских стейков.",
    //     21,
    //     ".menu .container",
    //     "menu__item"
    // ).render();
    //Forms

    const forms = document.querySelectorAll("form");
    const message = {
        loading: "img/form/spinner.svg",
        succes: "thank",
        failure: "error",
    };
    forms.forEach((item) => {
        bindPostData(item);
    });
    const postData = async (url, data) => {
        const res = await fetch(url, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: data,
        });
        return await res.json();
    };
    function bindPostData(form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const statusMessage = document.createElement("img");
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
            display: block;
            margin: 0 auto;
            `;
            // form.append(statusMessage);
            form.insertAdjacentElement("afterend", statusMessage);

            // const request = new XMLHttpRequest();
            // request.open("POST", "server.php");
            //--------------Text(no JSON)

            // const formData = new FormData(form);

            // request.send(formData);
            //-------------JSON
            // request.setRequestHeader("Content-type", "application/json");
            const formData = new FormData(form);
            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            // const object = {};
            // formData.forEach(function (value, key) {
            //     object[key] = value;
            // });
            // const json = JSON.stringify(object);
            // fetch("server.php", {
            //     method: "POST",
            //     headers: {
            //         "Content-type": "application/json",
            //     },
            //     body: JSON.stringify(object),
            // });
            postData("http://localhost:3000/requests", json)
                .then((data) => {
                    console.log(data);
                    showThanksModal(message.succes);

                    statusMessage.remove();
                })
                .catch(() => {
                    showThanksModal(message.failure);
                })
                .finally(() => {
                    form.reset();
                });
            // request.send(json);
            //-----------------
            // request.addEventListener("load", () => {
            //     if (request.status === 200) {
            //         console.log(request.response);
            //         showThanksModal(message.succes);
            //         form.reset();

            //         statusMessage.remove();
            //     } else {
            //         showThanksModal(message.failure);
            //     }
            // });
        });
    }
    function showThanksModal(message) {
        const prevModalDialog = document.querySelector(".modal__dialog");
        prevModalDialog.classList.add("hide");
        openModal();
        const thanksModal = document.createElement("div");
        thanksModal.classList.add("modal__dialog");
        thanksModal.innerHTML = `
        <div class="modal__content">
            <div class="modal__close" data-close>&times;</div>
            <div class="modal__title">${message}</div>
        </div> `;
        document.querySelector(".modal").append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add("show");
            prevModalDialog.classList.remove("hide");
            closeModal();
        }, 4000);
    }
    fetch("http://localhost:3000/menu")
        .then((data) => data.json())
        .then((res) => console.log(res));

    // fetch("https://jsonplaceholder.typicode.com/posts", {
    //     method: "POST",
    //     body: JSON.stringify({ name: "Alex" }),
    //     headers: { "content-type": "application/json" },
    // })
    //     .then((response) => response.json())
    //     .then((json) => console.log(json));

    // Slider
    const slides = document.querySelectorAll(".offer__slide"),
        slider = document.querySelector(".offer__slider"),
        prev = document.querySelector(".offer__slider-prev"),
        next = document.querySelector(".offer__slider-next"),
        total = document.querySelector("#total"),
        current = document.querySelector("#current");
    let slideIndex = 1;
    let offset = 0;
    // showSlides(slideIndex);
    // if (slides.length < 10) {
    //     total.textContent = `0${slides.length}`;
    // } else {
    //     total.textContent = slides.length;
    // }
    // function showSlides(n) {
    //     if (n > slides.length) {
    //         slideIndex = 1;
    //     }
    //     if (n < 1) {
    //         slideIndex = slides.length;
    //     }
    //     slides.forEach((item) => (item.style.display = "none"));
    //     slides[slideIndex - 1].style.display = "block";
    //     if (slides.length < 10) {
    //         current.textContent = `0${slideIndex}`;
    //     } else {
    //         current.textContent = slideIndex;
    //     }
    // }
    // function plusSlides(n) {
    //     showSlides((slideIndex += n));
    // }
    // prev.addEventListener("click", () => {
    //     plusSlides(-1);
    // });
    // next.addEventListener("click", () => {
    //     plusSlides(1);
    // });

    //---------------------Slider 2
    const slidesWrapper = document.querySelector(".offer__slider-wrapper"),
        slidesField = document.querySelector(".offer__slider-inner"),
        width = window.getComputedStyle(slidesWrapper).width;
    const current0 = () => {
        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }
    };
    current0();
    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
    } else {
        total.textContent = slides.length;
    }
    slidesField.style.width = 100 * slides.length + "%";
    slidesField.style.display = "flex";
    slidesField.style.transition = "0.5s all";
    slidesWrapper.style.overflow = "hidden";
    slides.forEach((slide) => {
        slide.style.width = width;
    });
    slider.style.position = "relative";
    const indicators = document.createElement("ol"),
        dots = [];
    indicators.classList.add("carousel-indicators");
    indicators.style.cssText = `position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 15;
    display: flex;
    justify-content: center;
    margin-right: 15%;
    margin-left: 15%;
    list-style: none;`;
    slider.append(indicators);
    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement("li");
        dot.setAttribute("data-slide-to", i + 1);
        dot.style.cssText = `box-sizing: content-box;
        flex: 0 1 auto;
        width: 30px;
        height: 6px;
        margin-right: 3px;
        margin-left: 3px;
        cursor: pointer;
        background-color: #fff;
        background-clip: padding-box;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        opacity: 0.5;
        transition: opacity 0.6s ease;`;
        if (i == 0) {
            dot.style.opacity = 1;
        }
        indicators.append(dot);
        dots.push(dot);
    }
    const dotOpasity = () => {
        dots.forEach((dot) => (dot.style.opacity = ".5"));
        dots[slideIndex - 1].style.opacity = 1;
    };

    function deleteNotDigits(str) {
        return +str.replace(/\D/g, "");
    }
    next.addEventListener("click", () => {
        //-------------------
        if (offset == deleteNotDigits(width) * (slides.length - 1)) {
            //'500px
            offset = 0;
        } else {
            offset += deleteNotDigits(width);
        }
        slidesField.style.transform = `translateX(-${offset}px)`;
        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }
        current0();
        dotOpasity();
    });
    prev.addEventListener("click", () => {
        //-------------------
        if (offset == 0) {
            //'500px
            offset = deleteNotDigits(width) * (slides.length - 1);
        } else {
            offset -= deleteNotDigits(width);
        }
        slidesField.style.transform = `translateX(-${offset}px)`;
        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }
        current0();
        dotOpasity();
    });
    dots.forEach((dot) => {
        dot.addEventListener("click", (e) => {
            const slideTo = e.target.getAttribute("data-slide-to");
            slideIndex = slideTo;
            offset = deleteNotDigits(width) * (slideTo - 1);
            slidesField.style.transform = `translateX(-${offset}px)`;
            current0();
            dotOpasity();
        });
    });

    // Calculate

    const result = document.querySelector(".calculating__result span");

    let sex = "female",
        height,
        weight,
        age,
        ratio = 1.275;

    if (localStorage.getItem("sex")) {
        sex = localStorage.getItem("sex");
    } else {
        sex = "female";
        localStorage.setItem("sex", "female");
    }
    if (localStorage.getItem("ratio")) {
        sex = localStorage.getItem("ratio");
    } else {
        sex = "1.375";
        localStorage.setItem("ratio", "1.375");
    }
    function initLocalSettings(selector, activeClass) {
        const elements = document.querySelectorAll(selector);
        elements.forEach((elem) => {
            elem.classList.remove(activeClass);
            if (elem.getAttribute("id") === localStorage.getItem("sex")) {
                elem.classList.add(activeClass);
            }
            if (
                elem.getAttribute("data-ratio") ===
                localStorage.getItem("ratio")
            ) {
                elem.classList.add(activeClass);
            }
        });
    }
    initLocalSettings("#gender div", "calculating__choose-item_active");
    initLocalSettings(
        ".calculating__choose_big div",
        "calculating__choose-item_active"
    );
    function calcTotal() {
        if (!sex || !height || !weight || !age || !ratio) {
            result.textContent = "---- ";
            return;
        }
        if (sex === "female") {
            result.textContent = Math.round(
                ratio * (447.6 + 9.2 * weight + 3.1 * height - 4.3 * age)
            );
        } else {
            result.textContent = Math.round(
                ratio * (88.36 + 13.4 * weight + 4.8 * height - 5.7 * age)
            );
        }
    }
    calcTotal();
    function getStaticInformation(selector, activeClass) {
        const element = document.querySelectorAll(selector);
        element.forEach((elem) => {
            elem.addEventListener("click", (e) => {
                if (e.target.getAttribute("data-ratio")) {
                    ratio = +e.target.getAttribute("data-ratio");
                    localStorage.setItem(
                        "ratio",
                        +e.target.getAttribute("data-ratio")
                    );
                } else {
                    sex = e.target.getAttribute("id");
                    localStorage.setItem("sex", e.target.getAttribute("id"));
                }

                element.forEach((elem) => {
                    elem.classList.remove(activeClass);
                });
                e.target.classList.add(activeClass);
                calcTotal();
            });
        });
    }
    getStaticInformation("#gender div", "calculating__choose-item_active");
    getStaticInformation(
        ".calculating__choose_big div",
        "calculating__choose-item_active"
    );
    function getDynamicInformation(selector) {
        const input = document.querySelector(selector);
        input.addEventListener("input", () => {
            if (input.value.match(/\D/g)) {
                input.style.border = "2px solid red";
            } else {
                input.style.border = "none";
            }
            switch (input.getAttribute("id")) {
                case "height":
                    height = +input.value;
                    break;
                case "weight":
                    weight = +input.value;
                    break;
                case "age":
                    age = +input.value;
                    break;
            }
            calcTotal();
        });
    }
    getDynamicInformation("#height");
    getDynamicInformation("#weight");
    getDynamicInformation("#age");
    //upwork
});
