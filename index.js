let nameP = document.getElementById("name")
let hp = document.getElementById("hp")
let photo = document.getElementById("photo")
let id = document.getElementById("id")
let type = document.getElementById("type")
let abilities = document.getElementById("abilities")
let attack = document.getElementById("attack")
let defense = document.getElementById("defense")
let speed = document.getElementById("speed")

let btn = document.getElementById("button")


btn.addEventListener("click", evento => {
    evento.preventDefault()

    let number = Math.random() * (905 - 1) + 1
    let entero = parseInt(number)
    
    let url = `https://pokeapi.co/api/v2/pokemon/${entero}`

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(datos => {
            nameP.innerHTML = datos.name.toUpperCase()
            hp.innerHTML = `<h1><i>hp</i> ${datos.stats[0].base_stat}</h1>`
            photo.innerHTML = `<img src="${datos.sprites.front_default}" width="200px" height="200px">`
            id.innerHTML = `<p><b>ID:</b> ${datos.id}</p>`
            type.innerHTML = `<p><b>Type:</b> ${datos.types[0].type.name.toUpperCase()}</p>`
            abilities.innerHTML = `<p><b>Abilities:</b> ${datos.abilities[0].ability.name.toUpperCase()}, ${datos.abilities[1].ability.name.toUpperCase()}</p>`
            attack.innerHTML = `<p><b>Attack:</b> ${datos.stats[1].base_stat}</p>`
            defense.innerHTML = `<p><b>Defense:</b> ${datos.stats[2].base_stat}</p>`
            speed.innerHTML = `<p><b>Speed:</b> ${datos.stats[5].base_stat}</p>`
        })
})

