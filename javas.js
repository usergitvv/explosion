let out = document.querySelector('h1');
let btn = document.querySelector('button');
let picture = document.querySelector('.image');

alert('Внимание, уберите от экрана кормящих матерей и беременных мужчин!');

btn.onclick = fcount;

function fcount() {

    let i = 5;

    let count = setInterval(() => {

        let counter = i--;
        out.innerHTML = counter;

        if (i == -1) return clearInterval(count), fsound();
    }, 1000);

}

function fsound() {
    let audio = new Audio();
    audio.src = 'zvuk-vzryva-dlya-video.mp3';
    audio.autoplay = true;
    picture.style.cssText = 'z-index: 2; opacity: 1;';
    out.innerHTML = '';
    image();
}

function image() {
    setTimeout(() => {
        picture.style.cssText = 'transition: opacity 2s linear; z-index: -2; opacity: 0;';
    }, 3000);
}

//Для мобильных touch-устройств
if (/Android|webOS|iPhone|iPad|iPod|BlackBarry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    btn.ontouchstart = fcount;
    btn.onclick = () => { return false; }
}
