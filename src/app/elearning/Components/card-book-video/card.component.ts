import {Component, OnInit} from '@angular/core';
import {EducationalResourcesInterface} from "../../Interface/EducationalResources.interface";
import {ElearningService} from "../../service/elearning.service";

@Component({
  selector: 'app-card-book-video',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements  OnInit{
  books: EducationalResourcesInterface[] = [];

  constructor(private bookService: ElearningService) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((data: EducationalResourcesInterface[]) => {
      this.books = data;
    });
  }
}
