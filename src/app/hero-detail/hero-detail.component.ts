import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { map } from 'rxjs/internal/operators/map';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    console.log("Hero Detail");
       const id = this.route.snapshot.paramMap.get('id');

  this.heroService.getHeroById(id).valueChanges();
   
   

          }    
  }
             
  

  
  // save(): void {
  //   this.heroService.updateHero(this.hero)
  //     .subscribe(() => this.goBack());
  // }
