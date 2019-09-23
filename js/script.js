let slideIndex= 0;
slideShow()
// function slideShow(){
//     let slides = document.getElementsByClassName("image-slide");
//     for (let i = 0; i< slides.length; i++){
//         slides[i].style.display= "none ";
//     }

//     slideIndex++;

//     if (slideIndex > slides.length){
//         slideIndex = 1;
//     }
//     slides[slideIndex - 1 ].style.display ="block";
    
//     setTimeout(slideShow, 3000);
// }

// function slideShow(){
//     let slides = document.getElementsByClassName("image-slide");
//     let i;
//     while ( i < slides.length){
//         i = 0;
//         i = i + 1 ;
//         slides[i].style.display = "none ";
//     }
//     slideIndex++;
    
//     if(slideIndex > slides.length) {
//         slideIndex= 1;
    
//     }
//     slides[slideIndex - 1].style.display= "block";
//     setTimeout(slideShow, 3000)
// }
function slideShow(){
    let slides = document.getElementsByClassName("image-slide");
    for (let i = 0; i < slides.length; i+= 1){
        slides[i].style.display = "none";
    }
    slideIndex++;
    if ( slideIndex > slides.length){
        slideIndex=1
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(slideShow, 3000);
}

