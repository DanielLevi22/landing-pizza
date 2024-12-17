import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { NewOrderComponent } from './new-order/new-order.component';
import { TopListBackComponent } from './top-list-back/top-list-back.component';

@Component({
  selector: 'app-landing',
  imports: [HeaderComponent, NewOrderComponent, TopListBackComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {}
