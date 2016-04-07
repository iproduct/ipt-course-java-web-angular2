System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Disposable, Activatable, SmartObject, smartObj;
    ////////////////////////////////////////
    // In your runtime library somewhere
    ////////////////////////////////////////
    function applyMixins(derivedCtor, baseCtors) {
        baseCtors.forEach(function (baseCtor) {
            Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
                if (!derivedCtor.prototype[name])
                    derivedCtor.prototype[name] = baseCtor.prototype[name];
            });
        });
    }
    return {
        setters:[],
        execute: function() {
            // Disposable Mixin
            Disposable = (function () {
                function Disposable() {
                }
                Disposable.prototype.dispose = function () {
                    this.isDisposed = true;
                };
                return Disposable;
            }());
            // Activatable Mixin
            Activatable = (function () {
                function Activatable() {
                }
                Activatable.prototype.activate = function () {
                    this.isActive = true;
                };
                Activatable.prototype.deactivate = function () {
                    this.isActive = false;
                };
                return Activatable;
            }());
            SmartObject = (function () {
                function SmartObject() {
                    var _this = this;
                    // Disposable
                    this.isDisposed = false;
                    // Activatable
                    this.isActive = false;
                    this.interval =
                        setInterval(function () { return console.log(_this.isActive + " : " + _this.isDisposed); }, 500);
                }
                SmartObject.prototype.interact = function () {
                    this.activate();
                };
                SmartObject.prototype.dispose = function () {
                    clearInterval(this.interval);
                    this.isDisposed = true;
                };
                ;
                return SmartObject;
            }());
            applyMixins(SmartObject, [Disposable, Activatable]);
            smartObj = new SmartObject();
            setTimeout(function () { return smartObj.interact(); }, 1000);
            setTimeout(function () { return smartObj.dispose(); }, 5000);
        }
    }
});
//# sourceMappingURL=mixins.js.map