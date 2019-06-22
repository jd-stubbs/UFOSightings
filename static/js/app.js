//from data.js
var ufoEvents = data;

console.log(d3.set(ufoEvents.map(c => c.city)));

var tbody = d3.select("tbody");

ufoEvents.forEach(addRows);

var filterBtn = d3.select("#filter-btn");
filterBtn.on("click", updateTable);

function getDate(){
    console.log(d3.select("#datetime").node().value)
    if (d3.select("#datetime").node().value == ""){
        return d3.select("#datetime").attr("placeholder");
        }
    else {
        return d3.select("#datetime").node().value;
        }
}

function getRange(event){
    var date = getDate();
    return event.datetime == date;
}

function addRows(event){
    var row = tbody.append("tr");
    Object.entries(event).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
}

function updateTable(){
    tbody.selectAll("tr").text("");
    var dateRange = ufoEvents.filter(getRange);
    dateRange.forEach(addRows);
}