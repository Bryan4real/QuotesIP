import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {

  newQuote = new Quotes('', '', '', new Date());
  @Output() addQuote = new EventEmitter<Quotes>();

  submitQuote() {
    this.addQuote.emit(this.newQuote);
    this.newQuote = new Quotes('', '', '', new Date());
  }

  constructor() { }

  ngOnInit() {
  }

}
