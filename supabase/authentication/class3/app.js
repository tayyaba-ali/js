const supabaseUrl = "https://rsjicrsiqngfviugzpiy.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJzamljcnNpcW5nZnZpdWd6cGl5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE0Mzg0MTMsImV4cCI6MjA2NzAxNDQxM30.gmFe6VIcbyzNIzRmSnbyMdIP8rFuRLXw31QKbsjZ--Q"

const { createClient } = supabase;
const client = createClient(supabaseUrl, supabaseKey)
console.log(createClient)
console.log(client);


// signup functionality
const signupBtn = document.getElementById("signupBtn")
signupBtn && signupBtn.addEventListener("click", function () {
    const signupEmail = document.getElementById("signup-email")
    const signupPass = document.getElementById("signup-password")


    //    false        &&   false
    //     true        &&   true

    //    false  &&                  true


    //    true                true 

    if (signupEmail && signupPass) {
        console.log(signupEmail, signupPass)

        async function sigupUser() {
            try {
                const loader = document.getElementById("loader")
                loader.style.display = "block"
                const { data, error } = await client.auth.signUp({
                    email: signupEmail.value,
                    password: signupPass.value,
                })
                loader.style.display = "none"
                console.log(data)
                // navigate to login page

                // window.location.href = "login.html"
            }
            catch (error) {
                console.log(error.message)

                switch (error.message) {
                    case "Unable to validate email address: invalid format":
                        console.log("hello")
                        alert("please give us the right format of email address");
                        break;
                }

            }



        }
        sigupUser()


    }

    else {
        alert("please fill fields")
    }


})



//login functionality


const loginBtn = document.getElementById("loginBtn")
loginBtn && loginBtn.addEventListener("click", function () {
    const loginEmail = document.getElementById("login-email")
    const loginPass = document.getElementById("login-password")


    //    false        &&   false
    //     true        &&   true

    //    false  &&                  true


    //    true                true 

    if (loginEmail && loginPass) {
        console.log(loginEmail, loginPass)

        async function loginUser() {
            try {
                const loader = document.getElementById("loader")
                loader.style.display = "block"
                const { data, error } = await client.auth.signInWithPassword({
                    email: loginEmail.value,
                    password: loginPass.value,
                })
                loader.style.display = "none"
                if (error) {
                    console.log(error.message)
                }
                else {
                    console.log(data)
                    alert("user created successsfully")
                }
                // navigate to login page
                window.location.href = "home.html"
            }
            catch (error) {
                console.log(error)
                console.log(error.message)

                switch (error.message) {
                    case "Unable to validate email address: invalid format":
                        console.log("hello")
                        alert("please give us the right format of email address");
                        break;
                }

            }



        }
        loginUser()


    }

    else {
        alert("please fill fields")
    }


})

const loginWithGoogle = document.getElementById("loginWithGoogle")
loginWithGoogle.addEventListener("click", async () => {
    const { data, error }= await client.auth.signInWithOAuth({
        provider: 'google',
    })
    console.log(data)
})