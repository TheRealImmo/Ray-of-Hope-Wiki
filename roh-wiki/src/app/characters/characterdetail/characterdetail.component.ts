import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../character.model';

@Component({
  selector: 'app-characterdetail',
  templateUrl: './characterdetail.component.html',
  styleUrls: ['./characterdetail.component.css']
})
export class CharacterdetailComponent implements OnInit {
  @Input() character: Character;

  constructor() { }

  ngOnInit() {
  }

}
