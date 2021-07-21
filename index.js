/***** Deliverable 1 *****/ //[DONE]
const header = document.querySelector("h1#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/ //[DONE]

header.style.color = "blue"

/***** Deliverable 3 *****/ //[DONE]
console.log('This is what the traveler object looks like: ', traveler)
const profile = document.getElementById("profile")

const image = profile.getElementsByTagName("img")[0]
image.src = traveler.photo
image.alt = traveler.name

const h2 = profile.getElementsByTagName("h2")[0]
h2.innerHTML = traveler.name

const em = profile.getElementsByTagName("em")[0]
em.innerHTML = traveler.nickname

/***** Deliverable 4 *****/ //[DONE]

const animal_sightings = traveler.animalSightings
const ul = document.querySelector("ul#animals")


animal_sightings.forEach(function temp(animal_sight){
    const newDiv = document.createElement("div")
    newDiv.innerHTML = `<li data-id="${animal_sight.id}">
    <p>${animal_sight.description}</p>
    <img src="${animal_sight.photo}" alt="${animal_sight.species}"/>
    <a href="${animal_sight.link}" target="_blank">Here's a video about the ${animal_sight.species} species!</a>
  </li>`
  ul.appendChild(newDiv)
    
})

/***** Deliverable 5 *****/ //[DONE]

const wanted = document.querySelector("div [data-id='3']")
wanted.remove()