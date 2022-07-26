let pokemonArray = pokemons.slice(0, 25);
let moviesArray = movies.slice(0, 25);

let elList = document.querySelector(".list");
let elBtnPokemon = document.querySelector(".btn__pokemon");
let elBtnMovies = document.querySelector(".btn__movies");
let elBtnRandom = document.querySelector(".btn__random");
let elBtnClear = document.querySelector(".btn__clear");
let elResult = document.querySelector(".result");

elBtnPokemon.addEventListener("click", function(){
    elResult.textContent = pokemonArray.length
    renderArray(pokemonArray);
});

elBtnMovies.addEventListener("click", function(){
    elResult.textContent = moviesArray.length
    renderArray(moviesArray)
});

elBtnClear.addEventListener("click", function(){
    elList.innerHTML = null
    elResult.textContent = 0
    elList.innerHTML = "<li>Deleted all</li>"
})

elBtnRandom.addEventListener("click", function(){
    renderRandom(pokemonArray,moviesArray)
});



function renderArray(array) {
    elList.innerHTML = null
    for (let item of array) {
        let newLi = document.createElement("li");
        elList.appendChild(newLi);
        newLi.classList.add("mb-2", "col-lg-3", "col-4" ,"align-items-center" ,"d-flex" ,"flex-column","justify-content-center", "mb-3", "bg-light", "rounded-5", "shadow-lg", "p-5")

        let newImg = document.createElement("img");
        newLi.appendChild(newImg);
        newImg.classList.add("pokemon__img");
        newImg.width = "200";

        let newH3 = document.createElement("h3");
        newLi.appendChild(newH3);
        newH3.classList.add("heading");

        let newP = document.createElement("p");
        newLi.appendChild(newP);
        newP.classList.add("text")
        newP.textContent = item.type;

        let newP2 = document.createElement("p");
        newLi.appendChild(newP2);
        newP2.classList.add("text1")
        newP2.textContent = item.height;

        let newP3 = document.createElement("p");
        newLi.appendChild(newP3);
        newP3.classList.add("text2")
        newP3.textContent = item.weight;

        if(item.name){
            newImg.src = item.img;
            newH3.textContent = item.name;
         }else{
            newImg.src = `https://img.youtube.com/vi/${item.ytid}/mqdefault.jpg`;
            newH3.textContent = item.Title;
        }
    }
}

function renderRandom(array1, array2) {
    elList.innerHTML = null;
    let newArray = array1.concat(array2)
    elResult.textContent = newArray.length
    for (let i = 0; i < newArray.length; i++) {
        if(newArray[i].name){
            console.log(newArray[i]); 
         }else{
            
        }  
        
    }

    
    
}

