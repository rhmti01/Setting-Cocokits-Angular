import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent , CheckboxComponent , FormFieldComponent , LabelComponent , InputComponent } from '@cocokits/angular-components';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , ButtonComponent ,CheckboxComponent , FormFieldComponent , LabelComponent , InputComponent ],
  styleUrl: './app.component.css',
  standalone : true ,
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Setting-Cocokits-Angular';
}
