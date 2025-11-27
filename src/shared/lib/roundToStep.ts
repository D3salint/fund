export function roundToStep(value: number, step: number): number {
  return parseFloat((Math.round(value / step) * step).toFixed(1));
}
