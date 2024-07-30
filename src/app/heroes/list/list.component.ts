import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {


  public heroesNames: string[] = ['spiderman', 'ironman', 'hulk','she hulk', 'thor'];
  public deletedHero?: string;

removeLastHeroe():void {
  this.deletedHero = this.heroesNames.pop();
  //console.log(deletedHero)
}


}
