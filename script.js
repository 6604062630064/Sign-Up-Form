const button = document.querySelector("button")
const inputs = document.querySelectorAll("input")
const password = document.querySelector("#password")
const cpassword = document.querySelector("#cpassword")
const ddd = document.querySelector("#ddd");

function checkPassword() {
    if (cpassword.value !== password.value) {
        ddd.classList.remove("hide");
        ddd.classList.add("unmatched")
        
    }
}


button.addEventListener("click", e => {
    inputs.forEach(input => {
        input.classList.add("submitted");
    })

    checkPassword()
})

