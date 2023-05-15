let arrayOfUsers = [];

window.onload = () => {
  getUsers();
}



async function getUsers() {
  const response = await fetch("https://randomuser.me/api/?results=10");
  const data = await response.json();
  arrayOfUsers = data.results;
  console.log(arrayOfUsers)
  
  addressBook()
}

// getUsers()



const addressBook = () => {
  const users = document.getElementById("users");
  arrayOfUsers.map(user => {
    let li = document.createElement("li");
    li.setAttribute("style", "background-color:grey; list-style-type:none; text-align:left; font-size:25px; padding-bottom:25px;")
    let image = document.createElement("img");
    image.setAttribute("style", "display:block; height:200px")
    image.src = user.picture.large;
    let name = document.createTextNode(`${user.name.first} ${user.name.last}`)
    let button = document.createElement("button");
    button.setAttribute("style", "display:block;")
    button.innerText = "Personal Information";

    button.addEventListener('click', () => {
      let age = JSON.stringify(user.dob.age);
      let userAge = document.createTextNode(`${age}`);
      let address = JSON.stringify(user.location.street);
      let userAddress = document.createElement("a");
      userAddress.innerHTML = (`${address}`)
      let number = JSON.stringify(user.cell);
      let userNumber = document.createTextNode(`${number}`);

      li.appendChild(userAge)
      li.appendChild(userAddress)
      li.appendChild(userNumber)
    })

    users.appendChild(li);
    li.appendChild(image);
    li.appendChild(name);
    li.appendChild(button)
  })
}















