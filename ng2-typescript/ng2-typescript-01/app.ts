//import console = require('./dom-console');
import {DomConsole} from './dom-console';

var con = new DomConsole("content");

    interface Person {
        firstname: string;
        lastname: string;
        getName(): string;
    }

    class Student implements Person {

        constructor(public firstname: string,
            private _middleinitial: string,
            public lastname: string) {
        }
        getName() {
            return this.firstname + " " + this._middleinitial + " " + this.lastname;
        }
    }

    class User implements Person {
        public firstname;
        public lastname;
        constructor(username: string, realname: string, public password: string) {
            this.firstname = username;
            this.lastname = realname;
        }
        getName() {
            return this.firstname + " : " + this.lastname;
        }
    }


    function greeter(person: Person) {
        return "Hello, " + person.getName();
    }

    var student = new Student("John", "Smith", "Johnson");
    var user = new User("john", "John Smith", "john123");


    
    con.log(greeter(user));

    enum Position { Developer = 1, QA, Manager };
    var position: string = Position[2];

    con.log(position);


    interface Adder {
        (a: number, b: number): number;
    }

    interface Addable {
        add: Adder;
    //    add(a: number, b: number): number;
    }
    
    var adder: Adder = function add(x, y) {
        return x + y;
    }

    class MathUtils implements Addable {
        add = function add(x, y) {
            return x + y;
        };
    }

    var utils = new MathUtils();
    con.log(utils.add(5, 7));

    interface Dictionary {
        [index: string]: string;
    } 

    interface DictionaryPlusLength {
        data: Dictionary;
        length: number;
    }


    class MyDictionary implements DictionaryPlusLength {
        data: Dictionary = { "a": "aaaaa", "b": "bbbbb" };
        length = 2;
    }

    interface Shape {
        color: string;
    }

    interface Square extends Shape {
        sideLength: number;
    }

    var square = <Square>{};
    console.log(square);
    square.color = "blue";
    square.sideLength = 10;      
    var sc2: Square = square;

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

    class Animal {
        name: string;
        constructor(theName: string) { this.name = theName; }
        move(meters: number = 0) {
            con.log(this.name + " moved " + meters + "m.");
        }
    }

    class Snake extends Animal {
        constructor(name: string) { super(name); }
        move(meters = 5) {
            con.log("Slithering...");
            super.move(meters);
        }
    }

    class Horse extends Snake {
        constructor(...name: string[]) { super(name[0]); }
        move(meters = 45) {
            con.log("Galloping...");
            super.move(meters);
        }
    }

    var sam = new Snake("Sammy the Python");
    var tom: Animal = new Horse("Tommy the Palomino");

    sam.move();
    tom.move(34)

    var passcode = "secret passcode";

    class Employee {
        private _fullName: string | number;

        get fullName(): string | number {
            return this._fullName;
        }

        set fullName(newName: string | number) {
            if (passcode && passcode == "secret passcode") {
                this._fullName = newName;
            }
            else {
                con.log("Error: Unauthorized update of employee!");
            }
        }
    }

    var employee = new Employee();
    employee.fullName = "Bob Smith";
    if (employee.fullName) {
        con.log(employee.fullName);
    }
    employee.fullName = 13;
    if (employee.fullName) {
        con.log(employee.fullName);
    }

    class Grid {
        static origin = { x: 0, y: 0 };
        calculateDistanceFromOrigin(point: { x: number; y: number; }) {
            var xDist = (point.x - Grid.origin.x);
            var yDist = (point.y - Grid.origin.y);
            return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
        }
        constructor(public scale: number) { }
    }

    var grid1 = new Grid(1.0);  // 1x scale
    var grid2 = new Grid(5.0);  // 5x scale

   con.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
   con.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));

    class Greeter {
        static standardGreeting = "Hello, there";
        greeting: string;
        greet() {
            if (this.greeting) {
                return "Hello, " + this.greeting;
            }
            else {
                return Greeter.standardGreeting;
            }
        }
    }

    var greeter1: Greeter;
    greeter1 = new Greeter();
    con.log(greeter1.greet());

    var greeterMaker: typeof Greeter = Greeter;
    greeterMaker.standardGreeting = "Hey there!";
    var greeter2: Greeter = new greeterMaker();
    con.log(greeter2.greet());

function identity<T>(arg: T): T {
    return arg;
    }

con.log(<Greeter>identity(new Greeter()));
var output = identity<Greeter>(new Greeter()); 

var myIdentity:  <U>(arg: U)=> U  = identity;

class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

var myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y; }
con.log(myGenericNumber.add(myGenericNumber.zeroValue, 5));

var stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = "";
stringNumeric.add = function (x, y) { return x + y; };

con.log(stringNumeric.add(stringNumeric.zeroValue, "test"));

interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);  // Now we know it has a .length property, so no more error
    return arg;
}

loggingIdentity({ length: 10, value: 3 }); 