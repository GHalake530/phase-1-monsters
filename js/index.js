const monsterContainer = document.querySelector('#monster-container');
const buttonContainer = document.querySelector('#create-monster');
const backButton = document.querySelector('#back');
const forwardButton = document.querySelector('#forward');

function fetchMonsters() {
  fetch('http://localhost:3000/monsters')
    .then((response) => response.json())
    .then((data) => displayMonsters(data))
    .catch((error) => console.error('Error fetching monsters:', error));
}

function displayMonsters(monsters) {
  // Clear existing content
  monsterContainer.innerHTML = '';

  monsters.forEach((monster) => {
    const monsterCard = document.createElement('div');
    monsterCard.classList.add('monster-card');

    const nameHeading = document.createElement('h2');
    nameHeading.textContent = monster.name;

    const descriptionParagraph = document.createElement('p');
    descriptionParagraph.textContent = monster.description;

    monsterCard.appendChild(nameHeading);
    monsterCard.appendChild(descriptionParagraph);

    monsterContainer.appendChild(monsterCard);
  });
}
fetchMonsters();

const monsterForm=document.querySelector('#monster-form')
    monsterForm.addEventListener('submit',(event)=>{
        event.preventDefault();
        const monsterName=event.target.name.value
        const monsterAge=event.target.age.value
        const monsterDescription=event.target.description.value
    const monster={
        name:monsterName,
        age:monsterAge,
        description:monsterDescription
    }
    })


