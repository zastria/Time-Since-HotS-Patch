
const lastPatchTime = 1630098660; // no milliseconds!!!

function updateTime() {
    let newTime = Math.floor(Date.now() / 1000);
    let seconds = Number(newTime - lastPatchTime);
    let d = Math.floor(seconds / (3600*24));
    let h = Math.floor(seconds % (3600*24) / 3600);
    let m = Math.floor(seconds % 3600 / 60);
    let s = Math.floor(seconds % 60);

    let dDisplay = (d > 0 ? Math.trunc(d / 10) != 0 ? String(d) : "0" + String(d) : "00") + ":";
    let hDisplay = (h > 0 ? Math.trunc(h / 10) != 0 ? String(h) : "0" + String(h) : "00") + ":";
    let mDisplay = (m > 0 ? Math.trunc(m / 10) != 0 ? String(m) : "0" + String(m) : "00") + ":";
    let sDisplay = s > 0 ? Math.trunc(s / 10) != 0 ? String(s) : "0" + String(s) : "00";
    
    let numContainer = document.getElementById("number");
    
    numContainer.innerHTML = dDisplay + hDisplay + mDisplay + sDisplay;
    setTimeout(() => {
        updateTime();    
    }, 1000);
}

updateTime();
