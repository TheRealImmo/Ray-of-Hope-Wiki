import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CharactersComponent } from './characters/characters.component';
import { EnemiesComponent } from './enemies/enemies.component';
import { CharacterlistComponent } from './characters/characterlist/characterlist.component';
import { EnemylistComponent } from './enemies/enemylist/enemylist.component';
import { CharacterdetailComponent } from './characters/characterdetail/characterdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CharactersComponent,
    EnemiesComponent,
    CharacterlistComponent,
    EnemylistComponent,
    CharacterdetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
