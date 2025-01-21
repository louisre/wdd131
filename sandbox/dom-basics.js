const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const newImage = document.createElement("img");
newImage.setAttribute("src", "https://picsum.photos/200");
newImage.setAttribute("alt", "Random image from picsum.");
document.body.appendChild(newImage);

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

const newSection = document.createElement("section");
document.body.appendChild(newSection);
newSection.innerHTML = "<h2>DOM Basics</h2>";
const newParagraph2 = document.createElement("p");
newParagraph2.innerText = "This was added through Javascript";
newSection.appendChild(newParagraph2);