const dinos = [
  {
    id: 'zao7kg1z7',
    name: 'Rex',
    type: 'T Rex',
    age: 100,
    owner: 'Matt',
    adventures: [],
    health: 92,
    imageUrl: 'https://www.fieldandstream.com/resizer/8xkluKAxQZsEHJKj6qwyU0mLhTo=/760x448/filters:focal(458x270:459x271)/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/TQFN3CD5DAEM4DL2ACD42ZJ5E4.png',
    isDeleted: false
  },
  {
    id: '2hb9xcqjv',
    name: 'Steve',
    type: 'Velociraptor',
    age: 1,
    owner: 'Michael',
    adventures: [],
    health: 1,
    imageUrl: 'https://i.ebayimg.com/images/g/61UAAOSweNpdmtI2/s-l640.png',
    isDeleted: false
  },
  {
    id: 'b21cjvutx',
    name: 'Susan',
    type: 'stegosaurus',
    age: 55,
    owner: 'Luke',
    adventures: [],
    health: 0,
    imageUrl: 'https://cdn.mos.cms.futurecdn.net/owYTb9X5fKpeBhgiaxD73b-320-80.jpg',
    isDeleted: false
  },
  {
    id: 'uf3h3g495',
    name: 'Barry',
    type: 'Brontosaurus',
    age: 100,
    owner: 'Matt',
    adventures: [],
    health: 100,
    imageUrl: 'https://bit.ly/3c6Rg41',
    isDeleted: false
  },
  {
    id: 'qiacfga89',
    name: 'Steph',
    type: 'Spinosaurus',
    age: 100,
    owner: 'Matt',
    adventures: [],
    health: 75,
    imageUrl: 'https://cdn1.bigcommerce.com/n-yp39j5/ujq6o/products/1060/images/2390/Papo_Spinosaurus_2019_DansDinosaurs__69805.1552618774.1280.1280.jpg?c=2',
    isDeleted: false
  },
  {
    id: 'pccphjnuz',
    name: 'Tim',
    type: 'Talarurus',
    age: 100,
    owner: 'Matt',
    adventures: [],
    health: 55,
    imageUrl: 'https://vignette.wikia.nocookie.net/dinosaurs/images/2/2b/TalarurusInfobox.png/revision/latest/scale-to-width-down/340?cb=20150512165226',
    isDeleted: false
  },
  {
    id: 'k8ijt42am',
    name: 'Tracy',
    type: 'Triceratops',
    age: 100,
    owner: 'Matt',
    adventures: [],
    health: 0,
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81Wsvp2M7iL._AC_SX425_.jpg',
    isDeleted: false
  },
  {
    id: 'jtbp25uae',
    name: 'Percy',
    type: 'Pterodactyl',
    age: 10,
    owner: 'Michael',
    adventures: [],
    health: 10,
    imageUrl: 'https://images.dinosaurpictures.org/3_pterodactyl_63be.jpg',
    isDeleted: false
  },
  {
    id: 'x67mchqzw',
    name: 'Betty',
    type: 'brontosaurus',
    age: 22,
    owner: 'Matt',
    adventures: [],
    health: 22,
    imageUrl: 'https://bit.ly/2WZhJfM',
    isDeleted: false
  }
];

const adventures = [
  {
    adventureName: 'Adventure 1',
    hpCost: 30,
    adventureDescription: 'This adventure was crazy!'
  },
  {
    adventureName: 'Adventure 2!',
    hpCost: 10,
    adventureDescription: 'This adventure was a walk in the park!'
  },
  {
    adventureName: 'Adventure 3!!',
    hpCost: 43,
    adventureDescription: 'This adventure was kinda tough tbh!'
  },
  {
    adventureName: 'Adventure 4!!!',
    hpCost: 15,
    adventureDescription: 'This adventure was fairly easy!'
  },
  {
    adventureName: 'Adventure 5!!!!',
    hpCost: 5,
    adventureDescription: 'This adventure was quick!'
  }
];

const printToDom = (selector, textToPrint) => {
  document.querySelector(selector).innerHTML = textToPrint;
}

const randomId = () => {
  const buildId = Math.random().toString(36).substr(2, 9);
  console.log(buildId);
};

const ageCheck = (index) => {
  for (let i = 0; i < dinos.length; i++) {
    if (index === 1) {
     return ` year old.`
    } else {
      return ` years old.`
    }
  }
}

