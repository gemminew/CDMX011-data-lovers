export const posters = (data) => {
    let DirPoster = [];
    let i=0;
    do {
      DirPoster.push(data.films[i].poster);
      //console.log(DirPoster[i]);
      i++

    } while (i<data.films.length);
      //console.log(DirPoster[i]);
    return DirPoster;
};

export const getUniqueValues = (array) => ( 
  array.filter((currentValue, index, arr) => (
      arr.indexOf(currentValue) === index
  )) 
)

//-----------------------Parte del order alfabeticamente, year and score
export const orderBy = (films, option) =>{
  if( option == 'AZ'){
    const orderByAtoZ = films.sort((film1, film2)=>{
      return (film1.title < film2.title) ? -1 : 1;
    })
    console.log(orderByAtoZ)
    return orderByAtoZ //Agrege esto porque no regresaba nada
  }
  else if (option == 'ZA'){
    const orderByZtoA = films.sort((film1, film2)=>{
      return (film1.title > film2.title) ? -1 : 1;
    })
    return orderByZtoA
  }
  else if (option == 'scoreMinToMax'){
    const orderByMinToMax = films.sort((film1, film2)=>{
      return film1.rt_score - film2.rt_score
    })
    return orderByMinToMax
  }
  else if (option== 'scoreMaxToMin'){
    const orderByMaxToMin = films.sort((film1, film2)=>{
      return film2.rt_score - film1.rt_score
    })
    return orderByMaxToMin
  }
  else if (option == 'dateMinToMax'){
    const dateByMinToMax = films.sort((film1, film2) =>{
      return film1.release_date - film2.release_date
    })
    return dateByMinToMax 
  }
  else if (option == 'dateMaxToMin'){
    const dateByMaxToMin = films.sort((film1, film2) =>{
      return film2.release_date - film1.release_date
    })
    return dateByMaxToMin
  }
}


//obtener valores unicos en select input
//
export const directorFilter = (dataInput,films) => {
    const directorFilms = films.filter(function(films){
       return films.director === dataInput;})
       .map(function(films){
         return films 
       })
       console.log(directorFilms);
       
       return directorFilms
}

export const joinPeopleName = (film) => {
  let numberPeople = film.people;
  let namesOfPeople = [];
    for(let j=0; j<numberPeople.length; j++){
      namesOfPeople[j] = film.people[j].name ;
    }
    let names = namesOfPeople.join();

    console.log(names)
 return names 
}

export const producerFilter = (dataInput,films) => {

  const producers = films.filter(function(films){
     return films.producer === dataInput;})
     .map(function(films){
      return films
     })
     return producers
}

export const characterFilter = (dataInput,films) => {

  const characters = films // parameter
    .filter( function(banana){ return banana.title === dataInput;} ) 
    .map(function(banana){
      let listOfPeople = banana.people;
      console.log('characters:')
      console.log(listOfPeople.length)
      return listOfPeople
    })[0] // 
    return characters
  }


export const titleLocation = (films) =>{
  let titles = ['']
  let j=0
  for(let i=0; i< films.length ;i++){
    let location = films[i].locations
    if( location.length != 0){
      titles[j]= films[i].title
      j++
    }else{continue}
  }
  return titles
}

export const locationFilter = (dataInput,films) =>{
  const locations = films.filter(function(film){return film.title === dataInput})
  .map(function(film){
    return film.locations
  })[0]
  return locations
}

  export const vehicleFilter = (dataInput, films) => {

    const vehicles = films 
    .filter(function(film){ return film.title == dataInput;})
    .map(function(film){
      let listOfVehicles = film.vehicles;
      return listOfVehicles
    }) [0]
    return vehicles
  }
  


