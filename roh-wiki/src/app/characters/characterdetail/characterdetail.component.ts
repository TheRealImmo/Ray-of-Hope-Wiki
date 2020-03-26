import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../character.model';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-characterdetail',
  templateUrl: './characterdetail.component.html',
  styleUrls: ['./characterdetail.component.css']
})
export class CharacterdetailComponent implements OnInit {
  @Input() character: Character;

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
  }

  onAddToCharacterList() {
    this.characterService.addBackstoryToCharList(this.character.backstory);
  }

}
