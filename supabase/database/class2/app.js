// Initialize Supabase client with your project credentials
const supabaseUrl = 'https://rsjicrsiqngfviugzpiy.supabase.co';
const supabaseKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJzamljcnNpcW5nZnZpdWd6cGl5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE0Mzg0MTMsImV4cCI6MjA2NzAxNDQxM30.gmFe6VIcbyzNIzRmSnbyMdIP8rFuRLXw31QKbsjZ--Q';
const { createClient } = supabase;
const client = createClient(supabaseUrl, supabaseKey);

// Check and display user profile if logged in
async function displayUserProfile() {
	try {
		const {
			data: { user },
			error,
		} = await client.auth.getUser();
		if (error) throw error;
		console.log(user)
		if (user) {
			if (document.getElementById('profile-avatar')) {
				document.getElementById('profile-avatar').src =
					user.user_metadata?.avatar_url || 'https://www.gravatar.com/avatar/?d=mp';
				document.getElementById('profile-name').textContent = user.user_metadata?.full_name || user.email;
				document.getElementById('profile-email').textContent = user.email;
			}
			console.log(window.location.pathname.includes('index.html'))
			// todo
			if (window.location.pathname.includes('index.html')) {
				window.location.href = 'post.html';
			}

		} else if (!window.location.pathname.includes('index.html') && !window.location.pathname.includes('login.html')) {
			window.location.href = 'index.html';
		}
	} catch (error) {
		console.error('Error:', error);
		if (!window.location.pathname.includes('index.html') && !window.location.pathname.includes('login.html')) {
			window.location.href = 'index.html';
		}
	}
}

// Set up password visibility toggle
const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('signup-password');
const eyeIcon = document.getElementById('eyeIcon');

if (togglePassword && passwordInput && eyeIcon) {
	togglePassword.addEventListener('click', () => {
		const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
		passwordInput.setAttribute('type', type);
		eyeIcon.classList.toggle('fa-eye');
		eyeIcon.classList.toggle('fa-eye-slash');
	});
}

// Handle signup form submission
const signupBtn = document.getElementById('signupBtn');
signupBtn &&
	signupBtn.addEventListener('click', async () => {
		const email = document.getElementById('signup-email');
		const password = document.getElementById('signup-password');

		if (email && password) {
			try {
				const { data, error } = await client.auth.signUp({
					email: email.value,
					password: password.value,
				});
				if (data) window.location.href = 'post.html'

				if (error) throw error;
			} catch (error) {
				console.error('Signup error:', error);
				if (error.message.includes('invalid format')) {
					alert('Please enter a valid email address');
				}
			}
		} else {
			if (email) {
				alert('Please your password');

			} else {
				alert('Please your email');

			}
		}
	});


// Handle login form submission
const loginBtn = document.getElementById('loginBtn');
loginBtn &&
	loginBtn.addEventListener('click', async () => {
		const email = document.getElementById('login-email');
		const password = document.getElementById('login-password');

		if (email && password) {
			try {
				const { data, error } = await client.auth.signInWithPassword({
					email: email.value,
					password: password.value,
				});
				if (data) window.location.href = 'post.html';
				if (error) throw error;
			} catch (error) {
				console.error('Login error:', error);
				if (error.message.includes('invalid format')) {
					alert('Please enter a valid email address');
				}
			}
		} else {
			alert('Please fill all fields');
		}
	});

// Handle Google login
const loginWithGoogle = document.getElementById('loginWithGoogle');
loginWithGoogle &&
	loginWithGoogle.addEventListener('click', async () => {
		try {
			const { error } = await client.auth.signInWithOAuth({
				provider: 'google',
				options: {
					redirectTo: window.location.origin + '/post.html',
					queryParams: { access_type: 'offline', prompt: 'consent' },
				},
			});
			if (error) throw error;
		} catch (error) {
			console.error('Google login error:', error);
			alert(error.message || 'Google login failed');
		}
	});

// Handle logout
const logoutBtn = document.getElementById('logoutBtn');
logoutBtn &&
	logoutBtn.addEventListener('click', async () => {
		try {
			const { error } = await client.auth.signOut();
			if (error) throw error;
			window.location.href = 'index.html';
		} catch (error) {
			console.error('Logout error:', error);
			alert('Logout failed');
		}
	});

// Check for returning Google OAuth redirect
document.addEventListener('DOMContentLoaded', async () => {
	if (window.location.hash.includes('access_token')) {
		const {
			data: { session },
		} = await client.auth.getSession();
		if (session) window.location.href = 'post.html';
	}
	if (!window.location.pathname.includes('index.html') && !window.location.pathname.includes('login.html')) {
		displayUserProfile();
	}
});

// add a post

const submitPost = document.getElementById(
	"submitPost"
)

submitPost && submitPost.addEventListener("click", async () => {

	const { data: { user } } = await client.auth.getUser();
	const userTitle = document.getElementById("post-title").value
	const userDescription = document.getElementById("postdescrib").value
	console.log(typeof user.id);

	// console.log(u.data.user.id)
	const { data, error } = await client.from("posts").insert([
		{
			user_id: user.id,
			title: userTitle,
			description: userDescription,
		}, {
			user_id: user.id,
			title: userTitle,
			description: userDescription,
		}, {
			user_id: user.id,
			title: userTitle,
			description: userDescription,
		},
		{
			user_id: user.id,
			title: userTitle,
			description: userDescription,
		}, {
			user_id: user.id,
			title: userTitle,
			description: userDescription,
		}, {
			user_id: user.id,
			title: userTitle,
			description: userDescription,
		}, {
			user_id: user.id,
			title: userTitle,
			description: userDescription,
		}, {
			user_id: user.id,
			title: userTitle,
			description: userDescription,
		}
	])

	if (data) {
		alert("post has been created")
		console.log(data)
	}
	else {
		console.log(error)
	}
})

