import { Component ,OnInit} from '@angular/core';
import { JokesService } from './jokes.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  jokes: any[]=[];
  categories:any[]=[];
  constructor(
    private jokesService:JokesService
  ){}
 ngOnInit(){
  this.jokesService.getCategories() 
  .subscribe((categories: any)=>{
    this.categories=categories;
  
   this.jokesService.getRandomJoke()  
   .subscribe(joke=>{
   this.jokes.push(joke);
   });
  });
 }
 //search by category
 searchByCategory(category: string){
this.jokesService.getCategoryJoke(category)
.subscribe(joke => {
  this.jokes = [];
  this.jokes.push(joke);
});
 }
  //search by SearchTerm
  searchBySearchTerm(searchTerm: string){
 if (searchTerm !== ''){
  this.jokesService.getSearchJokes(searchTerm)
  .subscribe((jokes: any) => {
    this.jokes = jokes.result;
       });
   }

 }
}
