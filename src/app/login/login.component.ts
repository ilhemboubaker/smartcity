import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {

  email: string = '';
  password: string = '';

  constructor() {
    this.email = '';
    this.password = '';
  }

  ngOnInit() {
    // Initialisation du composant
    console.log('Le composant de connexion a été initialisé.');
  }

  onSubmit() {
    // Validation du formulaire
    if (!this.email || !this.password) {
      alert('Veuillez remplir tous les champs.');
      return;
    }

    // Envoyer les données de connexion au serveur
    console.log('Email:', this.email);
    console.log('Mot de passe:', this.password);
  }

}
