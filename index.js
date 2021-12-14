function showham() {
    document.getElementById("navmenu").style.display = "flex";
}

function hideham() {
    document.getElementById("navmenu").style.display = "none";
}

function showcartlist() {
    document.getElementById("cartt").style.display = "block";
}

function hidecartlist() {
    document.getElementById("cartt").style.display = "none";
}

if (window.matchMedia("(min-width:600px").matches) {
    function hoverin1() {
        document.getElementById("list1").style.borderBottom = "2px solid hsl(26, 100%, 55%) ";
    }

    function hoverout1() {
        document.getElementById("list1").style.borderBottom = "";
    }

    function hoverin2() {
        document.getElementById("list2").style.borderBottom = "2px solid hsl(26, 100%, 55%) ";
    }

    function hoverout2() {
        document.getElementById("list2").style.borderBottom = "";
    }

    function hoverin3() {
        document.getElementById("list3").style.borderBottom = "2px solid hsl(26, 100%, 55%) ";
    }

    function
    hoverout3() {
        document.getElementById("list3").style.borderBottom = "";
    }

    function hoverin4() {
        document.getElementById("list4").style.borderBottom = "2px solid hsl(26, 100%, 55%) ";
    }

    function hoverout4() {
        document.getElementById("list4").style.borderBottom = "";
    }

    function hoverin5() {
        document.getElementById("list5").style.borderBottom = "2px solid hsl(26, 100%, 55%)";
    }

    function hoverout5() {
        document.getElementById("list5").style.borderBottom = "";
    }
}
    // Open the Modal
    function openModal() {
        document.getElementById("myModal").style.display = "block";
    }

    // Close the Modal
    function closeModal() {
        document.getElementById("myModal").style.display = "none";
    }

    var slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("demo");
        var captionText = document.getElementById("caption");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
        captionText.innerHTML = dots[slideIndex - 1].alt;
    }


    function p1() {
        document.getElementById("big").src = "images\/image-product-1.jpg"
    }

    function p2() {
        document.getElementById("big").src = "images\/image-product-2.jpg"
    }

    function p3() {
        document.getElementById("big").src = "images\/image-product-3.jpg"
    }

    function p4() {
        document.getElementById("big").src = "images\/image-product-4.jpg"
    }

var val = 0;

document.getElementById("inp").innerText = val;

function increase() {
    val = val + 1;
    document.getElementById("inp").innerText = val;
}

function decrease() {
    val = val - 1;
    document.getElementById("inp").innerText = val;
}

function showcart() {
    document.getElementById("cartt").style.height = "auto";
    document.getElementById("cartdown1").style.display = "none";
    document.getElementById("cartitem").style.display = "flex";
    document.getElementById("cartitem2").style.display = "flex";
}

function addcart() {

    var dolla = document.getElementById("dollar").innerText;
    var tquant = document.getElementById("inp").innerText;

    document.getElementById("tquantity").innerText = tquant;
    document.getElementById("tprice").innerText = dolla * tquant;
}

function delitem() {
    document.getElementById("cartitem").style.display = "none";
}
