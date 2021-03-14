import { Component, OnInit } from '@angular/core';
import { ACCORDIAN_DATA } from '../core/components.constant';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.scss']
})
export class AccordianComponent implements OnInit {
  accList:any = ACCORDIAN_DATA;
  constructor() { }

  ngOnInit(): void {
  }
  onItemClick(index:any){
    for(let i=0;i<this.accList.length;i++){
      this.accList[i].active = false;
      this.accList[index].active = true;
    }
  }

}
