// debugger;
var ch=document.getElementById("change");
ok=()=>{


update0=() =>{
ch.attributes[1].value="fa-solid fa-thermometer-0";
}
setTimeout(update0,1000);
update1=() =>{
ch.attributes[1].value="fa-solid fa-thermometer-1";
}
setTimeout(update1,2000);

update2=() =>{
ch.attributes[1].value="fa-solid fa-thermometer-2";
}
setTimeout(update2,3000);

update3=() =>{
ch.attributes[1].value="fa-solid fa-thermometer-3";
}
setTimeout(update3,4000);

update4=() =>{
ch.attributes[1].value="fa-solid fa-thermometer-4";
ok();
}
setTimeout(update4,5000);
}

ok();