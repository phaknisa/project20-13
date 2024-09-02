import { Component } from '@angular/core';
import { 
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
   //FormsGroup
   registerFrom!: FormGroup;
   //สร้างตัวแปรไว้เช็คว่า Submit form หรือยัง
   submitted = false;
   //ตัวแปรสำหรับผูกกับฟอร์ม
   userRegister = {
     "fullname":"",
     "email":"",
     "mobile":"",
     "password":"",

}
constructor(private formBuilder: FormBuilder) {

}

ngOnInit(){
  this.registerFrom = this.formBuilder.group({
    fullname:['',[Validators.required, Validators.minLength(30)]],
    email:['',[Validators.required, Validators.email]],
    mobile:['',[Validators.required, Validators.minLength(10)]],
    password:['',[Validators.required, Validators.minLength(6)]],

  })
}
//ปุ่ม Login
submitLogin(){
  this.submitted = true;
  //ถ้าฟอร์มไม่ถูกต้อง (Invalid)
  if(this.registerFrom.invalid){
    return
  }else{
    this.userRegister.fullname = this.registerFrom.value.fullname
    this.userRegister.email = this.registerFrom.value.email
    this.userRegister.mobile = this.registerFrom.value.mobile
    this.userRegister.password = this.registerFrom.value.password
    if(this.userRegister.email == "pppp@gmail.com" 
      && this.userRegister.password == "12345678910"){
        alert("สมัครสมาชิกสำเร็จ")
    }else{
      alert("ไม่สามารถสมัครสมาชิกได้")
    }
  }
}

//ปุ่ม reset Form
resetForm(){
  this.submitted = false;
  this.registerFrom.reset();
}
}





