const createTableData1 = (student) => {
    let html1 = ``
    html1 += `
    <tr>
        <td>${student.Fname + ' ' + student.Lname}</td>
        <td>${student.id}</td>
        <td>${student.email}</td>
        <td>${student.level}</td>
        <td>${student.gpa}</td>
        <td>${student.status}</td>
        <td>${student.phone}</td>
        <td>${student.department}</td>
    </tr>
    `
    return html1;
}

function search() {
    const all = JSON.parse(localStorage.getItem("data"));
    var target = document.getElementById("Fname").value;
    document.getElementById('results').innerHTML = '';

    var found = false;
 
    for (var i = 0; i < all.length; i++) {
        if (all[i].Fname == target) {
            document.getElementById('results').innerHTML += createTableData1(all[i]);
            found = true;
        }
    }
    if (!found && target !== '') {
        alert('Student not found...try another name');
    }
}