const ideas = {
    business: [
        "Create a platform that helps small businesses find customers.",
        "Build a service that helps new businesses create their brand.",
        "Create a marketplace for local businesses to sell products online."
    ],

    app: [
        "Create an app that turns everyday problems into simple solutions.",
        "Build an app that helps people organize their goals.",
        "Create an app where users can share and discover useful ideas."
    ],

    school: [
        "Create a smart study app that turns lessons into challenges.",
        "Build an app that helps students organize homework and exams.",
        "Create a study platform where students can teach each other."
    ],

    money: [
        "Create a marketplace where people can sell digital products.",
        "Build a platform that connects freelancers with small businesses.",
        "Create an app that teaches beginners useful money skills."
    ],

    random: [
        "Create something that solves a problem people face every day.",
        "Build a tool that saves people time.",
        "Turn a simple everyday problem into a useful invention."
    ]
};

function createIdea() {

    const category = document.getElementById("category").value;
    const result = document.getElementById("result");

    const categoryIdeas = ideas[category];

    const randomIndex = Math.floor(Math.random() * categoryIdeas.length);

    result.innerText = categoryIdeas[randomIndex];
}
