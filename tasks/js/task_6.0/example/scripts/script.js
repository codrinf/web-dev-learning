
import { getDataFromServer } from '../services/data-service.js';
import { createItem } from '../services/factories.js';
import { formatName  } from '../services/items-formater.js';


// Incarcarea unui JSON si parsarea lui:
async function loadJSON(path) { 
  const content = await getDataFromServer(path).catch(e => e);
  // demo: catch return null or error
  console.log('Loaded json ', content);

  if(content){
    content.items.forEach(x => console.log('x.Price ', x.Price));
    
    const li = '<li click="onLicClick()">{{x.Names.ro}} <br/> {{formatPrice(x.Price)}}</li>'
  }
}
// loadJSON('./data/items.json');

// const a = {
//   key: 123
// }

// const b = {
//   tt: 98765,
//   key: "akjhdmsa "
// }

// const c = Object.assign(b, a);

// console.log('c ', c);




async function loadJSONFactory(path) { 
  const content = await getDataFromServer(path).catch(e => e);
  // demo: catch return null or error
  // console.log('content ', content);
  if(content){
    // content.items.forEach(x => console.log('x.Price ', x.Price));
    const items = content.items.map(x => createItem(x));

    // console.log('items ', items);

    // const li = '<li click="onLicClick()">{{x.getName("ro")}} <br/> {{formatPrice(x.Price)}}</li>'


    // items[0].Names = null;
    
    console.log(items);

    // items.forEach(x => console.log('x.getPrice ', x.getPriceFormatted()));

    // items.forEach(x => x.Price = 11101 );

    // items.forEach(x => console.log('x.getPrice ', x.getPriceFormatted()));
    // items.forEach(x => console.log('x.getItemSuperName ', x.getItemSuperName()));



    
    // A se observa ca fiecare item are niste metode comone, care sunt exact la fel, spre deosebire de proprietati (Names, Modifiriers)
    // Toate aceste functii ocupa loc in memorie. Ce se intampla daca avem 100 items si 50 de functii?
    // Nu ar fi frumos sa le avem stocate intr-un singur loc?
  }
}
loadJSONFactory('./data/items.json');