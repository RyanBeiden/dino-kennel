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
    imageUrl: 'https://lh3.googleusercontent.com/proxy/_rJSL88ErOEvgHl5SInWOEolOdikwIMcKWPv9iqZzt3IUkD33WdG6d9qd8TmNJFSiszTXm7JeGQPocmB_BZErKxt__25LOpW75dmnVuy0nuY0PatX2cIYA-C',
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
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTOdrC7hlvBawFQ7g8vgwHcfQphX5WfeN2bth0dvc4M2oxNGdSD',
    isDeleted: false
  }
];

const printToDom = (selector, textToPrint) => {
  document.querySelector(selector).innerHTML = textToPrint;
}

const randomId = () => {
  const buildId = Math.random().toString(36).substr(2, 9);
  console.log(buildId);
};

const clickDinoEvent = () => {
  for (let i = 0; i < dinos.length; i++) {
    document.querySelector(`#${dinos[i].name}`).addEventListener('click', function() { showSingleDino(i);});
  }
}

const clickReturnEvent = () => {
  document.querySelector('#return-to-home').addEventListener('click', returnHome);
}

const clickExtinguishEvent = () => {
  for (let i = 0; i < dinos.length; i++) {
    document.querySelector('#extinguish-dino').addEventListener('click', function() { extinguishDino(i);});
  }
}

const clickConfirmExtinguishEvent = () => {
  for (let i = 0; i < dinos.length; i++) {
    document.querySelector('#confirm-extinguish').addEventListener('click', function() { confirmDinoExtinguish(i);});
  }
}

const ageCheck = (index) => {
  for (let i = 0; i < dinos.length; i++) {
    if (index === 1) {
     return ` year old.`
    } else {
      return ` years old.`
    }
  }
}

const showDinos = () => {
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
          <i class="fas fa-plane-departure"></i>
        </div>
      </div>
      `;
    }
  }
  domString += `</div>`;
  printToDom('#show-dinos', domString);
  clickDinoEvent();
  document.querySelector('#extinguish-dino').innerHTML = '';
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
        <button type="button" class="btn btn-primary mr-2" id="return-to-home">Return to All Dinos</button>
        <button type="button" class="btn btn-danger ml-2" id="extinguish-dino">Extinguish ${dinos[i].name}</button>
      </div>
    </div>
    `;
    }
  }
  printToDom('#show-specific-dino', domString);
  document.querySelector('#show-dinos').innerHTML = '';
  clickReturnEvent();
  clickExtinguishEvent();
}

const returnHome = () => {
  document.querySelector('#show-specific-dino').innerHTML = '';
  showDinos();
}

const extinguishDino = (dinoIndex) => {
  document.querySelector('#show-specific-dino').innerHTML = '';
  let domString = '';
  for (let i = 0; i < dinos.length; i++) {
    if (i === dinoIndex) {
      domString += `
        <form class="d-flex justify-content-center flex-column extinguish-form">
          <div class="form-group">
            <label for="extinguishDinoInput">This will permanently extinguish your dino.<br>
            Please type ${dinos[i].name} to confirm.</label>
            <input type="email" class="form-control" id="extinguishDinoInput" aria-describedby="extinguishHelp" placeholder="Type Dinos Name">
            <small id="extinguishHelp" class="form-text text-muted">This cannot be undone</small>
          </div>
          <button type="button" class="btn btn-danger" id="confirm-extinguish">Extinguish ${dinos[i].name}</button>
        </form>
        `;
    }
  }
  printToDom('#extinguish-dino', domString);
  clickConfirmExtinguishEvent();
}

const confirmDinoExtinguish = (dinoIndex) => {
  for (let i = 0; i < dinos.length; i++) {
    if (i === dinoIndex) {
      dinos[i].isDeleted = true;
    }
  }
}

init = () => {
  showDinos();
}

init();

// Currently the Extinguish Functions are not changing the isDeleted to true for the specific index, it is instead taking each index
// changing isDeleted to true...
