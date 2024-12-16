import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { NewOrderComponent } from './new-order/new-order.component';

@Component({
  selector: 'app-landing',
  imports: [HeaderComponent, NewOrderComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {}
