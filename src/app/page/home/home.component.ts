import {Component,OnInit} from '@angular/core';
import { OrderDetailsService } from '../../services/order-details.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  constructor (private service: OrderDetailsService){}
  clothesData: any;
  ngOnInit(): void {
      this.clothesData = this.service.clothesDetails;
  }
}
