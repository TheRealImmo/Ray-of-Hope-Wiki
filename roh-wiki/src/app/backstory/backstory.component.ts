import { Component, OnInit } from '@angular/core';
import { Backstory } from '../shared/backstory.model';
import { BackstoryService } from './backstory.service';

@Component({
  selector: 'app-backstory',
  templateUrl: './backstory.component.html',
  styleUrls: ['./backstory.component.css']
})
export class BackstoryComponent implements OnInit {
  backstory: Backstory[];

  constructor(private backstoryService: BackstoryService) { }

  ngOnInit() {
    this.backstory = this.backstoryService.getBackstories();
    this.backstoryService.backstoryChanged.subscribe((backstory: Backstory[]) => { this.backstory = backstory });
  }

}
