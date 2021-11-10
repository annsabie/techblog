const loginFormHandler = async function(event) {
  event.preventDefault();

  const username = document.querySelector("#username-login");
  const password = document.querySelector("#password-login");

  fetch("/api/users/login", {
    method: "post",
    body: JSON.stringify({
      username: username.value,
      password: password.value
    }),
    headers: { "Content-Type": "application/json" }
  })
    .then(function() {
      document.location.replace("/dashboard");
    })
    .catch(err => console.log(err));
};

const signupFormHandler = async function(event) {
    event.preventDefault();
  
    const username = document.querySelector("#username-signup");
    const password = document.querySelector("#password-signup");

    fetch("/api/users", {
      method: "post",
      body: JSON.stringify({
        username: username.value,
        password: password.value
      }),
      headers: { "Content-Type": "application/json" }
    })
      .then(function() {
        document.location.replace("/dashboard");
      })
      .catch(err => console.log(err));
  };

document
  .querySelector("#signupbutton")
  .addEventListener("click", signupFormHandler);

document
.querySelector("#loginbutton")
.addEventListener("click", loginFormHandler);