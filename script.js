

async function getData() {
  let users;
  // Use the async/await
  // Use try-catch to handle errors
  try {
    // Use fetch() to get the data from Nationalize API
    const data = await fetch("https://api.nationalize.io/?name[]=michael&name[]=matthew&name[]=jane",
    {
      method:"GET",
    });
    users=await data.json();
    console.log(users);
  } catch (error) {
      console.log(error);
  }
  return users;
}
getData();


async function display(){
  let users=await getData();
  console.log(users[0]);
  const userList=document.querySelector(".justdata");
  userList.innerHTML="";
  users.forEach(users=>{
    userList.innerHTML='<div id="justdata">${users[0]}</div>'
  })
}
