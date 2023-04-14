var coll = document.getElementsByClassName("collapse");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var collapse-content = this.nextElementSibling;
    if (collapse-content.style.maxHeight){
      collapse-content.style.maxHeight = null;
    } else {
      collapse-content.style.maxHeight = collapse-content.scrollHeight + "px";
    }
  });
}