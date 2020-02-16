import { Component, OnInit } from '@angular/core';
import { Character } from '../character.model';

@Component({
  selector: 'app-characterlist',
  templateUrl: './characterlist.component.html',
  styleUrls: ['./characterlist.component.css']
})
export class CharacterlistComponent implements OnInit {
  characters: Character[] = [
    new Character('Ray', 'Infos über Ray', './assets/Bilder/Ray.png'),
    new Character('Conny', 'Infos über Conny', './assets/Bilder/Conny.png'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
