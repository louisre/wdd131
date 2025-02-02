// This is to select the menu button and menu
const menuButton = document.querySelector(".menu");
const nav = document.querySelector(".nav"); //

// This is to hide the menu by default on small screens
nav.classList.add("hide");

// 
function toggleMenu(){
    nav.classList.toggle("hide");
}

// 
menuButton.addEventListener("click", toggleMenu);

// 
function handleResize(){
    if (window.innerWidth > 1000) {
        nav.classList.remove("hide");
    } else {
        nav.classList.add("hide"); //
    }
}

// This is to call the handleResize function just like in python
handleResize();

// 
window.addEventListener("resize", handleResize);

// 
function viewerTemplate(pic, alt){
    return `<div class="viewer">
      <button class="close-viewer">X</button>
      <img src="${pic}" alt="${alt}">
    </div>`;
}
  
// This is to handle the gallery images
function viewHandler(event){
    const imgElement = event.target;
    const src = imgElement.src.split("-")[0] + "-full.jpeg";
  
    //
    document.body.insertAdjacentHTML("afterbegin", viewerTemplate(src, imgElement.alt));
  
    // 
    const closeButton = document.querySelector(".close-viewer");
    closeButton.addEventListener("click", closeViewer);
}
  
//
function closeViewer(){
    const viewer = document.querySelector(".viewer");
    if (viewer) {
        viewer.remove();
    }
}
  
//
const gallery = document.querySelector(".gallery");
gallery.addEventListener("click", function (event) {
    if (event.target.tagName === "IMG") {
        viewHandler(event);
    }
});
