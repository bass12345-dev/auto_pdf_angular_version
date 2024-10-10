import { Component } from '@angular/core';
import { FILE_FORMAT,GUIDELINES } from '../../../../interface/pdf-items-interface';
import { ApiService } from 'src/app/amora_media_management/app-admin/service/api.service';
@Component({
  selector: 'app-generate-form',
  templateUrl: './generate-form.component.html',
  styleUrls: ['./generate-form.component.css']
})
export class GenerateFormComponent {

  file_formats : FILE_FORMAT[] = [
    {name: 'MP4'},
    {name: 'MOV'},
    {name: 'AVI'},
    {name: 'WMV'},
    {name: 'WebM'},
    {name: 'FLV'},
    {name: 'AVCHD'},
  ];
  
  frame_rate : FILE_FORMAT[] = [
    {name: '23.976 fps'},
    {name: 'Same as Source Footage'}
  ];
  

  plugins     : GUIDELINES[] = [];
  effects     : GUIDELINES[] = [];
  positioning : GUIDELINES[] = [];
  custom      : GUIDELINES[] = [];
  guideline_is_hidden : boolean = true;
  spinner     : boolean = false;
  constructor(private api:ApiService){}
  
  ngOnInit(){
    this.getGuidelines();
  }

  getGuidelines(){
    this.api.QueryGuidelines().subscribe((response:any) => {
      this.plugins = response.premiere_pro_plugins;
      this.effects = response.after_effects_plugins;
      this.positioning = response.positioning_style;
      this.custom = response.custom
      this.guideline_is_hidden = false;
      this.spinner = true;
    },(error) =>{
      alert('Server Error')
    })
  }
   

}
