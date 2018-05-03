<?php
error_reporting(E_ALL | E_STRICT);
ini_set('display_errors', true);
ini_set('auto_detect_line_endings', true);
$a=0;
$inputFilename    = 'story_stuff.csv';

//Start the table
echo "<html><body><table>\n\n";
echo "<tr> <td>Title</td> <td>Author</td> </tr>";

// Open csv to read
$inputFile  = fopen($inputFilename, 'rt');

//Loop through the csv
while (($line = fgetcsv($inputFile)) !== false) {
        echo "<tr>";
        foreach ($line as $cell) {
                echo "<td>" . htmlspecialchars($cell) . "</td>";
        }
        echo "</tr>\n";
} //end while

//end table
echo "\n</table></body></html>";

?>