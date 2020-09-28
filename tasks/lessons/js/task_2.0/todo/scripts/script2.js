
// Reading a var form another .js files, as all files imported in index.html have a common scope: window
// console.log('varInFirstScript ', varInFirstScript);

var serverService = {
  PATH: 'wwww/m,yservr.com/api/',

  getItems (){
    const getItemsUrl = this.PATH + 'get-items/';
    // call la server

    // return items
    return "uite itemurile tale";
  },

  getPrtomos(){
    const getItemsUrl = this.PATH + 'get-items/';

  }


}