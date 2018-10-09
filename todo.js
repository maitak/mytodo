// window.onload = function () {
  function addItem () {
    var li = document.createElement("li");
    var text = document.getElementById("item").value;
    var listItem  = document.createTextNode(text);
    li.appendChild(listItem);

    if (text === '') {
      alert("You add an activity");
    } else {
      document.querySelector("#itemList").appendChild(li);
    }
    document.getElementById("item").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }



window.onload = function () {

  // Get the input field
  var input = document.getElementById("item");

  // Execute a function when the user releases a key on the keyboard
  input.addEventListener("keyup", function (event) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Trigger the button element with a click
      document.getElementById("add").click();
    }
  });

}
window.onload = function () {
  var list = document.querySelector('ul');
  list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'li') {
      ev.target.classList.toggle('checked');
    }
  }, false);
}

// Create a "close" button and append it to each list item
var mylist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < mylist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  mylist[i].appendChild(span);
}

// Click on a close button to hide the current list item

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}








// }

