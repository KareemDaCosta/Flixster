## Week 1 Assignment: Flixster

Submitted by: **Kareem DaCosta**

Estimated time spent: **10** hours spent in total

Deployed Application (optional): [Flixster Deployed Site](https://kareemdacosta.github.io/Flixster/)

### Application Features

#### CORE FEATURES

- [x] User can view a list of current movies from The Movie Database API as a grid view
  - The grid element should have an id of `movies-grid`
  - Each movie wrapper element should have a class of `movie-card`
- [x] For each movie displayed, user can see the following details:
  - Title - the element should have a class of `movie-title`
  - Image - the `img` element should have a class of `movie-poster`
  - Votes - the element should have a class of `movie-votes`
- [x] User can load more current movies by clicking a button at the bottom of the list
  - The button should have an id of `load-more-movies-btn`.
  - When clicked, the page should not refresh.
  - New movies should simply be added to the bottom
- [x] Allow users to search for movies and display them in a grid view
  - There should be a search input element with an id of `search-input`
  - Users should be able to type into the input
  - When a user hits 'Enter', it should send a search request to the movies API
  - The results from the search should be displayed on the page
  - There should be a close icon with an id of `close-search-btn` that exits the search, clears results, and shows the current movies displayed previously
- [x] Website accounts for basic HTML/CSS accessibility features
- [x] Website should be responsive

#### STRETCH FEATURES

- [x] Deploy website using GitHub Pages. 
- [x] Allow user to view more details about a movie within a popup.
- [x] Improve the user experience through CSS & animation.
- [x] Allow movie video trailers to be played using [embedded YouTube](https://support.google.com/youtube/answer/171780?hl=en)
- [x] Implement anything else that you can get done to improve the app functionality!

### Walkthrough Video

[Walkthrough Video](https://youtu.be/gsfpMjaX34w)

### Reflection

* Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

Once I finished the weekly assignments they definitely helped with the project (especially the API walkthrough), but I felt that the second lab (report card) threw a lot of concepts very quickly. I was able to finish it and complete the stretch goals, but it was definitely challenging and took me a long time to figure out (I had to work after work hours in the evening to solidify the concepts).

* If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.
  
Most of the website works as well as I would like. If I had more time I would maybe give a random list movie feature where I would query 20 movies all from random pages of the API. I feel like that would be fun and would expose people to new movies they've never heard of.

* Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

I think the project in whole went very well. I was able to finish the core requirements and the stretch goals, and as this was my first website I've ever made (other than the labs), I am very happy both with the interactivity and responsiveness of the site. The popup is also responsive, switching between css grid and flexbox as the screen gets narrower through media queries. I also noticed that the videos I was getting from the site weren't always trailers, they were any video related to the movie, so I looped through the list of videos to find one that had "trailer" or "Trailer" in the title, and if I didn't find anything, then I would just return the first video. After implementing that I noticed that the videos became a lot more relevant and were almost always trailers. Finally, I also implemented a little gif if you click on a movie that doesn't have any videos (try and find it)!

I noticed that one of my peers had the ratings show up with a little progress bar when the popup is opened, which I think would be a cool feature to implement.

### Open-source libraries used

None

### Shout out

Isa and I worked together to figure out how to embed videos into our popups, so shout out to her!
