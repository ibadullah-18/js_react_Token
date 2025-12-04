const loginEmailInput = document.getElementById("loginEmailInput");
const loginPasswordInput = document.getElementById("loginPasswordInput");
const loginButton = document.getElementById("loginButton");

const LoginUser = async () => {
  try {
    const res = await fetch("https://ilkinibadov.com/api/v1/auth/login", {
      method: "POST",
      body: JSON.stringify({
        email: loginEmailInput.value,
        password: loginPasswordInput.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);

    if (res.ok) {
      window.location.href = "http://127.0.0.1:5500/homepage.html";
    } else {
      alert(data.error);
    }
  } catch (error) {
    console.error(error);
  }
};

if (loginButton) {
  loginButton.addEventListener("click", LoginUser);
}

// -------------------- Dark Mode ---------------------------- //

const darkButton = document.getElementById('darkButton');
const body = document.getElementById('body');

if (darkButton && body) {
  darkButton.addEventListener("click", () => {
    body.classList.toggle("bg-black");

    const button = document.getElementsByTagName('button')[0];
    const h1s = document.getElementsByTagName('h1')[0];
    const ps = document.getElementsByTagName('p')[0];
    const spans = document.getElementsByTagName('span')[0];
    const as = document.getElementsByTagName('a')[0];


    Array.from(h1s).forEach((h1) => {
      h1.classList.toggle("text-white");
    });

    Array.from(ps).forEach((p) => {
      p.classList.toggle("text-white");
    });
    Array.from(spans).forEach((span) => {
      span.classList.toggle("text-white");
    });

    // Bütün linklərə təsir
    Array.from(links).forEach((a) => {
      a.classList.toggle("text-white");
    });
    
    const isDarkMode = body.classList.contains("bg-black");
    darkButton.innerText = isDarkMode ? "🌞 light mode" : "🌙 dark mode";
  });

  darkButton.addEventListener("mouseover", () => {
    darkButton.classList.add("cursor-pointer");
  });
}