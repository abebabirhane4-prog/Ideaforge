function createIdea() {
    let idea = document.getElementById("IdeaInput").value;
    if (idea === "") { document.getElementById("result").innerText=
                          "Write your idea first 💡"
   } else {
       document.getElementById("result").innerText=
           "Your idea: " + idea + " 🚀";
   }
}  
  
  
  
  
         
  
