// reportTextArea.js

function reportTextArea(whichArray)
{
    let myText = "";

    myText += "<textarea style = 'width:98%; height: 98%; background-color: rgb(40, 40, 40); color: rgb(255, 255, 255); padding-left: 20px; padding-right: 20px; padding-top: 10px; padding-bottom: 10px;'>";

    myText  += "tee_brittany = [\n { ";

    for (let x = 0; x < whichArray.length; x++)
    {
        myText += "\n";
        myText += "\"date\":" + '\"' + whichArray[x].date+'\",';

        myText += '\n';
        myText += "\"name\":" + '\"' + whichArray[x].name+'\",';

        myText += '\n';
        myText += "\"url\":" + '\"' + whichArray[x].url+'\",';

        // this if statement gets rid of the extra { } in the report, which had been appearing at the end of the report
        if (x < whichArray.length - 1)
        {
            myText += '\n},\n{';
        }
    }

    myText += '\n} \n];';

    let newWindow = window.open("", "test", "left = 10 top = 10 width = 1200, height = 600, scrollbars = 1, resizable = 1", true);

    newWindow.document.open();
    newWindow.document.write(myText);
    newWindow.document.close();
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

