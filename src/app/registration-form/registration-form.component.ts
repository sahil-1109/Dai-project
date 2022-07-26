import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  constructor(private http:HttpClient) {}

  ngOnInit(): void {
  }
  
  OnSubmitData(graddata:any){
    
  /*  var graddata = val.controls;
    var name = graddata.first_name.value;
    var email = graddata.email.value;
    var city = graddata.user_city.value;
    var location = graddata.Work_loc.value;
    var isapprentice = graddata.apprentice.value;
    var isgarduate = graddata.graduate.value;
    var corpGrade = graddata.grade.value;
    var gender = graddata.gender.value;
    var uni = graddata.user_uni.value;
    var degree = graddata.user_degree.value;
    var gradyear = graddata.user_gradyear.value;
    var isbarclaysnet = graddata.barclays_net.value;
    var barcalysNet = graddata.user_network.value;
    var adjustments = graddata.user_adjustments.value;
    var wannatravel = graddata.user_traveloption.value;
    var contact = graddata.contact_no.value;  
    console.log(name+", "+email+", "+location+", "+isapprentice)*/
    console.log(graddata)

    let apiurl = ""
    this.http.post("apiurl",graddata).subscribe((result) => console.warn(result))
  }

}
    
