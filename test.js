const imageURLs = [
    "https://brewupcoffee.co/img/resim1x.jpg",
    "https://brewupcoffee.co/img/resim2x.jpg",
    "https://brewupcoffee.co/img/resim3x.jpg",
    "https://brewupcoffee.co/img/resim4x.jpg",
    "https://brewupcoffee.co/img/resim5x.jpg"
];

let currentIndex = 0;
const imageElement = document.getElementById("image");


const preloadedImages = [];
for (let i = 0; i < images.length; i++) {
    const img = new Image();
    img.src = images[i];
    preloadedImages.push(img);
}

function showImage(index) {
    if (index < 0) {
        currentIndex = images.length - 1;
    } else if (index >= images.length) {
        currentIndex = 0;
    }

    
    imageElement.style.opacity = 0;

    setTimeout(() => {
        imageElement.src = preloadedImages[currentIndex].src;
        
        setTimeout(() => {
            
            imageElement.style.opacity = 1;
        }, 100); 
    }, 100); 
}

function prevImage() {
    currentIndex--;
    showImage(currentIndex);
}

function nextImage() {
    currentIndex++;
    showImage(currentIndex);
}

showImage(currentIndex);
