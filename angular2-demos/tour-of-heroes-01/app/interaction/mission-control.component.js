System.register(['angular2/core', './astronaut.component', './mission.service'], function(exports_1, context_1) {
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
    var core_1, astronaut_component_1, mission_service_1;
    var MissionControlComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (astronaut_component_1_1) {
                astronaut_component_1 = astronaut_component_1_1;
            },
            function (mission_service_1_1) {
                mission_service_1 = mission_service_1_1;
            }],
        execute: function() {
            MissionControlComponent = (function () {
                function MissionControlComponent(missionService) {
                    var _this = this;
                    this.missionService = missionService;
                    this.astronauts = ['Lovell', 'Swigert', 'Haise'];
                    this.history = [];
                    this.missions = ['Fly to the moon!',
                        'Fly to mars!',
                        'Fly to Vegas!'];
                    this.nextMission = 0;
                    missionService.missionConfirmed$.map(function (message) { return message.toUpperCase(); }).subscribe(function (astronaut) {
                        _this.history.push(astronaut + " confirmed the mission");
                    });
                }
                MissionControlComponent.prototype.announce = function () {
                    var mission = this.missions[this.nextMission++];
                    this.missionService.announceMission(mission);
                    this.history.push("Mission \"" + mission + "\" announced");
                    if (this.nextMission >= this.missions.length) {
                        this.nextMission = 0;
                    }
                };
                MissionControlComponent = __decorate([
                    core_1.Component({
                        selector: 'mission-control',
                        template: "\n    <h2>Mission Control</h2>\n    <button (click)=\"announce()\">Announce mission</button>\n    <my-astronaut *ngFor=\"#astronaut of astronauts\"\n      [astronaut]=\"astronaut\">\n    </my-astronaut>\n    <h3>History</h3>\n    <ul>\n      <li *ngFor=\"#event of history\">{{event}}</li>\n    </ul>\n  ",
                        directives: [astronaut_component_1.AstronautComponent],
                        providers: [mission_service_1.MissionService]
                    }), 
                    __metadata('design:paramtypes', [mission_service_1.MissionService])
                ], MissionControlComponent);
                return MissionControlComponent;
            }());
            exports_1("MissionControlComponent", MissionControlComponent);
        }
    }
});
//# sourceMappingURL=mission-control.component.js.map