export const extractFontSize = (size, theme) => {
    const [category, categorySize] = size.split('/');

    return theme.fonts.size[category][categorySize];
};

export const paintColor = (color, theme) => {
    // const [colorType, color] = color.split('/');

    // if(colorType=== 'constants')return theme.colors.constants
};
