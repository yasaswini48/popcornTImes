import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(MoviesArr:any[],searchedMovie:any) : any[]
  {
    console.log("Searched Array:",MoviesArr," term:",searchedMovie);
    //nothing searched or empty array
    if(!searchedMovie || !MoviesArr)
    return MoviesArr;
    //loop through array , take a term convert into lowercase and find the index of searched term
    else
    {
      return MoviesArr.filter(movieObj=>movieObj.title.toLowerCase().indexOf(searchedMovie.toLowerCase())!==-1)
    }
  }

}
