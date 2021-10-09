import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {

  constructor(private api:ApiService,
              private router:Router
    ) { }

  ngOnInit(): void {
  }

  submit(form:NgForm){

    const formData = form.value;

    const isVlaid = this.api.userExists(formData.email).subscribe((res:any)=>{
      const exists = res.data;
      if(!exists){

        this.api.add(formData).subscribe((res:any)=>{
          const success = res.success;
          if(success){
            alert('Data added!');
            form.resetForm();
            
          }else{
            alert('Failed try again')
          }
        })

      }else{
        alert("Email alredy exists");
      }
    })
    
  }
}
