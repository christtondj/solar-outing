const percentageNumber = document.getElementById('percentage');
function displayPercentage(percentage) {
    percentageNumber.innerText = `${Math.floor(percentage)}%`;
}

function PageLoader() {
  const elements = document.querySelectorAll('.loader-column-inner');
  const loader = document.getElementById('loader');
  elements[0].classList.add('is-edge-animate');
  elements[1].classList.add('is-reversed-animate');
  elements[2].classList.add('is-centered-animate');
  elements[3].classList.add('is-reversed-animate');
  elements[4].classList.add('is-edge-animate');
  loader.classList.add('loader-scale');
}

let loadedPercentage = 0;

function updatePercentage() {
  if (loadedPercentage < 100) {
    loadedPercentage += 1;
    displayPercentage(loadedPercentage);
    setTimeout(updatePercentage, 10);
  } else if (loadedPercentage = 100){
    percentageNumber.classList.add('slide-up');
   setTimeout(PageLoader, 500);
  }

}

window.addEventListener('load', updatePercentage);
