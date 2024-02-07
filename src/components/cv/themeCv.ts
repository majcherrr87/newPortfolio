const theme = {
  header_height: '3rem',
  font: {
    body_font: 'Roboto',
    h1_font_size: '1.5rem',
    h2_font_size: '1.25rem',
    h3_font_size: '1rem',
    normal_font_size: '.938rem',
    small_font_size: '.875rem',
    smaller_font_size: '.813rem',
    font_weight_medium: '500',
    font_weight_bold: '700',
  },
  margins: {
    mb_1: '.5rem',
    mb_2: '1rem',
    mb_3: '1.5rem',
  },
  index: {
    z_back: '-1',
    z_tooltip: '10',
    z_fixed: '100',
  },
};
export const lightThemeCv = {
  colors: {
    title_color: '#0B0A0A',
    text_color: '#403A3A',
    text_color_light: '#707070',
    container_color: '#FAFAFA',
    container_color_alt: '#F0EFEF',
    body_color: '#FCFCFC',
  },
  ...theme,
};
export const darkThemeCv = {
  colors: {
    title_color: '#F2F2F2',
    text_color: '#BFBFBF',
    text_color_light: '#707070',
    container_color: '#212121',
    container_color_alt: '#181616',
    body_color: '#2B2B2B',
  },
  ...theme,
};
