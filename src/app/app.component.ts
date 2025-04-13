import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { input } from "@angular/core";

import { CheckboxComponent } from "@cocokits/angular-checkbox";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CheckboxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Setting-Cocokits-Angular';
  public readonly Icons = Icons;
}