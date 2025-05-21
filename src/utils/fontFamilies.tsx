
export const fontFamilies = {
  GOTHAM: {
    medium: 'Gotham-Medium',
    bold: 'Gotham-Bold',
    light: 'Gotham-Light',
    regular: 'Gotham-Regular',
  },
};

export const getFontFamily = (
     weight : 'medium' | 'bold' | 'light' | 'regular'
)=>{
    return fontFamilies.GOTHAM[weight]
}