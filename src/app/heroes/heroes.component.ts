import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();

  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(data => {
      this.heroes = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data()) as Hero
        } as Hero;

    }
    
    );
  });
          console.log("Length :: "+this.heroes.length)  

}
add(name: string): void {
  this.heroService.addHero({name}as Hero)

}

delete(heroId: string): void {
  this.heroService.deleteHero(heroId);
}
}  
    
  

  

