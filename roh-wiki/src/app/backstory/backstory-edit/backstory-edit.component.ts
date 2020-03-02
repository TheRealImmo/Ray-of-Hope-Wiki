import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Backstory } from 'src/app/shared/backstory.model';

@Component({
  selector: 'app-backstory-edit',
  templateUrl: './backstory-edit.component.html',
  styleUrls: ['./backstory-edit.component.css']
})
export class BackstoryEditComponent implements OnInit {
  @ViewChild('nameInput', { static: true }) nameInputRef: ElementRef;
  @ViewChild('infoInput', { static: true }) infoInputRef: ElementRef;
  @Output() infoAdded = new EventEmitter<Backstory>();

  constructor() { }

  ngOnInit() {
  }

  onAddChar() {
    const infoCharName = this.nameInputRef.nativeElement.value;
    const infoText = this.infoInputRef.nativeElement.value;
    const newBackstory = new Backstory(infoCharName, infoText);
    this.infoAdded.emit(newBackstory);
  }

  onDeleteChar() {

  }

  onCancel() {

  }
}
