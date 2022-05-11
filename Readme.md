Link to the project - https://japan-booking-o9t5hzibx-sanich123.vercel.app/

#### About the project
Keksobooking is a service for placing ads for renting real estate in the center of Tokyo. Users are given the opportunity to post ads about their real estate or view already posted ads.

Description of functionality
1. Page states
1.1. Inactive state. When opened, the page is in an inactive state:
A gray box is displayed in place of the map.
The .ad-form form for filling out ad information contains the ad-form--disabled class;
All interactive .ad-form form elements must be disabled with a disabled attribute added to them or their parent fieldset blocks;
The form with .map__filters filters is blocked in the same way as the .ad-form form - a special class is added to the form, and disabled attributes are added to its interactive elements;
1.2. Active state. Loading and successful initialization of the map (the map is implemented by a third-party Leaflet library) brings the page to the active state. In the active state, the page allows you to make changes to the form and submit it to the server. After downloading the data from the server, view similar ads on the map, filter them and clarify detailed information about them, showing a card for each of the ads.
2. Filling in information
2.1. Filling in information and sending data:
user photo;
title;
address (coordinates);
type of housing;
Price per night;
number of rooms;
number of beds;
time of arrival and departure from the apartment;
Extra options:
parking;
WiFi;
air conditioning;
kitchen;
washing machine;
elevator.
free text description;
housing photo.
2.2. All information is filled in on one page without intermediate transitions. The order in which you fill in the information is not important.
2.3. After filling in all the data, when you click on the "Publish" button, all data from the form, including images, is sent using an AJAX request to the server https://23.javascript.pages.academy/keksobooking using the POST method with the type multipart/form- data.
2.4. The page responds to incorrectly entered values ​​in the form. If the data entered into the form does not meet the restrictions specified in the section describing input fields, the form cannot be submitted to the server. When you try to submit a form with incorrect data, the submission does not occur, and incorrectly filled fields are highlighted with a red frame. The way of adding a frame and its style are arbitrary.
2.5. Upon successful submission of the form or its clearing (clicking on the .ad-form__reset button), the page, without reloading, goes into the state when:
all filled fields are returned to their original state;
filtering (filter state and filtered labels) is reset;
the address label returns to its original position;
the value of the address field is adjusted according to the label's original position.
2.6. If the data was sent successfully, a corresponding message is displayed. The message markup, which is located in the #success block inside the template template, must be placed before the closing </body> tag. The message should disappear by pressing the Esc key and by clicking on an arbitrary area of ​​the screen.
2.7. If a request error occurred while sending the data, an appropriate message is displayed. The message markup, which is in the #error block in the template template, must be placed before the closing </body> tag. The message should disappear after clicking on the .error__button, on pressing the Esc key and on clicking on an arbitrary area of ​​the screen. In this case, all information entered by the user is saved so that he has the opportunity to submit the form again.
3. Restrictions on input fields
3.1. Headline:
Required text field;
The minimum length is 30 characters;
The maximum length is 100 characters.
3.2. Price per night:
Obligatory field;
Numeric field;
The maximum value is 1,000,000.
3.3. The "Housing type" field affects the minimum value of the "Price per night" field:
"Bungalow" - minimum price per night 0;
"Apartment" - the minimum price per night is 1,000;
"Hotel" - the minimum price per night is 3,000;
"House" - the minimum price is 5,000;
"Palace" - the minimum price is 10,000.
Please note: along with the minimum price value, the placeholder must also be changed.
Please note: the minimum price limit is precisely to change the minimum value that can be entered in the price field, you do not need to change the value of the field itself, this will lead to poor UX (interaction experience). Even if the current value does not fall under the new restrictions, you should not change the value of the field without the knowledge of the user.
3.4. Address: manual editing of the field is prohibited. The value is automatically set when moving a special marker on the map. The details of populating the address field are described along with the behavior of the label.
3.5. The fields "Arrival time" and "Departure time" are synchronized: when the value of one field changes, the corresponding value is highlighted in the second. For example, if the check-in time is "after 14", then the check-out time will be "before 14" and vice versa.
3.6. Field "Number of rooms" sync
Onified with the "Number of places" field in such a way that when choosing the number of rooms, restrictions are introduced on the allowed options for choosing the number of guests:
1 room - "for 1 guest";
2 rooms - "for 2 guests" or "for 1 guest";
3 rooms - "for 3 guests", "for 2 guests" or "for 1 guest";
100 rooms - "not for guests."
Please note that there are different ways to limit the allowed values ​​of the "Number of places" field: removing the corresponding option elements from the markup, adding a disabled state to option elements, or other ways of limiting, for example, using the setCustomValidity method.
3.7. The value of the fields "Your photo" and "Photo of the property" can only be an image.
4. Selecting an address on the map:
4.1. The approximate address of the apartment is indicated by moving a special mark on the map of Tokyo. The contents of the address field must always correspond to the coordinates of the label.
4.2. The address field must always be filled in, including immediately after the page is activated. By default, the coordinates of the center of Tokyo are used.
4.3. The format of the address field value is: lat, lng, where lat and lng are the coordinates of the mark (from the English latitude and longitude, latitude and longitude). The data is provided by the Maps API. Fractional coordinates are rounded to five decimal places.
5. Comparison with similar ads
5.1. The full list of related ads is downloaded after the page becomes active from the https://23.javascript.pages.academy/keksobooking/data server. Data from the server may not be received in full.
5.2. If a request error occurred while loading data from the server, an appropriate message should be displayed. You need to come up with the design of the block with the message yourself.
5.3. Each ad is shown on the map as a marker. The related ad label is 40 x 40, and the custom location selection label is 52 x 52.
5.4. When you click on the label of a related ad, a balloon (provided by the Maps API) with detailed information about the ad (hereinafter referred to as the card) is displayed. The markup for the card should be based on the .popup template element located in the template element with the id #card. Data is inserted into the card in the same way as the data inserted into the template card as an example. If there is not enough data to fill in, the corresponding block in the card is hidden. For example, if there are no amenities listed in the ad, the .popup__features block should be hidden. There should be no errors if the fields are missing.
5.5. Clicking on the special address selection checkbox does not display the balloon.
5.6. Only one balloon can be shown at a time, i.e. clicking on the label of another similar ad should hide the current balloon if it is shown and show the balloon corresponding to the other ad.
5.7. An open card with detailed information can be closed by clicking on the cross in the corner of the balloon.
5.8. Objects located nearby can be filtered. Filtering is performed by changing the values ​​of the corresponding fields of the .map__filters form according to the same parameters that are specified for the declaration:
type of housing;
Price per night;
number of rooms;
number of guests;
extra amenities.
5.9. Both before changing the filters, and when changing the filter, the map should show all suitable options, but no more than 10 marks (not counting the special one), regardless of the selected filter. The labels shown must satisfy all selected filters.
5.10. The form used to filter related ads at the moment of opening the page is blocked and becomes available only after all similar ads are loaded, which, in turn, start loading only after the map is loaded and successfully initialized.
5.11. Rendering of labels corresponding to the selected filters should occur no more than once every half a second (bounce elimination).
5.12. When changing filters, the open balloon (if any) must be hidden.
