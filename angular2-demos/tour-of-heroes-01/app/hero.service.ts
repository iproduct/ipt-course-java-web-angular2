import {Hero} from './hero';


export abstract class HeroService {
    abstract getHeroes(): Promise<Hero[]>;
    abstract getHero(id: number): Promise<Hero>;
    abstract addHero(name: string): Promise<Hero>;
    abstract editHero(hero: Hero): Promise<void>;

}