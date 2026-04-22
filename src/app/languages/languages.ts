import { Component } from '@angular/core';
import { LanguagesService } from '../services/languages-service/languages';
@Component({
  selector: 'app-languages',
  standalone: false,
  templateUrl: './languages.html',
  styleUrl: './languages.scss',
})
export class LanguagesComponent {

  constructor(public languagesService: LanguagesService) {
    console.log(this.languagesService);
  }

}
