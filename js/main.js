var elPokimon = document.querySelector('.list');
var elBtn = document.querySelector('.button');
var elSelect = document.querySelector('.selects');
var elHeart = document.querySelector('.heart');
var elClicklog = document.querySelector('.btn');



elBtn.addEventListener('click', function(evt) {

    evt.preventDefault();

    elHeart.classList.add('red__btn');
})
elClicklog.addEventListener('click', function(evt) {

    evt.preventDefault();

    console.log(elSelectlog.value);
    console.log(elInputlog.value);
    console.log(elSelecttext.value);

})


function elementCreater(tagName) {

    return document.createElement(tagName);

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
    var elOption = elementCreater('option')





    posterImg.src = pokemon.img;
    wildName.textContent = pokemon.name;
    typeName.textContent = pokemon.type;
    weightSort.textContent = pokemon.weight;
    heigthMetr.textContent = pokemon.height;
    elOption.textContent = pokemon.type;
    hrImg.src = '../img/heart.svg';







    item.appendChild(posterImg);
    item.appendChild(hrLine);
    item.appendChild(wildName);
    item.appendChild(typeName);
    item.appendChild(weightSort);
    item.appendChild(heigthMetr);
    item.appendChild(hrBtn);
    hrBtn.appendChild(hrImg);
    elSelect.appendChild(elOption);








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