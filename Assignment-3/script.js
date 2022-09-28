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
  console.log("Function called");
  var tableRef = document
    .getElementById("myTable")
    .getElementsByTagName("tbody")[0];

  var row = tableRef.insertRow(tableRef.rows.length);
  var newId = `row${count}`;
  var buttonId = `deleteBtn${count}`;

  var dropdowntext = tableRef.insertRow(tableRef.rows.length);
  dropdowntext.id = `dropDownTextArea${count}`;
  dropdowntext.className = "dropDownTextArea";

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
  <td><button onclick="deleteRow('${newId}','dropDownTextArea${count}')" class="deleteBtn" id=${buttonId}>Delete</button></td>
  <td><button onclick="editButton()" class="deleteBtn" id="editBtn${count}">Edit</button></td>
  </tr>
  `;

  dropdowntext.innerHTML = `
    <tr>
        <td colspan="8">
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
    selectedCount++;
  } else {
    selectedCount--;
    document.getElementById(rowId).style.backgroundColor = "";
    if (selectedCount === 0) {
      document.getElementById("button").disabled = true;
      document.getElementById("button").style.backgroundColor = "gray";
      document.getElementById("button").style.borderColor = "gray";
    }
    document.getElementById(buttonId).style.display = "none";
    document.getElementById(editBtnId).style.display = "none";
  }
}

function deleteRow(rowId, textAreaId) {
  console.log(rowId);
  console.log(textAreaId);
  var row = document.getElementById(rowId);
  row.parentNode.removeChild(row);
  var textAreaRow = document.getElementById(textAreaId);
  textAreaRow.parentNode.removeChild(textAreaRow);
  selectedCount--;
  if (selectedCount === 0) {
    document.getElementById("button").disabled = true;
    document.getElementById("button").style.backgroundColor = "gray";
    document.getElementById("button").style.borderColor = "gray";
  }
  alert("Row Deleted Successfully");
}

function editButton() {
  alert("Editing the Details");
}

function toggleTextArea(dropDownTextAreaId) {
  var dropdown = document.getElementById(dropDownTextAreaId).style;
  console.log("ropdown.display ", dropdown.display);
  if (dropdown.display === "") {
    dropdown.display = "block";
  } else {
    dropdown.display = "";
  }
}
