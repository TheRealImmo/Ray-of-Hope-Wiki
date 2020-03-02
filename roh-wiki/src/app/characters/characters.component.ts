import { Component, OnInit } from '@angular/core';
import { Character } from './character.model';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  selectedCharacter: Character;

  constructor() { }

  ngOnInit() {
  }

}
