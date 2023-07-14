//GitHub answer:
// https://github.com/Bryantellius/es6_modules/blob/answer/src/index.js

import WishList from "./wishlist";

const submitForm = document.querySelector("#submitForm");
const makeInput = document.querySelector("#makeInput");
const modelInput = document.querySelector("#modelInput");
const yearInput  = document.querySelector("#yearInput");
const carMakeP = document.querySelector("#car-make");
const carModelP = document.querySelector("#car-model");
const carYearP  = document.querySelector("#car-year");
const removeBtn  = document.querySelector(".removeBtn");
const wishlistUl  = document.querySelector("#wishListContainer > ul");

const wishlist = new WishList();
// The function we want to run when the submit button occurs
submitForm.addEventListener("submit", addCar);
removeBtn.addEventListener("click", removeCar);


//Submit event handler
function addCar(event) {
    event.preventDefault();
    console.log(makeInput, modelInput, yearInput);
    wishlist.add(makeInput.value, modelInput.value, yearInput.value);
    updateDOMList();
}

function removeCar() {
    const carId = Number(removeBtn.getAttribute("data-carId"));
    wishlist.remove(carId);
    updateDOMList();
    carMakeP.textContent = "";
    carModelP.textContent = "";
    carYearP.textContent = "";
    //Disables the removeBtn
    removeBtn.disabled = true;
}

function showCarDetails(car) {
    carMakeP.textContent = car.make;
    carModelP.textContent = car.model;
    carYearP.textContent = car.year;
    //Enables the removeBtn
    removeBtn.disabled = false;
    removeBtn.setAttribute("data-carId", car.id);
}

function updateDOMList() {
    //Clears the previous list items
    wishlistUl.innerhtml = "";
    //Iterate
    wishlist.list.forEach((car) => {
        //Create element
        const newLi = document.createElement("li");
        const newMakeP = document.createElement("p");
        const newModelP = document.createElement("p");
        //Modify elements
        newLi.addEventListener("click", () => {
            showCarDetails(car);
        })
        newMakeP.textContent = `${car.make}`;
        newModelP.textContent = `${car.model}`;
        //Append elements
        newLi.append(newMakeP, newModelP);
        wishlistUl.appendChild(newLi);
    });
}