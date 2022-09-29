//Title constructor function that creates a Title object
function Title(t1) {
  this.mytitle = t1;
}

Title.prototype.getName = function () {
  return this.mytitle;
};

var socialMedia = {
  facebook: "http://facebook.com",
  twitter: "http://twitter.com",
  flickr: "http://flickr.com",
  youtube: "http://youtube.com",
};

var t = new Title("CONNECT WITH ME!");

document.getElementById("button").disabled = true;
document.getElementById("button").style.backgroundColor = "gray";
document.getElementById("button").style.borderColor = "gray";

var count = 4;
var selectedCount = 0;

function addStudent() {
  var tableRef = document
    .getElementById("myTable")
    .getElementsByTagName("tbody")[0];

  var row = tableRef.insertRow(tableRef.rows.length);
  var newId = `row${count}`;
  var buttonId = `deleteBtn${count}`;

  var dropdowntext = tableRef.insertRow(tableRef.rows.length);
  dropdowntext.id = `dropDownTextArea${count}`;
  dropdowntext.style.display = "none";

  row.id = newId;
  row.innerHTML = `
  <tr>
  <td><input onchange="toggleCheckbox('${newId}','${buttonId}','editBtn${count}')" type="checkbox" /><br /><br /><img onclick="toggleTextArea('dropDownTextArea${count}')" src="down.png" width="25px" /></td>
  <td>Student ${count}</td>
  <td>Teacher ${count}</td>
  <td>Approved</td>
  <td>Fall</td>
  <td>TA</td>
  <td>12345</td>
  <td>100%</td>
  <td><button class="button_del" onclick="deleteRow('${newId}','dropDownTextArea${count}')" class="deleteBtn" id=${buttonId}>Delete</button></td>
  <td><button class="button_edit" onclick="editButton()" class="deleteBtn" id="editBtn${count}">Edit</button></td>
  </tr>
  `;

  dropdowntext.innerHTML = `
    <tr 
        <td colspan="10">
          Advisor:<br /><br />
          Award Details<br />
          Summer 1-2014(TA)<br />
          Budget Number: <br />
          Tuition Number: <br />
          Comments:<br /><br /><br />
          Award Status:<br /><br /><br />
        </td>
      </tr>
  `;
  count++;
  alert("Student Added Successfully");
}

function toggleCheckbox(rowId, buttonId, editBtnId) {
  var currentColor = document.getElementById(rowId).style.backgroundColor;
  if (currentColor === "") {
    document.getElementById(rowId).style.backgroundColor = "yellow";
    document.getElementById("button").disabled = false;
    document.getElementById("button").style.backgroundColor = "orange";
    document.getElementById("button").style.borderColor = "orange";
    document.getElementById(buttonId).style.display = "block";
    document.getElementById(editBtnId).style.display = "block";
    document.getElementById("deleteCol").style.display = "revert";
    document.getElementById("editCol").style.display = "revert";
    selectedCount++;
  } else {
    selectedCount--;
    document.getElementById(rowId).style.backgroundColor = "";
    if (selectedCount === 0) {
      document.getElementById("button").disabled = true;
      document.getElementById("button").style.backgroundColor = "gray";
      document.getElementById("button").style.borderColor = "gray";
      document.getElementById("deleteCol").style.display = "none";
      document.getElementById("editCol").style.display = "none";
    }
    document.getElementById(buttonId).style.display = "none";
    document.getElementById(editBtnId).style.display = "none";
  }
}

function deleteRow(rowId, textAreaId) {
  var row = document.getElementById(rowId);
  row.parentNode.removeChild(row);
  var textAreaRow = document.getElementById(textAreaId);
  textAreaRow.parentNode.removeChild(textAreaRow);
  selectedCount--;
  if (selectedCount === 0) {
    document.getElementById("button").disabled = true;
    document.getElementById("button").style.backgroundColor = "gray";
    document.getElementById("button").style.borderColor = "gray";
    document.getElementById("deleteCol").style.display = "none";
    document.getElementById("editCol").style.display = "none";
  }
  alert("Row Deleted Successfully");
}

function editButton() {
  prompt("Editing the Details");
}

function toggleTextArea(dropDownTextAreaId) {
  var dropdown = document.getElementById(dropDownTextAreaId).style;
  if (dropdown.display === "none") {
    dropdown.display = "";
  } else {
    dropdown.display = "none";
  }
}
