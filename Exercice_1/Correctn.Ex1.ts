type Chat = {
    nom: string,
    age: number,
    poids: number,
    race: string

}

const chat: Chat = {
  nom: "Bébou",
  age: 3,
  race: "Clochard",
  poids: 200,
};

function getChat(...surnoms: string[]) {
  let listeSurnoms = surnoms.map(surnom => `${surnom}`).join(", ");
  console.log(
    `Mon super chat s'appelle ${chat.nom}, il a ${chat.age} ans, il pèse ${chat.poids} et c'est un ${chat.race}. Ses surnoms sont ${listeSurnoms}`
  );
}

getChat("SDF", "GROTA", "TG", "SuperTramp");
