import { Backstory } from '../shared/backstory.model';
import { EventEmitter } from '@angular/core';

export class BackstoryService {
  backstoryChanged = new EventEmitter<Backstory[]>();
  private backstories: Backstory[] = [
    new Backstory('Ray', 'Namensgeber des Spiels'),
    new Backstory('Conny', 'Spontane Idee'),

  ];

  getBackstories() {
    return this.backstories.slice();
  }

  addBackstory(backstory: Backstory) {
    this.backstories.push(backstory);
    this.backstoryChanged.emit(this.backstories.slice());
  }

  addBackstories(backstory: Backstory[]) {
    this.backstories.push(...backstory);
    this.backstoryChanged.emit(this.backstories.slice());
  }
}
