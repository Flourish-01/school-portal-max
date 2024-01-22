 var allStudents = [];


function submit() {
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var mailphone = document.getElementById('mailphone').value;
    var password = document.getElementById('password').value;

    var emptyErrorMessage = document.getElementById('emptyErrorMessage');
    var successMessage = document.getElementById('successMessage');

    if (firstname === '' || lastname === '' || mailphone === '' || password === '') {
        emptyErrorMessage.style.display = 'block';
        setTimeout(() => {
            emptyErrorMessage.style.display = 'none';
        }, 5000);
    } else {
        var studentObj = { firstname, lastname, mailphone, password };
        allStudents.push(studentObj);

        successMessage.style.display = 'block';
        // setTimeout(() => {
        //     successMessage.style.display = 'none';
        // }, 3000);
        localStorage.setItem('allstudents', JSON.stringify(allStudents))
        window.location.href = 'dashboard.html'
        updatedList(); 

        document.getElementById('firstname').value = '';
        document.getElementById('lastname').value = '';
        document.getElementById('mailphone').value = '';
        document.getElementById('password').value = '';
    }
}

// function del(index) {
//     allStudents.splice(index, 1)
//     updatedList()    
// }

function editItem(index) {
     currentIndex = index;
    newInputs= '';  
}

function save(){
   
    var firstname = document.getElementById('newItem1').value;
var lastname = document.getElementById('newItem2').value;
var mailphone = document.getElementById('newItem3').value;
var password = document.getElementById('newItem4').value;
var newInputs = { firstname, lastname, mailphone, password };
    let savedItems = newInputs;
    allStudents[currentIndex] = savedItems
        updatedList()
       

}


// function updatedList() {
    
//     var tableBody = document.getElementById('show');
//     tableBody.innerHTML = '';

//     for (let i = 0; i < allStudents.length; i++) {
//         var row = tableBody.insertRow();
        
//         var cellNumber = row.insertCell(0);
//         cellNumber.textContent = i + 1;

//         var cellItem = row.insertCell(1);
//         cellItem.textContent = allStudents[i].firstname;

//         var cellItem = row.insertCell(2);
//         cellItem.textContent = allStudents[i].lastname; 
        
//         var cellItem = row.insertCell(3);
//         cellItem.textContent = allStudents[i].mailphone;
       
//         var cellItem = row.insertCell(4);
//         cellItem.textContent = allStudents[i].password;

//         var cellActions = row.insertCell(5);
//         cellActions.innerHTML = `
//         <button class="btn btn-danger btn-sm delete" style:font-size: 6px; onclick="del(${i})">Delete</button>
//         <button class="btn btn-warning btn-sm edit"  style:font-size: 6px; data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="editItem(${i})">Edit</button>
//         `;
       
//     }
   
// }

