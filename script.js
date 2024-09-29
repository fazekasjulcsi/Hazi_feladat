function getUsers() {
    fetch("https://randomuser.me/api/?format=json")
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        console.log(data);
      });
  }
  
getUsers();