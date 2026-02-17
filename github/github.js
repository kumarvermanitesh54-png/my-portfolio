const avatar = document.getElementById('avatar');
const username = document.getElementById('name');
const follower_following = document.getElementById('followers_following');
const follower = document.getElementById('followers')
const following = document.getElementById('following')
const bio = document.getElementById('bio');
const repositary = document.getElementById('repos');


const requesturl = ("https://api.github.com/users/niteshverma7");

const xhr = new XMLHttpRequest();
xhr.open("get", requesturl)
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const data = JSON.parse(xhr.responseText)
        avatar.src = data.avatar_url;
        username.textContent = data.name;
        follower.textContent =  "Followers: "+ data.followers;
        following.textContent = "Following: "+ data.following;
        bio.textContent = data.bio;
        repositary.textContent = data.public_repos;

    }
    else if (xhr.readyState === 4) {
        console.error("Error fetching data from GitHub API");
    }

   
};
 xhr.send();

 // repo data fetching
    fetch ("https://api.github.com/users/niteshverma7/repos")
    .then(responce => responce.json())
    .then (repos =>{
        const repolist = document.getElementById('repos_text');

        repos.forEach(repo => {
            const li = 
        })
    })