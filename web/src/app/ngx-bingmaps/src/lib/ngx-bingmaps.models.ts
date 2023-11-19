export interface GeolocationModel {
  latitude: number;
  longitude: number;
}
export interface PushpinOptionsModel {
  color?: string;
  cursor?: string;
  draggable?: boolean;
  enableClickedStyle?: boolean;
  enableHoverStyle?: boolean;
  icon?: string;
  subTitle?: string;
  title?: string;
  text?: string;
  visible?: boolean;
}
export interface PushpinInfoboxModel {
  closeDelayTime?: number;
  description?: string;
  htmlContent?: string;
  maxHeight?: number;
  maxWidth?: number;
  showCloseButton?: boolean;
  showPointer?: boolean;
  title?: string;
  visible?: boolean;
  zIndex?: number;
}
export interface PushpinModel {
  location: GeolocationModel;
  options?: PushpinOptionsModel;
  infobox?: PushpinInfoboxModel;
}

export interface dataSet {
  id?: string,
  jinDu?: number,
  weiDu?: number,
  yinBaoDianWei?: string,
  duanDianDianWei?: string,
  jiaoLiuZaSanDianLiu?: string,
  yangJiKaiLuDianWei?: string,
  shiDu?: string,
  dianChiDianYa?: string,
  ziRanDianWei?: string,
  jiaoLiuGanRaoDianYa?: string,
  zhiLiuDianLiu?: string,
  YangJiShuChuDianLiu?: string
}