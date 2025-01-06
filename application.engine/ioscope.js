const element = document.getElementById("BannerImage1");
const textElement = document.getElementById("textBanner");

element.addEventListener('mouseover', () => {
    element.style.opacity = 0.3;
});

element.addEventListener('mouseout' , () => {
    element.style.opacity = 1.0; 
});

textElement.addEventListener('mouseover', () => {
    element.style.opacity = 0.3;
});

textElement.addEventListener('mouseout' , () => {
    element.style.opacity = 1.0; 
});
