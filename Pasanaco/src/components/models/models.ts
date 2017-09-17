import { Component } from '@angular/core';

/**
 * Generated class for the ModelsComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'models',
  templateUrl: 'models.html'
})
export class ModelsComponent {

  text: string;

  constructor() {
    console.log('Hello ModelsComponent Component');
    this.text = 'Hello World';
  }

}
