import { style } from 'typestyle';
import * as csx from 'csx';
import * as csstips from 'csstips';

const white = csx.color('#fff').toString();
const gray = csx.color('#ccc').toString();
const lightGray = csx.color('#f0f0f0').toString();
const darkGray = csx.color('#888').toString();
const blue = csx.color('#007aff').toString();
const lightBlue = csx.color('#66AEFF').toString();
const darkBlue = csx.color('#016DE0').toString();
const red = csx.color('#ff0000').toString();
const lightRed = csx.color('#FF9999').toString();
const darkRed = csx.color('#CC0000').toString();

export const radioBase = style(
  csstips.horizontal,
  {
    marginRight: '10px',
    cursor: 'pointer',
    $nest: {
      '& input:disabled + div > div': {
        color: gray,
        cursor: 'not-allowed',
      },
    },
  }
);

const baseTextStyles = {
  fontFamily: 'Roboto, sans-serif',
  fontSize: '14px',
};

export const radioLabel = style(
  baseTextStyles,
  {
    marginLeft: '5px',
    marginTop: '3px',
    display: 'flex',
    alignItems: 'center',
  });

export const radioDescription = style(
  baseTextStyles,
  {
    marginLeft: '5px',
    fontSize: '12px', 
    color: darkGray,
    display: 'flex',
    alignItems: 'center',
  }
);

export const radioInput = style({
  appearance: 'none',
  width: '16px',
  height: '16px',
  border: `1px solid ${gray}`,
  borderRadius: '50%',
  position: 'relative',
  $nest: {
    '&:checked': {
      backgroundColor: blue,
      borderColor: blue,
    },
    '&:checked::before': {
      content: '""',
      width: '7px',
      height: '7px',
      borderRadius: '50%',
      backgroundColor: white,
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
    '&:disabled': {
      backgroundColor: lightGray,
      borderColor: lightGray,
      cursor: 'not-allowed',
    },
    '&:disabled:checked::before': {
      backgroundColor: darkGray,
    },
    '&:focus': {
      borderColor: gray,
      boxShadow: `0 0 0 2px ${white}, 0 0 0 5px ${lightBlue}`,
    },
    '&:checked:focus': {
      borderColor: blue,
      boxShadow: `0 0 0 2px ${white}, 0 0 0 5px ${lightBlue}`,
    },
    '&:hover:not(:disabled):not(:checked):not(:focus)': {
      backgroundColor: white,
      borderColor: darkBlue,
    },
    '&:hover:not(:disabled):not(:focus)': {
      backgroundColor: darkBlue,
      borderColor: darkBlue,
    },
  },
});

export const errorRadioInput = style({
  borderColor: red,
  $nest: {
    '&:checked': {
      borderColor: red,
      backgroundColor: red,
    },
    '&:focus': {
      borderColor: red,
      boxShadow: `0 0 0 2px ${white}, 0 0 0 5px ${lightRed}`,
    },
    '&:checked:focus': {
      borderColor: red,
      boxShadow: `0 0 0 2px ${white}, 0 0 0 5px ${lightRed}`,
    },
    '&:hover:not(:disabled):not(:checked):not(:focus)': {
      backgroundColor: white,
      borderColor: darkRed,
    },
    '&:hover:not(:disabled):not(:focus)': {
      backgroundColor: darkRed,
      borderColor: darkRed,
    },
  },
});
