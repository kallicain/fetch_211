async function getUsers() {
  const response = await fetch("https://randomuser.me/api/?results=10");
  const data = await response.json();
  const user = data.results[0];
  console.log(user)
  
  addressBook(user)
}

getUsers()



const addressBook = (user) => {
  const name = document.getElementById("user-name");
  const image = document.getElementById("user-image");

  name.innerText = `${user.name.title} ${user.name.first} ${user.name.last}`;
  image.setAttribute('src', `${user.picture.large}`);
}

addressBook()


//const users = user.results.map(({name: {first, last, picture}}) => `${user.name.first} ${user.name.last} ${user.picture.large}`).join(',')
//document.getElementById("users").innerText = users;


// const getUsers = (user) => {
//   fetch("https://randomuser.me/api/?results=100")
//   .then(res => res.json())
//   .then(user => arrayOfUsers = user.results[0])
//   console.log(user)
  
// }

// getUsers()