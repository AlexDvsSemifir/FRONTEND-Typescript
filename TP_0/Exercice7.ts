/**
 * Je réinvente la méthode eval <3
 * @param nombre1 
 * @param nombre2 
 * @param operateur 
 * @returns 
 */
function calculSimple(
  nombre1: number,
  nombre2: number,
  operateur: string
): number {
  return eval(`${nombre1} ${operateur} ${nombre2}`);
}
