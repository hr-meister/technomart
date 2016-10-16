window.onload = function() {
    
    // SHOPPING-PANEL ============================================================

    var shoppingPanel = document.querySelector(".brand-bar .shopping-panel");
    var bookmarkIndicator = shoppingPanel.querySelector(".bookmark");
    var cartIndicator = shoppingPanel.querySelector(".cart");

    function backlight (element) {
        var valueEl = element.querySelector("span");
        if (parseInt(valueEl.innerHTML) && !element.classList.contains("not-null")) {
            element.classList.add("not-null");
        } else {
            element.classList.remove("not-null");
        }
    }

    backlight (bookmarkIndicator);
    backlight (cartIndicator);

    // PROMO-SLIDER ================================================================

    // var promoSlider = document.querySelector("main .promo-slider");
    // var photoAlbum = promoSlider.querySelectorAll(".photo-album figure");
    // var prevButton = promoSlider.querySelector(".control-panel .prev");
    // var nextButton = promoSlider.querySelector(".control-panel .next");
    // var indicationPanel = promoSlider.querySelectorAll(".indication-panel li");

    // prevButton.addEventListener("click", function() {
    //     var key = photoAlbum.length;
    //     for (var i = 0; i < key; i++) {
    //         var prev = (i - 1) % key;
    //         prev = (prev < 0) ? prev * (-1) : prev;
    //         if (photoAlbum[i].classList.contains("show")) {
    //             photoAlbum[i].classList.toggle("show");
    //             indicationPanel[i].classList.toggle("highlighted");
    //             photoAlbum[prev].classList.toggle("show");
    //             indicationPanel[prev].classList.toggle("highlighted");
    //             return;
    //         }
    //     }
    // })

    // nextButton.addEventListener("click", function() {
    //     var key = photoAlbum.length;
    //     for (var i = 0; i < key; i++) {
    //         var next = (i + 1) % key;
    //         if (photoAlbum[i].classList.contains("show")) {
    //             photoAlbum[i].classList.toggle("show");
    //             indicationPanel[i].classList.toggle("highlighted");
    //             photoAlbum[next].classList.toggle("show");
    //             indicationPanel[next].classList.toggle("highlighted");
    //             return;
    //         }
    //     }
    // })

    // for (var i = 0, s = indicationPanel.length; i < s; i++) {
    //     indicationPanel[i].addEventListener("click", function(i) {
    //         if (!this.classList.contains("highlighted")) {
    //             var indication = promoSlider.querySelector(".highlighted");
    //             indication.classList.toggle("highlighted");
    //             this.classList.toggle("highlighted");
    //         }
    //         changePhoto();
    //     })
    // }

    // function changePhoto () {
    //     var photo = promoSlider.querySelector(".photo-album figure.show");
    //     photo.classList.toggle("show");
    //     for (var i = 0, s = indicationPanel.length; i < s; i++) {
    //         if (indicationPanel[i].classList.contains("highlighted")) {
    //             photoAlbum[i].classList.toggle("show");
    //             break;
    //         }
    //     }
    // }

    // PROMO-SLIDER v2 ============================================================

    var promoSlider = document.querySelector("main .promo-slider");
    var prevButton = promoSlider.querySelector(".control-panel .prev");
    var nextButton = promoSlider.querySelector(".control-panel .next");
    var indicationPanel = promoSlider.querySelectorAll(".indication-panel li");

    function clickButton (event) {
        event = event || window.event;
        var photoAlbum = promoSlider.querySelectorAll(".photo-album figure");
        var key = photoAlbum.length;
        var i = 0;
        while ((!photoAlbum[i].classList.contains("show")) && (i < key)) {
            i++;
        };
        if (this.classList.contains("next")) {
            var direction = (i + 1) % key;
        } else {
            var direction = (i - 1) % key; // ERROR!!!
            direction = (direction < 0) ? direction * (-1) : direction;
        }
        photoAlbum[i].classList.toggle("show");
        photoAlbum[direction].classList.toggle("show");
        indicationPanel[i].classList.toggle("highlighted");
        indicationPanel[direction].classList.toggle("highlighted");
    }

    function changePhoto () {
        var photo = promoSlider.querySelector(".photo-album .show");
        photo.classList.toggle("show");
        var photoAlbum = promoSlider.querySelectorAll(".photo-album figure");
        for (var i = 0, l = indicationPanel.length; i < l; i++) {
            if (indicationPanel[i].classList.contains("highlighted")) {
                photoAlbum[i].classList.toggle("show");
                break;
            }
        }
    }

    function clickIndicator (event) {
        event = event || window.event;
        if (this.classList.contains("highlighted")) {
            return;
        }
        var i = 0;
        while (!indicationPanel[i].classList.contains("highlighted") && i < l) {
            i++;
        };
        indicationPanel[i].classList.toggle("highlighted");
        this.classList.toggle("highlighted");
        changePhoto();
    }

    prevButton.addEventListener("click", clickButton);
    nextButton.addEventListener("click", clickButton);
    for (var i = 0, l = indicationPanel.length; i < l; i++) {
        indicationPanel[i].addEventListener("click", clickIndicator);
    };

}