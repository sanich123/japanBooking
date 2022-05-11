Link to the project - https://japan-booking-o9t5hzibx-sanich123.vercel.app/

#### About the project
Keksobooking is a service for placing ads for renting real estate in the center of Tokyo. Users are given the opportunity to post ads about their real estate or view already posted ads.

#### Description of functionality

After filling in all the data, when you click on the "Publish" button, all data from the form, including images, is sent using an AJAX request to the server using the POST method with the type multipart/form-data.
The page responds to incorrectly entered values in the form. 
If the data entered into the form does not meet the restrictions specified in the section describing input fields, the form cannot be submitted to the server. 
When you try to submit a form with incorrect data, the submission does not occur, and incorrectly filled fields are highlighted with a red frame. 

Upon successful submission of the form or its clearing, the page, without reloading, goes into the state when:
all filled fields are returned to their original state;
filtering (filter state and filtered labels) is reset;
the address label returns to its original position;
the value of the address field is adjusted according to the label's original position.

If the data was sent successfully, a corresponding message is displayed. The message disappears by pressing the Esc key and by clicking on an arbitrary area of the screen.
If a request error occurred while sending the data, an appropriate message is displayed. 

Along with the minimum price value, the placeholder also changes.

Manual editing of the address field is prohibited. 
The value is automatically set when moving a special marker on the map. The details of populating the address field are described along with the behavior of the label.
The fields "Arrival time" and "Departure time" are synchronized: when the value of one field changes, the corresponding value is highlighted in the second. 

The value of the fields "Your photo" and "Photo of the property" can only be an image.

The approximate address of the apartment is indicated by moving a special mark on the map of Tokyo. 
The contents of the address field must always correspond to the coordinates of the label.

The full list of related ads is downloaded after the page becomes active from the https://23.javascript.pages.academy/keksobooking/data server. 
If a request error occurred while loading data from the server, an appropriate message is displayed. 

Each ad is shown on the map as a marker. The related ad label is 40 x 40, and the custom location selection label is 52 x 52.
When you click on the label of a related ad, a balloon with detailed information about the ad is displayed. 
Clicking on the special address selection checkbox does not display the balloon.
Only one balloon can be shown at a time, i.e. clicking on the label of another similar ad should hide the current balloon if it is shown and show the balloon corresponding to the other ad.
An open card with detailed information can be closed by clicking on the cross in the corner of the balloon.
Objects located nearby can be filtered. 
Both before changing the filters, and when changing the filter, the map shows all suitable options, but no more than 10 marks (not counting the special one), regardless of the selected filter. The labels shown must satisfy all selected filters.

Rendering of labels corresponding to the selected filters should occur no more than once every half a second (bounce elimination).
When changing filters, the open balloon (if any) must be hidden.
