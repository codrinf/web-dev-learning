export function createItem(itemData) {
  // De decomentat:
  // const item = {
  //   Names: itemData.Names,
  //   Price: itemData.Price,
  //   // Modifiers: itemData.Modifiers,
  //   // IsAva: itemData.IsAva,
  //   Modifiers: createModifiers(itemData.Modifiers),

  //   getPrice() {
  //     return this.Price + this.Modifiers.filter(x => x.selected)
  //       .reduce((total, currentModifier) => total + currentModifier.Price, 0);
  //   },
  //   getPriceFormatted() {
  //     return (this.getPrice() / 100).toFixed(2) + '$';
  //   },
  //   getName(languageCode) {
  //     if (this.Names[languageCode]) {
  //       return this.Names[languageCode];
  //     }
  //     const firstKey = Object.keys(this.Names)[0];
  //     return this.Names[firstKey];
  //   }
  // }

  let item = Object.assign(itemData, {
    Modifiers: createModifiers(itemData.Modifiers),

    get itemType() {
      return 'ITEM';
    },
    getPrice() {
      return this.Price + this.Modifiers.filter(x => x.selected)
        .reduce((total, currentModifier) => total + currentModifier.Price, 0);
    },
    getPriceFormatted() {
      return (this.getPrice() / 100).toFixed(2);
    },
    getName(languageCode) {
      if (this.Names[languageCode]) {
        return this.Names[languageCode];
      }
      const firstKey = Object.keys(this.Names)[0];
      return this.Names[firstKey];
    },
    getItemSuperName (){

    }
  })

  // item = Object.preventExtensions(item);
  // item = Object.freeze(item);


  return item;
}

function createModifiers(modifiersData) {
  return !modifiersData ? [] : modifiersData.map(x => {
    return {
      Names: x.Names,
      Price: x.Price,


      _selected: false,

      set selected(value) { // setterul se asigura ca vom seta doar booleans
        this.selected = !!value;
      },
      getName(languageCode) {
        languageCode = this.Names[languageCode] || Object.keys(this.Names)[0];
        return this.Names[languageCode];
      }
    }
  })
}