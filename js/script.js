// 1. Change text
function textChange1(){
    document.getElementById('tt_h3').innerHTML="Hello World"
}

// 2. bulb on/off
function bulbOn(){
    document.getElementById('img').src="image/pic_bulbon.gif";
}
function bulbOff(){
    document.getElementById('img').src="image/pic_bulboff.gif";
}

// 3. Show Data
function showDate(){
    document.getElementById('sd').innerHTML=Date();
}

// 4. Text Change
function textChange(){
    document.getElementById('t_h3').innerHTML="Hello";
}

// 5. Show result
var numben1 = 5;
var numben2 = 3;

var result = numben1 + numben2;

function showResult(){
    document.getElementById('result').innerHTML=result;
}

// 6. Show/Hide
$(document).ready(function(){
    $('#btnShow').on('click', function(){
        $('#sh_h3').show("slow");
    });

    $( '#btnHide' ).on( 'click', function() {
        $('#sh_h3').hide( 1000 );
    });

    // 7. Show Alert
    $('#btn').click(function(){
        alert("welcome");
    });
});

// 08. Checked Selector
var countChecked = function(){
    var n = $('.c_check:checked').length;
    $('#c_check').text(n + (n === 1 ? ' is':' are') + ' checked!');
};
countChecked();
$('input[type=checkbox]').on('click', countChecked);

// 09. Radio
$('.c_fruit').on('click', function(){
    $('#log').html($('.c_fruit:checked').val()+' is checked!');
});

// 10.  Define the lengths of the three sides of a triangle
var side1 = 5; 
var side2 = 6; 
var side3 = 7; 

// Calculate the semi-perimeter of the triangle
var s = (side1 + side2 + side3) / 2;

// Use Heron's formula to calculate the area of the triangle
var area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));

// Log the calculated area to the console
// console.log(area);

function showTriangle(){
    document.getElementById('triangle').innerHTML=area;
};


// 11. Change Color
function changeColor() {
    document.getElementById("text-color").style.color = "red";
};


// 12. Change Status
document.getElementById("btn-post").addEventListener("click", function () {
    const post = document.getElementById("post-text");
    const postText = document.getElementById("post-text").value;
    const defaultPost = document.getElementById("default-post");
    defaultPost.innerText = postText;
    post.value = "";
});

// 13. Post new comment
document
.getElementById("btn-new-comment")
.addEventListener("click", function () {
    const post = document.getElementById("new-comment");
    const newPost = post.value;

    const commentContainer = document.getElementById("comment-container");
    const pTag = document.createElement("p");
    // pTag.innerText = newPost;
    pTag.innerHTML = `
        <p class="fs-4 mb-0">${newPost}</p>
    `;
    commentContainer.appendChild(pTag);
    post.value = "";
});

// 14. Border Radius
function imageBorder() {
    document.getElementById("img-border").style.borderRadius = "50px";
};

// 15. Word Reverse
function wordReverse() {
    document.getElementById("word-reverse").innerText = document
    .getElementById("word-reverse")
    .innerText.split("")
    .reverse()
    .join("");
};


// 16. Even odd
document.getElementById("even-or-odd").addEventListener("click", function () {
    const number = parseFloat(document.getElementById("num-40").value);
    
    if (isNaN(number)) {
        return alert("Please in a valid number.");
    }

    if (number % 2 == 0) {
        return (document.getElementById("p_16").innerText = "Even");
    }
    else {
        return (document.getElementById("p_16").innerText = "Odd");
    }
});

  // 17. Leap Year
document.getElementById("leap-yr").addEventListener("click", function () {
    const year = parseInt(document.getElementById("num-41").value);

    if (isNaN(year)) {
        return alert("Please in a valid number.");
    }

    if (year % 4 == 0 && year % 100 !== 0) {
        document.getElementById("p_17").innerText = "Leap Year";
        return;
    }
    else if (year % 400 == 0) {
        document.getElementById("p_17").innerText = "Leap Year";
        return;
    }
    else {
        document.getElementById("p_17").innerText = "Not Leap Year";
        return;
    }
});

// 18. Dark/light mode
function modeChange(){
    const element = document.body;
    element.classList.toggle("dark-mode");
};