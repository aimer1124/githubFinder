const github = new Github;

const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e) => {
  const userText = e.target.value;

  if(userText !== '') {
    github.getUser(userText).then(data => {
      if (data.profile.message === 'Not Found') {
        console.log(`Not Found Username:${userText}`);
      } else {
        console.log(data);
      }
    })
  }
});