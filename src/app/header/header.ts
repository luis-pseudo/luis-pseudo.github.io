import { Component } from '@angular/core';
import { HeaderService } from '../services/header-service/header';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class HeaderComponent {
	constructor(public headerService: HeaderService)
	{
		console.log(this.headerService);
	}
}
