import { Component } from '@angular/core';

@Component({
  selector: 'app-app-admin',
  templateUrl: './app-admin.component.html',
  styleUrls: ['./app-admin.component.css']
})
export class AppAdminComponent {
  is_open:boolean = true;
  card_title: string = ''; // Property to hold the data from the child
  toggle_menu(){
    this.is_open = !this.is_open
  }



  // Method that handles the data received from the child
  received_data(data: string) {
    this.card_title = data;
  
  }

}
