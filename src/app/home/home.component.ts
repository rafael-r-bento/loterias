import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { LoteriaCardComponent } from '../components/loteria-card/loteria-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatGridListModule, LoteriaCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor() {}
}
