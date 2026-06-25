// TIMER
let time = 600;

setInterval(()=>{
let m = Math.floor(time/60);
let s = time%60;

document.getElementById("timer").innerText =
"Time Left: "+m+":"+(s<10?"0":"")+s;

time--;

if(time<0) location.reload();

},1000);


// SEARCH RESULT
function searchResult(){

if(!document.getElementById("humanCheck").checked){
alert("Confirm you are human");
return;
}

let i = document.getElementById("index").value;
let y = document.getElementById("year").value;

if(i=="" || y==""){
alert("Enter details");
return;
}

document.getElementById("loading").classList.remove("hidden");

db.ref("results/"+y+"/"+i).once("value",snap=>{

document.getElementById("loading").classList.add("hidden");

if(!snap.exists()){
alert("Result not found");
return;
}

let d = snap.val();

document.getElementById("card").classList.remove("hidden");
document.getElementById("name").innerText=d.name;
document.getElementById("school").innerText=d.school;

let t=document.getElementById("table");
t.innerHTML="";

for(let s in d.subjects){
t.innerHTML += `<tr><td>${s}</td><td>${d.subjects[s]}</td></tr>`;
}

});

}


// AUTO LINK
window.onload=function(){
let url=new URL(window.location.href);
let i=url.searchParams.get("index");
let y=url.searchParams.get("year");

if(i && y){
document.getElementById("index").value=i;
document.getElementById("year").value=y;
searchResult();
}
};
