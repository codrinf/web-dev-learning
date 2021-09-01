export function getDataFromServer(path) {
  // Constructorul Promise primeste ca parametru o functie
  // La randul ei, aceasta functie primeste alte, urmand ca una din ele sa fie apelata in functie de succes/eroare
  
  return new Promise((resolve, reject) => {
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    
    fetch(path)
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(e => reject(e));
  });
}