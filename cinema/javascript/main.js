const hamburgerMenu = document.querySelector('.navbar-toggler'); //Selects the element with the class name of navbar-toggler.
//Creating an arrow function for changing the class to active.
const menuIsActive = () => {
  //Selecting the hamburger menu and adding and removing the class of active on click.
  hamburgerMenu.classList.toggle('active');
};
//Adds an event listener of 'click' to the hamburger menu. Then we pass in the function we created where the class is toggled on and off.
hamburgerMenu.addEventListener('click', menuIsActive);

