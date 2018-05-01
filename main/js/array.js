var title_array = ["Kittens", "Puppies", "Cats", "Dogs"];

var author_array = ["Jacob Stevenson", "Steve Jocobson", "Charels Dixon", "Dixon Charles"];


function look_up(search_title){
    return title == search_title;
}

//does not work, 
//keeping as a reference for now
//delete before final version
function old_look_up(search_title){
    var i = 0;
    var title_found = false;
    var k;
    var s = search_title;
    console.log(search_title);
    console.log(s);
    
    while (i < title_array.length) {
        console.log("Checking index "+i);
        console.log("Index "+i+" contains "+title_array[i]+" by "+author_array[i]);
        
        if (title_array[i] == search_title){
            title_found = true;
            console.log("Story found.")
            return i;
        }    
        i++;
        
    } //end while
    
    if (title_found == false)
        document.getElementById("demo").innerHTML = "No stories with that title have been found.";
    
    else{
        
        document.getElementById("demo").innerHTML = title_array[k];
        document.getElementById("demo1").innerHTML = author_array[k];
    } //end else
    
    console.log(i);
    console.log(k);
}