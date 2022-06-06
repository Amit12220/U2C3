// fill in javascript code here
var obj={
    nam:document.querySelector("#name").value,
    id:document.querySelector("#employeeID").value,
    depart:document.querySelector("#department").value,
    exp:document.querySelector("#exp").value,
    email:document.querySelector("#email").value,
   mob:document.querySelector("#mbl").value,
}

document.querySelector("form").addEventListener("submit",abc)
function abc(event)
{
  event.preventDefault();
  var tr=document.createElement("tr");
  var td1=document.querySelector("#name").value;
  td1.innerText=obj.nam;
  var td2=document.createElement("td");
  td2.innerText=document.querySelector("#employeeID").value;
  var td3=document.createElement("td");
  td3.innerText=document.querySelector("#department").value;
  var td4=document.createElement("td");
  td4.innerText=document.querySelector("#exp").value;
  var td5=document.createElement("td");
  td5.innerText=document.querySelector("#email").value;
  var td6=document.createElement("td");
  td6.innerText=document.querySelector("#mbl").value
   var td7=document.createElement("td");
   

   if(+td4.innerText>0 && +td4.innerText<=1)
   {
    td7.innerText="Fresher";
    
   }
   else if(+td4.innerText>2&&+td4.innerText<=5)
   {
    td7.innerText="Junior";
   }
   else if(+td4.innerText>5)
   {
    td7.innerText="Senior";
   }
  var td8=document.createElement("td");
  td8.innerText="Delete";
  td8.addEventListener("click",del)
  td8.style.color="red";
  function del(event)
  {
    event.target.parentNode.remove();
  }
  
  tr.append(td1,td2,td3,td4,td5,td6,td7,td8);
  console.log(td1,td2,td3,td4,td5,td6,td7,td8)
  document.querySelector("tbody").append(tr);
  


}