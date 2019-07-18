Steps needed to solve bug fixes: 

1. Find proper endpoint that would return the JSON needed to create the carousel. Found the endpoint on the documentation given in the assignment.
2. Log the data in the console to determine where the images were being stored within the json and how I would be able to access them.
3. Create an array that would be the access point for all the images (data.data._embedded.media)
4. Loop through the array in order to display the images in the carousel format as directed. A basic for loop was required to do this as well as further understanding of the json format within the array itself. 
5. Try all of the image formats to determine which would look the sharpest. It came down to the normal.jpg and the mobile.jpg, but being that this wasnt a mobile app I thought the normal.jpg was fitting. 

Some other notes:
Basically everything else regarding the carousel was done for me in the code base given. I did go through the JS, CSS and html files to get a further understanding of how all of them interacted to create the carousel, but unfortunately time restrictions with other commitments limited me. 
