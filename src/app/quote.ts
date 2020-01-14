export class Quote {
  
  constructor(public saying: string, public author: string,
  public submitter: string, public publishedDate: Date, public like:number=0,
  public dislike:number=0){
    
  }

}
