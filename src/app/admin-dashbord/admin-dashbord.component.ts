import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashbord',
  templateUrl: './admin-dashbord.component.html',
  styleUrls: ['./admin-dashbord.component.scss'],
})
export class AdminDashbordComponent  implements OnInit {

  // Définition des tableaux de données pour afficher les statistiques
  claimCountBySector: { sector: string, count: number }[] = [
    { sector: 'Secteur A', count: 10 },
    { sector: 'Secteur B', count: 15 },
    { sector: 'Secteur C', count: 20 },
  ];

  claimCountByCategory: { category: string, count: number }[] = [
    { category: 'Catégorie X', count: 8 },
    { category: 'Catégorie Y', count: 12 },
    { category: 'Catégorie Z', count: 18 },
  ];

  constructor() {}

  ngOnInit() {
    // Initialisation du composant
    console.log('Le composant du tableau de bord administrateur a été initialisé.');
  }

}
