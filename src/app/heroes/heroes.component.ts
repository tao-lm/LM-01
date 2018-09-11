import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
//import { HEROES } from '../mock-heroes';//导入HEROES,采用服务时，无需导入
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
// export class HeroesComponent implements OnInit {

//   //heroes = HEROES;//直接赋值
//   heroes: Hero[];//声明

//   selectedHero: Hero;


//   constructor(private heroService: HeroService) { }

//   // getHeroes(): void {//从服务中获取英雄
//   //   this.heroes = this.heroService.getHeroes();//同步操作
//   // }
//   getHeroes(): void {
//     this.heroService.getHeroes()
//         .subscribe(heroes => this.heroes = heroes);//异步
//   }

//   ngOnInit() {
//     this.getHeroes();
//   }

//   onSelect(hero: Hero): void {
//     this.selectedHero = hero;
//   }

// }

export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
}