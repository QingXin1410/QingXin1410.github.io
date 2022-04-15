function saveData() {
	var firstName = document.getElementById("fname").value;
	sessionStorage.firstName = firstName;
	var lastName = document.getElementById("lname").value;
	sessionStorage.lastName = lastName;
	var email = document.getElementById("email").value;
	sessionStorage.email = email;
	var phoneNumber = document.getElementById("phone").value;
	sessionStorage.phoneNumber = phoneNumber;
	var age = document.getElementById("age").value;
	sessionStorage.age = age;

	var occupationArray = document.getElementById("radioOccupation").getElementsByTagName("input");
	var i=0;
	while (i < occupationArray.length) {
		if (occupationArray[i].checked == true) {
			sessionStorage.occupation = occupationArray[i].value;
		}
		i += 1;
	}
	
	var logicmath = document.getElementById("logicmath");
	if (logicmath.checked == true) {
		sessionStorage.logicmath = "true";
	}
	else sessionStorage.logicmath = "false";
	var python = document.getElementById("python");
	if (python.checked == true) {
		sessionStorage.python = "true";
	}
	else sessionStorage.python = "false";
	var game = document.getElementById("game");
	if (game.checked == true) {
		sessionStorage.game = "true";
	}
	else sessionStorage.game = "false";

}

function prefillData() {
	if (sessionStorage.firstName != null) {
		document.getElementById("fname").value = sessionStorage.firstName;
		document.getElementById("lname").value = sessionStorage.lastName;
		document.getElementById("email").value = sessionStorage.email;
		document.getElementById("age").value = sessionStorage.age;
		document.getElementById("phone").value = sessionStorage.phoneNumber;
		switch (sessionStorage.occupation) {
			case "highschool":
				document.getElementById("highschool").checked = true;
				break;
			case "university":
				document.getElementById("university").checked = true;
				break;
			case "working":
				document.getElementById("working").checked = true;
				break;
			case "retired":
				document.getElementById("retired").checked = true;
				break;
		}
		if (sessionStorage.logicmath == "true") {
			document.getElementById("logicmath").checked = true;
		}
		if (sessionStorage.python == "true") {
			document.getElementById("python").checked = true;
		}
		if (sessionStorage.game == "true") {
			document.getElementById("game").checked = true;
		}
	}
}

function init() {
	var regForm = document.getElementById("registerForm");
	regForm.onsubmit = saveData;
	prefillData();
}

window.onload = init;