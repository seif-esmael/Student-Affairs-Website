window.onload = function showactive() {
    

    const data1 = localStorage.getItem("data");
    
    const students1 = JSON.parse(data1);

    const createTableData1 = (students1) => {

        let html1 = ``
        students1.forEach(student => {

            if (student.status == "active") {

                html1 += `
                    <tr id="${student.id}">
                        <td>${student.Fname + ' ' + student.Lname}</td>
                        <td>${student.id}</td>
                        <td>${student.email}</td>
                        <td>${student.level}</td>
                        <td>${student.gpa}</td>
                        <td>
                            <select name="status" id="status" value="${student.status}" onchange="change_activity(${student.id})">
                                <option value="active" id="active" selected="selected">Active</option>
                                <option value="inactive" id="inactive">Inactive</option>
                            </select>
                        </td>
                        <td>${student.phone}</td>
                        <td>${student.department}</td>
                    </tr>
                `
            } else {
                html1 += `
                    <tr id="${student.id}">
                        <td>${student.Fname + ' ' + student.Lname}</td>
                        <td>${student.id}</td>
                        <td>${student.email}</td>
                        <td>${student.level}</td>
                        <td>${student.gpa}</td>
                        <td>
                            <select name="status" id="status" value="${student.status}" onchange="change_activity(${student.id})">
                                <option value="active" id="active">Active</option>
                                <option value="inactive" id="inactive" selected="selected">Inactive</option>
                            </select>
                        </td>
                        <td>${student.phone}</td>
                        <td>${student.department}</td>
                    </tr>
                `
            }

        });
        return html1;
    }

    const createTable1 = (students1) => {
        return `
        <table class="ActiveStudents">
        <thead>
        <tr>
            <th scope="col">Name</th>
            <th scope="col">ID</th>
            <th scope="col">Email</th>
            <th scope="col">Level</th>
            <th scope="col">Gpa</th>
            <th scope="col">Status</th>
            <th scope="col">Phone</th>
            <th scope="col">Dep</th>
        </tr>
        </thead>
        <tbody>
        ${createTableData1(students1)}
        </tbody>
    </table>`

    }
    
    document.getElementById('activetable').innerHTML = `
        <div>
            ${createTable1(students1)}
        </div>
        `
    
 


}
function change_activity(id) {
    var c = confirm("are u sure u want change activity ?");
    if (c) {
        const all = JSON.parse(localStorage.getItem("data"));
        for (var i = 0; i < all.length; i++) {
            if (all[i].id == id) {
                all[i].status = document.getElementById("status").value;
                window.localStorage.setItem("regestired", JSON.stringify(all[i]));
            }
        }
        window.localStorage.setItem("data", JSON.stringify(all));
        alert("Student has been updated");
    } 
}