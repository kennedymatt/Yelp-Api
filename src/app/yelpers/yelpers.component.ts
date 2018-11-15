import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from "@angular/forms";
import { InfoService } from "../info.service";

@Component({
  selector: 'app-yelpers',
  templateUrl: './yelpers.component.html',
  styleUrls: ['./yelpers.component.css']
})
export class YelpersComponent  {
  form = new FormGroup({
    categories: new FormControl(""),
    input: new FormControl("")
  });
  result;
  itemsArr;
  item;
  constructor(private service: InfoService) {}


  ngOnInit() {}

  onSubmit() {
    let rest = this.form.value.input;
    let amount = this.form.value.categories;
    let random = Math.floor(Math.random() * 10);
    console.log(random);

    this.result = this.service
      .getPlaces(rest, amount, random)
      .subscribe(data => {
        this.item = data.businesses[random];

        console.log(this.item);
      });
  }
}


