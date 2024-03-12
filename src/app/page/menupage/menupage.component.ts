import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from '../../services/order-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrl: './menupage.component.css',
})

export class MenupageComponent implements OnInit{
  
constructor(private param: ActivatedRoute , private service: OrderDetailsService , private router: Router){}
getMenuId:any;
menuData:any;
quantity: number = 1; // Default quantity
  totalPrice: number = 0; // Default total price
  fullName: string = ''; // Full name
  phoneNumber: string = ''; // Phone number
ngOnInit(): void {
    this.getMenuId = this.param.snapshot.paramMap.get('id')
    console.log(this.getMenuId,'getmenu')
    if(this.getMenuId)
    {
      this.menuData = this.service.clothesDetails.filter((value)=>{
        return value.id == this.getMenuId;
      })
      this.calculateTotalPrice();
    }
}

increaseQuantity() {
  this.quantity++;
  this.calculateTotalPrice();
}

decreaseQuantity() {
  if (this.quantity > 1) {
    this.quantity--;
    this.calculateTotalPrice();
  }
}

// calculateTotalPrice() {
//   if (this.menuData) {
//     const pricePerItem = parseFloat(this.menuData.clothesPrice);
//     this.totalPrice = pricePerItem * this.quantity;
//   }
// }
calculateTotalPrice() {
  if (this.menuData && this.menuData.length > 0) {
    const pricePerItem = parseFloat(this.menuData[0].clothesPrice); // Access the first element of menuData
    this.totalPrice = pricePerItem * this.quantity;
  }
}

submitOrder() {
  // Handle form submission here
  console.log('Full Name:', this.fullName);
  console.log('Phone Number:', this.phoneNumber);
  console.log('Quantity:', this.quantity);
  console.log('Total Price:', this.totalPrice);
  this.router.navigate(['/orderecord']);
}
}