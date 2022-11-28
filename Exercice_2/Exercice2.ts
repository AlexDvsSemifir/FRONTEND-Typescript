// # Exercice Coq

// ## **_Énoncé :_**

// >**Exercice 2**
// >
// >Créer une classe à partir de votre objet précédent ainsi qu'un méthode de classe permettant l'affichage de ses attributs
// >
// > **NB** : ```Celle-ci disposera des mêmes attributs que ceux de l'objets précédent```
// > A l'intérieur de cette classe Chat recréer la méthode 'afficherChat()' afin d'affichers les différents attributs de votre nouvelle classe "Chat"

class Chat {
  nom!: string;
  race!: string;
  age!: number;
  poids!: number;

  afficherChat(): void {
    console.log(`
            Mon super chat s'appelle ${this.nom} \r
            C'est un ${this.race} \r
            Il a ${this.age} an(s) \r
            Et il pèse ${this.poids} kg ! 
        `);
  }
}

const monChat: Chat = new Chat();

monChat.age = 2;
monChat.nom = "Bébou 2";
monChat.poids = 50;
monChat.race = "Clochard";

monChat.afficherChat();
