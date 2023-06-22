const passButton = document.querySelector(".toggle-password");
const passInput = document.querySelector(".input__password");
const [passEyeSlash, passEye] = passButton.children;
const form = document.querySelector(".form");

let passwordVisible = false;
passButton.addEventListener("click", () => {
	passEye.classList.toggle("hide");
	passEyeSlash.classList.toggle("hide");

	passInput.type = passwordVisible === false ? "text" : "password";

	passwordVisible = !passwordVisible;
});

form.addEventListener("submit", (e) => {
	e.preventDefault();
	console.log(document.querySelector(".input__email").value);
	console.log(document.querySelector(".input__password").value);
});
