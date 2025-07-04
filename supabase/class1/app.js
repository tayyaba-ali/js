const supabaseUrl = "https://rsjicrsiqngfviugzpiy.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJzamljcnNpcW5nZnZpdWd6cGl5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE0Mzg0MTMsImV4cCI6MjA2NzAxNDQxM30.gmFe6VIcbyzNIzRmSnbyMdIP8rFuRLXw31QKbsjZ--Q"

const { createClient } = supabase;
const client = createClient(supabaseUrl, supabaseKey)
console.log(createClient)
console.log(client);

const signupBtn = document.getElementById("signupBtn")
signupBtn.addEventListener("click", function () {
    const signupEmail = document.getElementById("signup-email").value
    const signupPass = document.getElementById("signup-password").value

    console.log(signupEmail, signupPass)
    async function sigupUser() {

        const { data, error } = await client.auth.signUp({
            email: signupEmail,
            password: signupPass,
        })
        console.log(data)


    }
    sigupUser()



})
