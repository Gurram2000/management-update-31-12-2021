

// -----------------------------------------------Validation---------------------------------------------------

function validation(){

			var user = document.getElementById('user').value;
			
			var date = document.getElementById('date').value;
			var mobileNumber = document.getElementById('mobileNumber').value;
			var emails = document.getElementById('emails').value


			if(user == ""){
				document.getElementById('username').innerHTML =" ** Please fill the username field";
				return false;
			}
			
			if(date== ""){
				document.getElementById('date').innerHTML =" ** Please fill the DOJ field";
				return false;
			}

			if(mobileNumber == ""){
				document.getElementById('mobileno').innerHTML =" ** Please fill the mobile NUmber field";
				return false;
			}
			
			if(emails == ""){
				document.getElementById('emailids').innerHTML =" ** Please fill the email idx` field";
				return false;
			}
			
}

// ----------------------------------------------------Saving Data-------------------------------------------------------------------------
showData();
function saveData()
{
let user,gender,date,mobileNumber,emails;

user=document.getElementById("user").value;
// 
if(document.getElementById("m").checked)
{
	gender = document.getElementById("m").value;
	
}

else if(document.getElementById("f").checked)
{
	gender = document.getElementById("f").value;
	
}
date=document.getElementById("date").value;
mobileNumber=document.getElementById("mobileNumber").value;
emails=document.getElementById("emails").value;




let user_records=new Array();
user_records=JSON.parse(localStorage.getItem("demo"))?JSON.parse(localStorage.getItem("demo")):[]


  user_records.push({
  "user":user,
  "gender":gender,
  "date":date,
  "mobileNumber":mobileNumber,
  "emails":emails
})
localStorage.setItem("demo",JSON.stringify(user_records));
// document.getElementById("redgno").value="";
// document.getElementById("name").value="";
// document.getElementById("email").value="";
// document.getElementById("dept").value="";
// alert("Your Data Has Been Saved SucessFully");

}
// --------------------------------------------------------------Showing Data-------------------------------------------------------------------------

showData();


function showData()
{
  document.getElementById("showUsers").innerHTML="";
  let user_records=new Array();
user_records=JSON.parse(localStorage.getItem("demo"))?JSON.parse(localStorage.getItem("demo")):[]
  if(user_records)
  {
    for(let i=0;i<user_records.length;i++)
    {

      console.log(user_records);
      var showUsers = document.getElementById('showUsers');
      var tr = "<tr>";
      tr += "<td>" + user_records[i].user + "</td>";
      tr += "<td>" + user_records[i].gender  + "</td>";
      tr += "<td>" + user_records[i].date  + "</td>";
      tr += "<td>" + user_records[i].mobileNumber + "</td>";
      tr += "<td>" + user_records[i].emails + "</td></tr>";
      showUsers.innerHTML += tr;
  

    }
  }
  }





