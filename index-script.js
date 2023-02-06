let ingredientSection = document.querySelector(".ingredient-section");

ingredientSection.addEventListener("click", function(event) {
  let clickedTarget = event.target;
  let targetHasCheckedClass =  clickedTarget.classList.contains("checked");
  
  if (clickedTarget.classList.contains("fa-check")) {
    if (targetHasCheckedClass === true) {
      clickedTarget.classList.remove("checked")
      clickedTarget.style.color = "white";
      clickedTarget.parentElement.style.borderColor = "black";
    } else {
      clickedTarget.classList.add("checked"); 
      clickedTarget.style.color = "#F2994A";
      clickedTarget.parentElement.style.borderColor = "white";
    } 
  }
});