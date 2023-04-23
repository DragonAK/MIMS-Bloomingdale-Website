// JavaScript code for smooth scrolling
$(document).ready(function(){
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });
});

const users = [
    { username: 'akshat', password: 'secret1' },
    { username: 'akki', password: 'secret2' }
  ];

document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.querySelector('#login-button');
    loginButton.addEventListener('click', () => {
      const usernameInput = document.querySelector('#username-input').value;
      const passwordInput = document.querySelector('#password-input').value;
      const user = users.find(u => u.username === usernameInput && u.password === passwordInput);
      if (user) {
        window.location.href = 'https://docs.google.com/spreadsheets/d/1tsHMWAwJT5-y-mIsWhPbQpU7og5dYc6WD4NILZsR5TQ/edit?usp=sharing';
      } else {
        alert('Invalid username or password');
      }
    });
  });
