function form_submit() {
    var title = document.getElementById("story_title").value;
    var author = document.getElementById("story_author").value;
    
    title_array.push(title);
    author_array.push(author);
    console.log(title);
    console.log(author);
    window.location.href = "table-storage-test?title=" + encodeURIComponent(title);
    
}

//TEST
var info = [{
  "firstName": "aaa",
  "lastName": "A"
}, {
  "firstName": "bbb",
  "lastName": "B"
}, {
  "firstName": "ccc",
  "lastName": "C"
}];

function generate_table() {
var table = document.getElementById("table");
var storageLength = info.length;

for (var i = 0; i < info.length; i++) {
  var row = table.insertRow(i + 1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);

  cell1.innerHTML = info[i].firstName;
  cell2.innerHTML = info[i].lastName;

var editbtn = document.createElement('button'); 
editbtn.type= "button";
editbtn.className= "editbtn";
editbtn.id= "button-"+(i+1);
editbtn.value= "Edit";
editbtn.innerHTML = "EDIT";
editbtn.onclick = (function(i){ return function(){ editRow(i+1)}})(i);
cell3.appendChild(editbtn);                    // Append <button> to <body>
} //end for
}

function editRow(rowindex)
{
    console.log("inside editRow "+(rowindex));
}






function generate_tables() {
  // get the reference for the body
  var body = document.getElementsByTagName("body")[0];
 
  // creates a <table> element and a <tbody> element
  var tbl = document.createElement("table");
  var tblBody = document.createElement("tbody");
 
  // creating all cells
  for (var i = 0; i < (title_array.length + 1); i++) {
    // creates a table row
    var row = document.createElement("tr");
    
    for (var j = 0; j < 3; j++) {
    // Create a <td> element and a text node, make the text
    // node the contents of the <td>, and put the <td> at
    // the end of the table row
    var cell = document.createElement("td");
            
    //Create the first row
    if (i == 0){
        console.log("first row");
        if (j == 0)
            var cellText = document.createTextNode("Select");
        else if (j == 1)    
            var cellText = document.createTextNode("Title");
        else
            var cellText = document.createTextNode("Author");
        
        cell.appendChild(cellText);
        row.appendChild(cell);
    }//end if 1st row
    
    //create the other row
    else{
        console.log("other rows");
        
        if (j == 0)
            var cellText = innerHTML = '<input type="button" onClick=(look_up(i-1))';
        else if (j == 1)    
            var cellText = document.createTextNode(title_array[i-1]);
        else
            var cellText = document.createTextNode(author_array[i-1]);
        
        cell.appendChild(cellText);
        row.appendChild(cell);
        }//end else
 
    // add the row to the end of the table body
    tblBody.appendChild(row);
    }//end row for loop
  }//end other for loop
 
  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tbl);
  // sets the border attribute of tbl to 2;
  tbl.setAttribute("border", "2"); 
}