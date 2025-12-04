const registerNameInput = document.getElementById("registerNameInput");
const registerLastInput = document.getElementById("registerLastInput");
const registerEmailInput = document.getElementById("registerEmailInput");
const registerPaswordInput = document.getElementById("registerPaswordInput");
const registerButton = document.getElementById("registerButton");

const registerUser = async () => {
  try {
    const res = await fetch("https://ilkinibadov.com/api/v1/auth/signup", {
      method: "POST",
      body: JSON.stringify({
        firstname: registerNameInput.value,
        lastname: registerLastInput.value,
        email: registerEmailInput.value,
        password: registerPaswordInput.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

if (registerButton) {
  registerButton.addEventListener("click", registerUser);
}

// -------------------- Dark Mode ---------------------------- //

const darkButton = document.getElementById('DarkButton');
const body = document.getElementById('body');

if (darkButton && body) {
  darkButton.addEventListener("click", () => {
    body.classList.toggle("bg-black");

    const button = document.getElementsByTagName('button')[0];
    const h1 = document.getElementsByTagName('h1')[0];
    const p = document.getElementsByTagName('p')[0];
    const span = document.getElementsByTagName('span')[0];
    const a = document.getElementsByTagName('a')[0];

    button?.classList.toggle("bg-white");
    button?.classList.toggle("text-black")
    h1?.classList.toggle("text-white");
    p?.classList.toggle("text-white");
    span?.classList.toggle("text-white");
    a?.classList.toggle("text-white");
    

    const isDarkMode = body.classList.contains("bg-black");
    darkButton.innerText = isDarkMode ? "🌞 light mode" : "🌙 dark mode";
  });

  darkButton.addEventListener("mouseover", () => {
    darkButton.classList.add("cursor-pointer");
  });
}