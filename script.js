function lightTheme() {
    document.getElementById("body").style.backgroundColor = "#e1e1e1";
    document.getElementById("sidebarID").style.backgroundColor = "#e1e1e1";
    document.getElementById("appearancesidebarID").style.backgroundColor = "#e1e1e1";
    document.getElementById("colorsidebarID").style.backgroundColor = "#e1e1e1";
    document.getElementById("infosidebarID").style.backgroundColor = "#e1e1e1";
    document.getElementById("soundsidebarID").style.backgroundColor = "#e1e1e1";
    document.getElementById("appearancesidebarID").style.transition = "0.5s";
    document.getElementById("colorsidebarID").style.transition = "0.5s";
    document.getElementById("infosidebarID").style.transition = "0.5s";
    document.getElementById("soundsidebarID").style.transition = "0.5s";
}

function darkTheme() {
    document.getElementById("body").style.backgroundColor = "#1e1e1e";
    document.getElementById("sidebarID").style.backgroundColor = "#1e1e1e";
    document.getElementById("appearancesidebarID").style.backgroundColor = "#1e1e1e";
    document.getElementById("colorsidebarID").style.backgroundColor = "#1e1e1e";
    document.getElementById("infosidebarID").style.backgroundColor = "#1e1e1e";
    document.getElementById("soundsidebarID").style.backgroundColor = "#1e1e1e";
    document.getElementById("appearancesidebarID").style.transition = "0.5s";
    document.getElementById("colorsidebarID").style.transition = "0.5s";
    document.getElementById("infosidebarID").style.transition = "0.5s";
    document.getElementById("soundsidebarID").style.transition = "0.5s";
}

function openSidebar() {
    document.getElementById("sidebarID").style.width = "60px";
}

function closeSidebar() {
    document.getElementById("sidebarID").style.width = "0";
    document.getElementById("appearancesidebarID").style.width = "0";
    document.getElementById("colorsidebarID").style.width = "0";
    document.getElementById("soundsidebarID").style.width = "0";
    document.getElementById("infosidebarID").style.width = "0";
    document.getElementById("appearancesidebarID").style.transition = "0.5s";
    document.getElementById("colorsidebarID").style.transition = "0.5s";
    document.getElementById("infosidebarID").style.transition = "0.5s";
    document.getElementById("soundsidebarID").style.transition = "0.5s";
}

function openAppearanceSidebar() {
    document.getElementById("appearancesidebarID").style.width = "100px";
    document.getElementById("colorsidebarID").style.width = "0";
    document.getElementById("infosidebarID").style.width = "0";
    document.getElementById("soundsidebarID").style.width = "0";
    document.getElementById("appearancesidebarID").style.transition = "1s";
    document.getElementById("colorsidebarID").style.transition = "1s";
    document.getElementById("infosidebarID").style.transition = "1s";
    document.getElementById("soundsidebarID").style.transition = "1s";
}

function closeAppearanceSidebar() {
    document.getElementById("appearancesidebarID").style.width = "0";
    document.getElementById("appearancesidebarID").style.transition = "1s";
    document.getElementById("colorsidebarID").style.transition = "1s";
    document.getElementById("infosidebarID").style.transition = "1s";
    document.getElementById("soundsidebarID").style.transition = "1s";
}

function openColorSidebar() {
    document.getElementById("colorsidebarID").style.width = "100px";
    document.getElementById("appearancesidebarID").style.width = "0";
    document.getElementById("infosidebarID").style.width = "0";
    document.getElementById("soundsidebarID").style.width = "0";
    document.getElementById("appearancesidebarID").style.transition = "1s";
    document.getElementById("colorsidebarID").style.transition = "1s";
    document.getElementById("infosidebarID").style.transition = "1s";
    document.getElementById("soundsidebarID").style.transition = "1s";
}

function closeColorSidebar() {
    document.getElementById("colorsidebarID").style.width = "0";
    document.getElementById("appearancesidebarID").style.transition = "1s";
    document.getElementById("colorsidebarID").style.transition = "1s";
    document.getElementById("infosidebarID").style.transition = "1s";
    document.getElementById("soundsidebarID").style.transition = "1s";
}

function openSoundSidebar() {
    document.getElementById("soundsidebarID").style.width = "100px";
    document.getElementById("appearancesidebarID").style.width = "0";
    document.getElementById("colorsidebarID").style.width = "0";
    document.getElementById("infosidebarID").style.width = "0";
    document.getElementById("appearancesidebarID").style.transition = "1s";
    document.getElementById("colorsidebarID").style.transition = "1s";
    document.getElementById("infosidebarID").style.transition = "1s";
    document.getElementById("soundsidebarID").style.transition = "1s";
}

