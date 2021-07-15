// estas funciones son de ejemplo
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

export const directorFilter = (Director,data) => {
  for(let i=0 ; i<20 ; i++){
    if(data.films[i].director === Director){
       console.log(data.films[i].title)
       console.log(data.films[i].producer)
       console.log(data.films[i].description)
    }else
    if(data.films[i].producer === Director){
      console.log(data.films[i].title)
      console.log(data.films[i].producer)
      console.log(data.films[i].director)
      console.log(data.films[i].description)
   }else
   if(data.films[i].people[2].name === Director){
    console.log(data.films[i].title)
    console.log(data.films[i].producer)
    console.log(data.films[i].director)
    console.log(data.films[i].description)
 }else{ continue; }
  }
  return 'OMG';
};
