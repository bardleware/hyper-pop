// Constants
const backgroundColor = `#37312f`;
const foregroundColor = '#fde1b4';
const borderColor = '#faa41a';

// Colors
const RED = '#F55';
const GREEN = '#50fa7b';
const ORANGE = '#ffb86c';
const LIGHT_ORANGE = '#f1fa8c';
const BLUE = '#66d9ef';
const LIGHT_BLUE = '#6FC1FF';
const PINK = '#ff79c6';
const LIGHT_PINK = '#FF9AC1';
const CYAN = '#6FC1FF';
const PURPLE = '#bd93f9';
const LIGHT_GRAY = '#faa41a';
const MEDIUM_GRAY = '#676B79';
const WHITE = '#FFFFFF';

const colors = {
    black: backgroundColor,
    red: RED,
    green: GREEN,
    yellow: ORANGE,
    blue: BLUE,
    magenta: PINK,
    cyan: CYAN,
	  orange: PURPLE,
    white: LIGHT_GRAY,
    lightRed: RED,
    lightGreen: GREEN,
    lightYellow: LIGHT_ORANGE,
    lightBlue: LIGHT_BLUE,
    lightMagenta: LIGHT_PINK,
    lightCyan: CYAN,
    lightWhite: WHITE
};

// Theme config
exports.decorateConfig = (config) => (
  Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    borderColor: borderColor,
    cursorColor: borderColor,
    cursorShape: 'UNDERLINE',
    fontFamily: '"Fira Code", Menlo, "DejaVu Sans Mono", "Lucida Console", monospace',
    colors,
    css: `
      ${config.css || ''}
    `
  })
);
