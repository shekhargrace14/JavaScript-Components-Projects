fetch("aside.html")
.then(resolve => resolve.text())
.then(data=> document.querySelector("aside").innerHTML=data)