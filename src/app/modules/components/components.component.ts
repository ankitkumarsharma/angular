import { ComponentDataTypes } from './core/components.types';
import { Component, OnInit } from '@angular/core';
import { COMPONENT_DATA_TYPE } from './core/components.constant';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {
  public componentType: ComponentDataTypes[] = COMPONENT_DATA_TYPE;
  constructor() { }

  ngOnInit(): void {
  }

}
