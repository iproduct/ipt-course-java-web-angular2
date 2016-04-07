import { Component } from 'angular2/core';

@Component({
    selector: 'loop-back',
    template: `
    <input #box (keyup)="null">
    <p>{{box.value}}</p>
  `
})
export class LoopbackComponent { }

@Component({
    selector: 'key-up',
    template: `
    <input #newHero (keyup.enter)="values=newHero.value"
                (blur)="addHero(newHero.value); newHero.value='' ">
    <p>{{values}}</p>
  `
})
export class KeyUpComponent {
    values = '';
    addHero(name: string) {
        this.values += name + ' | ';
    }
}

@Component({
    selector: 'click-me',
    directives: [KeyUpComponent],
   template: `
    <input (keyup)="onKey($event)">
    <p>{{values }}</p>
    <div><key-up></key-up></div>
`
})
export class ClickMeComponent {
    values = '';

    // without strong typing
    onKey(event: KeyboardEvent) {
        this.values += (<HTMLInputElement>event.target).value + ' | ';
    }
}

