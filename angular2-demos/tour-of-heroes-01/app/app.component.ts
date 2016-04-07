import { Component, provide }       from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS }
                           from 'angular2/router';
import { HeroHttpService }     from './hero-http.service';
import { HeroService }     from './hero.service';
import { HeroesComponent } from './heroes.component';
import {HeroDetailComponent} from './hero-detail.component';
import {DashboardComponent} from './dashboard.component';
import {routerConfig} from './router-config';
import {LoggerService} from './logger.service';
import {HTTP_PROVIDERS, XHRBackend}    from 'angular2/http';
// in-memory web api imports
import {InMemoryBackendService, SEED_DATA}
                from 'a2-in-memory-web-api/core';
import {HeroData} from './hero-data';


@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <nav>
        <a [routerLink]="['Dashboard']">Dashboard</a>
        <a [routerLink]="['Heroes']">Heroes</a>
        <a [routerLink]="['HeroForm']">Add Hero</a>
        <a [routerLink]="['HeroMaster']">Hero Master</a>
    </nav>
    <router-outlet></router-outlet>
  `,
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS, HTTP_PROVIDERS,
        // in-memory web api providers
        provide(XHRBackend, { useClass: InMemoryBackendService }), // in-mem server
        provide(SEED_DATA, { useClass: HeroData }), // in-mem server data
        provide(HeroService, { useClass: HeroHttpService }), LoggerService]
})
@RouteConfig(routerConfig)
export class AppComponent {
    title = 'Tour of Heroes';
}