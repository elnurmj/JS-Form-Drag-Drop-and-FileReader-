let dragElems = document.querySelectorAll(".item");
let dropArea = document.getElementById("drop-area");


// dragElems.ondragend = (e) => {
//     e.target.style.backgroundColor = "hotpink";
// }

// dragElems.ondrag = (e) => {
//     e.target.style.backgroundColor = "orange";
// }

let id;

dragElems.forEach(elem => {
    elem.ondragstart = (e) => {
        e.dataTransfer.setData("id", e.target.id);
        // id = e.target.id;
    }
})

dragElems.ondragstart = (e) => {
    e.dataTransfer.setData("id", e.target.id);
}

dropArea.ondragover = (e) => {
    e.preventDefault();
}

dropArea.ondrop = (e) => {
    let id = e.dataTransfer.getData("id");
    e.target.append(document.getElementById(id));
}