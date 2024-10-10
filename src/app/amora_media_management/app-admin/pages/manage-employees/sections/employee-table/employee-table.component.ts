import { Component } from '@angular/core';
import { UserInterface } from 'src/app/amora_media_management/app-admin/interface/user-interface';
import { ApiService } from 'src/app/amora_media_management/app-admin/service/api.service';



@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent {

  displayedColumns: string[] = ['full_name', 'nickname', 'sex','country', 'role'];
  dataSource : UserInterface[] = [];
  showLoading : boolean = false;
  constructor(private api : ApiService){}
  ngOnInit(){
    this.GetUsers();
  }


  async GetUsers(){
    this.api.QueryUsers().subscribe((response: any) => {
      console.log(response);
      this.dataSource = response;
      this.showLoading = true;
    },
    (error) => { //Error callback
      var message = "Connection Error, Please Try Again";
      alert(message)
    }
  );
    
  }

}
