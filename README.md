# Search Bar
A generic ReactJS component which can full fill the requirement of a full fledged Search Bar.

Features:
1. Takes an array of objects as Input upon which search will be conducted.
2. SearchBar takes an array of keys which defines extend of search area.
example: Consider an object {name:'John', 'email':'john@xyz.com','id':'1234'}
Here, if you are displaying only Name and Email in the table, then user should be able to conduct search on these data only.
So only 'name' and 'email' will be passed as keys to the SearchBar.
3. Developer can define the minimum number of characters required to start the search operation.
example: If you want to start the search if the user has entered at least 3 characters(excluding leading spaces)
4. Provides an extra prop **setSearchActive** which can be used as a flag to determine whether to show 
the searchResult or some predetermined data in a Component like Data Table   

Here is short video of Search Bar working:
![demo](https://github.com/SagarTrimukhe/search_bar_react/demo/demo.gif)
