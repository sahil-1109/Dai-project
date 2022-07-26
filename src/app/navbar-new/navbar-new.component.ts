import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-navbar-new',
  templateUrl: './navbar-new.component.html',
  styleUrls: ['./navbar-new.component.css']
})
export class NavbarNewComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  public ToDisplayGrad(){
    this.router.navigate([]).then(result => {window.location.replace("#display/") });
  }
  public ToDisplayEvents(){
    this.router.navigate([]).then(result => {window.location.replace("#events/"); });
  }
}