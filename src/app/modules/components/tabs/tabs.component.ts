import { Component, OnInit } from '@angular/core';
import { DYNAMIC_TAB_DATA } from '../core/components.constant';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  tabItem: number = 1;
  dynamicTabItem:number = 1; 
  dynamicTab:any = DYNAMIC_TAB_DATA;
  constructor() { }

  ngOnInit(): void {
  }
  tabSelect(e:any) {
    this.tabItem = e;
  }
  dynamicTabSelect(e:any){
    this.dynamicTabItem = e;
  }
}
