export interface ComponentInteractionTypes {
  name: string,
  info: string,
  link: string,
  status: boolean
}
export interface HomeTypes {
  homeTab: HomeTabsTypes;
}
export interface HomeTabsTypes{
  name: string,
  info: string,
  link?: string,
  status?: boolean
}