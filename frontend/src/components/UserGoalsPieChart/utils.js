/**
 * Pie sectors array formating
 * @param {number} score
 * @returns {{name: string, value: number}[]}
 */
export const formatData = (score) => [
  { name: 'score', value: score },
  { name: 'max', value: 1.0 - score },
];
