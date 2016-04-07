System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var HeroChildComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HeroChildComponent = (function () {
                function HeroChildComponent() {
                }
                Object.defineProperty(HeroChildComponent.prototype, "name", {
                    get: function () { return this._name; },
                    set: function (name) {
                        this._name = (name && name.trim()) || '<no name set>';
                    },
                    enumerable: true,
                    configurable: true
                });
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], HeroChildComponent.prototype, "master", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String), 
                    __metadata('design:paramtypes', [String])
                ], HeroChildComponent.prototype, "name", null);
                HeroChildComponent = __decorate([
                    core_1.Component({
                        selector: 'hero-child',
                        template: "\n    <h3>{{name}} says:</h3>\n    <p>I, {{name}}, am at your service, {{master}}.</p>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], HeroChildComponent);
                return HeroChildComponent;
            }());
            exports_1("HeroChildComponent", HeroChildComponent);
        }
    }
});
//# sourceMappingURL=hero-child.component.js.map