const username1 = "elva"
const password1 = "zxcvbnm"

function blubub(){
    // tangkap nilai yang di input user
    let userInput = document.getElementById("username").value
    let passwordInput = document.getElementById("password").value

    let form = document.getElementById("form")

    if(username1 == userInput && password1 == passwordInput){
        alert("Login Berhasil")
        form.submit()
    } else{
        alert("Login Gagal!")
    }
}