import { Component, OnInit } from '@angular/core';
import { Character } from './character.model';
import { CharacterService } from './character.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
  providers: [CharacterService]
})
export class CharactersComponent implements OnInit {
  selectedCharacter: Character;

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    this.characterService.characterSelected.subscribe((character: Character) => { this.selectedCharacter = character });
  }

}
