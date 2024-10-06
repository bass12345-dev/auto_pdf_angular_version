import { Component } from '@angular/core';

@Component({
  selector: 'app-app-admin',
  templateUrl: './app-admin.component.html',
  styleUrls: ['./app-admin.component.css']
})
export class AppAdminComponent {
  is_open:boolean = true;
  toggle_menu(){
    this.is_open = !this.is_open;
  }

}
