import { Component , OnInit } from '@angular/core';
import { OrderDetailsService } from '../../services/order-details.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{
clothesData:any;
constructor(private service:OrderDetailsService){}
ngOnInit(): void {
  this.clothesData = this.service.clothesDetails;
}
}