function closeSoundSidebar() {
    document.getElementById("soundsidebarID").style.width = "0";
    document.getElementById("appearancesidebarID").style.transition = "1s";
    document.getElementById("colorsidebarID").style.transition = "1s";
    document.getElementById("infosidebarID").style.transition = "1s";
    document.getElementById("soundsidebarID").style.transition = "1s";
}

function openInfoSidebar() {
    document.getElementById("infosidebarID").style.width = "500px";
}

function closeInfoSidebar() {
    document.getElementById("infosidebarID").style.width = "0";
}

function downloadFile(filename, content) {
    const element = document.createElement('a');
    
    const blob = new Blob([content], { type: 'plain/text' });
  
    const fileUrl = URL.createObjectURL(blob);
    
    element.setAttribute('href', fileUrl);
    element.setAttribute('download', filename);
    element.style.display = 'none';
    
    document.body.appendChild(element);
    element.click();
    
    document.body.removeChild(element);
  };
  
  window.onload = () => {
    document.getElementById('downloadbutton').
    addEventListener('click', e => {
        console.log("Hello");
    });
  };

function download() {
    const filename = document.getElementById('documentname').value;
      const filenametxt = filename + '.txt';
      
      const content = document.getElementById('text').value;
       
      if (filename && content) {
        downloadFile(filenametxt, content);
      }
      else if (content && !filename) {
          alert("Please enter a name for the file.");
      }
      else if (!content && filename) {
        alert("Please enter some content for the file.");
    }
      else if (!content && !filename) {
        alert("This file has no contents");
    }
}

var input = document.getElementById("upload");

function upload() {
    var textarea = document.getElementById("text");
    var title = document.getElementById("documentname");
    textarea = input.files[0].value;
    title.value = input.files[0].name.slice(0, -4);
}

input.addEventListener('change', upload);
input.addEventListener('change', delayedSave);

function delayedSave() {
    setTimeout(save, 1000);
}

var storedText = localStorage.getItem("storedText");
var storedDocumentName = localStorage.getItem("storedDocumentName");
var storedTheme = localStorage.getItem("storedTheme");
var storedColor = localStorage.getItem("storedColor");
var storedVolume = localStorage.getItem("storedVolume");

var sound = false;

function save() {
    var text = document.getElementById("text").value;
    localStorage.setItem("storedText", text);
    document.getElementById("text").value = text;

    var documentname = document.getElementById("documentname").value;
    localStorage.setItem("storedDocumentName", documentname);
    document.getElementById("documentname").value = documentname;

    var theme = document.getElementById("body").style.backgroundColor;
    localStorage.setItem("storedTheme", theme);
    document.getElementById("body").style.backgroundColor = theme;
    document.getElementById("sidebarID").style.backgroundColor = theme;
    document.getElementById("appearancesidebarID").style.backgroundColor = theme;
    document.getElementById("colorsidebarID").style.backgroundColor = theme;
    document.getElementById("infosidebarID").style.backgroundColor = theme;
    document.getElementById("soundsidebarID").style.backgroundColor = theme;

    var color = document.getElementsByClassName("customcolor");
    for(var i = 0; i < color.length; i++) {
        var customcolor = document.getElementsByClassName("customcolor")[i].style.color;
        localStorage.setItem("storedColor", customcolor);
        color[i].style.color = customcolor;
    }

    var click = sound.value;
    
    localStorage.setItem("storedVolume", click);
    console.log(click);
}

function get() {
    localStorage.getItem("storedText");
    document.getElementById("text").value = storedText;

    localStorage.getItem("storedDocumentName");
    document.getElementById("documentname").value = storedDocumentName;

    localStorage.getItem("storedTheme");
    document.getElementById("body").style.backgroundColor = storedTheme;
    document.getElementById("sidebarID").style.backgroundColor = storedTheme;
    document.getElementById("appearancesidebarID").style.backgroundColor = storedTheme;
    document.getElementById("colorsidebarID").style.backgroundColor = storedTheme;
    document.getElementById("infosidebarID").style.backgroundColor = storedTheme;
    document.getElementById("soundsidebarID").style.backgroundColor = storedTheme;

    var color = document.getElementsByClassName("customcolor");
    for(var i = 0; i < color.length; i++) {
        localStorage.getItem("storedColor");
        color[i].style.color = storedColor;
    }

    localStorage.getItem("storedVolume");
    sound.value = storedVolume;
}

window.onload = get();

window.onbeforeunload = function() {
    return "Data will be lost if you leave the page, are you sure?";
};

function mutevol() {
    sound = false;
}

function unmutevol() {
    sound = true;
}

function play() {
    if(sound == true) {
        var audio = document.getElementById("clicksound");
        audio.currentTime = 0.15;
        audio.play();
    }
}

