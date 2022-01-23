import * as COMTypes from "./components.types";
export const COMPONENT_DATA_TYPE: COMTypes.ComponentDataTypes[] = [
  {
    name: 'Tabs',
    info: 'Building Tabs in Angular',
    link: 'tabs',
    status: true
  },
  {
    name: 'Accordian',
    info: 'Building accordian in Angular',
    link: 'accordian',
    status: true
  },
  {
    name: 'Image Slider',
    info: 'Building image Slider in Angular',
    link: 'image-slider',
    status: true
  },
  {
    name: 'Compare Items',
    info: 'Building Compare items in Angular',
    link: '/',
    status: false
  },
];
export const DYNAMIC_TAB_DATA: COMTypes.DynamicTabTypes[] = [
  {
    label:'Tab 1',
    content: 'content 1'
  },
  {
    label:'Tab 2',
    content: 'content 2'
  },
  {
    label:'Tab 3',
    content: 'content 3'
  }
];
export const ACCORDIAN_DATA: COMTypes.AccordianDataTypes[] = [
  {header:'title for header',content:'content for listing',active: true},
  {header:'title for header',content:'content for listing',active: false},
  {header:'title for header',content:'content for listing',active: false},
  {header:'title for header',content:'content for listing',active: false},
  {header:'title for header',content:'content for listing',active: false},
  {header:'title for header',content:'content for listing',active: false},
];
