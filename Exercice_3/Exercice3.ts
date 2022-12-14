/**
 * Des mignons petit chatons trop kawaii UwU
 */
class Chat {
    private _nom!: string;
    private _race!: string;
    private _age!: number;
    private _poids!: number;

    constructor(nom: string, race: string, age: number, poids: number) {
        this.nom = nom;
        this.race = race;
        this.age = age;
        this.poids = poids;
    }

    public get nom(): string {return this._nom}
    public get race(): string {return this._race}
    public get age(): number {return this._age}
    public get poids(): number {return this._poids}

    public set nom(nouveauNom: string) { this._nom = nouveauNom}
    public set race(nouvelleRace: string) { this._race = nouvelleRace}
    public set age(nouvelAge: number) { this._age = nouvelAge}
    public set poids(nouveauPoids: number) { this._poids = nouveauPoids}

  
    /**
     * Permet d'afficher le chat
     */
    afficherChat(): void {
      console.log(`
              Mon super chat s'appelle ${this.nom} \r
              C'est un ${this.race} \r
              Il a ${this.age} an(s) \r
              Et il pèse ${this.poids} kg ! 
          `);
    }
  }
  
  const monChat: Chat = new Chat("Bébou 3", "Clochard", 1, 10);
  
  monChat.afficherChat();
  