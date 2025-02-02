// This is to select the menu button and menu
const menuButton = document.querySelector(".menu");
const nav = document.querySelector(".nav"); // FIXED: Selecting `.nav` instead of `nav`

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
        nav.classList.add("hide"); // FIXED: `classList` instead of `classlist`
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
  
// Event handler for gallery images
function viewHandler(event){
    const imgElement = event.target;  // Get the clicked image
    const src = imgElement.src.split("-")[0] + "-full.jpeg";  // Create the full-size image path
  
    // Insert the modal content into the page
    document.body.insertAdjacentHTML("afterbegin", viewerTemplate(src, imgElement.alt));
  
    // Add event listener to the close button
    const closeButton = document.querySelector(".close-viewer");
    closeButton.addEventListener("click", closeViewer);
}
  
// Close the modal
function closeViewer(){
    const viewer = document.querySelector(".viewer");
    if (viewer) {
        viewer.remove();  // Remove the viewer modal from the DOM
    }
}
  
// Add event listener to the gallery for clicks on images
const gallery = document.querySelector(".gallery");
gallery.addEventListener("click", function (event) {
    if (event.target.tagName === "IMG") {
        viewHandler(event);
    }
});
