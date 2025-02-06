/** Possible button style variants */
export const buttonStyleArray = ['regular','emphasis','stroke','plain'] as const;

/** Types derived from arrays */
export type ButtonStyle = typeof buttonStyleArray[number];