import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public ToEventDetails(){
    this.router.navigate([]).then(result => {window.open("#eventdetails/", "_blank"); });
  }

}
