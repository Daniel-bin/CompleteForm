import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Suggestion } from './Suggestion';

@Component({
  templateUrl: './reviews.component.html',
  styles: [
  ]
})
export class ReviewsComponent  {
  model:any = { }
  // keep track of if we're creating or editing a review
  reviewBeingEdited; // keep track of what review is being edited

  numbers = [1,2,3,4,5] // being clever about displaying stars on the review

  reviews: any[] = [
    { flop: "Cats", stars: 3, review: "Fantastic flop! Loved the graphics and the singing!!!" },
    { flop: "Spider-Man 3", stars: 5, review: "Loved the dancing. Some of the best" },
    { flop: "Twilight", stars: 2, review: "Those Vampires were just too scary." },
  ]

  flopList = [
    {title: "Battlefield Earth"},
    {title: "Santa Clause Conquers the Martians"},
    {title: "The Room"},
    {title: "Howard the Duck"},
    {title: "Jack and Jill"},
    {title: "Cats"},
    {title: "Dudley Do-Right"},
    {title: "Batman and Robin"},
    {title: "Catwoman"},
    {title: "The Last Airbender"},
    {title: "Spider-Man 3"},
    {title: "Transformers: Revenge of the Fallen"},
    {title: "Twilight"},
    {title: "Wing Commander"},
  ]

  constructor() { }

  ngOnInit() {
  }

  editReview(review) {
    // set the model for editing the review. 
    // might need more parameters than just the review...
  }

  resetForm(form) {
    // reset the form
  }

  submitForm(form) {
    // update the edited review, or create a new one
  }


  cancel(form) {
    // cancel the edit/create and hide the form
  }

}





