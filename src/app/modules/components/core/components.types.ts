export interface TabDataTypes {
  tabs: TabsTypes;
}
export interface TabsTypes{
  name: string,
  info: string,
  link?: string,
  status?: boolean
}
export interface ComponentDataTypes {
  name: string,
  info: string,
  link: string,
  status: boolean
}
export interface DynamicTabTypes {
  label: string,
  content: string,
}
export interface AccordianDataTypes {
  header: string,
  content: string,
  active: boolean
}
