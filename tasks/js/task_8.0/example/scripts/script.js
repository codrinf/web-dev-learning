


// JS "Classes" before Classes
async function loadJSON(path) {
  const response = await fetch(path);
  const content = await response.json();

  if (content) {
    const firstItemData = content.items[0];
    const item = new Item(firstItemData);
    // console.log('item ', item);

    // const itemObjs = content.items.map(x => x.Discount ? new DiscountItem(x) : new Item(x));

    const itemObjs = content.items
                        .filter(x => Item.isValidDataForItem(x))
                        .map(x => x.Discount ? new DiscountItem(x) : new Item(x));


    console.log('items ', itemObjs);

    itemObjs.forEach(x => console.log('x.getPrice() ', x.getPrice()));
  }

}
loadJSON('./data/items.json');


class Item {

  // Static function example:
  static isValidDataForItem(itemData) {
    return itemData && itemData.Names && itemData.Price;
  }

  names;
  price;

  constructor(itemData) {
    this.names = itemData.Names;
    this.price = itemData.Price;
  }

  get price() {
    return this.price;
  }

  set price(value) {
    this.price = price;
  }


  getPrice() {
    return this.price;
  }
  getPriceFormatted() {
    return (this.getPrice() / 100).toFixed(2);
  }
  getName(languageCode) {
    if (this.names[languageCode]) {
      return this.names[languageCode];
    }
    const firstKey = Object.keys(this.names)[0];
    return this.names[firstKey];
  }
}


class DiscountItem extends Item {

  isDiscount;

  constructor(itemData) {
    super(itemData);
    this.isDiscount = true;
  }

  getPrice() {
    const price = super.getPrice();
    return (price - price * 0.1);
  }
}