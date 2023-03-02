const imageList = [
    "images/susan-smith.jpg",
    "images/anna-johnson.jpg",
    "images/peter-jones.jpg",
    "images/bill-anderson.jpg",
]
const nameList = ["Susan Smith", "Anna Johnson", "Peter Jones", "Bill Anderson"];
const titleList = ["Web Developer", "Web Designer", "Intern", "The Boss"];
const descriptionList = [
    "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",
]

// Get Elements
const iconElement = document.getElementById('icon');
const nameElement = document.getElementById('name');
const titleElement = document.getElementById('title');
const descriptionElement = document.getElementById('description');
const leftButtonElement = document.getElementById('left-button');
const rightButtonElement = document.getElementById('right-button');
const surpriseButtonElement = document.getElementById('surprise-button');


let index = 0;

function toTheLeft() {
    index--;

    if (index < 0) {
        index = nameList.length-1;
    }
        
        iconElement.setAttribute("src", imageList[index]);
        nameElement.textContent = nameList[index];
        titleElement.textContent = titleList[index];
        descriptionElement.textContent = descriptionList[index];
}

function toTheRight() {
    index++;

    if (index > nameList.length-1) {
        index = 0;
    }
        
        iconElement.setAttribute("src", imageList[index]);
        nameElement.textContent = nameList[index];
        titleElement.textContent = titleList[index];
        descriptionElement.textContent = descriptionList[index];

}

function surprise() {
    index = Math.floor(Math.random() * 4);

    iconElement.setAttribute("src", imageList[index]);
    nameElement.textContent = nameList[index];
    titleElement.textContent = titleList[index];
    descriptionElement.textContent = descriptionList[index];
}

leftButtonElement.addEventListener('click', toTheLeft);
rightButtonElement.addEventListener('click', toTheRight);
surpriseButtonElement.addEventListener('click', surprise);


