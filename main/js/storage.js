function form_submit() {
    var title = document.getElementById("story_title");
    var author = document.getElementById("story_author");
    var story = document.getElementById("story_text");
    
    new_entry(title, author, story);
    
    window.location.href = "table-storage-test.html";
    
}

function new_entry(title, author, story){
    title_array.push(title);
    author_array.push(author);
    
    ////////////////////////
    //Code to make the text file
    ////////////////////////
    
}




function generate_table() {
  // get the reference for the body
  var body = document.getElementsByTagName("body")[0];
 
  // creates a <table> element and a <tbody> element
  var tbl = document.createElement("table");
  var tblBody = document.createElement("tbody");
 
  // creating all cells
  for (var i = 0; i < title_array.length; i++) {
    // creates a table row
    var row = document.createElement("tr");
 
    
      
    for (var j = 0; j < 2; j++) {
    // Create a <td> element and a text node, make the text
    // node the contents of the <td>, and put the <td> at
    // the end of the table row
    var cell = document.createElement("td");
              
    if (j == 0)  
        var cellText = document.createTextNode(title_array[i]);
    else
        var cellText = document.createTextNode(author_array[i]);
        
    cell.appendChild(cellText);
    row.appendChild(cell);
    }
 
    // add the row to the end of the table body
    tblBody.appendChild(row);
  }
 
  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tbl);
  // sets the border attribute of tbl to 2;
  tbl.setAttribute("border", "2");
    

}