Sheffield Trinity FC


The main reason I chose Sheffied trinty as my project, is because it's a team I play and coach for, only at the minute, I can't play for them as in my current job,
whilst I study for a career change, but I digress. Some of the main issues as a player, that I came across, and also when fans wanted to come and watch, was we only 
got the match information via text, so that's why I decided to have a fixture list, showing when and where all the matches would be played, with the ability of using
Google Maps. So with that feature, people don't struggle, say if we turn up to a new pitch, where no one knows the area, players and fans, can easily locate where the 
pitch actually is, without having to stress the management out, that already has enough on, especially with people tending to drop out, due to having too many drinks
the night before.


UX


This website is mainly based for the players and fans, so they can easily find out all of the details about the matches and plan ahead as regards for travelling to
matches out at doncaster, rather than playing close to Sheffield. The website also gives a emailing service, so if anybody did want to get in touch, they can Contact
them by filling out the form and a email will be sent out with the relevant details on. I believe this service will help a lot of players, as they can easily access 
the site and see where we are playing and when.

For example, our club captain is looking to book a weekend away in November, so what does he do? He can just simply pop on to the fixture page, scroll thorugh and see
that we only have 3 fixtures in November and the weekend commencing 14th November is free, so he can choose to go away that weekend.

Another example, my wife likes to come and watch me play football (weather permitting), but from time to time, she forgets where I said we're actually playing,
now close to kick off time, my phone won't be on me for her to get in touch, so she can easily go onto the website and look at the fixture list and see where we are.

I created some wireframes of how I originally wanted the website to look, it hasn't differed from how I wanted it to be, I felt it was better on the fixtures.html page
to have the fixture list next to the map, so it could be seen easier. The wireframes can be found in the readme-files folder.


Features


The home page initially sets the base for the site, people can view the last match results, recent news regarding the club and can also look at the twitter feed.

The club page features include, a bit of history into the club, how it originated, but what I noticed when viewing the history in mobile view, is that the information
is quite filling on the page, so I've hidden the information to start with, so the user can view it and browse if they desire. Also it has a contact form, 
so they can get in touch if required.

The Fixtures page, the features include the current season fixture list, at the side of Google maps, showing where the home pitch is (Marker 1)

In this section, you should go over the different parts of your project, and describe each in a sentence or so.

My additional features that i'd of liked to implement in the future, would include making the fixture page more fancier, for example, instead of the maps showing
all of the markers, have it so it would start off showing the home pitch, then you could click on a fixture, and it would then zoom into that specific marker, 
along with showing some more information on the location.
Something else I would of done, would include having a squad page, where you'd be able to click on individual players and their statistics would be brought up
along with a photo of them.


Technologies Used

The technologies that aided me in creating this project, included:

-HTML 
    This was the core structure of the site.
-CSS
    This helped me style out the structure of the site.
-Bootstrap 
    It helped me manipulate the website to how I exactly wanted it
-JQuery
    This helped me simplify DOM manipulation
-Javascript
    This was a great use as I used this language to actually make my next 2 technologies work (Google maps api and EmailJS)
-Google Maps api
    This aided me in having a map on my site, so that I could show where the future fixtures would take place
-EmailJS
    This service helped me, as it allows the user of the site to send an email to me, regarding anything they possible want to 
    talk about through the contact section on the-club.html


Testing

When it's come to testing my website, as well as myself checking things out, I've had my wife look through the website, making sure it's easy enough
to navigate though.
For example, on the computer, before I let her navigate through, I showed her The-club.html page and asked her, straight away, which page does it look
 like you're on? In which she replied, The club page, All I've done is make the 3 buttons in the header, specific colours to that page, then made the 
 background of that page, the same colour, that way the user can easily identify which page they're on, without having to click through to find where 
 they are. I also got a few of my friends to try out the website and to see whether they could send a message via the contact section on the-club.html page.

 The contact form I thoroughly tested during coding, started off with a simple form, getting it to send emails via JS, then working it to make sure that 
 all the fields had to have valid information in them to work correctly, I then added in a feature where it displays a message at the top of the screen to 
 confirm it's been sent and then, it also clears the form.

 For example, if you wanted to get in touch, the pages have the links in the footer to the-club page, So you'd click on the link,
 - the footer is yellow, so the contact form, follows suite and has a yellow border around it
 - as you fill the form out, if you were to say forget to put your email in, or even get too excited and miss typing in the main content, the form will come up
  with a message, saying Please fill this field.
 - once the email has been sent, a message appears at the top of the browser saying "Thank you, your email has been sent, we will get back to you, as soon as possible."
 - After you've clicked Ok on the message, the form you've just filled out, will then clear off, leaving it so you can fill it out again, if you really desire.

 I've also made sure that all of the markers are in the correct spot, on the map on the fixtures.html page, whilst coding in the co-ordinates for each pitch, 
 I would then test it out as I was adding them, to make sure they were in the same spot that I'd got from Google Maps originally.

 I ran my CSS through a validator online, which the only error that I came across, was that I'd put text-align: central; on my contact form, instead of center.
 A screen shot of this can be found in the readme-files folder.

 To make sure the site works fine on mobile and tablet devices, I have tested my website out, on various screen sizes including: -Standard computer screen - 1880 x 581 px 
 -iPad 768 x 1024 px -iPhone 6/7/8 - 375 x 667 px

 On the index.html page, when scaling down, I moved the Twitter feed, from the top of the page, next to the previous fixture, to down at the bottom of the page. Then as the 
 page scales down further, I had the navigation bar, replace with a smaller one, that's going to take up less room on a mobile device. Along with on the Computer screen, 
 the buttons are colour coded, to which page you area on, for 

on the the-club.html page, when scaling down, I had the charter standard photo removed, as it was just at the side of the form to be more asthetically pleasing.

On the fixtures.html page, for when it scales down, I've done it so that along with the text being a lower case, that the map goes below the fixture list, so people can 
see which location number they require first and they aren't scaling back and forth up the pages.

Along with on the Computer screen the buttons are colour coded, to which page you area on, for easy recognitian, on mobile devices, the text colour is coded to the page, 
so again, it's easily understood which page you are on.

Deployment

The project itself is hosted on Git Hub, So all of the work was carried out on Git pod, it then gets added and commited to the git pod repository, 
which once its been commited, it then gets pushed to git hub itself, then once on git hub, it is then published onto its own Master branch, 
to view at: https://blakeman260.github.io/Sheffield-Trinity-FC/


Credits

The context and images used for my project, were taken from http://sheffieldtrinity.co.uk/ All the information and images, were taken with consent of the owner of the club,
the information about the history of the club came from the website, and also I had the owners permission to display the clubs twitter feed too.

My inspiration for this project, has come from playing for the team, I was one of the founding players when the club first originated, back in 2008. I haven't been able
 to play in all of the seasons, for various reasons, but last year, I became a Level 1 coach and joined the coaching team for the club too, so I am passionate about the club.