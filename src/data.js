// estas funciones son de ejemplo
export const posters = (data) => {
    let DirPoster = [20];
    let i=0;
    do {
      DirPoster[i]= data.films[i].poster;
      i++
      //console.log(DirPoster[i]);
    } while (i<20);
    return DirPoster;
};

export const filteredOut = (dataInput,films) => {

    const directors = films.filter(function(films){
       return films.director === dataInput;})
       .map(function(films){
        let numberPeople = films.people;
        let namesOfPeople = [];
        
        for(let j=0; j<numberPeople.length; j++){
          namesOfPeople[j] = films.people[j].name ;
        }

         let information = [films.poster, films.title, films.release_date, films.rt_score, films.description, films.director, films.producer, namesOfPeople.join()];
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

