# CourgetTomatoes
CourgetTomato is a website created with React that allows users to explore, find and save their favorite movies and series. The site offers movie search by title, genre, popularity and other criteria.

#  Features 

- Movie search: Locate films by title.
- Genre filtering: Sort movies according to genre.
- Trending Movies: Discover a curated list of popular films.
- Top rating Series: Browse the highest-rated series.
- Popular Series: Check out the most sought-after series.
- Upcoming movies: Uncover an array of forthcoming films.
- Movie Details: Obtain detailed information for each movie.
- Bookmark Movies: Preserve favorite movies for easy access later.
- Google Authentication: Log in securely with a Google account.

#  Technology

- ReactJS: Frontend framework used to develop the user interface.
- TMDB API: Supplies data and images for movies and series.
- Firebase Google Authentication: Ensures secure user authentication.

## Step 2: Obtain the TMDB Movies/Series API Key and Firebase Configuration

Before starting the website, you will need to obtain the TMDB Movies/Series API key and Firebase configuration. Follow these steps to obtain them and add them to your `.env` file.

###  Get TMDB API Key 

- Go to https://www.themoviedb.org/ and log in.
- Click on your user profile picture in the navigation bar, and select "Settings".
- In the settings, select "API" and generate an API key.

###  Firebase Setup 

- First, head over to the Firebase console and create a new application.
- Next, create a web application by selecting "Add App" and following the instructions given.
- Then, grab the configuration information from the code snippet and paste it into your .env file.
- To enable Google authentication within Firebase, go to the Build section and select Authentication. Then, activate Google authentication.
- If you want to use Google authentication in localhost, you'll need to add your localhost/ as an authorized domain in Build > Authentication > Settings > Authorized Domains. Don't forget to include localhost/ in this section.

## Step 3: Run to the Website

- To launch the site you need npm i then npm run dev 
- The link of the localhost will be given and to open on the browser 
- Then, you will be able to navigate on the website 

#### About the deployment of the site

Unfortunately we did not succeed in deploying the site
