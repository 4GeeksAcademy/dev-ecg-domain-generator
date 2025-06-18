
  
  let pronoun = ["the" , "a"]
  let adjectives = ["big" , "pretty"]
  let nouns = ["lemon" , "strawberry"]
  let domains = [".com" , ".net"];

  for (let listaPronoun = 0; listaPronoun < pronoun.length; listaPronoun++)
  {
    for (let listaAdjectives = 0; listaAdjectives < adjectives.length; listaAdjectives++)
    {
      for (let listaNouns = 0; listaNouns < nouns.length; listaNouns++)
      {
        for (let listaDomains = 0; listaDomains < domains.length; listaDomains++)
        {
          console.log(pronoun[listaPronoun] + adjectives[listaAdjectives] + nouns[listaNouns] + domains[listaDomains]);
        }
      }
    }
  }



