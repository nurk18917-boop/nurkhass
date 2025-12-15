const USERNAME = "admin";
const PASSWORD = "123456";

function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    const error = document.getElementById("loginError");

    if (user === USERNAME && pass === PASSWORD) {
        document.getElementById("loginPage").classList.add("hidden");
        document.getElementById("homePage").classList.remove("hidden");
        error.innerText = "";
    } else {
        error.innerText = "Username atau password salah";
    }
}

function logout() {
    document.getElementById("homePage").classList.add("hidden");
    document.getElementById("loginPage").classList.remove("hidden");
}

function uploadImage() {
    const input = document.getElementById("imageInput");
    const gallery = document.getElementById("productGallery");

    if (input.files && input.files[0]) {
        const img = document.createElement("img");
        img.src = URL.createObjectURL(input.files[0]);
        gallery.appendChild(img);
    }
}
