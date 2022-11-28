function monnaie(nombre: number): void {
  const monnaies: number[] = [
    500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01,
  ];

  for (let monnaie of monnaies) {
    let nombreMonnaie = Math.floor(nombre / monnaie);
    if (nombreMonnaie !== 0) {
      if (monnaie >= 5) {
        console.log(`Billet(s) de ${monnaie}€ : ${nombreMonnaie}`);
      } else {
        console.log(`Pièce(s) de ${monnaie}€ : ${nombreMonnaie}`);
      }
      nombre -= nombreMonnaie * monnaie;
    }
  }
}

monnaie(888.89);
