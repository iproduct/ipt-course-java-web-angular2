import { HeroesComponent } from './heroes.component';
import {HeroDetailComponent} from './hero-detail.component';
import {DashboardComponent} from './dashboard.component';
import {ClickMeComponent} from './click-me.component';
import {WikiComponent} from './wiki/wiki.component';
import {HeroFormComponent} from './hero-form.component';
import { VoteTakerComponent } from './interaction/vote-taker.componet';
import { MissionControlComponent }from './interaction/mission-control.component';
import { HeroAsyncMessageComponent} from './pipes/hero-async-message.component';

export var routerConfig =
[
  {
    path: '/heroes',
    name: 'Heroes',
    component: HeroesComponent,
    useAsDefault: true
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,

  },
  {
    path:
    '/detail/:id',
    name: 'HeroDetail',
    component: HeroDetailComponent
  }, 
  {
      path: '/clickme',
      name: 'ClickMe',
      component: ClickMeComponent,
  },
  {
      path: '/wiki/wiki',
      name: 'Wiki',
      component: WikiComponent,
  },
  {
      path: '/heroes/new',
      name: 'HeroForm',
      component: HeroFormComponent
  },
  {
      path: '/heroes/master',
      name: 'HeroMaster',
      component: MissionControlComponent
  },
  {
      path: '/pipes',
      name: 'Pipes',
      component: HeroAsyncMessageComponent,
  }
];
