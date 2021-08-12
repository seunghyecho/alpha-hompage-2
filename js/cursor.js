 
 var cursor = document.querySelector("#cursor");

 document.addEventListener("mouseout", function (e) {
   cursor.setAttribute(
     "style",
     "top: " + (e.clientY - 10) + "px; left: " + (e.clientX - 10) + "px;"
   );
 });
