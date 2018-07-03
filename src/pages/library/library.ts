import { Component, OnInit } from '@angular/core';

import { Quote } from "../../data/quote.interface";
import quotes from '../../data/quotes';
import { QuotesPage } from '../quotes/quotes';

@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit {

	quoetsPage = QuotesPage;
	quoteCollection: { category: string, quotes: Quote[], icon: string }[];

	ngOnInit() {
		this.quoteCollection = quotes;
		console.log(this.quoteCollection);
	}
}