// 1

// let elem1= prompt("Notez un nombre");
// let elem2= prompt("Notez un autre nombre;");
// if(elem1 == elem2){
//     alert(`Le nombre ${elem1} et ${elem2} sont-ils égaux? ${elem1 == elem2}`)
// }else{
//     alert("Les deux valeurs ne sont pas égales "+ elem1 + "et "+ elem2 +" sont bien différents.")
// };

// 2

// let elem1= prompt("Notez un nombre");
// let elem2= prompt("Notez un autre nombre;");
// if(elem1<elem2){
//     alert(`Le premier nombre est-il plus petit que le premier? : La réponse est ${elem1<elem2}`)
// }else{
//     alert(`Le premier nombre est-il plus petit que le premier? : La réponse est ${elem1<elem2}`)
//     // alert("elem1 + "est-il plus petit que " + elem2 "? La réponse est Non"")
// };


// 3

// let elem1= parseInt(prompt("Notez un nombre"));
// let elem2= parseInt(prompt("Notez un autre nombre"));
// let elem3= parseInt(prompt("Notez un troisième nombre"));
// if(elem1 + elem2 > elem3){
//     alert(`La somme de ${elem1} et ${elem2} est-elle plus grande que  ${elem3}? : ${elem1 + elem2 > elem3}`)
//   
// }else{
//     alert(`La somme de ${elem1} et ${elem2} est-elle plus grande que ${elem3}? : ${elem1 + elem2 > elem3}`)
// };

// 4

// let phrase= prompt("Inscrivez une phrase");
// let estim = parseInt(prompt("Estimez le nombre de caract de cette phrase"));
// let correction = Math.abs(phrase.length - estim);
// if(phrase.length == estim){
//     alert("gg");
// }else{
//     alert("change de site gros");
//     alert(`Noooooooooope tu es a ${correction} unités de la bonne réponse`);
// };



// 5

// let nom = prompt("Inscrivez votre nom");
// if(nom.length == 0){
//     nom = alert("Attention vous devez remplir le champs ci-dessous, Quel est votre prénom ?");
//     if(nom.length != 0){
//         alert(`Bonjour ${nom}!`); 
//     }else{
//         alert("Pas cool, rentre chez ta mère!!");
//     }
// }else{
//     alert(`Bonjour ${nom}!`);
// }



// 6

// if(confirm("Voulez-vous vous abonner?")){
//     let choix= prompt("Quelle formule voulez-vous? luxe - normale? ");
//     if(choix == "luxe"){
//         alert("Félicitation vous avez choisis la formule Luxe !");
//     }else if(choix == "normale"){
//         alert(" Merci pour votre abonnement.");
//     }
//     else{
//         let conf = confirm("Etes-vous certain(e) de votre choix?");
//         if(conf == true){
//             prompt("Choisissez votre abo !!!!!! luxe - normale? ");
//         }
//     }

// }


// 7

// let quest1 = prompt("Quel est le sens de la vie?");
// let quest2 = prompt("Quelle mer?");
// let rep1 = "only Taal knows";
// let rep2 = "c'est la mer noire";

// if(quest1 == rep1 && quest2 == rep2){
//     alert("GG bro");
// }else if(quest1 == rep1 || quest2 == rep2){
//     alert("aaaaah presque bg");
// }else{
//     alert("bouuuuuuuuuuuuuuhhhh!!");
// };




// 8

let age = parseInt(prompt("Quel âge avez-vous?"));
if(age >= 18 && age >100){
    alert("vous êtes encore vivant ? Évitez de voir ce film pour le rester");
}else if(age < 18 && age <= 0){
    alert("vous n’êtes même pas nés, n’essayez pas de tricher");
}else if(age === 18){
    alert("pouvez rentrer mais c’est tout juste, n'oubliez pas que ce film peut être choquant");
}else if(age >= 18){
    alert("vous êtes majeur, vous pouvez réserver");
}else if(age < 18){
    alert("vous êtes mineur, l’accès est réservé aux grands");
};
