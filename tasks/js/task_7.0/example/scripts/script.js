
function createObj(){
    // A se observa ca fiecare item are niste metode comone, care sunt exact la fel, spre deosebire de proprietati (Names, Modifiriers)
    // Toate aceste functii ocupa loc in memorie. Ce se intampla daca avem 100 items si 50 de functii?
    // Nu ar fi frumos sa le avem stocate intr-un singur loc?

    // Raspuns: Poate ca daca fiecare obiect ar extinde unul de baza, le-am putea stoca acolo!

    // Prototype:
    // Am folosit o functie din prototype fara sa ne dam seama:

    const obj = {
      t: 'title'
    };
    // console.log('un obiect gol js ', obj);
    // console.log('un obiect gol toString ', obj.toString());

    obj.toString = function () {
      // console.log('this ', this)
      return 2345467;
    }

    const myar = [];

    console.log('my arr ', myar)

    // Ordinea de apelare a metodelor!

    // console.log('un obiect gol toString 2 ', obj.toString());
}
// createObj();



// class Animal {
//   legs = 4;

//   eat (){
//     console.log('dfone!')
//   }
// }

// class Cat extends Animal {
//   meaow = true;

//   eat (){
//     console.log('not now');
//   }
// }

// const dingo = new Cat();
// console.log('dingo ', dingo.eat())



// JS "Classes" before Classes
async function loadJSON(path) { 
  const response = await fetch(path);
  const content = await response.json();

  if(content){
    const firstItemData = content.items[0];


    const itemObj = {
      Names: firstItemData.Names,
      Price: firstItemData.Price
    }

    // const item2 = new Item(firstItemData);

    // const arr = [];


    // se observa ca item e UNDEFINED!
    // console.log('arr ', arr);

    // console.log('itemObj ', itemObj);

    // console.log('item2 ', item2);
    // console.log(this); // se observa ca Window contine Names. WHAT.THE.FUCK?


    // const item = new Item(firstItemData);
    // console.log('item ', item);

    const itemObjs = content.items.map(x => new Item(x));

    console.log('items ', itemObjs);
    
    // itemObjs[0].getPrice = function (){
    //   return 999;
    // }
    // console.log('itemObjs ', itemObjs);
    itemObjs.forEach(x => console.log('x.getPrice() ', x.getPrice()));
  }

}
loadJSON('./data/items.json');

// function simplaFunctie(){
//   console.log('hello')
// }

// console.log('simplaFunctie ', simplaFunctie);

// ce le 2 functii sunt la fel!
// e doar o conventie ca clasele sa inceapa cu capital letter

// function itemClass2(itemData){
//   this.Names = itemData.Names;
//   this.Price = itemData.Price;
// }

function Item(itemData){
  this.Names = itemData.Names;
  this.Price = itemData.Price;
  // this.Modifiers = itemData.Modifiers;

  getPrice = function (){
    return this.Price * 10;
  }

  function somethiin(){

  }
}

// function Item(itemdata){

//   const item = {
//     Names
//   }

//   return item;
// }

Item.prototype.getPrice = function () {
  return this.Price;
}


Item.prototype.getPriceFormatted = function () {
  return (this.getPrice() / 100).toFixed(2);
}


Item.prototype.getName = function (languageCode) {
  if (this.Names[languageCode]) {
    return this.Names[languageCode];
  }
  const firstKey = Object.keys(this.Names)[0];
  return this.Names[firstKey];
}
