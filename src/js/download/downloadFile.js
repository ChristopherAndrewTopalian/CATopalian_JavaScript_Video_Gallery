// downloadFile.js

function downloadFile()
{
    let object = tee_brittany;

    let dataStr = "data:text/json;charset=utf-8," + encodeURIComponent('tee_brittany = ' + JSON.stringify(object) + ';');

    let dlAnchorElem = document.getElementById("downloadAnchorElem");

    dlAnchorElem.setAttribute("href", dataStr);

    dlAnchorElem.setAttribute("download", "record.js");

    dlAnchorElem.click();
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

