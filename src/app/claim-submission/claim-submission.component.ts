import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-claim-submission',
  templateUrl: './claim-submission.component.html',
  styleUrls: ['./claim-submission.component.scss'],
})
export class ClaimSubmissionComponent  implements OnInit {

  claimCategory: string='';
  claimDescription: string='';
  claimLocation: string='';
  claimPriority: string='';

  constructor() {
    this.claimCategory='';
    this.claimDescription='';
    this.claimLocation='';
    this.claimPriority='';
  }
  ngOnInit() {
    console.log('Le composant de soumission de réclamation a été initialisé.');
  }
  onSubmit() {
    // Logique pour soumettre la réclamation
    console.log('Catégorie:', this.claimCategory);
    console.log('Description:', this.claimDescription);
    console.log('Localisation:', this.claimLocation);
    console.log('Priorité:', this.claimPriority);
  }

}
