import {Component, OnInit, Inject} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {HeroService} from './hero.service';
import {Hero} from './hero';

@Component({
    selector: 'my-hero-detail',
    inputs: ['hero'],
    template: `
  <div *ngIf="hero">
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name" (blur)='onSubmit()'/>
    </div>
     <button (click)="goBack()">Back</button>
  </div>
`

})
export class HeroDetailComponent {
    constructor(
        private _heroService: HeroService,
        private _routeParams: RouteParams) {}
    hero: Hero;
    ngOnInit() {
        let id = +this._routeParams.get('id');
        this._heroService.getHero(id)
            .then(hero => this.hero = hero);
    }
    goBack() {
        window.history.back();
    }
    model = new Hero(18, 'Dr IQ', 'superstorng', 'Chuck Overstreet');
    submitted = false;
    onSubmit() {
        this._heroService.editHero(this.hero);
    this.submitted = true;
    }
    // Reset the form with a new hero AND restore 'pristine' class state
    // by toggling 'active' flag which causes the form
    // to be removed/re-added in a tick via NgIf
    // TODO: Workaround until NgForm has a reset method (#6822)
    active = true;
    newHero() {
        this.model = new Hero(42, '', '');
        this.active = false;
        setTimeout(()=> this.active=true, 0);
    }
}
