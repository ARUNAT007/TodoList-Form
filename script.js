function saveStudent(event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let course = document.getElementById("course").value;
  let email = document.getElementById("email").value;
  let gender = document.querySelector('input[name="gender"]:checked').value;

  let tbody = document.getElementById("tableBody");

  let row = document.createElement("tr");
  row.innerHTML = `
    <td>${name}  </td>
    <td>${age}   </td>
    <td>${course}</td>
    <td>${gender}</td>
    <td>${email} </td>
    <td><button class="delete-btn" onclick="deleteRow(this)">Delete</button></td>
  `;

  tbody.appendChild(row);
  event.target.reset();
}

function deleteRow(btn) {
  btn.parentElement.parentElement.remove();
}
