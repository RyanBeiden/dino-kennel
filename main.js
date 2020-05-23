console.log('This js works!!!');

const printToDom = (selector, textToPrint) => {
  document.querySelector(selector).innerHtml = textToPrint;
}
