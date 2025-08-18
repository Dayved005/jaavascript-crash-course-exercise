function toggleButton(selector) {
  const button = document.querySelector(selector);
  if (!button.classList.contains('is-toggled')) {
    turnOffPreviousButton();
    // Add the 'is-toggled' class to the clicked button
    button.classList.add('is-toggled');
  } else {
    button.classList.remove('is-toggled');
  }
}

// 10g
function turnOffPreviousButton() {
  const previousButton = document.querySelector('.is-toggled');
  if (previousButton) {
    previousButton.classList.remove('is-toggled');
  }
}