var elPokimon = document.querySelector('.list');
var elBtn = document.querySelector('.button');
var elSelect = document.querySelector('.selects');
var elHeart = document.querySelector('.heart');
var elClicklog = document.querySelector('.btn');
var elInputlog = document.querySelector('.input');
var elSelecttext = document.querySelector('.selects__text')



elBtn.addEventListener('click', function(evt) {

    evt.preventDefault();
    if (evt.target = true) {
        elHeart.classList.toggle('red__btn');
    } else {

        elHeart.classList.toggle('heart');

    }


})
elClicklog.addEventListener('click', function(evt) {

    evt.preventDefault();

    if (evt.target = true) {
        hrImg.classList.toggle('red__btn')
    } else {
        hrImg.classList.toggle('btn')
    }



    console.log(elSelect.value);
    console.log(elInputlog.value);
    console.log(elSelecttext.value);

})


function elementCreater(tagName) {

    return document.createElement(tagName);

}


var elArray = [];

for (var i = 0; i < pokemons.length; i++) {


    for (var j = 0; j < pokemons[i].type.length; j++) {

        elArray.push(pokemons[i].type[j])

    }

}
nonUnique = elArray.filter((item, i) => elArray.includes(item, i + 1))

nonUnique = [...new Set(nonUnique)]
for (var i = 0; i < nonUnique.length; i++) {
    // console.log(nonUnique[i]);
};


function createOption(nonUnique) {

    var elOption = elementCreater('option');
    elSelect.appendChild(elOption);
    elOption.textContent = nonUnique;
}




function pokemonCreater(pokemon) {

    var item = elementCreater('li')
    var posterImg = elementCreater('img');
    var wildName = elementCreater('h3')
    var typeName = elementCreater('p');
    var weightSort = elementCreater('strong')
    var heigthMetr = elementCreater('h4');
    var hrLine = elementCreater('hr');
    var hrBtn = elementCreater('button');
    var hrImg = elementCreater('img')






    posterImg.src = pokemon.img;
    wildName.textContent = pokemon.name;
    typeName.textContent = pokemon.type;
    weightSort.textContent = pokemon.weight;
    heigthMetr.textContent = pokemon.height;
    hrImg.src = '/img/heart.svg';







    item.appendChild(posterImg);
    item.appendChild(hrLine);
    item.appendChild(wildName);
    item.appendChild(typeName);
    item.appendChild(weightSort);
    item.appendChild(heigthMetr);
    item.appendChild(hrBtn);
    hrBtn.appendChild(hrImg);



    elPokimon.appendChild(item);

    item.classList.add('item__style');
    hrLine.classList.add('new__line')
    posterImg.classList.add('img__style')
    wildName.classList.add('wild__style')
    typeName.classList.add('type__style')
    weightSort.classList.add('weight__style')
    hrBtn.classList.add('btn__style')
    hrImg.classList.add('img__heart')
    heigthMetr.classList.add('heigt__style')




}


for (var i = 0; i < pokemons.length; i++) {

    pokemonCreater(pokemons[i]);

}
for (let i = 0; i < nonUnique.length; i++) {
    createOption(nonUnique[i])

}