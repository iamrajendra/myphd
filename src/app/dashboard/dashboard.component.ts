import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {  }

  ngOnInit() {
     this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(data => {
      this.heroes = data.slice(0,4).map(e => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data()) as Hero
        } as Hero;

    }
    
    );
  });
          console.log("Length :: "+this.heroes.length)  

}
}