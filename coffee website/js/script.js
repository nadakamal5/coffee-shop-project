// <!-- slider -->

var slider_img = document.querySelector(".slider-img");
var img = ["about-img.jpeg", "home-img.jpeg", "blog-2.jpeg", "blog-3.jpeg"];
var i = 0;
var myInterval;
function prev() {
  if (i <= 0) i = img.length;
  i--;
  return setImg();
}

function next() {
  if (i >= img.length - 1) i = -1;
  i++;
  return setImg();
}

function setImg() {
  return slider_img.setAttribute("src", "images/" + img[i]);
}

// <!-- end slider -->





// contact us

var name_input = document.querySelector(".input_name");
var email_input = document.querySelector(".input_email");
var phone_input = document.querySelector(".input_phone");
var btn = document.querySelector(".submitBtn");
// var input = document.getElementsByClassName("input");


function nameFunc() {
    if (name_input.value.length < 2) {
        name_input.style.border = "2px solid red";
        p_name.style.display = "block";
    } else {
        name_input.style.border = "2px solid blue";
        p_name.style.display = "none";

    };
};

name_input.addEventListener("blur", function nameFunc() {
    if (name_input.value.length < 10) {
        name_input.style.border = "2px solid red";
        p_name.style.display = "block";
    } else {
        name_input.style.border = "2px solid blue";
        p_name.style.display = "none";

    };
});
email_input.addEventListener("blur", function () {
    if (email_input.value.length < 10) {
        email_input.style.border = "2px solid red";
        p_name1.style.display = "block";
    } else {
        email_input.style.border = "2px solid blue";
        p_name1.style.display = "none";

    };
});

phone_input.addEventListener("blur", function () {
    if (phone_input.value.length < 11) {
        phone_input.style.border = "2px solid red";
        p_name2.style.display = "block";
    } else {
        phone_input.style.border = "2px solid blue";
        p_name2.style.display = "none";

    };
});






btn.addEventListener("click", function (e) {
    e.preventDefault()
    if (phone_input.value == 0, name_input.value == 0, email_input.value == 0) {
        p_name.style.display = "block";
        p_name1.style.display = "block";
        p_name2.style.display = "block";
        p_name3.style.display = "block";


    } else {
        btn.style.backgroundColor = "green";
    }
});
// end
