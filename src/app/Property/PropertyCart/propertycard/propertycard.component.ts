import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertycard',
  templateUrl: './propertycard.component.html',
  styleUrls: ['./propertycard.component.css']
})
export class PropertycardComponent implements OnInit {

  constructor() { }

  public Property:any={"Id":1,
              "Name":"Prashant",
      "Type":"House",
      "Price":12000
  }

  ngOnInit(): void {
  }

}
