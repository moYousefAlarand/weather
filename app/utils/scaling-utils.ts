import {Dimensions, I18nManager, PixelRatio} from 'react-native';
import {isTablet as _isTablet} from 'react-native-device-info';
export const {width, height} = Dimensions.get('window');
export const [shortDimension, longDimension] =
  width < height ? [width, height] : [height, width];

//Default guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;
export const isTablet = _isTablet();

const _FACTOR = 0.3;

const FONT_FACTOR = I18nManager.isRTL
  ? isTablet
    ? 0.5
    : 0.2
  : isTablet
  ? 0.6
  : 0.3;

export const scale = (size: number) =>
  (shortDimension / guidelineBaseWidth) * size;
export const verticalScale = (size: number) =>
  (longDimension / guidelineBaseHeight) * size;
export const moderateScale = (size: number, factor = _FACTOR) =>
  size + (scale(size) - size - PixelRatio.get()) * factor;
export const moderateVerticalScale = (size: number, factor = _FACTOR) =>
  size + (verticalScale(size) - size - PixelRatio.get()) * factor;

export const moderateScaleFontSize = (fontSize: number) => {
  const heightPercent = moderateVerticalScale(fontSize, FONT_FACTOR);
  return Math.round(heightPercent);
};

export const s = scale;
export const vs = verticalScale;
export const ms = moderateScale;
export const mvs = moderateVerticalScale;
export const msf = moderateScaleFontSize;
