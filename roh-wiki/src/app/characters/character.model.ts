import { Backstory } from '../shared/backstory.model';

export class Character {
  public name: string;
  public description: string;
  public imagePath: string;
  public backstory: Backstory[];

  constructor(name: string, desc: string, imagePath: string, backstory: Backstory[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.backstory = backstory;
  }
}
