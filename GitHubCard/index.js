/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios
  .get("https://api.github.com/users/deebarizo")
  .then(response => {
    const newCard = cardCreator(response.data);

    const cardsDiv = document.querySelector(".cards");
    cardsDiv.appendChild(newCard);
  })
  .catch(err => {
    console.log("err", err);
  });

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell"
];

followersArray.forEach(username => {
  axios
    .get(`https://api.github.com/users/${username}`)
    .then(response => {
      const newCard = cardCreator(response.data);

      const cardsDiv = document.querySelector(".cards");
      cardsDiv.appendChild(newCard);
    })
    .catch(err => {
      console.log("err", err);
    });
});

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function cardCreator(user) {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");

  const img = document.createElement("img");
  img.setAttribute("src", user.avatar_url);
  cardDiv.appendChild(img);

  const cardInfoDiv = document.createElement("div");
  cardInfoDiv.classList.add("card-info");
  cardDiv.appendChild(cardInfoDiv);

  const h3 = document.createElement("h3");
  h3.classList.add("name");
  h3.textContent = user.name;
  cardInfoDiv.appendChild(h3);

  const pUsernameClass = document.createElement("p");
  pUsernameClass.classList.add("username");
  pUsernameClass.textContent = user.login;
  cardInfoDiv.appendChild(pUsernameClass);

  const pLocation = document.createElement("p");
  pLocation.textContent = `Location: ${user.location}`;
  cardInfoDiv.appendChild(pLocation);

  const pProfile = document.createElement("p");
  pProfile.textContent = "Profile: ";
  cardInfoDiv.appendChild(pProfile);

  const a = document.createElement("a");
  a.setAttribute("href", user.html_url);
  a.textContent = user.html_url;
  a.textContent = pProfile.appendChild(a);

  const pFollowers = document.createElement("p");
  pFollowers.textContent = `Followers: ${user.followers}`;
  cardInfoDiv.appendChild(pFollowers);

  const pFollowing = document.createElement("p");
  pFollowing.textContent = `Following: ${user.following}`;
  cardInfoDiv.appendChild(pFollowing);

  const pBio = document.createElement("p");
  pBio.textContent = `Bio: ${user.bio}`;
  cardInfoDiv.appendChild(pBio);

  return cardDiv;
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
