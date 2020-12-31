import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @Input() data:any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.data)
  }

}
