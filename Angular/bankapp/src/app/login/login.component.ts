import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim="welcome"
  accnum="please enter your account number"
   acno=""
   pswd=""

  user:any={
    1000:{acno:1000,uname:"anu",password:"userone",balance:3000},
    1001:{acno:1001,uname:"janu",password:"usertwo",balance:5000},
    1002:{acno:1002,uname:"anju",password:"userthree",balance:6000},
    1003:{acno:1003,uname:"manu",password:"userfour",balance:4000},
  }

  constructor() { }

  ngOnInit(): void {
  }


  accChange(event:any){
     this.acno = event.target.value
  }

  pswdChange(event:any){
    this.pswd = event.target.value
  }

  signin(a:any,p:any){


    var acno = a.value;
    var pswd = p.value;
    var accDetails = this.user;

    if(acno in accDetails){
      if(pswd == accDetails[acno]["password"]){
        alert("login successfull")
      }
      else{
        alert("Incorrect Password")
      }
    }
    else{
      alert("Invalid User")
    }
    
  }

}













// signin(a:any,p:any){


  //var acno = this.acno;
 // var pswd = this.pswd;
 // var accDetails = this.user;

  //if(acno in accDetails){
 //   if(pswd == accDetails[acno]["password"]){
 //     alert("login successfull")
//    }
 //   else{
 //     alert("Incorrect Password")
 //   }
 // }
 // else{
 //   alert("Invalid User")
 // }
  
//}

//}
