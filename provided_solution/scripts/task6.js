




let message1;





const output = (lists) => {
  lists.results.forEach((pokemon) => {
    let article = document.createElement("article");

    let abilityname = document.createElement("h3");
    abilityname.textContent = pokemon.name;

    let is_hidden = document.createElement("h4");


    // getting the image id
    let pokeUrl = pokemon.url;
    console.log(pokeUrl)
    let scndLastIndex = pokeUrl.lastIndexOf("/", pokeUrl.lastIndexOf("/")-1)
    let pokeIdSlashes = pokeUrl.substring(pokeUrl.length, scndLastIndex);
    let pokeId = pokeIdSlashes.substring(0, pokeIdSlashes.length - 1)
    console.log(pokeId)

  

    let img = document.createElement("img");
    img.setAttribute("src", ("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back" + pokeId + ".png"));
    
    article.appendChild(abilityname);
    
    article.appendChild(is_hidden);
    article.appendChild(img);

    document.querySelector("#abilities").appendChild(article);
  });
};


const getabilities  = async () => {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon/"
  );
  abilityList = await response.json();
  console.log(abilityList)
  output(abilityList);
  console.log("lado")
};
getabilities ();



const reset = () => {
  document.querySelector("#abilities ").innerHTML = "";
};


const sortBy = () => {
  reset();

  let filter = document.querySelector("#sortBy").value;

  switch (filter) {
    case "abilitynameAscending":
      output(
        abilityList.sort((ability1, ability2) => {
          let abilityname1 = ability1.abilityname.toLowerCase();
          let abilityname2 = ability2.abilityname.toLowerCase();
          if (abilityname1 < abilityname2) return -1;
          else if (abilityname1 > abilityname2) return 1;
          else return 0;
        })
      );
      break;
    case "abilitynameDescending":
      output(
        abilityList.sort((ability1, ability2) => {
          let abilityname1 = ability1.abilityname.toLowerCase();
          let abilityname2 = ability2.abilityname.toLowerCase();
          if (abilityname1 > abilityname2) return -1;
          else if (abilityname1 < abilityname2) return 1;
          else return 0;
        })
      );
      break;
    default:
      
      output(
        abilityList.sort((ability1, ability2) =>
          ability1.abilityname.toLowerCase() > ability2.abilityname.toLowerCase()
            ? 1
            : ability2.abilityname.toLowerCase() >
              ability1.abilityname.toLowerCase()
            ? -1
            : 0
        )
      );
      break;
  }
};


