  
var text = ["Could your business benefit from a beautiful website?", "Affordable, responsive websites at very competitive prices", "Boost you business today!"];
var counter = 0;
var element = document.getElementById("changeText");
var inst = setInterval(change, 5000);

function change() {
  element.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
    // clearInterval(inst); 
  }
  console.log(element);
  // element.style.width = "100%"

  element.style.textAlign = 'centre';
  element.classList.toggle('disabled');
}
setInterval(function () {
  element.style.opacity = '0.66'

}, 5000)
