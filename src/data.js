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
/* 
export const filterDirectorFilms = (data, director) => {
  data.films.filter(film => (film.director  )); */




//element - actual piece of information 
//index - number which indicates how far along in that array you can find that element (0-beginning/ 2 - position 3 )
/*export const filterData = {

    filterDirectors: filterFunction() 

      
  }

  */
export const directorFilter = (Comparativa,data) => {
  for(let i=0 ; i<20 ; i++){
    if(data.films[i].director === Comparativa){
       console.log(data.films[i].title)
       console.log(data.films[i].producer)
       console.log(data.films[i].description)
    }else
    if(data.films[i].producer === Comparativa){
      console.log(data.films[i].title)
      console.log(data.films[i].producer)
      console.log(data.films[i].director)
      console.log(data.films[i].description)
   }else { continue; }
   /**if(data.films[i].people[2].name === Comparativa){
    console.log(data.films[i].title)
    console.log(data.films[i].producer)
    console.log(data.films[i].director)
    console.log(data.films[i].description)
 }else*/
  }
  return 'OMG';
};
