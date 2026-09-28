function createIdea() {

    const ideas = [
        "Create an app that helps students organize their study time.",
        "Build a platform where people can share small business ideas.",
        "Create an app that turns daily problems into possible solutions.",
        "Build a marketplace for young creators to sell their digital products.",
        "Create a tool that helps beginners learn coding through challenges."
    ];

    const randomIdea =
        ideas[Math.floor(Math.random() * ideas.length)];

    document.getElementById("result").innerText = randomIdea;
}
