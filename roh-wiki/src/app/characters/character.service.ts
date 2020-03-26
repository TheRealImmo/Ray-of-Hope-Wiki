import { Character } from './character.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Backstory } from '../shared/backstory.model';
import { BackstoryService } from '../backstory/backstory.service';

@Injectable({ providedIn: 'root' })
export class CharacterService {
  characterSelected = new EventEmitter<Character>();

  private characters: Character[] = [
    new Character('Ray', 'Protagonist des Spiels', './assets/Bilder/Ray.png', [
      new Backstory('Name', 'Wortspiel aus dem Englischen "Lichtstrahl" und dem echten Vornamen "Ray".'),
      new Backstory('Herkunft', 'Ray wurde in dem kleinen Dorf Tyria geboren und wuchs dort sein Leben lang auf.')
    ]),
    new Character('Conny', 'Rays kleine Schwester', './assets/Bilder/Conny.png',
      [
        new Backstory('Name', 'Der Name war eine spontane Idee.'),
        new Backstory('Herkunft', 'Conny wurde in dem kleinen Dorf Tyria geboren und wuchs dort sein Leben lang auf.')
      ]),
  ];

  constructor(private backstoryService: BackstoryService) { }

  getCharacters() {
    return this.characters.slice();
  }

  addBackstoryToCharList(backstory: Backstory[]) {
    this.backstoryService.addBackstories(backstory);
  }
}
