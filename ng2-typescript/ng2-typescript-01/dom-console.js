System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var DomConsole;
    return {
        setters:[],
        execute: function() {
            DomConsole = (function () {
                function DomConsole(elementId) {
                    this.domElement = document.getElementById(elementId);
                }
                DomConsole.prototype.log = function () {
                    var _this = this;
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i - 0] = arguments[_i];
                    }
                    args.forEach(function (value) { return _this.domElement.innerHTML += "" + value; });
                    this.domElement.innerHTML += "<br>";
                };
                return DomConsole;
            }());
            exports_1("DomConsole", DomConsole);
        }
    }
});
//# sourceMappingURL=dom-console.js.map