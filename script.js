
const stopOnVersionValue = "2.49.1"; // I will continue the rest later ok!!!!

// If you are inspecting this, don't call me out please!!! :(
// Documents all patches, taken from https://heroespatchnotes.com/patch/summary.html
// with some specifications added (like almost exact date of release).
const patchDateMaps = [
        {version: "2.54.4", date: "Mon Sep 27 2021 18:11:00 GMT"},
        {version: "2.54.3", date: "Fri Aug 20 2021 17:08:58 GMT"},
        {version: "2.54.2", date: "Tue Jul 20 2021 18:14:00 GMT"},
        {version: "2.54.1", date: "Tue Jun 15 2021 17:25:26 GMT"},
        {version: "2.54.0", date: "Tue May 18 2021 16:33:00 GMT"},
        {version: "2.53.2", date: "Wed Mar 03 2021 01:17:00 GMT"},
        {version: "2.53.1", date: "Tue Jan 19 2021 23:43:00 GMT"},
        {version: "2.53.0", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "2.52.2", date: "Wed Nov 04 2020 20:30:00 GMT"},
        {version: "2.52.1", date: "Wed Oct 07 2020 22:10:27 GMT"},
        {version: "2.52.0", date: "Tue Sep 08 2020 16:52:00 GMT"},
        {version: "2.51.2", date: "Wed Aug 19 2020 20:42:28 GMT"},
        {version: "2.51.1", date: "Wed Jul 15 2020 20:36:00 GMT"},
        {version: "2.51.0", date: "Tue Jun 23 2020 16:42:27 GMT"},
        {version: "2.50.2", date: "Wed Jun 03 2020 20:35:00 GMT"},
        {version: "2.50.1", date: "Tue Apr 14 2020 16:40:00 GMT"},
        {version: "2.50.0", date: "Wed Mar 11 2020 21:35:00 GMT"},
        {version: "2.49.4", date: "Wed Feb 12 2020 21:44:44 GMT"},
        {version: "2.49.3", date: "Wed Jan 22 2020 22:47:00 GMT"},
        {version: "2.49.2", date: "Mon Dec 16 2019 17:52:00 GMT"},

        {version: "2.49.1", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "2.49.0", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "2.48.4", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "2.48.2", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "2.48.0", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "2.47.2", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "2.47.0", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "2.46.1", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "2.46.0", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "2.45.1", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "2.45.0", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "2.44.1", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "2.44.0", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "2.43.2", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "2.43.0", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "2.42.1", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "2.42.0", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "2.41.2", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "2.41.0", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "2.40.1", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "2.40.0", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "2.39.2", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "2.39.0", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "2.38.2", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "2.38.0", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "2.37.1", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "2.37.0", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "2.36.2", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "2.36.0", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "2.35.1", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "2.35.0", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "?????", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "2.34.3", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "2.34.0", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "2.33.1", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "2.33.0", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "2.32.2", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "2.32.0", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "2.31.2", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "2.31.0", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "2.30.6", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "2.30.4", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "2.30.3", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "2.30.1", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "2.30.0", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "2.29.9", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "2.29.8", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "2.29.7", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "2.29.5", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "2.29.3", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "2.29.2", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "2.29.0", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "2.28.5", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "2.28.3", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "2.28.2", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "2.28.0", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "2.27.5", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "2.27.3", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "2.27.2", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "2.27.0", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "2.26.4", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "2.26.3", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "2.26.1 / 2.26.2", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "2.26.0", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "2.25.5", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "2.25.4", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "2.25.3", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "2.25.0", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "2.25.0", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "24.6", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "24.4", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "24.2", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "24.0", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "23.5", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "23.3", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "23.1", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "23.0", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "22.6", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "22.5", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "22.4", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "22.3", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "22.2", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "22.0", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "21.2", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "21.1", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "21.0", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "20.6", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "20.2", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "20.0", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "19.5", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "19.4", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "19.3", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "19.0", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "18.6", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "18.5", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "18.4", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "18.3", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "18.0", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "17.5", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "17.4", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "17.2", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "17.1", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "17.0", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "16.5", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "16.4", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "16.3", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "16.2", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "16.1", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "16.0", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "15.7", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "15.6", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "15.5", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "15.3", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "15.2", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "15.0", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "14.2", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "14.0", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "13.3", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "13.0", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "12.0", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "11.1", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "11.0", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "10.0", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "9.0", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "8.0", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "7.1", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "6.5", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "5.0", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "2.5", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "2.5", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "2.5", date: "Tue Dec 01 2020 19:13:45 GMT"},
        {version: "2.5", date: "Tue Dec 01 2020 19:13:45 GMT"}
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
    tr.appendChild(th);
    let thead = table.createTHead();
    thead.appendChild(tr);
    table.appendChild(thead);

    let cell;

    for(i = 0; i < patchDateMaps.length - 1; i++)
    {
        if(patchDateMaps[i + 1].version == stopOnVersionValue) break; // incompleted list lol

        tr = table.insertRow();
        tr.classList.add("fade-in-anim-cell");
        tr.style.animationDelay = String(i * 0.025) + "s";
        
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
        '<h1><img src="./images/hots.png" /><a id="number">00:00:00:00</a><img src="./images/hots.png" /></h1>' + 
    '</div>' +
    '<h1 class="outro">since the last <i><u>Heroes of the Storm</u></i> patch.</h1>' +
    '<button class="showlist" onclick="showPatchDatesList()">Show Patch List</button>';
    document.getElementById("exit").style.display = "none";
    updateMainTime();
}

function getCellValue(i, u)
{
    let patch = patchDateMaps[i];
    
    switch(u)
    {
        case 0:
            return "v" + patch.version;
        case 1:
            return getSimplifiedDate(patch.date);
        case 2:
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