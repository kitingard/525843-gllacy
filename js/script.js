      var feedback = document.querySelector(".feedback-btn");
      var popup = document.querySelector(".modal-form");
      var close = popup.querySelector(".modal-close-btn");
      var overlay = document.querySelector(".modal-overlay");
      var login = popup.querySelector("[name=name-for-feedback]")
      var slide1 = document.querySelector(".slide-btn1");
      var slide2 = document.querySelector(".slide-btn2");
      var slide3 = document.querySelector(".slide-btn3");
      var body = document.querySelector("body");


      feedback.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.add("modal-show");
        login.focus();
      });

      feedback.addEventListener("click", function (evt) {
        evt.preventDefault();
        overlay.classList.add("modal-show");
      });

      close.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.remove("modal-show");
      })

      close.addEventListener("click", function (evt) {
        evt.preventDefault();
        overlay.classList.remove("modal-show");
      })

      slide1.addEventListener("click", function (evt) {
        evt.preventDefault();
        body.classList.remove("slide2-active");
        body.classList.remove("slide3-active");
        body.classList.add("slide1-active");
      })

      slide1.addEventListener("click", function (evt) {
        evt.preventDefault();
        slide1.classList.add("slide-btn-current");
        slide2.classList.contains("slide-btn-current");
        if (slide2) {
          slide2.classList.remove("slide-btn-current");
        }
        slide3.classList.contains("slide-btn-current");
        if (slide3) {
          slide3.classList.remove("slide-btn-current");
        }
      })

      slide2.addEventListener("click", function (evt) {
        evt.preventDefault();
        body.classList.remove("slide1-active");
        body.classList.remove("slide3-active");
        body.classList.add("slide2-active");
      })

      slide2.addEventListener("click", function (evt) {
        evt.preventDefault();
        slide2.classList.add("slide-btn-current");
        slide1.classList.contains("slide-btn-current");
        if (slide1) {
          slide1.classList.remove("slide-btn-current");
        }
        slide3.classList.contains("slide-btn-current");
        if (slide3) {
          slide3.classList.remove("slide-btn-current");
        }
      })

      slide3.addEventListener("click", function (evt) {
        evt.preventDefault();
        body.classList.remove("slide2-active");
        body.classList.remove("slide1-active");
        body.classList.add("slide3-active");
      })

      slide3.addEventListener("click", function (evt) {
        evt.preventDefault();
        slide3.classList.add("slide-btn-current");
        slide1.classList.contains("slide-btn-current");
        if (slide1) {
          slide1.classList.remove("slide-btn-current");
        }
        slide2.classList.contains("slide-btn-current");
        if (slide2) {
          slide2.classList.remove("slide-btn-current");
        }
      })