// If you are inspecting this, don't call me out please!!! :(
// Documents all patches, taken from https://heroespatchnotes.com/patch/summary.html
// with some specifications added (like almost exact date of release).
// First entry is the newest while last is the oldest.
const patchDateMaps = [
        {version: "15", date: "Thu Jun 03 2021 16:03:00 GMT"},
        {version: "14", date: "Sat Nov 28 2021 20:38:00 GMT"}
    ]

var updateTimer;

function updateMainTime() {
    let numContainer = document.getElementById("number");
    numContainer.innerHTML = getTimeBetweenPatches(Date.now(), convertDateToEpoch(patchDateMaps[0].date));
    updateTimer = setTimeout(() => {
        updateMainTime();    
    }, 1000);
}

updateMainTime();

function getTimeBetweenPatches(nextPatchTime, prevPatchTime) {
    let seconds = Number(nextPatchTime - prevPatchTime) / 1000;

    let d = Math.floor(seconds / (3600*24));
    let h = Math.floor(seconds % (3600*24) / 3600);
    let m = Math.floor(seconds % 3600 / 60);
    let s = Math.floor(seconds % 60);

    let dDisplay = (d > 0 ? Math.trunc(d / 10) != 0 ? String(d) : "0" + String(d) : "00") + ":";
    let hDisplay = (h > 0 ? Math.trunc(h / 10) != 0 ? String(h) : "0" + String(h) : "00") + ":";
    let mDisplay = (m > 0 ? Math.trunc(m / 10) != 0 ? String(m) : "0" + String(m) : "00") + ":";
    let sDisplay = s > 0 ? Math.trunc(s / 10) != 0 ? String(s) : "0" + String(s) : "00";

    return dDisplay + hDisplay + mDisplay + sDisplay;
}

function showPatchDatesList() {

    clearTimeout(updateTimer);

    let container = document.getElementById("container");
    let table = document.createElement("table");
    
    // Remove everything
    container.innerHTML = "";

    // Create the header row
    let tr = table.insertRow();
    let th = document.createElement("th");

    th.innerHTML = "Patch Version";
    tr.appendChild(th);
    th = document.createElement("th");
    th.innerHTML = "Release Date";
    tr.appendChild(th);
    th = document.createElement("th");
    th.innerHTML = "Time Taken";

    tr.classList.add("fade-in-anim-cell");
    tr.appendChild(th);

    let thead = table.createTHead();
    thead.appendChild(tr);
    table.appendChild(thead);

    let cell;

    for(i = 0; i < patchDateMaps.length; i++)
    {
        tr = table.insertRow();
        tr.classList.add("fade-in-anim-cell");
        tr.style.animationDelay = String(0.01 + i * 0.01) + "s";
        
        for(u = 0; u < 3; u++)
        {
            cell = tr.insertCell();
            cell.innerHTML = getCellValue(i, u);
        }
        table.appendChild(tr);
    }

    container.appendChild(table);

    document.getElementById("exit").style.display = "block";
}

function hidePatchDatesList()
{
    document.getElementById("container").innerHTML = '<h1 class="intro">It\'s been...</h1>' +
    '<div class="time" id="time">' + 
        '<h1><a id="number">00:00:00:00</a></h1>' + 
    '</div>' +
    '<h1 class="outro">since the last <i><u>major</u></i> NORTHWIND update.</h1>' +
    '<div>' +
        '<button class="showlist" onclick="showPatchDatesList()">Show Update Log</button>' + 
        '</button>' + 
    '</div>';
    document.getElementById("exit").style.display = "none";
    updateMainTime();
}

function getCellValue(i, u)
{
    let patch = patchDateMaps[i];
    
    switch(u)
    {
        case 0:
            return patch.version == "Unknown" ? patch.version : "v" + patch.version;
        case 1:
            return getSimplifiedDate(patch.date);
        case 2:

            if(i + 1 == patchDateMaps.length) return "";

            let prevPatch = patchDateMaps[i+1];
            return getTimeBetweenPatches(convertDateToEpoch(patch.date), convertDateToEpoch(prevPatch.date));
    }
}

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// Returns -> MM-DD-YYYY
function getSimplifiedDate(dString)
{
    let d = new Date(dString);
    return monthNames[d.getUTCMonth()] + "-" + d.getUTCDate() + "-" + d.getUTCFullYear(); 
}

function convertDateToEpoch(d) {
    return new Date(d).getTime();
}

function printGapBetweenPatches() {
    let date1, date2;

    for(i = 0; i < patchDateMaps.length - 1; i++) {
        date1 = new Date(patchDateMaps[i].date).getTime() / 1000;
        date2 = new Date(patchDateMaps[i + 1].date).getTime() / 1000;
        console.log("Time gap between patch " + patchDateMaps[i].version + " and patch " + patchDateMaps[i + 1].version +  " is " + getTimeBetweenPatches(date1, date2));
    }
}
