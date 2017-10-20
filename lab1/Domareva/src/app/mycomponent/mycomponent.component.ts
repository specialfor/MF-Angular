import { Component} from '@angular/core';

@Component({
  selector: 'app-mycomponent',
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.css']
})
export class MycomponentComponent  {
  text = '';
  kot = 'meow';

  deleteText(): void {
    this.text = '';
  }
}
