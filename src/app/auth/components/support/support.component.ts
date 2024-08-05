import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, 
        FormControl, Validators, FormArray, FormBuilder} from "@angular/forms";
@Component({
  selector: 'app-support',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './support.component.html',
  styleUrl: './support.component.scss'
})
export class SupportComponent {
 myForm : FormGroup;
    constructor(private formBuilder: FormBuilder){
       
        this.myForm = formBuilder.group({
               
          "userEmail": ["", [ Validators.required, Validators.email]],
          "description": ["", [Validators.required]],
        });
    }
    submit(){
        console.log(this.myForm);
    }
}
