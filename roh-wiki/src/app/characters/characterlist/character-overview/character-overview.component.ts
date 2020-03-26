import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../../character.model';
import { CharacterService } from '../../character.service';

@Component({
  selector: 'app-character-overview',
  templateUrl: './character-overview.component.html',
  styleUrls: ['./character-overview.component.css']
})
export class CharacterOverviewComponent implements OnInit {
  @Input() character: Character;

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
  }

  onSelected() {
    this.characterService.characterSelected.emit(this.character);
  }

}
