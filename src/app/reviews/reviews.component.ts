import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Suggestion } from "./Suggestion";

@Component({
  templateUrl: "./reviews.component.html",
  styles: []
})
export class ReviewsComponent {
  model: any = {};
  // keep track of if we're creating or editing a review
  reviewBeingEdited; // keep track of what review is being edited

  numbers = [1, 2, 3, 4, 5]; // being clever about displaying stars on the review
  editStatus: boolean = false;
  newReveiw: boolean = false;
  invalidStatus: boolean = false;

  reviews: any[] = [
    {
      flop: "Cats",
      stars: 3,
      review: "Fantastic flop! Loved the graphics and the singing!!!"
    },
    {
      flop: "Spider-Man 3",
      stars: 5,
      review: "Loved the dancing. Some of the best"
    },
    {
      flop: "Twilight",
      stars: 2,
      review: "Those Vampires were just too scary."
    }
  ];

  flopList = [
    { title: "Battlefield Earth" },
    { title: "Santa Clause Conquers the Martians" },
    { title: "The Room" },
    { title: "Howard the Duck" },
    { title: "Jack and Jill" },
    { title: "Cats" },
    { title: "Dudley Do-Right" },
    { title: "Batman and Robin" },
    { title: "Catwoman" },
    { title: "The Last Airbender" },
    { title: "Spider-Man 3" },
    { title: "Transformers: Revenge of the Fallen" },
    { title: "Twilight" },
    { title: "Wing Commander" }
  ];

  constructor() {}

  ngOnInit() {}

  editReview(review, form) {
    this.editStatus = true;
    this.model = { ...review };
    this.resetFormInit(form);
    // set the model for editing the review.
    // might need more parameters than just the review...
  }

  newReview() {
    this.editStatus = true;
    this.newReveiw = true;
  }

  resetFormInit(form) {
    form.markAsPristine();
    form.markAsUntouched();
  }

  resetForm(form) {
    this.model = {};
    form.markAsPristine();
    form.markAsUntouched();
  }

  submitForm(form) {
    if (!form.valid) {
      this.invalidStatus = true;
      console.log("invalid");
    } else {
      this.invalidStatus = false;
    }

    if (form.valid) {
      if (
        this.newReveiw &&
        !this.reviews.find(x => x.flop == this.model.flop)
      ) {
        this.reviews.push({
          flop: this.model.flop,
          stars: this.model.stars,
          review: this.model.review
        });
      } else if (
        !this.newReveiw &&
        this.reviews.find(x => x.flop == this.model.flop)
      ) {
        let review = this.reviews.find(x => x.flop == this.model.flop);
        review.flop = this.model.flop;
        review.stars = this.model.stars;
        review.review = this.model.review;
      } else {
        return;
      }
      this.resetForm(form);
      this.newReveiw = false;
    } else {
    }
    // update the edited review, or create a new one
  }

  cancel(form) {
    this.resetForm(form);
    this.editStatus = false;
    this.newReveiw = false;
    this.invalidStatus = false;
  }
}