document.addEventListener("keydown", function (event) {
    if(event.ctrlKey && event.key == 'l') {
        event.preventDefault();
        lightTheme();
        save();
    }

    if(event.ctrlKey && event.key == 'd') {
        event.preventDefault();
        darkTheme();
        save();
    }

    if(event.ctrlKey && event.key == 's') {
        event.preventDefault();
        download();
        save();
    }

    if(event.ctrlKey && event.key == '1') {
        event.preventDefault();
        redColorChange();
        save();
    }

    if(event.ctrlKey && event.key == '2') {
        event.preventDefault();
        orangeColorChange();
        save();
    }

    if(event.ctrlKey && event.key == '3') {
        event.preventDefault();
        yellowColorChange();
        save();
    }

    if(event.ctrlKey && event.key == '4') {
        event.preventDefault();
        greenColorChange();
        save();
    }

    if(event.ctrlKey && event.key == '5') {
        event.preventDefault();
        blueColorChange();
        save();
    }

    if(event.ctrlKey && event.key == '6') {
        event.preventDefault();
        purpleColorChange();
        save();
    }

    if(event.ctrlKey && event.key == '7') {
        event.preventDefault();
        pinkColorChange();
        save();
    }

    if(event.ctrlKey && event.key == '8') {
        event.preventDefault();
        brownColorChange();
        save();
    }

    if(event.ctrlKey && event.key == '9') {
        event.preventDefault();
        whiteColorChange();
        save();
    }

    if(event.ctrlKey && event.key == '0') {
        event.preventDefault();
        blackColorChange();
        save();
    }
});

var cursor = document.getElementById("cursor");
document.body.addEventListener("mousemove", function(e) {
  cursor.style.left = e.clientX + "px",
    cursor.style.top = e.clientY + "px";
});

// var caret = document.getElementById("caret");
// document.textarea.addEventListener("input", function(e) {
//   caret.style.left = e.clientX + "px",
//     caret.style.top = e.clientY + "px";
// });

function redColorChange() {
    var customcolor = document.getElementsByClassName("customcolor");

    for(var i = 0; i < customcolor.length; i++) {
        customcolor[i].style.color = "#d82934";
    }
}

function orangeColorChange() {
    var customcolor = document.getElementsByClassName("customcolor");

    for(var i = 0; i < customcolor.length; i++) {
        customcolor[i].style.color = "#f66e0d";
    }
}

function yellowColorChange() {
    var customcolor = document.getElementsByClassName("customcolor");

    for(var i = 0; i < customcolor.length; i++) {
        customcolor[i].style.color = "#e2b714";
    }
}

function greenColorChange() {
    var customcolor = document.getElementsByClassName("customcolor");

    for(var i = 0; i < customcolor.length; i++) {
        customcolor[i].style.color = "#79a617";
    }
}

function blueColorChange() {
    var customcolor = document.getElementsByClassName("customcolor");

    for(var i = 0; i < customcolor.length; i++) {
        customcolor[i].style.color = "#007acc";
    }
}

function purpleColorChange() {
    var customcolor = document.getElementsByClassName("customcolor");

    for(var i = 0; i < customcolor.length; i++) {
        customcolor[i].style.color = "#be3c88";
    }
}

function pinkColorChange() {
    var customcolor = document.getElementsByClassName("customcolor");

    for(var i = 0; i < customcolor.length; i++) {
        customcolor[i].style.color = "#f37f83";
    }
}

function brownColorChange() {
    var customcolor = document.getElementsByClassName("customcolor");

    for(var i = 0; i < customcolor.length; i++) {
        customcolor[i].style.color = "#a77c5c";
    }
}

function whiteColorChange() {
    var customcolor = document.getElementsByClassName("customcolor");

    for(var i = 0; i < customcolor.length; i++) {
        customcolor[i].style.color = "#e1e1e1";
    }
}

function blackColorChange() {
    var customcolor = document.getElementsByClassName("customcolor");

    for(var i = 0; i < customcolor.length; i++) {
        customcolor[i].style.color = "#1e1e1e";
    }
}

document.getElementById('upload').addEventListener('change', getFile)

function getFile(event) {
	const input = event.target
  if ('files' in input && input.files.length > 0) {
	  placeFileContent(
      document.getElementById('text'),
      input.files[0])
  }
}

function placeFileContent(target, file) {
	readFileContent(file).then(content => {
  	target.value = content
  }).catch(error => console.log(error))
}

function readFileContent(file) {
	const reader = new FileReader()
  return new Promise((resolve, reject) => {
    reader.onload = event => resolve(event.target.result)
    reader.onerror = error => reject(error)
    reader.readAsText(file)
  })
}

function createNew() {
    document.getElementById("documentname").value = "";
    document.getElementById("text").value = "";
    save();
}

//GOOGLE INTEGRATION TESTING
const scriptURL = "https://script.google.com/macros/s/AKfycbzUBVhFYmN_ODJiunZKjb37k8V_bxwLreE26NT6HU3Xa6isPDzzXfoIoQyqe5mUSylV_g/exec";