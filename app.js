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

/*
function searchQuery() {
  starts at this format
      https://images-api.nasa.gov/search
  searchBox.getString() = "https://images.nasa.gov/search-results?q=" + string + "&page=1&media=image&yearStart=1920&yearEnd=2022" // "q=apollo 11";
  once I get to the URL of what the user searched, then I can grab each individual pic
  from the site and show them (technically doesn't have to be in order)

  
  should look like this format
    https://images.nasa.gov/search-results?q=rocket&page=1&media=image&yearStart=1920&yearEnd=2022

*/