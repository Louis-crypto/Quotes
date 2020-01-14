import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})



export class QuoteComponent implements OnInit {

  mostLikedAuthor:string;
  mostLikedPoster:string;
  mostLikedQuote:string;
  theDownvotes:number;

  quotes: Quote[] = [
    new Quote('Madness as you know is like gravity all it takes is a little push', 'Joker', 'Louis', new Date (2008,9,8)),
    new Quote('You either die a hero or live long enough to see yourself become the Villain', 'Wise man', 'Louis',new Date(2012,5,22))
    
  ];

  mostVotes = 0;

  quoteLike(quote){
    quote.like = quote.like + 1;
  }
  quoteDislike(quote){
    quote.dislike = quote.dislike + 1;
  }
  addNewQuote(quote){
    this.quotes.push(quote)
  }

  quoteDelete(isNull, index){
    if (isNull) {
      this.quotes.splice(index,1);
    }
  }

  showBestQuote(){
    this.mostVotes = 0;
    for(let i=0; i<this.quotes.length; i++){
      if(this.quotes[i].like > this.mostVotes){
        this.mostVotes = this.quotes[i].like;
        this.mostLikedAuthor = this.quotes[i].author;
        this.mostLikedPoster = this.quotes[i].submitter;
        this.mostLikedQuote = this.quotes[i].saying;
        this.theDownvotes = this.quotes[i].dislike;
      }
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
