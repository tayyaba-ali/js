// Initialize Supabase client with your project credentials
const supabaseUrl = 'https://rsjicrsiqngfviugzpiy.supabase.co';
const supabaseKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJzamljcnNpcW5nZnZpdWd6cGl5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE0Mzg0MTMsImV4cCI6MjA2NzAxNDQxM30.gmFe6VIcbyzNIzRmSnbyMdIP8rFuRLXw31QKbsjZ--Q';
const { createClient } = supabase;
const client = createClient(supabaseUrl, supabaseKey);

// signup

const signup = document.getElementById('signup');

signup &&
	signup.addEventListener('click', async () => {
		const full_name = document.getElementById('full_name');
		const user_email = document.getElementById('email_address');
		const user_pass = document.getElementById('user_pass');
		const user_profilePic = document.getElementById('user_profilePic');

		const {
			data: { user },
		} = await client.auth.getUser();
		console.log(user);
		const fileEx = user_profilePic.files[0].name.split('.')[1];

		console.log(fileEx);

		if (user_email && user_pass) {
			try {
				const {
					data: { user },
					error,
				} = await client.auth.signUp({
					email: user_email.value,
					password: user_pass.value,
				});
				if (user) {
					console.log(user);

					const { data: profileUrl, error } = await client.storage
						.from('users')
						.upload(`avatars/user-${user.id}.${fileEx}`, user_profilePic.files[0], {
							upsert: true,
						});
					if (error) {
						console.log(error);
						// Handle error
					} else {
						console.log('upload data', profileUrl);

						// get profileUrl
						const {
							data: { publicUrl },
						} = client.storage.from('users').getPublicUrl(`avatars/user-${user.id}.${fileEx}`);
						console.log(publicUrl);

						// upload further details to table

						const { error } = await client
							.from('profiles')
							.insert({ user_id: user.id, full_name: full_name.value, profilepic: publicUrl });

						if (error) {
							console.log('profile db error===>', error);
						} else {
							window.location.href = '/post.html';
						}
					}
				}
				// if (data) window.location.href = 'post.html';

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

// fetching profile pic and other details

const showDetails = async (profilepic, email, full_name) => {
	const {
		data: {
			user: { id: userId, email: userEmail },
		},
		error,
	} = await client.auth.getUser();
    if (email) {
        email.value = userEmail;
    }
	if (userId) {
		const {
			data: [{ full_name:dbName, profilepic: publicUrl }],
			error,
		} = await client.from('profiles').select().eq('user_id', userId);

		console.log(full_name, profilepic);
        if (publicUrl) {
            
			const avatar = document.getElementById('avatar');
            if (avatar) {
                
                avatar.src = publicUrl;
            }
            if (profilepic) {
                
                profilepic.src = publicUrl;
                full_name.value = dbName;
            }
            
		} else {
			console.log(error);
		}
	} else {
		console.log(error);
	}
};

if (window.location.pathname == '/post.html') {
	showDetails();
}

if (window.location.pathname == '/profile.html') {
	const profilepic = document.getElementById('profilepic');
	const email = document.getElementById('email');
    const full_name = document.getElementById('full_name');
    console.log(profilepic,email,full_name)
	showDetails(profilepic, email, full_name);
}
