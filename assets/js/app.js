let cl =console.log;

const studentData = document.getElementById("studentData");

const studentInfo =document.getElementById("studentInfo")

const namedata = document.getElementById("name");
const lnamedata = document.getElementById("lname");
const contactdata = document.getElementById("contact");
const emaildata = document.getElementById("email");

let stdarray =[
    // {
    //     name:"sachin",
    //     lname:"shelke",
    //     contact:95822,
    //     email:"sac@gmail.com"

    // },

]

const stdaddhandler = (eve) =>{
   // cl("submit successfully")
     eve.preventDefault();
     let stdobj = {
        
        name:namedata.value,
        lname:lnamedata.value,
        contact:contactdata.value,
        email:emaildata.value,
    
       
     }
     cl(stdobj);
     stdarray.push(stdobj)
     eve.target.reset();
     templeting(stdarray)

   
}


studentInfo.addEventListener("submit", stdaddhandler)

const templeting = (arr)=> {
    result ='';
    arr.forEach((std,i)=>{
    result+=      `
                       <tr>
                       <th>${i+1}</th>
                       <th>${std.name}</th>
                       <th>${std.lname}</th>
                       <th>${std.contact}</th>
                       <th>${std.email}</th>
                       </tr>
                    `
                   
    })
   
    studentData.innerHTML=result;
    
}

templeting(stdarray)
    



