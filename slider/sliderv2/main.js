
const images = [
    {id: 1, url: '../imgs/chrono.jpg'},
    {id: 2, url: '../imgs/inuyasha.jpg'},
    {id: 3, url: '../imgs/tenchi.jpg'},
    {id: 4, url: '../imgs/tenjhotenge.jpg'},
    {id: 5, url: '../imgs/yuyuhakusho.jpg'},
    {id: 9, url: '../imgs/ippo.png'},
    
]

const container = document.querySelector('#container-images')

const loadImages = (images, container) => {
    images.forEach(image => {
        container.innerHTML += `
            <div class="image">
                <img src="${image.url}"
            </div>
        `
    });
}


loadImages(images, container)