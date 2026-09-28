const ideas = {
    business: [
        "💼 Create a platform that helps small businesses find customers.",
        "💼 Build a service that helps new businesses create their brand.",
        "💼 Create a marketplace where local businesses can sell products online."
    ],

    app: [
        "📱 Create an app that turns everyday problems into simple solutions.",
        "📱 Build an app that helps people organize their goals.",
        "📱 Create an app where users can discover useful ideas."
    ],

    school: [
        "🎓 Create a smart study app that turns lessons into challenges.",
        "🎓 Build an app that helps students organize homework.",
        "🎓 Create a platform where students can share study ideas."
    ],

    money: [
        "💰 Create a marketplace where people can sell digital products.",
        "💰 Build a platform connecting freelancers with businesses.",
        "💰 Create an app that teaches useful money skills."
    ],

    random: [
        "🚀 Create something that solves an everyday problem.",
        "🚀 Build a tool that saves people time.",
        "🚀 Turn a simple problem into a useful invention."
    ]
};

function createIdea() {

    const category = document.getElementById("category").value;
    const result = document.getElementById("result");

    const categoryIdeas = ideas[category];

    const randomIndex =
        Math.floor(Math.random() * categoryIdeas.length);

    result.innerText = categoryIdeas[randomIndex];
}
function saveIdea() {
    const idea = document.getElementById("result").innerText;

    if (idea === "") {
        alert("Generate an idea first!");
        return;
    }

    localStorage.setItem("savedIdea", idea);

    alert("❤️ Idea saved!");
}
function showSavedIdea() {
    const saved = localStorage.getItem("savedIdea");
    const savedIdeas = document.getElementById("savedIdeas");

    if (saved) {
        savedIdeas.innerText = saved;
    } else {
        savedIdeas.innerText = "No saved ideas yet.";
    }
}
