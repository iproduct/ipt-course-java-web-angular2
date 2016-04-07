System.register(['angular2/core', 'angular2/http', 'rxjs/Observable', './hero', 'rxjs/Rx', './logger.service'], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1, hero_1, logger_service_1;
    var HeroHttpService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (hero_1_1) {
                hero_1 = hero_1_1;
            },
            function (_1) {},
            function (logger_service_1_1) {
                logger_service_1 = logger_service_1_1;
            }],
        execute: function() {
            HeroHttpService = (function () {
                function HeroHttpService(_http, _logger) {
                    this._http = _http;
                    this._logger = _logger;
                    this._heroesUrl = 'app/heroes'; // URL to web api
                    this._heroes = [];
                }
                HeroHttpService.prototype.getHeroes = function () {
                    var _this = this;
                    return this._http.get(this._heroesUrl)
                        .map(function (response) { return response.json().data; })
                        .do(function (heroes) { return _this._heroes = heroes; })
                        .do(function (data) { return _this._logger.log(data); }) // eyeball results in the console
                        .catch(this.handleErrorObservable).toPromise();
                };
                HeroHttpService.prototype.handleErrorObservable = function (error) {
                    // in a real world app, we may send the error to some remote logging infrastructure
                    // instead of just logging it to the console
                    this._logger.log(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                HeroHttpService.prototype.getCachedHeroes = function () {
                    return this._heroes ? Promise.resolve(this._heroes) : this.getHeroes();
                };
                HeroHttpService.prototype.getHero = function (id) {
                    return Promise.resolve(this.getCachedHeroes())
                        .then(function (heroes) { return heroes.filter(function (hero) { return hero.id === id; })[0]; });
                };
                HeroHttpService.prototype.addHero = function (name) {
                    var _this = this;
                    return this.getCachedHeroes()
                        .then(function (heroes) {
                        //calculate next hero id
                        var nextHeroId = heroes.reduce(function (prevMaxId, next) {
                            return next.id > prevMaxId ? next.id : prevMaxId;
                        }, 0) + 1;
                        var newHero = new hero_1.Hero(nextHeroId, name);
                        var body = JSON.stringify({ name: name });
                        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                        var options = new http_1.RequestOptions({ headers: headers });
                        return _this._http.post(_this._heroesUrl, body, options)
                            .toPromise()
                            .then(function (res) { return res.json().data; })
                            .catch(_this.handleErrorPromise);
                    });
                };
                HeroHttpService.prototype.editHero = function (hero) {
                    var body = JSON.stringify(hero);
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this._http.put(this._heroesUrl + "/" + hero.id, body, options)
                        .toPromise()
                        .then(function (response) {
                        console.log(response);
                        if (response.status == 204)
                            return Promise.resolve();
                        else
                            return Promise.reject('Error updating  hero '
                                + hero.id + ":" + hero.name + ' - status code: '
                                + response.status);
                    })
                        .catch(this.handleErrorPromise);
                };
                HeroHttpService.prototype.handleErrorPromise = function (error) {
                    // in a real world app, we may send the error to some remote logging infrastructure
                    // instead of just logging it to the console
                    console.error(error);
                    return Promise.reject(error.message || error.json().error || 'Server error');
                };
                HeroHttpService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, logger_service_1.LoggerService])
                ], HeroHttpService);
                return HeroHttpService;
            }());
            exports_1("HeroHttpService", HeroHttpService);
        }
    }
});
//# sourceMappingURL=hero-http.service.js.map