document.addEventListener('DOMContentLoaded', function() {
  fetch('https://randomuser.me/api/')
  .then(response => response.json())
  .then(data => {
      const userProfilePicture = data.results[0].picture.large;
      document.getElementById('random-profile').src = userProfilePicture;
  })
  .catch(error => console.error('Error fetching random user profile:', error));
});