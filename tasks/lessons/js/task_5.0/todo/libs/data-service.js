


export function getDataFromServer(){
  // Constructorul Promise primeste ca parametru o functie
  // La randul ei, aceasta functie primeste alte, urmand ca una din ele sa fie apelata in functie de succes/eroare
  
  return new Promise((resolve, reject) => {
    // resolve('yeeey, success');
    // reject(new Error('NU MERGE'));


    setTimeout(() => resolve('SUCCESS!!'), 2000)

  });
}






export function logginUser(){
}




// document.addEventListener('DOMContentLoaded', () => {
//   // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
//   fetch('./pages.json')
//       .then(response => response.json())
//       .then(data => onDataLoad(data))
//       .catch(e => console.error(e));
// });