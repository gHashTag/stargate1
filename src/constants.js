import { Dimensions } from 'react-native'

export const BLUE = '#30d0fe'
export const WHITE = '#fff'
export const LIME = '#00FF00'
export const SILVER = '#C0C0C0'
export const BLACK = '#1C2833'
export const win = Dimensions.get('window')
export const W = win.width
export const H = win.height
export const responsive = {
  mobile5: W > 315 && W < 341,
  mobile8: W > 342 && W < 375,
  mobile8plus: W > 375 && W < 415,
  tablet: W < 990 && W > 415
}
