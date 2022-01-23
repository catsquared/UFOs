// import data from data.js
const tableData = data;

// reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    // clear existing data in the table
    tbody.html("");

    // loop through each object in data
    // and append a row and cells for each value in the row
    data.forEach(dataRow => {
        // append a row to the table body
        let row = tbody.append('tr');

        // loop through each field in the dataRow and add
        // each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append('td');
            cell.text(val);
        });
    });
}

function handleClick() {
    // select the very first element that matches selector string
    let date = d3.select('#datetime').property('value');

    // set the default filter to the data we imported
    let filteredData = tableData;

    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    buildTable(filteredData);

}

d3.selectAll('#filter-btn').on('click', handleClick);

// build the table when the page loads
buildTable(tableData);