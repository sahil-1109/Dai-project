import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from '../userservice';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  grads:any
  constructor(private router: Router, private userdataservice:UserDataService) { 

  this.userdataservice.getUserData().subscribe(data=>{
    this.grads=data;
  })
}
  ngOnInit(): void {
  }

  public ToProfileGrads(){
    this.router.navigate([]).then(result => {window.location.replace("#profile/"); });
  }

  
}
