document.querySelector(".profile__edit-button").addEventListener("click", function() {
    document.querySelector(".popup").classList.add("popup__open")
})

document.querySelector(".popup__icon").addEventListener("click", function() {
    document.querySelector(".popup").classList.remove("popup__open")
})

let formElement = document.querySelector(".popup__form");
let nameInput = document.querySelector(".popup__input_name");
let jobInput = document.querySelector(".popup__input_job");

function handleFormSubmit (evt) {
    evt.preventDefault();

    const nInput = nameInput.value;
    const jInput = jobInput.value;

    const title = document.querySelector(".profile__title");
    const subtitle = document.querySelector(".profile__subtitle");

    title.textContent = nInput;
    subtitle.textContent = jInput;
    
    document.querySelector(".popup").classList.remove("popup__open")
}

formElement.addEventListener('submit', handleFormSubmit);
