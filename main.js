let proyects = ["proyectA", "proyectB", "proyectC"]
let slideshowContainer = document.querySelector('.slideshow-container')

for(const proyect of proyects ){
    const proyectSection = document.createElement('div')
    proyectSection.setAttribute('class', 'proyect')
    
    const proyectLogo = document.createElement('img')
    proyectLogo.setAttribute('class', 'proyectLogo')
    let logoPath = 'img/' + proyect + ".jpg"
    proyectLogo.setAttribute('src', logoPath)
    proyectSection.appendChild(proyectLogo)


    const proyectName = document.createElement('p')
    proyectName.setAttribute('class', 'proyectName')
    proyectName.textContent = proyect
    proyectSection.appendChild(proyectName)

    slideshowContainer.appendChild(proyectSection)
}