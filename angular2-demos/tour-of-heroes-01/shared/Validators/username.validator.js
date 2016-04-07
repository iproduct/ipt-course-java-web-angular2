System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var UsernameValidator;
    return {
        setters:[],
        execute: function() {
            UsernameValidator = (function () {
                function UsernameValidator() {
                }
                UsernameValidator.startsWithNumber = function (control) {
                    if (control.value != "" && !isNaN(control.value.charAt(0))) {
                        return { "startsWithNumber": true };
                    }
                    return null;
                };
                UsernameValidator.usernameTaken = function (control) {
                    return new Promise(function (resolve, reject) {
                        setTimeout(function () {
                            if (control.value === "David") {
                                resolve({ "usernameTaken": true });
                            }
                            else {
                                resolve(null);
                            }
                            ;
                        }, 1000);
                    });
                };
                return UsernameValidator;
            }());
            exports_1("UsernameValidator", UsernameValidator);
        }
    }
});
//# sourceMappingURL=username.validator.js.map