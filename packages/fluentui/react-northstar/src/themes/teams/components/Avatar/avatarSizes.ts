import { ICSSInJSStyle } from '@fluentui/styles';
import { pxToRem, SizeValue } from '../../../../utils';

/** Sizes for the Avatar and AvatarImage */
export const sizeToPxValue: Record<SizeValue, number> = {
  smallest: 20,
  smaller: 24,
  small: 28,
  medium: 32,
  large: 44,
  larger: 64,
  largest: 96,
};

/** Sizes for the Icon inside the Avatar */
export const iconSizeToPxValue: Record<SizeValue, number> = {
  smallest: 10,
  smaller: 12,
  small: 16,
  medium: 16,
  large: 20,
  larger: 32,
  largest: 40,
};

/** Sizes for the AvatarStatus and AvatarStatusImage */
export const statusSizeToPxValue: Record<SizeValue, number> = {
  smallest: 6,
  smaller: 10,
  small: 10,
  medium: 10,
  large: 10,
  larger: 16,
  largest: 0,
};

/** Sizes for the AvaterStatusIcon */
export const statusIconSizeToPxValue: Record<SizeValue, number> = {
  smallest: 4,
  smaller: 6,
  small: 6,
  medium: 6,
  large: 6,
  larger: 10,
  largest: 0,
};

export const getSizeStyles = (sizeInPx: number): Pick<ICSSInJSStyle, 'height' | 'width'> => {
  const sizeInRem = pxToRem(sizeInPx);
  return {
    height: sizeInRem,
    width: sizeInRem,
  };
};
