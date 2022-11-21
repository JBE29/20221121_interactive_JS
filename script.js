// FUNCTION 1  FOOTER COUNT CLICKS
let clFooter = document.querySelector("footer")
let count =0;
clFooter.addEventListener('click', function(){ count++; console.log("Click account : "+count)});

// FUNCTION 2  BURGER MENU
let navbarHeader = document.querySelector('#navbarHeader');
let burgerMenu = document.querySelector('button.navbar-toggler');
burgerMenu.addEventListener('click', function(){ 
    navbarHeader.classList.toggle("collapse");
    });

// FUNCTION 3 EDIT IN RED
let card1 = document.querySelectorAll('.col-md-4')[0];
    console.log(card1);
let editCard1 = document.querySelectorAll('.btn-outline-secondary')[0];
    console.log(editCard1);
editCard1.addEventListener('click', function () {
    card1.style.color = "red";
    });

// FUNCTION 4 EDIT IN GREEN AND BACK 
let card2 = document.querySelectorAll('.col-md-4')[1];
    console.log(card1);
let editCard2 = document.querySelectorAll('.btn-outline-secondary')[1];
    console.log(editCard2);

editCard2.addEventListener('click', function () {
    if (card2.style.color === 'green'){
        card2.style.color = "black";
        }
        else {
        card2.style.color = "green";
        }
    });
   

// FUNCTION 5  ATTACK THE FUCKING BOOTSTRAP LINK
let clickNav = document.querySelector('header');
clickNav.addEventListener('dblclick', function(){
    if (document.querySelector('link').disabled === true){
        document.querySelector('link').disabled = false
    }
    else {
        document.querySelector('link').disabled = true
    }
});

// FUNCTION 6 HOVER ON CARDS
/*let cardall = document.querySelectorAll('.col-md-4')[2];
let Text = document.querySelectorAll('.card-text')[2];
let Image = document.querySelectorAll('.card-img-top')[2];
let cardStatus = false ;

cardall.addEventListener('mouseover', function () {
    if (cardStatus = false) {
        Text.style.color = "red";
        Image.setAttribute("style", "width:20%");
        cardStatus = true;
    }
    else if (cardStatus = true) {
        Text.style.color = "black";
        Image.setAttribute("style", "width:100%");
        cardStatus = false;
    }
    }); */

// FUNCTION 7

// FUNCTION 8

// FUNCTION 9