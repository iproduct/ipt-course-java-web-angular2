System.register(['angular2/core', './voter.component'], function(exports_1, context_1) {
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
    var core_1, voter_component_1;
    var VoteTakerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (voter_component_1_1) {
                voter_component_1 = voter_component_1_1;
            }],
        execute: function() {
            VoteTakerComponent = (function () {
                function VoteTakerComponent() {
                    this.agreed = 0;
                    this.disagreed = 0;
                    this.voters = ['Mr. IQ', 'Ms. Universe', 'Bombasto'];
                }
                VoteTakerComponent.prototype.onVoted = function (agreed) {
                    agreed ? this.agreed++ : this.disagreed++;
                };
                VoteTakerComponent = __decorate([
                    core_1.Component({
                        selector: 'vote-taker',
                        template: "\n    <h2>Should mankind colonize the Universe?</h2>\n    <h3>Agree: {{agreed}}, Disagree: {{disagreed}}</h3>\n    <my-voter *ngFor=\"#voter of voters\"\n      [name]=\"voter\"\n      (onVoted)=\"onVoted($event)\">\n    </my-voter>\n  ",
                        directives: [voter_component_1.VoterComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], VoteTakerComponent);
                return VoteTakerComponent;
            }());
            exports_1("VoteTakerComponent", VoteTakerComponent);
        }
    }
});
//# sourceMappingURL=vote-taker.componet.js.map