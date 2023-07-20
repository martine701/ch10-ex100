import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <p>Length:{{title.length}}</p>
    <p>Reversed:{{getReversed(title)}}</p>

  `,
  styles: []
})
export class AppComponent {
  title = 'app works';
  getReversed(str: string) {
    let reverserd = '';
    for (let i = str.length; i >= 0; i--) {
      reverserd += str.substring(i, i + 1);
    }
    return reverserd;
  }
}

