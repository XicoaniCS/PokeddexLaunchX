const pokeId = document.getElementById("pokeId");


const pokeClass = document.getElementById("pokeClass");



const pokeNombre = document.getElementById("pokeNombre");
    


const pokeHP = document.getElementById("pokeHP");



const attack = document.getElementById("attack");

    


const defense = document.getElementById("defense");
    


const weight = document.getElementById("weight");
    


const height = document.getElementById("height");
    


const specialAttack = document.getElementById("specialAttack");
    



const specialDefense = document.getElementById("specialDefense");



const speed = document.getElementById("speed")    



const pokeMove1 = document.getElementById("pokeMove1");
   



const pokeMove2 = document.getElementById("pokeMove2");
    


const pokeMove3 = document.getElementById("pokeMove3");
    


const pokeMove4 = document.getElementById("pokeMove4");
    

const fetchPokemon = () => {
    const Pokename = document.getElementById("Pokename")
    let PokeInput = Pokename.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${PokeInput}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            PokeImge("./PokeConfundido.jpg")
        } 
        else {
            return res.json();
        }
    }).then((data) => {
        let PokeImg = data.sprites.front_default;
        console.log(PokeImg);
        PokeImge(PokeImg);
        pokeNombre.innerHTML = data.name;
        pokeId.innerHTML = `Id: ${data.id}`;
        pokeClass.innerHTML = `Tipo: ${data.types[0].type.name}`;
        pokeHP.innerHTML = `HP: ${data.stats[0].base_stat}`;
        attack.innerHTML = `Ataque: ${data.stats[1].base_stat}`;
        defense.innerHTML = `Defensa: ${data.stats[2].base_stat}`;
        specialAttack.innerHTML = `Ataque Especial: ${data.stats[3].base_stat}`;
        specialDefense.innerHTML = `Defensa Especial: ${data.stats[4].base_stat}`;
        speed.innerHTML = `speed: ${data.stats[5].base_stat}`;
        height.innerHTML = `altura: ${data.height}`;
        weight.innerHTML = `peso: ${data.weight}`;
        pokeMove1.innerHTML =`Mov1: ${data.moves[0].move.name}`
        pokeMove2.innerHTML =`Mov2: ${data.moves[1].move.name}`
        pokeMove3.innerHTML =`Mov3: ${data.moves[2].move.name}`
        pokeMove4.innerHTML =`Mov4: ${data.moves[3].move.name}`
    })
    
}

const PokeImge = (url) => {
    const PokeImg = document.getElementById("PokeImg");
    PokeImg.src = url;
}

