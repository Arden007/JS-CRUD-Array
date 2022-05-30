let animeList = document.getElementById("anime");
anime = [
  {
    name: "Demon Slayer",
    genre: "demonic, action",
  },
  {
    name: "OverLord",
    genre: "action, fantacy",
  },
  {
    name: "Redo Healer",
    genre: "action, fantacy",
  },
  {
    name: "Black Clover",
    genre: "magic, action",
  },
  {
    name: "Akami Ga Kill",
    genre: "action, politics",
  },
];

countAnime = (data) => {
  let count = document.getElementById("count");

  if (data) {
    count.innerHTML = "There are a total of " + data + "anime";
  } else {
    count.innerHTML = "No anime";
    document.getElementById("name").style.display = "none";
  }
};
// Read: Get
getAnime = () => {
  let data = "";
  if (anime.length > 0) {
    for (i = 0; i < anime.length; i++) {
      data += "<tr>";
      data += "<td>" + anime[i].name + "</td>";
      data += "<td>" + anime[i].genre + "</td>";
      data += '<td><button onclick="editAnime(' + i + ')">Edit</button></td>';
      data +=
        '<td><button onclick="deleteAnime(' + i + ')">Delete</button></td>';
      data += "</tr>";
    }
  }

  countAnime(anime.length);
  return (animeList.innerHTML = data);
};
// Create: POST
addAnime = () => {
  let animeAdded = document.getElementById("add-name");
  let genreAdded = document.getElementById("add-genre");
  // Get the value
  let animeDetails = {
    name: animeAdded.value.trim(),
    genre: genreAdded.value.trim(),
  };

  if (animeDetails) {
    // addAnime the new value
    anime.push(animeDetails);
    // Reset input value
    animeAdded.value = "";
    genreAdded.value = "";
    // display the new list
    getAnime();
  }
};
// Update: PUT
editAnime = (item) => {
  let editName = document.getElementById("edit-name");
  let editGenre = document.getElementById("edit-genre");
  // Display value in the field
  editName.value = anime[item].name;
  editGenre.value = anime[item].genre;
  // Display fields
  document.getElementById("editForm").style.display = "block";

  document.getElementById("saveEdit").onsubmit = () => {
    // Get value
    let animeDetails = {
      name: editName.value,
      genre: editGenre.value,
    };

    if (animeDetails) {
      // editAnime value
      anime.splice(item, 1, animeDetails);
      // Display the new list
      getAnime();
      // Hide fields
      closeInput();
    }
  };
};
// Delete: Delete
deleteAnime = (item) => {
  // deleteAnime from the current row
  anime.splice(item, 1);
  // display the new list
  getAnime();
};

getAnime();

closeInput = () => {
  document.getElementById("editForm").style.display = "none";
  // to hide the edit section after you edited
};
