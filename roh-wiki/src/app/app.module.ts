import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CharactersComponent } from './characters/characters.component';
import { EnemiesComponent } from './enemies/enemies.component';
import { CharacterlistComponent } from './characters/characterlist/characterlist.component';
import { EnemylistComponent } from './enemies/enemylist/enemylist.component';
import { CharacterdetailComponent } from './characters/characterdetail/characterdetail.component';
import { BackstoryComponent } from './backstory/backstory.component';
import { BackstoryEditComponent } from './backstory/backstory-edit/backstory-edit.component';
import { CharacterOverviewComponent } from './characters/characterlist/character-overview/character-overview.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { BackstoryService } from './backstory/backstory.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CharactersComponent,
    EnemiesComponent,
    CharacterlistComponent,
    EnemylistComponent,
    CharacterdetailComponent,
    BackstoryComponent,
    BackstoryEditComponent,
    CharacterOverviewComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [BackstoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
