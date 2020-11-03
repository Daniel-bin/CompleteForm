import { ReviewsComponent } from './reviews/reviews.component';

export const routingTable = [
  { path: '', redirectTo: '/reviews', pathMatch: 'full'},
  // { path: 'flops/suggestion', component: FlopSuggestionComponent },
  { path: 'reviews', component: ReviewsComponent },
]