import { Component, OnInit } from '@angular/core';
import { MovieDataService } from '../movie-data.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  //searching
  searchedMovie:any;
  //arrays
  moviesArr:any;
  //showing 
  showMovie;
  //inject movieService ovj
  constructor(private FD:MovieDataService) 
  { }
  //call method
  ngOnInit() 
  {
    this.FD.getUnknownData().subscribe(
      items=>{
        this.moviesArr=items;
        console.log(this.moviesArr);
      },
      err=>
      {
        console.log("Error while reading movie data",err);
      }
    )
  }
  //modal poping up
  modalShow(movieObj)
  {
    this.showMovie=movieObj;
  }

}
