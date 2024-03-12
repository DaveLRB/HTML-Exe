document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".container");

  var typeColors = {
    normal: "rgba(168, 168, 120, 0.8)",
  fire: "rgba(240, 128, 48, 0.8)",
  water: "rgba(104, 144, 240, 0.8)",
  electric: "rgba(248, 208, 48, 0.8)",
  grass: "rgba(120, 200, 80, 0.8)",
  ice: "rgba(152, 216, 216, 0.8)",
  fighting: "rgba(192, 48, 40, 0.8)",
  poison: "rgba(160, 64, 160, 0.8)",
  ground: "rgba(224, 192, 104, 0.8)",
  flying: "rgba(168, 144, 240, 0.8)",
  psychic: "rgba(248, 88, 136, 0.8)",
  bug: "rgba(168, 184, 32, 0.8)",
  rock: "rgba(184, 160, 56, 0.8)",
  ghost: "rgba(112, 88, 152, 0.8)",
  dragon: "rgba(112, 56, 248, 0.8)",
  dark: "rgba(112, 88, 72, 0.8)",
  steel: "rgba(184, 184, 208, 0.8)",
  fairy: "rgba(238, 153, 172, 0.8)"
  };

  var typeColorBorders = {
    normal: "rgba(168, 168, 120)",
  fire: "rgba(240, 128, 48)",
  water: "rgba(104, 144, 240)",
  electric: "rgba(248, 208, 48)",
  grass: "rgba(120, 200, 80)",
  ice: "rgba(152, 216, 216)",
  fighting: "rgba(192, 48, 40)",
  poison: "rgba(160, 64, 160)",
  ground: "rgba(224, 192, 104)",
  flying: "rgba(168, 144, 240)",
  psychic: "rgba(248, 88, 136)",
  bug: "rgba(168, 184, 32)",
  rock: "rgba(184, 160, 56)",
  ghost: "rgba(112, 88, 152)",
  dragon: "rgba(112, 56, 248)",
  dark: "rgba(112, 88, 72)",
  steel: "rgba(184, 184, 208)",
  fairy: "rgba(238, 153, 172)"
  };

  const numberOfPokemons = parseInt(prompt("Enter the number of pokemons you want to show:"));

  const url =`https://pokeapi.co/api/v2/pokemon?limit=${numberOfPokemons}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const pokemonList = data.results;
      pokemonList.forEach((pokemon) => {
        fetch(pokemon.url)
          .then((response) => response.json())
          .then((pokemonData) => {
            const card = document.createElement("div");
            card.classList.add("card");

            const image = document.createElement("img");
            image.src =
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
              pokemonData.id +
              ".png";
            image.alt = pokemonData.name;

            

            const name = document.createElement("h3");
            name.textContent = pokemonData.name;

            const type = document.createElement("span");

            const pokemonType = pokemonData.types[0].type.name;

            type.textContent = pokemonType;
            card.style.backgroundColor = typeColors[pokemonType];
            card.style.borderColor = typeColorBorders[pokemonType];
            type.style.backgroundColor = typeColors[pokemonType];
            type.style.borderColor = typeColorBorders[pokemonType];
            
            const attributes = document.createElement("ul");
            attributes.classList.add("attributes");
            attributes.style.borderColor = typeColorBorders[pokemonType];

            const hp = document.createElement("li");
            const hpText = document.createElement("strong");
            hpText.textContent = "HP: ";
            hp.appendChild(hpText);

            const hpValue = document.createTextNode(
              pokemonData.stats.find((stat) => stat.stat.name === "hp")
                .base_stat
            );

            hp.appendChild(hpValue);

            const attack = document.createElement("li");
            const attackText = document.createElement("strong");
            attackText.textContent = "Attack: ";
            attack.appendChild(attackText);

            const attackValue = document.createTextNode(
              pokemonData.stats.find((stat) => stat.stat.name === "attack")
                .base_stat
            );
            attack.appendChild(attackValue);

            const defense = document.createElement("li");
            const defenseText = document.createElement("strong");
            defenseText.textContent = "Defense: ";
            defense.appendChild(defenseText);

            const defenseValue = document.createTextNode(
              pokemonData.stats.find((stat) => stat.stat.name === "defense")
                .base_stat
            );
            defense.appendChild(defenseValue);

            const spAttack = document.createElement("li");
            const spAttackText = document.createElement("strong");
            spAttackText.textContent = "Special Attack: ";
            spAttack.appendChild(spAttackText);
            const spAttackValue = document.createTextNode(
              pokemonData.stats.find(
                (stat) => stat.stat.name === "special-attack"
              ).base_stat
            );
            spAttack.appendChild(spAttackValue);

            const spDefense = document.createElement("li");
            const spDefenseText = document.createElement("strong");
            spDefenseText.textContent = "Special Defense: ";
            spDefense.appendChild(spDefenseText);
            const spDefenseValue = document.createTextNode(
              pokemonData.stats.find(
                (stat) => stat.stat.name === "special-defense"
              ).base_stat
            );
            spDefense.appendChild(spDefenseValue);

            const speed = document.createElement("li");
            const speedText = document.createElement("strong");
            speedText.textContent = "Speed: ";
            speed.appendChild(speedText);
            const speedValue = document.createTextNode(
              pokemonData.stats.find((stat) => stat.stat.name === "speed")
                .base_stat
            );
            speed.appendChild(speedValue);

            const height = document.createElement("li");
            const heightText = document.createElement("strong");
            heightText.textContent = "Height: ";
            height.appendChild(heightText);
            const heightValue = document.createTextNode(pokemonData.height);
            height.appendChild(heightValue);

            const weight = document.createElement("li");
            const weightText = document.createElement("strong");
            weightText.textContent = "Weight: ";
            weight.appendChild(weightText);
            const weightValue = document.createTextNode(pokemonData.weight);
            weight.appendChild(weightValue);

            const spAttributes = document.createElement("div");
            spAttributes.classList.add("spAttributes");

            const ability = document.createElement("li");
            const abilityLabel = document.createElement("strong");
            abilityLabel.textContent = "Ability: ";
            ability.appendChild(abilityLabel);

            const abilityValue = document.createTextNode(
              pokemonData.abilities[0].ability.name.charAt(0).toUpperCase() +
                pokemonData.abilities[0].ability.name.slice(1)
            );
            ability.appendChild(abilityValue);

            const hiddenAbility = document.createElement("li");
            const hiddenAbilityText = document.createElement("strong");
            hiddenAbilityText.textContent = "Hidden Ability: ";
            hiddenAbility.appendChild(hiddenAbilityText);
            const hiddenAbilityValue = document.createTextNode(
              pokemonData.abilities[1].ability.name.charAt(0).toUpperCase() +
                pokemonData.abilities[1].ability.name.slice(1)
            );
            hiddenAbility.appendChild(hiddenAbilityValue);

            attributes.appendChild(hp);
            attributes.appendChild(attack);
            attributes.appendChild(defense);
            attributes.appendChild(spAttack);
            attributes.appendChild(spDefense);
            attributes.appendChild(speed);
            attributes.appendChild(height);
            attributes.appendChild(weight);
            attributes.appendChild(spAttributes);

            spAttributes.appendChild(ability);
            spAttributes.appendChild(hiddenAbility);

            card.appendChild(image);
            card.appendChild(name);
            card.appendChild(type);
            card.appendChild(attributes);

            container.appendChild(card);
          })
          .catch((error) => {
            console.error("Error fetching Pokemon details:", error);
          });
      });
    })
    .catch((error) => {
      console.error("Error fetching Pokemon list:", error);
    });
});
