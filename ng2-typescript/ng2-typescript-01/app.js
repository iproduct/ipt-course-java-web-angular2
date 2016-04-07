System.register(['./dom-console'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var dom_console_1;
    var con, Student, User, student, user, Position, position, adder, MathUtils, utils, MyDictionary, square, sc2, Animal, Snake, Horse, sam, tom, passcode, Employee, employee, Grid, grid1, grid2, Greeter, greeter1, greeterMaker, greeter2, output, myIdentity, GenericNumber, myGenericNumber, stringNumeric;
    function greeter(person) {
        return "Hello, " + person.getName();
    }
    function identity(arg) {
        return arg;
    }
    function loggingIdentity(arg) {
        console.log(arg.length); // Now we know it has a .length property, so no more error
        return arg;
    }
    return {
        setters:[
            function (dom_console_1_1) {
                dom_console_1 = dom_console_1_1;
            }],
        execute: function() {
            con = new dom_console_1.DomConsole("content");
            Student = (function () {
                function Student(firstname, _middleinitial, lastname) {
                    this.firstname = firstname;
                    this._middleinitial = _middleinitial;
                    this.lastname = lastname;
                }
                Student.prototype.getName = function () {
                    return this.firstname + " " + this._middleinitial + " " + this.lastname;
                };
                return Student;
            }());
            User = (function () {
                function User(username, realname, password) {
                    this.password = password;
                    this.firstname = username;
                    this.lastname = realname;
                }
                User.prototype.getName = function () {
                    return this.firstname + " : " + this.lastname;
                };
                return User;
            }());
            student = new Student("John", "Smith", "Johnson");
            user = new User("john", "John Smith", "john123");
            con.log(greeter(user));
            (function (Position) {
                Position[Position["Developer"] = 1] = "Developer";
                Position[Position["QA"] = 2] = "QA";
                Position[Position["Manager"] = 3] = "Manager";
            })(Position || (Position = {}));
            ;
            position = Position[2];
            con.log(position);
            adder = function add(x, y) {
                return x + y;
            };
            MathUtils = (function () {
                function MathUtils() {
                    this.add = function add(x, y) {
                        return x + y;
                    };
                }
                return MathUtils;
            }());
            utils = new MathUtils();
            con.log(utils.add(5, 7));
            MyDictionary = (function () {
                function MyDictionary() {
                    this.data = { "a": "aaaaa", "b": "bbbbb" };
                    this.length = 2;
                }
                return MyDictionary;
            }());
            square = {};
            console.log(square);
            square.color = "blue";
            square.sideLength = 10;
            sc2 = square;
            /*interface Counter {
                (delta: number): string;
                interval: number;
                reset(): void;
            }
        
            var f: any = function (n) {
                return "" + this.counter;
            };
            f.counter = 0;
            f.interval = 10;
        
            f.reset = function () {
                this.counter = 0;
            }
            var c: Counter = f;
        
            c(10);
            c.reset();
            c.interval = 5.0;*/
            Animal = (function () {
                function Animal(theName) {
                    this.name = theName;
                }
                Animal.prototype.move = function (meters) {
                    if (meters === void 0) { meters = 0; }
                    con.log(this.name + " moved " + meters + "m.");
                };
                return Animal;
            }());
            Snake = (function (_super) {
                __extends(Snake, _super);
                function Snake(name) {
                    _super.call(this, name);
                }
                Snake.prototype.move = function (meters) {
                    if (meters === void 0) { meters = 5; }
                    con.log("Slithering...");
                    _super.prototype.move.call(this, meters);
                };
                return Snake;
            }(Animal));
            Horse = (function (_super) {
                __extends(Horse, _super);
                function Horse() {
                    var name = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        name[_i - 0] = arguments[_i];
                    }
                    _super.call(this, name[0]);
                }
                Horse.prototype.move = function (meters) {
                    if (meters === void 0) { meters = 45; }
                    con.log("Galloping...");
                    _super.prototype.move.call(this, meters);
                };
                return Horse;
            }(Snake));
            sam = new Snake("Sammy the Python");
            tom = new Horse("Tommy the Palomino");
            sam.move();
            tom.move(34);
            passcode = "secret passcode";
            Employee = (function () {
                function Employee() {
                }
                Object.defineProperty(Employee.prototype, "fullName", {
                    get: function () {
                        return this._fullName;
                    },
                    set: function (newName) {
                        if (passcode && passcode == "secret passcode") {
                            this._fullName = newName;
                        }
                        else {
                            con.log("Error: Unauthorized update of employee!");
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                return Employee;
            }());
            employee = new Employee();
            employee.fullName = "Bob Smith";
            if (employee.fullName) {
                con.log(employee.fullName);
            }
            employee.fullName = 13;
            if (employee.fullName) {
                con.log(employee.fullName);
            }
            Grid = (function () {
                function Grid(scale) {
                    this.scale = scale;
                }
                Grid.prototype.calculateDistanceFromOrigin = function (point) {
                    var xDist = (point.x - Grid.origin.x);
                    var yDist = (point.y - Grid.origin.y);
                    return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
                };
                Grid.origin = { x: 0, y: 0 };
                return Grid;
            }());
            grid1 = new Grid(1.0); // 1x scale
            grid2 = new Grid(5.0); // 5x scale
            con.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
            con.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));
            Greeter = (function () {
                function Greeter() {
                }
                Greeter.prototype.greet = function () {
                    if (this.greeting) {
                        return "Hello, " + this.greeting;
                    }
                    else {
                        return Greeter.standardGreeting;
                    }
                };
                Greeter.standardGreeting = "Hello, there";
                return Greeter;
            }());
            greeter1 = new Greeter();
            con.log(greeter1.greet());
            greeterMaker = Greeter;
            greeterMaker.standardGreeting = "Hey there!";
            greeter2 = new greeterMaker();
            con.log(greeter2.greet());
            con.log(identity(new Greeter()));
            output = identity(new Greeter());
            myIdentity = identity;
            GenericNumber = (function () {
                function GenericNumber() {
                }
                return GenericNumber;
            }());
            myGenericNumber = new GenericNumber();
            myGenericNumber.zeroValue = 0;
            myGenericNumber.add = function (x, y) { return x + y; };
            con.log(myGenericNumber.add(myGenericNumber.zeroValue, 5));
            stringNumeric = new GenericNumber();
            stringNumeric.zeroValue = "";
            stringNumeric.add = function (x, y) { return x + y; };
            con.log(stringNumeric.add(stringNumeric.zeroValue, "test"));
            loggingIdentity({ length: 10, value: 3 });
        }
    }
});
//# sourceMappingURL=app.js.map