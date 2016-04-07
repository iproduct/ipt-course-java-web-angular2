import {Injectable} from 'angular2/core';
import {HEROES} from './mock-heroes';
import {LoggerService} from './logger.service';
import {HeroService} from './hero.service';
import {Hero} from './hero';

@Injectable()
export class HeroMockupService implements HeroService {
    constructor(private _logger: LoggerService) { }
    getHeroes() {
        return Promise.resolve(HEROES)
            .then(heroes => { this._logger.log(heroes); return heroes; })
            .catch(error => { this._logger.log(error); return error; });
    }

    getHero(id: number) {
        return Promise.resolve(HEROES).then(
            heroes => heroes.filter(hero => hero.id === id)[0]
        );
    }
    addHero(name: string): Promise<Hero> {
        let nextHeroId = HEROES.reduce((prevMaxId, next) =>
            next.id > prevMaxId ? next.id : prevMaxId, 0) + 1;
        let newHero = new Hero(nextHeroId, name);
        HEROES.push(newHero);
        return Promise.resolve(newHero);
    }

    editHero(hero: Hero): Promise < void> {
        for(let i = 0; i < HEROES.length; i++) {
            if (HEROES[i].id === hero.id) {
                HEROES[i] = hero;
                return Promise.resolve();
            }
        }
        return Promise.reject('Error updating  hero '
            + hero.id + ":" + hero.name + ' - hero ID not found');
    }
}