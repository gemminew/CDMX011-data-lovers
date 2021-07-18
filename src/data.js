export const posters = (data) => {
  let DirPoster = [20];
  let i=0;
  do {
    DirPoster[i]= data.films[i].poster;
    i++
    console.log(DirPoster[i]);
  } while (i<20);
  return DirPoster;
};

export const getDirectors = (data) => {
 
  data.films.map(film => films.director) //corre el metodo dentro del argumento 

}

//export const filterDirectorFilms = (data, director) =>
//films.filter(film => film.director.includes(director))





//element - actual piece of information 
//index - number which indicates how far along in that array you can find that element (0-beginning/ 2 - position 3 )
/*export const filterData = {

    filterDirectors: filterFunction() 

      
  }

  */
export const directorFilter = (Comparativa,data) => {
 const filteredOut = (dataInput,films) => {
  let filmspeople = [];
  for(let i=0 ; i<20 ; i++){
    if(films[i].director === dataInput){
      filmspeople.push(films[i].title)
    }
  }
  /*for(let i = 0; i < filmspeople.length ; i++){
     
  }*/

    const directors = films.filter(function(films){
       return films.director === dataInput;})
       .map(function(films){
         let information = [films.poster, films.title, films.release_date, films.description, films.director, films.producer, films.people];
         return information 
       })
       
       console.log(directors)

       return directors
//El de productor tendra que estar en otra porque causa conflicto con el director este Hayao Miyasaki
//o agregar otra balidación o sea cuando dea al boton de director solo me pueda buscar en ese filtro
    /*const producers = films.filter(function(films){
        return films.producer === dataInput;})   
     
     console.log(producers)
  /* for(let i=0 ; i<20 ; i++){
    if(data.films[i].director === dataInput){
       console.log(data.films[i].title)
       console.log(data.films[i].producer)
       console.log(data.films[i].description)
    }else
    if(data.films[i].producer === dataInput){
      console.log(data.films[i].title)
      console.log(data.films[i].producer)
      console.log(data.films[i].director)
      console.log(data.films[i].description)
   }else { continue; }
   /**if(data.films[i].people[2].name === dataInput){
    console.log(data.films[i].title)
    console.log(data.films[i].producer)
    console.log(data.films[i].director)
    console.log(data.films[i].description)
 }else*/

 /**const  namePeopleFilms = films.filter(function(films){
       return films.director === dataInput;})
       .map(function(films){
         let peopleFilms = films.people;
         return peopleFilms
       })
       .map(function(peopleFilms){
         let names = [peopleFilms.name];
         return names
       })**/
  }
 

}