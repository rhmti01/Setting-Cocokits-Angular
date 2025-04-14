import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CheckboxComponent } from "@cocokits/angular-checkbox";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CheckboxComponent],
  styleUrl: './app.component.css',
  template: `
    <cck-checkbox>I accept the <a href="/">Privacy Policy</a></cck-checkbox>
  `,
})
export class AppComponent {
  title = 'Setting-Cocokits-Angular';
}