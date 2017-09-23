import { Component } from '@angular/core';
import { Http } from '@angular/http';

//simport {CORE_DIRECTIVES, NgClass, Control, ControlGroup, FormBuilder, Validators} from '@angular/common';
//import {FORM_DIRECTIVES} from '@angular/forms';


class DemoInfo{
  name:string;
  email: string; 
  body: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //directives: [CORE_DIRECTIVES, FORM_DIRECTIVES] 
})
export class AppComponent {
  title = 'Yang\'s Homepage';

  //CreateGroup: FormBuilder;
  //demoInfo: DemoInfo;

  constructor(http : Http) {
  }

  Submit(mailForm) {
    console.log(mailForm);
  }

  /*
  Constructor(fb: FormBuilder){
    this.demoInfo= new DemoInfo(); 
    
    this.CreateGroup = fb.group({
			'name': new Control(this.demoInfo.name, Validators.required),
			'password': new Control(this.demoInfo.password, Validators.required)
		})
  }

  SendMail(demoInfo:demoInfo) {
    console.log(demoInfo, 'whole object');
    this.demoInfo= new DemoInfo();
  }
  */
}
