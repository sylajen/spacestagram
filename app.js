'use strict'

const switcher = document.querySelector('.toggleDark');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')
    var className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark Mode";
    }
    else {
        this.textContent = "Light Mode";
    }

    console.log('current class name: ' + className);
});

/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  x.classList.toggle("change");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  x.classList.toggle("change");
}

function changeImage(imageName) {
  let img = document.querySelector("#avatar");
  img.setAttribute('src', imageName);
}


avatarChange.addEventListener('click', function() {
    var avatarName = "avatars/helmets/SpaceHelmetRed.png";
    if(avatarName == "light-theme") {
        this.textContent = "Dark Mode";
    }
    else {
        this.textContent = "Light Mode";
    }

    console.log('current profile picture: ' + avatarName);
});

/* Everything related to getting the images from NASA

const spaceImage = document.getElementById('image_result');

const spaceImage = [];
const author1 = document.getElementById('author1-result');
const author2 = document.getElementById('author2-result');
const dateTaken = document.getElementById('dateTaken-result');*/



/***************************************************************************/
const url = 'https://api.nasa.gov/planetary/apod?api_key=';
const api_key = config.NASA_API_KEY;

const fetchNASAData = async () => {
  try {
    const response = await fetch('${url}${api_key}')
    const data = await response.json()
    console.log('NASA APOD data', data)
  } catch (error) {
    console.log(error)
  }
}

const displayData = data => {
  document.getElementById('title').textContent = data.title;
  document.getElementById('date').textContent = data.date;
  document.getElementById('picture').textContent = data.picture;
  document.getElementById('explanation').textContent = data.explanation;
}

fetchNASAData()
/*

*/