let proyects = ["proyectA", "proyectB", "proyectC"]
let slideshowContainer = document.querySelector('.slideshow-container');

let active = proyects[0];
let proyectNumber = 0

const proyectsAmount = proyects.length;
const proyectImage = document.querySelector('.proyectImage');
const proyectName = document.querySelector('.proyectName');

const nextProyectBtn = document.querySelector('.next');
const previousProyectBtn = document.querySelector('.prev');

function setActiveProyect() {
    let imagePath = 'img/' + active + '.jpg';
    proyectImage.setAttribute('src', imagePath);
    proyectName.textContent = active;
}
setActiveProyect()

function nextProyect(){
    if(proyectNumber < proyectsAmount - 1){
        proyectNumber++;
        active = proyects[proyectNumber];
        setActiveProyect(); 
    }
    else
    {
        proyectNumber = 0;
        active = proyects[proyectNumber];
        setActiveProyect();
    }
}

function previousProyect(){
    if(proyectNumber > 0){
        proyectNumber--;
        active = proyects[proyectNumber];
        setActiveProyect(); 
    }
    else
    {
        proyectNumber = proyectsAmount - 1;
        active = proyects[proyectNumber];
        setActiveProyect();
    }
}


nextProyectBtn.addEventListener('click', nextProyect);
previousProyectBtn.addEventListener('click', previousProyect);