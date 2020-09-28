import { calcAreaService } from '../services/utils.js';


const newCalcAreaData = {
  pi: 3.14159,
  somethin: 'ksfk'
}

console.log('calcAreaService.area.call(newCalcAreaData, 2) ', calcAreaService.area.call(newCalcAreaData, 2));
console.log('calcAreaService.area.apply(newCalcAreaData, [2]) ', calcAreaService.area.apply(newCalcAreaData, [2]));

console.log('calcAreaService.area(2) ', calcAreaService.area(2))

const areaWithNewThis = calcAreaService.area.bind(newCalcAreaData);

console.log('areaWithNewThis(2) ', areaWithNewThis(2));


const items = [];
const totalPrice = 0;


// const newItems = items.map( x => {
//   x.Modifiers = x.ItemModifiers;
//   delete x.ItemModifiers;
//   return x;
// })

const discountItems = items.filter(x => x.Discount);


const page = {
  PageName: 'Page Root',
  Buttons: [
    {
      ButtonName: 'Burgers',
      Price: 0,
      Page: {
        PageName: 'Burgers',
        Buttons: [
          {
            ButtonName: 'SMALL Burgers',
            Price: 0,
            Page: {
              PageName: 'SMALL BURGERS',
              Buttons: [
                {
                  ButtonName: 'Burger X',
                  Price: 400,
                  Page: null,
                  Discount: true
                }
              ]
            }
          },
          {
            ButtonName: 'Burger YY',
            Price: 700,
            Page: null
          }
        ]
      }
    }
  ]
}
// Calculate total Price of all Burgers


function calculatePrice(buttons){
  let total = 0;
  buttons.forEach(x => {
    total += x.Price;
    if(x.Page){
      total += calculatePrice(x.Page.Buttons);
    }
  });

  return total;
}

console.log('calcualte tyotal ', calculatePrice(page.Buttons))

function filterDiscount(buttons){
  
}