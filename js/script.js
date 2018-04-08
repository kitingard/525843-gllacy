      var feedback = document.querySelector(".feedback-btn");
      var popup = document.querySelector(".modal-form");
      var close = popup.querySelector(".modal-close-btn");
      var overlay = document.querySelector(".modal-overlay");
      var form = popup.querySelector("form");
      var login = popup.querySelector("[name=name-for-feedback]");
      var email = popup.querySelector("[name=email-for-feedback]");
      var emailKey = localStorage.getItem("email");
      var slide1 = document.querySelector(".slide-btn1");
      var slide2 = document.querySelector(".slide-btn2");
      var slide3 = document.querySelector(".slide-btn3");
      var body = document.querySelector("body");

      var isStorageSupport = true;
      var loginKey = "";
      var emailKey = "";
  
      try {
          loginKey = localStorage.getItem("login");
      } catch (err) {
          isStorageSupport = false;
      }

      feedback.addEventListener("click", function(evt) {
          evt.preventDefault();
          popup.classList.add("modal-show");
          overlay.classList.add("overlay-show");
          if (loginKey) {
            login.value = loginKey;
            email.focus();
          } else {
            login.focus();
          }
          if (emailKey) {
            email.value = emailKey;
          } 
      });

      form.addEventListener("submit", function(evt) {
        if (!login.value || !email.value) {
          evt.preventDefault();
          popup.classList.remove("modal-error");
          popup.offsetWidth = popup.offsetWidth;
          popup.classList.add("modal-error");
        } else {
            if (isStorageSupport) {
              localStorage.setItem("login", login.value);
              localStorage.setItem("email", email.value);
            }
        }
      });

      window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
          if (popup.classList.contains("modal-show")) {
            evt.preventDefault();
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error");
            overlay.classList.remove("overlay-show");
          }
        }
      });

      close.addEventListener("click", function(evt) {
          evt.preventDefault();
          popup.classList.remove("modal-show");
          overlay.classList.remove("overlay-show");
      });

      slide1.addEventListener("click", function(evt) {
          evt.preventDefault();
          body.classList.remove("slide2-active");
          body.classList.remove("slide3-active");
          body.classList.add("slide1-active");
      });

      slide1.addEventListener("click", function(evt) {
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
      });

      slide2.addEventListener("click", function(evt) {
          evt.preventDefault();
          body.classList.remove("slide1-active");
          body.classList.remove("slide3-active");
          body.classList.add("slide2-active");
      });

      slide2.addEventListener("click", function(evt) {
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
      });

      slide3.addEventListener("click", function(evt) {
          evt.preventDefault();
          body.classList.remove("slide2-active");
          body.classList.remove("slide1-active");
          body.classList.add("slide3-active");
      });

      slide3.addEventListener("click", function(evt) {
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
      });