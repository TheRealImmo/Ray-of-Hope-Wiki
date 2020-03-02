import { Component, OnInit } from '@angular/core';
import { Backstory } from '../shared/backstory.model';

@Component({
  selector: 'app-backstory',
  templateUrl: './backstory.component.html',
  styleUrls: ['./backstory.component.css']
})
export class BackstoryComponent implements OnInit {
  backstory: Backstory[] = [
    new Backstory('Ray', 'Namensgeber des Spiels'),
    new Backstory('Conny', 'Spontane Idee'),

  ];
  constructor() { }

  ngOnInit() {
  }

  onBackstoryAdded(backstory: Backstory) {
    this.backstory.push(backstory);
  }

}
