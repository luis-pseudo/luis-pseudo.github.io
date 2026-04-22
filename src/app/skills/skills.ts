import { Component } from '@angular/core';
import { SkillsService } from '../services/skills-service/skills';
@Component({
  selector: 'app-skills',
  standalone: false,
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class SkillsComponent {

  constructor(public skillsService: SkillsService) {
    console.log(this.skillsService);
  }

}