const dinoClickEvent = () => {
  for (let i = 0; i < dinos.length; i++) {
    if (dinos[i].isDeleted === false) {
      document.querySelector(`#${dinos[i].name}`).addEventListener('click', function() { showSingleDino(i);});
    }
  }
}

const buildDinos = () => {
  let domString = `
  <div class="card-deck d-flex justify-content-around flex-sm-wrap flex-row">
   `;
  for (let i = 0; i < dinos.length; i++) {
    if (dinos[i].isDeleted === false) {
      domString += `
      <div class="card mt-5 mr-5 ml-5 p-2" style="min-width: 400px;">
        <img class="card-img-top dino-image" src="${dinos[i].imageUrl}" alt="dino img">
        <div class="card-body">
          <div class="row">
            <h5 class="card-title">${dinos[i].name}</h5>
          </div>
          <div class="row">
            <h5 class="card-title">Current HP: ${dinos[i].health}</h5>
          </div>
          <button type="button" class="btn btn-success" id="${dinos[i].name}">View Dino</button>
        </div>
        <div class="card-footer row d-flex justify-content-center">
          <i class="fas fa-clinic-medical"></i>
          <i class="fas fa-utensils"></i>
          <i class="fas fa-hand-paper"></i>
          <i class="fas fa-plane-departure" id="${dinos[i]}"></i>
        </div>
      </div>
      `;
    }
  }
  domString += `</div>`;
  printToDom('#show-dinos', domString);
  dinoClickEvent();
}

const showSingleDino = (dinoIndex) => {
  let domString = '';
  for (let i = 0; i < dinos.length; i++) {
    if (i === dinoIndex) {
      domString += `
      <div class="card mt-5 mr-5 ml-5 p-2" style="min-width: 400px;">
      <img class="card-img-top dino-image" src="${dinos[i].imageUrl}" alt="dino img">
      <div class="card-body">
        <div class="row">
          <h5 class="card-title">Meet ${dinos[i].name}.</h5>
        </div>
        <div class="row">
        <h5 class="card-title">${dinos[i].name} is ${dinos[i].age} ${ageCheck(dinos[i].age)}</h5>
        </div>
        <div class="row">
          <h5 class="card-title">${dinos[i].name}'s current HP is ${dinos[i].health} / 100.</h5>
        </div>
        <div class="row">
          <h5 class="card-title">The adventures of ${dinos[i].name}: </h5>
        </div>
        <div class="row">
          <ul>
            <li>Fun adventure</li>
          </ul>
        </div>
      </div>
      <div class="card-footer row d-flex justify-content-center">
        <i class="fas fa-clinic-medical"></i>
        <i class="fas fa-utensils"></i>
        <i class="fas fa-hand-paper"></i>
        <i class="fas fa-plane-departure"></i>
      </div>
      <div class="card-footer row d-flex justify-content-center">
        <button type="button" class="btn btn-primary mr-2" onclick="returnHome()">Return to All Dinos</button>
        <button type="button" class="btn btn-danger ml-2" onclick="extinguishDino(${i})">Extinguish ${dinos[i].name}</button>
      </div>
    </div>
    `;
    }
  }
  printToDom('#show-specific-dino', domString);
  document.querySelector('#show-dinos').innerHTML = '';
}

const returnHome = () => {
  document.querySelector('#show-specific-dino').innerHTML = '';
  buildDinos();
}

const extinguishDino = (dinoToDelete) => {
  for (let i = 0; i < dinos.length; i++) {
    if (i === dinoToDelete) {
      dinos[i].isDeleted = true;
    }
  }
  document.querySelector('#show-specific-dino').innerHTML = '';
  buildDinos();
}

const adventureClickEvent = () => {
  for (let i = 0; i < dinos.length; i++) {
    document.querySelector(`#${dinos[i]}`).addEventListener('click', function() { sendOnAdventure(i);});
  }
}

const sendOnAdventure = () => {
  const randomAdventure = Math.floor((Math.random() * adventures.length) + 0);
  console.log(randomAdventure);
  for (let i = 0; i < adventures.length; i++) {
    if (i === randomAdventure) {
      const singleAdventure = adventures.slice(i);
      console.log(singleAdventure);
    }
  }
}

init = () => {
  buildDinos();
  sendOnAdventure();
}

init();
