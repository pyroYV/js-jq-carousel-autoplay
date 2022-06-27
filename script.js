const arrayImg = ['https://cdn.photographycourse.net/wp-content/uploads/2022/04/Portrait-vs-Landscape-Featured-Image-3.jpg',
'https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6.jpg',
'https://cdn.photographycourse.net/wp-content/uploads/2014/11/Landscape-Photography-steps.jpg',
'https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg',
'https://iso.500px.com/wp-content/uploads/2021/02/Torres-Del-Paine-Sunset-By-Paul-Reiffer-2-1500x1000.jpg',
'https://mymodernmet.com/wp/wp-content/uploads/2020/02/Landscape-Photographer-of-the-Year-Sander-Grefte.jpg'];

let carouselIndex = 1;
const carouselWrapper = document.getElementById('carousel-wrapper');
const imgList = carouselWrapper.children;



for (let index = 0; index < arrayImg.length; index++) {
    const newImg = document.createElement('img');
    newImg.classList.add('w-100','img-fix',);
    newImg.setAttribute('src',arrayImg[index]);
    carouselWrapper.append(newImg);
}

imgList[carouselIndex].classList.add('active')
const nextButton = document.getElementById('next');
const backButton = document.getElementById('back');

nextButton.addEventListener('click', next)

back.addEventListener('click', function(){
    imgList[carouselIndex].classList.remove('active');
     carouselIndex--;
         if(carouselIndex === -1 ){
             carouselIndex = arrayImg.length-1;
         }
         imgList[carouselIndex].classList.add('active');
 })

function next(){
    imgList[carouselIndex].classList.remove('active');
    carouselIndex++;
        if(carouselIndex === arrayImg.length){
            carouselIndex = 0;
        }
        imgList[carouselIndex].classList.add('active');
}

setInterval (next, 3000)