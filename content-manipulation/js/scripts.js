function preloader() {
    let imagesList = [
        "./imgs/cat.png",
        "./imgs/dog.png",
        "./imgs/hamster.png"
    ];

    let images = [];
    for (let i = 0; i < imagesList.length; i++) {
        images[i] = new Image();
        images[i].src = imagesList[i];
    }

    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
}
window.addEventListener("load", preloader);



let contentData = {
    option1: {
        headingContent: "Cat",
        bodyText: "Cats are independent but very loving animals that don't require such a big space. They need a litter box, scratching post and occasional playtime. Some are very good at entertaining themselves.",
        imgUrl: "imgs/cat.png",
        imgAlt: "Cat on a orange background"
    },
    option2: {
        headingContent: "Dog",
        bodyText: "Dogs are social, loyal companions that require daily exercise, training, and companionship. They are great for active people or families who can provide lots of time and space for them.",
        imgUrl: "imgs/dog.png",
        imgAlt: "Dog on a orange background"
    },
    option3: {
        headingContent: "Hamster",
        bodyText: "Hamsters are small, easy-to-care pets that are perfect for tiny spaces. They need a proper cage and a running wheel, and overall don't take a lot of maintenance.",
        imgUrl: "imgs/hamster.png",
        imgAlt: "Hamster on a orange background"
    }
};




let contentContainer = document.getElementById("content");
let buttons = document.querySelectorAll(".content-button");



function handleSelection(event) {
    buttons.forEach(button => {
        button.removeAttribute("id");
    });

    event.target.setAttribute("id", "active-button");

    let selectedContent;
    if (event.target.dataset.content === "1") {
        selectedContent = contentData.option1;
    } else if (event.target.dataset.content === "2") {
        selectedContent = contentData.option2;
    } else if (event.target.dataset.content === "3") {
        selectedContent = contentData.option3;
    }

    contentContainer.innerHTML = `
        <h1>${selectedContent.headingContent}</h1>
        <div class="textbox">
            <img src="${selectedContent.imgUrl}" alt="${selectedContent.imgAlt}" class="catimg">
            <p>${selectedContent.bodyText}</p>
        </div>
    `;
}


buttons.forEach(button => {
    button.addEventListener("click", handleSelection);
});
