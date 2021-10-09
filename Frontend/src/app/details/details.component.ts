import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  data:any  = [];
  constructor(
    private route: ActivatedRoute,
    private router : Router,
    private api: ApiService
  ) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe({
      next:(params)=>{
        const email = params.get('email') || '';
      
        this.api.getDetail(email).subscribe((res:any)=>{
         
          if(res.success){
            this.data = res.data;
          }else{
            alert("Details not found");
            this.router.navigate(['/']);
          }
        })
      }
    })
  }

}
