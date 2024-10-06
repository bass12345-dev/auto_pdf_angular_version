import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent {

  @Output() public is_open = new EventEmitter<void>();


  toggle_menu(){
    this.is_open.emit();
  }

}
