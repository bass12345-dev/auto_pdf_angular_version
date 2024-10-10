import { Component,Input,Output,EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
export interface Menu {
  name : string,
  icon:string,
  url :string
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  items : Menu[] = [
      {
        name:'Dashboard',
        icon: 'house',
        url: 'dashboard',
       
      },

      {
        name:'Manage Employees',
        icon: 'people',
        url: 'manage-employees'
      },

      {
        name:'All PDF',
        icon: 'notes',
        url: 'all-pdf'
      },
      {
        name:'Generate PDF',
        icon: 'notes',
        url: 'pdf-generator'
      }
  ];
  set_item : any;
  card_title : string = '';
  @Output() dataEmitter: EventEmitter<string> = new EventEmitter<string>();

  constructor(private route: ActivatedRoute, private router:Router){}
  ngOnInit(){
    this.set_item = this.router.url.split('/')[3];

    this.items.map(item => {
      if(this.set_item == item.url){
        this.dataEmitter.emit(item.name);
      }
    })
  }
  set_active(item:any){
    this.set_item = item.url
    this.card_title = item.name;
    this.dataEmitter.emit(this.card_title);
    

  }

}
