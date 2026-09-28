function createIdea() {
    const idea = document.getElementById("ideaInput").value;

    if (idea.trim() === "") {
        document.getElementById("result").innerText = "Write your idea first 💡";
    } else {
        document.getElementById("result").innerText = "Your idea: " + idea;
    }
}
