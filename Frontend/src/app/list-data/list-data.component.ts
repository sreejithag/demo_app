import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-list-data',
  templateUrl: './list-data.component.html',
  styleUrls: ['./list-data.component.css']
})
export class ListDataComponent implements OnInit {
  data:any;
  constructor(
    private api:ApiService
    
  ) { }


  ngOnInit(): void {

    this.api.getAlldata().subscribe(data=>{
     this.data=data;
     alert(JSON.stringify(data))
    })

  }

}
