import Bulletin from './Bulletin';
import Note from './Note';

export default class Eleve {
  private _nom: string;
  private _prenom: string;
  private _bulletin: Bulletin;

  constructor(nom: string, prenom: string, bulletin: Bulletin) {
    this._nom = nom;
    this._prenom = prenom;
    this._bulletin = bulletin;
  }

  /**
   * Ajoute une ou des nouvelles notes au bulletin
   * @param nouvellesNotes Liste de notes à ajouter
   */
  public ajouterNotes(...nouvellesNotes: Note[]): void {
    nouvellesNotes.forEach((note) => {
      this._bulletin.ajouterNote(note);
    });
  }

  /**
   * Affiche la moyenne de l'élève dans la console.
   */
  public afficherMoyenne(): void {
    console.log(
      `La moyenne de ${this._prenom} est de ${this._bulletin.calculerMoyenne()}`
    );
  }

  /**
   * Affiche toutes les notes de l'élève
   */
  public afficherNotes(): void {
    console.log(`Notes de ${this._prenom} ${this._nom} :
    ${this._bulletin.afficherNotes()}`);
  }
}
