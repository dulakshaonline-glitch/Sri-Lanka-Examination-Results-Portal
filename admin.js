let subjects = {};

// LOGIN
function login(){
if(u.value=="admin" && p.value=="1234"){
panel.classList.remove("hidden");
}else alert("Wrong login");
}


// ADD / UPDATE SUBJECT (CLICK BASED)
function addSubject(){

let sub = document.getElementById("customSubject").value;
let grd = document.getElementById("grade").value;

if(sub==""){
alert("Enter subject name");
return;
}

// ADD OR EDIT (overwrite)
subjects[sub] = grd;

document.getElementById("customSubject").value="";

render();
}


// SHOW LIST
function render(){

list.innerHTML="";

for(let s in subjects){
list.innerHTML += `
<p>
${s} : ${subjects[s]}
<button onclick="removeSubject('${s}')">❌</button>
</p>`;
}

}


// DELETE SUBJECT
function removeSubject(name){
delete subjects[name];
render();
}


// SAVE RESULT
function save(){

db.ref("results/"+y.value+"/"+i.value).set({
name:n.value,
school:s.value,
subjects:subjects
});

alert("Saved successfully!");

subjects = {};
render();
}


// SHARE LINK
function generateLink(){

let link = window.location.origin +
"/index.html?year="+y.value+"&index="+i.value;

prompt("Copy Link:", link);

}


// DELETE RESULT
function deleteResult(){

db.ref("results/"+y.value+"/"+i.value).remove();

alert("Deleted successfully");

}