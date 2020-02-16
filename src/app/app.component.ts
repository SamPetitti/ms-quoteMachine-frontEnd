import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ms-quoteMachine-frontEnd';
  response$: Observable<QuoteResponse>;
  constructor(private client: HttpClient){}
  

  getQuotes(){
    this.response$ = this.client.get<QuoteResponse>('localhost:5000/quotes/');
    console.log(this.response$);
  }
}



interface QuoteResponse{
  data: Quote[]
}

interface Quote {
  "id": number,
  "text": "string",
   "rating": number
}

// interface BooksResponse{
//    data: BooksResponseItem[]
// }

// interface BooksResponseItem {
//   id: number;
//   title: string;
//   author: string;
// }