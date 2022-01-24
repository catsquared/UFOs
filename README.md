# UFOs

# Overview

## Purpose
The purpose of this analysis is to display the UFO sightings in a table format on a web page, and allow the user to filter the results via date, city, state, country, and shape of the sighting. 


# Results
The table, by default, displays all of the available data on UFO sightings. Each row of data represents one sighting, with the date, city, state, country, shape, duration, and comments for that event.

![Table Format](table_format.png)

Enter the search criteria in the fields to the left of the table, and press 'Enter' to update the table.

For example, to search for all sightings in the state of California that were a triangle, type 'ca' in the 'Enter State' box, and 'triangle' in the 'Enter Shape' box:

![CA Triangle filters](ca_triangle.png)


Not all the fields are required and can be left blank to display broader results. 

To reset the table, either delete all the filters entered, or click on the UFO Sightings heading on the top left of the webpage:

![Heading pointed out](heading.png)

# Summary

## Drawback
The current filters work well as it is simple and if users are already familiar with the data available. The one drawback is that not all of the available is displayed, so users may try to enter input that is not in the dataset, or the input is not exactly how it's formatted or spelled in the dataset. This may lead to frustration because only empty tables may be displayed.

## Recommendations
1. The first recommendation is to change the form input into a dropdown list, which is populated from the available data. This ensures the user is only inputting data which will return results.

2. The filters boxes are not aligned properly. The title of the box (or drop down) and the input box can be placed in a table for improved formatting. 