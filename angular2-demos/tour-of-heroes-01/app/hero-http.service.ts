import {Injectable} from 'angular2/core';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import {Hero} from './hero';
import 'rxjs/Rx';
import {LoggerService} from './logger.service';
import {HeroService} from './hero.service';


@Injectable()
export class HeroHttpService implements HeroService {
    private _heroesUrl = 'app/heroes';  // URL to web api
    private _heroes: Hero[] = [];
    constructor(private _http: Http, private _logger: LoggerService) { }
    getHeroes(): Promise<Hero[]> {
        return this._http.get(this._heroesUrl)
            .map(response => <Hero[]>response.json().data)
            .do(heroes => this._heroes = heroes)
            .do(data => this._logger.log(data)) // eyeball results in the console
            .catch(this.handleErrorObservable).toPromise();
    }

    private handleErrorObservable(error: Response) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        this._logger.log(error)
        return Observable.throw(error.json().error || 'Server error');
    }

    private getCachedHeroes(): Promise<Hero[]> {
        return this._heroes ? Promise.resolve(this._heroes) : this.getHeroes();
    }

    getHero(id: number): Promise<Hero> {
        return Promise.resolve(this.getCachedHeroes())
            .then(heroes => heroes.filter(hero => hero.id === id)[0]);
    }

    addHero(name: string): Promise<Hero> {

        return this.getCachedHeroes()
            .then(heroes => {
                //calculate next hero id
                let nextHeroId = heroes.reduce((prevMaxId, next) =>
                    next.id > prevMaxId ? next.id : prevMaxId, 0) + 1;
                let newHero = new Hero(nextHeroId, name);
                let body = JSON.stringify({ name });
                let headers = new Headers({ 'Content-Type': 'application/json' });
                let options = new RequestOptions({ headers: headers });
                return this._http.post(this._heroesUrl, body, options)
                    .toPromise()
                    .then(res => <Hero>res.json().data)
                    .catch(this.handleErrorPromise);
            });
    }

    editHero(hero: Hero): Promise<void> {
        let body = JSON.stringify(hero);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.put(this._heroesUrl + "/" + hero.id, body, options)
            .toPromise()
            .then(response => {
                console.log(response);
                if (response.status == 204) // No content
                    return Promise.resolve();
                else
                    return Promise.reject('Error updating  hero '
                        + hero.id + ":" + hero.name + ' - status code: '
                        + response.status
                    );
            })
            .catch(this.handleErrorPromise);
    }

    private handleErrorPromise(error: any) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Promise.reject(error.message || error.json().error || 'Server error');
    }
}