document.getElementById('learn-more-button').addEventListener('click', function () {
    document.getElementById('main-content').scrollIntoView({ behavior: 'smooth' });
});

const imagesData = [
    { image: "../images/photos/History-1.png", },
    { image: "../images/photos/History-3.png", },
    { image: "../images/photos/History-4.png", },
    { image: "../images/photos/History-5.png", },
    { image: "../images/photos/History-6.jpg", }
];

let currentIndex = 0;

const additionalImage = document.getElementById('additional-image');
const additionalTextContent = document.getElementById('additional-text-content');

function updateContent(index) {
    additionalImage.src = imagesData[index].image;
    additionalTextContent.textContent = imagesData[index].text || '';
}

document.querySelector('.left-arrow').addEventListener('click', function () {
    currentIndex = (currentIndex - 1 + imagesData.length) % imagesData.length;
    updateContent(currentIndex);
});

document.querySelector('.right-arrow').addEventListener('click', function () {
    currentIndex = (currentIndex + 1) % imagesData.length;
    updateContent(currentIndex);
});

// Initialize with the first image
updateContent(currentIndex);
