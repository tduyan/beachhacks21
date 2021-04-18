/* Fetch API */
window.addEventListener('load', loadImg);

function loadImg() {
    const url = 'https://api.unsplash.com/search/photos/?query=quote&client_id=Ng4sB8jrZ_WxCoztwHpNHj0-X0HWPxx-Umg7TPVWKNA';
    const imageDiv = document.querySelector('.image');
    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            for (let i = 0; i < data.results.length; i++) {
                let imageElement = document.createElement('img');
                imageElement.src = data.results[i].urls.thumb;
                imageDiv.append(imageElement);
            }
        });
}

/*const requestUrl = 'https://api.unsplash.com/search/photos/?query=quote&client_id=Ng4sB8jrZ_WxCoztwHpNHj0-X0HWPxx-Umg7TPVWKNA';
const getImageButton = document.querySelector('.getImagesButton');
const imageToDisplay = document.querySelector('.imageToDisplay');

getImagesButton.addEventListener('click', async () => {
    let randomImage = await getNewImage();
    imageToDisplay.src = randomImage;
});

async function getNewImage() {
    let randomNumber = Math.floor(Math.random() * 10);
    return fetch(requestUrl)
        .then((response) => response.json())
        .then((data) => {
            let allImages = data.results[randomNumber];
            return allImages.urls.regular;
        });
}*/