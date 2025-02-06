/** Possible color palette values */
export const themePaletteArray = ['primary', 'secondary', 'tertiary', 'neutral', 'success', 'warning', 'critical'] as const;
/** Color accents variants */
export const colorAccentsArray = ['light', 'default', 'highlight'] as const;
/** Components sizing variants */
export const sizeVariantsArray = ['small', 'medium', 'large'] as const;

/** Types derived from arrays */
export type ThemePalette = typeof themePaletteArray[number];
export type ColorAccents = typeof colorAccentsArray[number];
export type SizeVariants = typeof sizeVariantsArray[number];

export enum ButtonIconSizeMap {
  small = 16,
  medium = 20,
  large = 24,
}
