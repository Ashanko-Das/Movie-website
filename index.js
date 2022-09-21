let sliders = document.querySelectorAll(".slider-icon");
let moviesLists = document.querySelectorAll(".movie-list-items");

sliders.forEach((slider,i)=>{
    let movieNumber = moviesLists[i].querySelectorAll(".movie-list-item").length;
    let itemsInRow = Math.floor((window.innerWidth -20) / 300);
    console.log(itemsInRow);
    console.log(movieNumber);
    let clickCount = 0;
    slider.addEventListener("click",()=>{
        clickCount++;
        if(movieNumber - (itemsInRow + clickCount)>= 0 ){
     moviesLists[i].style.transform = `translateX(${moviesLists[i].computedStyleMap().get("transform")[0].x.value - 300}px)`;
        }else{
            clickCount = 0;
            moviesLists[i].style.transform = "translateX(0)";
        }
    })
} 
);

let button = document.querySelector(".toggle-button");
let items = document.querySelectorAll(".navbarDiv, .viewMode, .movie-list-title, .movie-list-container");
// console.log(button);
button.addEventListener("click", ()=>{
    items.forEach((item)=>{
        item.classList.toggle("active");
    })
    button.classList.toggle("active");
})
