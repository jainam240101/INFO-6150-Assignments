

	window.addEventListener("load", validateForm);

	var labelS = document.getElementById('drinkCheckTextSmall');
	var labelM = document.getElementById('drinkCheckTextMed');
	var labelL = document.getElementById('drinkCheckTextLarge');

	labelS.htmlFor = 'drinkCheckBox';
	labelM.htmlFor = 'drinkCheckBox';
	labelL.htmlFor = 'drinkCheckBox';

	const select = document.getElementById('drink');

	select.addEventListener('change', function handleChange(event) {

		var checkCont = document.getElementsByClassName('checkContainer');
		for (var i = 0; i < checkCont.length; i++) {
			checkCont[i].style.display = "flex";
		}

		var Drinkitem = document.getElementById('drink').value;

		if (Drinkitem == "coffee") {
			labelS.innerHTML = "Small : 1$ ";
			labelM.innerHTML = "Grande : 2.2$ ";
			labelL.innerHTML = "Venti : 3.5$ ";
		}
		else if (Drinkitem == "tea") {
			labelS.innerHTML = "Small : 0.2$ ";
			labelM.innerHTML = "Grande : 1.2$ ";
			labelL.innerHTML = "Venti : 2.9$ ";
		}

		else if (Drinkitem == "beer") {
			labelS.innerHTML = "Small : 4.5$ ";
			labelM.innerHTML = "Medium : 5.3$ ";
			labelL.innerHTML = "Large : 7.4$ ";
		}
		else if (Drinkitem == "wine") {
			labelS.innerHTML = "Small : 9.7$ ";
			labelM.innerHTML = "Medium : 11.7$ ";
			labelL.innerHTML = "Large : 12.7$ ";
		}

	});

	function validatePhoneNumber(input_str) {
		var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

		return re.test(input_str);
	}

	function validateZip(input_str) {
		var re = /(^\d{5}$)|(^\d{5}-\d{4}$)/;

		return re.test(input_str);
	}

	function validateRadioButton() {
		for (var i = 0; i < drinkSize.length; i++) {
			var drink = drinkSize[i];
			if (drink.querySelector("input[type=radio]").checked) {
				return true;
			}
		}
		return false;
	}

	function validateEmail(email) {
		return String(email).toLowerCase().match(
			/^[A-Za-z0-9._%+-]+@northeastern\.edu$/);
	};

	function validateName(name) {
		return String(name).toLowerCase().match(/^[a-zA-Z]+$/);
	};

	var email = document.getElementById('emailId');
	var phone = document.getElementById('phoneNumber');
	var fname = document.getElementById('firstName');
	var lname = document.getElementById('lastName');
	var address1 = document.getElementById('streetAddress1');
	var address2 = document.getElementById('streetAddress2');
	var zip = document.getElementById('zipcode');
	var city = document.getElementById('city');
	var state = document.getElementById('state');
	var sourceElements = document.getElementsByClassName('source');
	var drinkSize = document.getElementsByClassName("checkContainer");
	var DrinkName = document.getElementById('drink');
	var comments = document.getElementById('comments');
	var drinkCheckSmall = document.getElementById('drinkCheckSmall');
	var drinkCheckMedium = document.getElementById('drinkCheckMed');
	var drinkCheckLarge = document.getElementById('drinkCheckLarge');
	var checkTextDyanmics = document.getElementById('checkDynamic');

	var CheckCount = 0;

	function ValidateTextField(val) {

		if (val.checked) {
			CheckCount++;
		}
		else {
			CheckCount--;
		}

		if (CheckCount == 0) {
			document.getElementById('checkDynamic').value = "";
			document.getElementById('checkDynamic').style.display = 'none';
		}
		else {
			document.getElementById("checkDynamic").required = true;
			document.getElementById('checkDynamic').style.display = 'block';
		}
	}

	email.onkeyup = function () {
		if (!validateEmail(email.value)) {
			document.getElementById('email_error').style.display = "block";

		} else {
			document.getElementById('email_error').style.display = "none";

		}
	};

	phone.onkeyup = function () {
		if (!validatePhoneNumber(phone.value)) {
			document.getElementById('phone_error').style.display = "block";

		} else {
			document.getElementById('phone_error').style.display = "none";
		}
	}

	fname.onkeyup = function () {
		if (!validateName(fname.value)) {

			document.getElementById('firstname_error').style.display = "block";
		} else {

			document.getElementById('firstname_error').style.display = "none";

		}
	}

	lname.onkeyup = function () {
		if (!validateName(lname.value)) {

			document.getElementById('lastname_error').style.display = "block";
		} else {

			document.getElementById('lastname_error').style.display = "none";

		}
	}

	zip.onkeyup = function () {
		if (!validateZip(zip.value)) {

			document.getElementById('zip_error').style.display = "block";
		} else {

			document.getElementById('zip_error').style.display = "none";
		}
	}


	drinkCheckSmall.onclick = function() {
			document.getElementById('radioButton_error').style.display = "none";
	}

	drinkCheckMedium.onclick = function() {
			document.getElementById('radioButton_error').style.display = "none";
	}

	drinkCheckLarge.onclick = function() {
			document.getElementById('radioButton_error').style.display = "none";
	}
	
	function isValidated() {

		if (validateZip(zip.value) && validateName(lname.value) && validateName(fname.value) && validatePhoneNumber(phone.value) && validateEmail(email.value) && validateRadioButton()) {
			return true;
		}
		else {
			return false;
		}
	}

	function validateForm() {

		let form = document.getElementById("myForm");

		form.addEventListener("submit", function (event) {

			if (!validatePhoneNumber(phone.value)) {

				document.getElementById('phone_error').style.display = "block";
			} else {

				document.getElementById('phone_error').style.display = "none";

			}

			if (!validateEmail(email.value)) {

				document.getElementById('email_error').style.display = "block";
			} else {

				document.getElementById('email_error').style.display = "none";

			}


			if (!validateName(fname.value)) {

				document.getElementById('firstname_error').style.display = "block";
			} else {

				document.getElementById('firstname_error').style.display = "none";

			}
			if (!validateName(lname.value)) {

				document.getElementById('lastname_error').style.display = "block";
			} else {

				document.getElementById('lastname_error').style.display = "none";

			}

			if (!validateZip(zip.value)) {

				document.getElementById('zip_error').style.display = "block";
			} else {

				document.getElementById('zip_error').style.display = "none";
			}

			if (!validateRadioButton()) {

				document.getElementById('radioButton_error').style.display = "block";
			} else {

				document.getElementById('radioButton_error').style.display = "none";
			}

			console.log(isValidated());

			if (isValidated() === true) {

				var drinkSize = getTheDrinkName();

				addRow(fname.value, lname.value, email.value, phone.value, address1.value, address2.value, zip.value, city.value, state.value, DrinkName.value, drinkSize, checkTextDyanmics, sourceElements, comments.value);
				const inputs = document.querySelectorAll('#firstName, #lastName, #emailId, #phoneNumber, #streetAddress1, #streetAddress2, #zipcode, #city, #state, #drink, .drinkSize, #comments, .source');

				inputs.forEach(input => {
					if (input.className == "source") {
						input.checked = false;
					} else {
						input.value = '';
						unCheckRadioButton();
					}
				});
			}
			event.preventDefault();
		});
	}

	function unCheckRadioButton() {
		for (var i = 0; i < drinkSize.length; i++) {
			var drink = drinkSize[i];
			if (drink.querySelector("input[type=radio]").checked) {
				drink.querySelector("input[type=radio]").checked = false;
				// document.getElementById("checkTextFieldDynamic").textContent = "";
				ValidateTextField(false);
			}
		}
	}

	function getTheDrinkName() {

		for (var i = 0; i < drinkSize.length; i++) {
			var drink = drinkSize[i];
			if (drink.querySelector("input[type=radio]").checked) {
				return drink.querySelector("label[for=drinkCheckBox]").textContent;
			}
		}
	}


	function addRow(fnameV, lnameV, emailV, phoneV, address1V, address2V, zipV, cityV, stateV, DrinkNameV, drinkSizeV, checkTextDyanmicsV, sourceV, commentsV) {

		document.getElementById('tableCheckout').style.display = 'block';

		var headerCount = 12;
		let table = document.getElementById('tableCheckout');
		let rowCount = table.rows.length;

		let tr = table.insertRow(rowCount);

		const tval = [];
		for (let i = 0; i < headerCount; i++) {
			tval.push(tr.insertCell(i));
		}


		tval[0].innerHTML = fnameV;
		tval[1].innerHTML = lnameV;
		tval[2].innerHTML = emailV;
		tval[3].innerHTML = phoneV;
		tval[4].innerHTML = address1V;
		tval[5].innerHTML = address2V;
		tval[6].innerHTML = zipV;
		tval[7].innerHTML = cityV;
		tval[8].innerHTML = stateV;

		console.log(sourceV);

		for (var i = 0; sourceV[i]; i++) {
			if (sourceV[i].checked) {
				tval[9].innerHTML += sourceV[i].value + ", ";
			}
		}
		tval[10].innerHTML += DrinkNameV + " : ";

		tval[10].innerHTML += drinkSizeV + "Additions to Order:" + checkTextDyanmicsV.value + ", ";

		tval[11].innerHTML = commentsV;

		event.preventDefault();
	}