const apiUrl = "https://raw.githubusercontent.com/gokadzev/Musify/update/check.json"
let versionElement = document.getElementById("version");
let downloadElement = document.getElementById("download");


window.onload = function() {
    getUpdateInfo((res) => {
        const response = JSON.parse(res);
        versionElement.textContent += response["version"];
        downloadElement.setAttribute("href", response["url"]);
    })
};

function getUpdateInfo(callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", apiUrl, true); 
    xmlHttp.send(null);
}