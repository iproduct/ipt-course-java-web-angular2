System.register(['angular2/core', './mock-heroes', './logger.service', './hero'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, mock_heroes_1, logger_service_1, hero_1;
    var HeroMockupService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mock_heroes_1_1) {
                mock_heroes_1 = mock_heroes_1_1;
            },
            function (logger_service_1_1) {
                logger_service_1 = logger_service_1_1;
            },
            function (hero_1_1) {
                hero_1 = hero_1_1;
            }],
        execute: function() {
            HeroMockupService = (function () {
                function HeroMockupService(_logger) {
                    this._logger = _logger;
                }
                HeroMockupService.prototype.getHeroes = function () {
                    var _this = this;
                    return Promise.resolve(mock_heroes_1.HEROES)
                        .then(function (heroes) { _this._logger.log(heroes); return heroes; })
                        .catch(function (error) { _this._logger.log(error); return error; });
                };
                HeroMockupService.prototype.getHero = function (id) {
                    return Promise.resolve(mock_heroes_1.HEROES).then(function (heroes) { return heroes.filter(function (hero) { return hero.id === id; })[0]; });
                };
                HeroMockupService.prototype.addHero = function (name) {
                    var nextHeroId = mock_heroes_1.HEROES.reduce(function (prevMaxId, next) {
                        return next.id > prevMaxId ? next.id : prevMaxId;
                    }, 0) + 1;
                    var newHero = new hero_1.Hero(nextHeroId, name);
                    mock_heroes_1.HEROES.push(newHero);
                    return Promise.resolve(newHero);
                };
                HeroMockupService.prototype.editHero = function (hero) {
                    for (var i = 0; i < mock_heroes_1.HEROES.length; i++) {
                        if (mock_heroes_1.HEROES[i].id === hero.id) {
                            mock_heroes_1.HEROES[i] = hero;
                            return Promise.resolve();
                        }
                    }
                    return Promise.reject('Error updating  hero '
                        + hero.id + ":" + hero.name + ' - hero ID not found');
                };
                HeroMockupService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [logger_service_1.LoggerService])
                ], HeroMockupService);
                return HeroMockupService;
            }());
            exports_1("HeroMockupService", HeroMockupService);
        }
    }
});
//# sourceMappingURL=hero-mockup.service.js.map