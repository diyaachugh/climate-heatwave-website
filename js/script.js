// Heatwave alert prompt (used by the hero button on the home page)
function showAlert(){
  alert("Stay Hydrated! Check the latest weather forecast before going outdoors.");
}

// Highlight the current page in the nav so people can see where they are
document.addEventListener("DOMContentLoaded", function(){
  var current = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("nav a").forEach(function(link){
    var href = link.getAttribute("href");
    if(href === current){
      link.classList.add("active");
    }
  });
});