import { Component, OnInit } from '@angular/core';
import{User}  from '../../user';
import{Router}  from '@angular/router';
import{UserService}  from '../../shared/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  private user:User;

  constructor(private _userService:UserService,private _rotuer:Router) { }

  ngOnInit() {
    this.user=this._userService.getter();
  }

  reset() {
    this.reset();
}

  processForm(){
    if(this.user.id==undefined){
       this._userService.createUser(this.user).subscribe((user)=>{
         console.log(user);
         this._rotuer.navigate(['/']);
       },(error)=>{
         console.log(error);
       });
    }else{
       this._userService.updateUser(this.user).subscribe((user)=>{
         console.log(user);
         this._rotuer.navigate(['/']);
       },(error)=>{
         console.log(error);
       });
    }
  }

}