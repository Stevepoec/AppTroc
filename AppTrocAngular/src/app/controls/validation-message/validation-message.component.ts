import { Component, Input } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'validation-message',
  templateUrl: './validation-message.component.html',
  styleUrls: ['./validation-message.component.scss']
})
export class ValidationMessageComponent {

  @Input()
  model!: NgModel

  @Input()
  patternMessage="Le {0} n'est pas conforme";

  Date=Date

}
