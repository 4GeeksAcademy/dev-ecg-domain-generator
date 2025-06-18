import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];

// Bucle para generar las combinaciones
for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      let domainName = pronoun[i] + adj[j] + noun[k];
      console.log(domainName + ".com"); 
    }
  }
}

  /*
  let pronouns = ["the" , "our" , "a"]
  let adjectives = ["great" , "big" , "pretty"]
  let nouns = ["pear" , "lemon" , "strawberry"]
  let domains = [".com" , ".net", ".us"];

  for (let listaPronouns = 0; listaPronouns < pronoun.length; listaPronouns++)
  {
    for (let listaAdjectives = 0; listaAdjectives < adjectives.length; listaAdjectives++)
    {
      for (let listaNouns = 0; listaNouns < nouns.length; listaNouns++)
      {
        for (let listaDomains = 0; listaDomains < domains.length; listaDomains++)
        {
          console.log(pronouns[listaPronouns] + adjectives[listaAdjectives] + nouns[listaNouns] + domains[listaDomains]);
        }
      }
    }
  }
*/


 /*
  function generateDomain() {
    let randomPronoun = pronouns[Math.floor(Math.random() * pronouns.length)];
    let randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    let randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    let randomDomain = domains[Math.floor(Math.random() * domains.length)];
    return randomPronoun + randomAdjective + randomNoun + randomDomain;
  } 
  console.log("Hello Rigo from the console!");
  */

};
