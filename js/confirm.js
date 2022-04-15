function loadData() {
	var confirmName = document.getElementById("confirm_name");
	confirmName.textContent = sessionStorage.firstName + " " + sessionStorage.lastName;
	var confirmEmail = document.getElementById("confirm_email");
	confirmEmail.textContent = sessionStorage.email;
	var confirmPhoneNumber = document.getElementById("confirm_phone");
	confirmPhoneNumber.textContent = sessionStorage.phoneNumber;
	var confirmAge = document.getElementById("confirm_age");
	confirmAge.textContent = sessionStorage.age;
	var occupationChecked = document.getElementById("occupationChecked");
	occupationChecked.textContent = sessionStorage.occupation;
	var yourCoursesChoiced = document.getElementById("selectedCourses");
	var yourCourses = "";
	if (sessionStorage.logicmath == "true")
		yourCourses += "logicmath, ";
	if (sessionStorage.python == "true")
		yourCourses += "python, ";
	if (sessionStorage.game == "true")
		yourCourses += "game, ";
	yourCoursesChoiced.textContent = yourCourses.substring(0, yourCourses.length - 2);
}

function comebackRegister() {
	window.location = "register.html";
}

function init() {
	loadData();
	var cancelButton = document.getElementById("cancelButton");
	cancelButton.onclick = comebackRegister;

}

window.onload = init;