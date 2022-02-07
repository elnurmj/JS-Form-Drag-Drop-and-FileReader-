let upload = document.getElementById("upload");
let table = document.getElementById("table");
let dropPlace = document.querySelector(".upload-area");

upload.addEventListener("click", function(){
    this.nextElementSibling.click();
})

upload.nextElementSibling.onchange = function (e) {
    uploadImages(e.target.files);
}

dropPlace.ondragover = (e)=>{
    e.preventDefault();
}

dropPlace.ondrop = (e)=>{
    e.preventDefault();
    uploadImages(e.dataTransfer.files);

}

function uploadImages(files){
    for (const file of files) {
        let reader = new FileReader();
        reader.onloadend = function (ev) {
            console.log(ev)
            table.lastElementChild.innerHTML += `<tr>
            <th><img src="${ev.target.result}" style="height:100px" alt=""></th>
            <td>${file.name}</td>
            <td>${file.type}</td>
            <td>${file.size/1024} kb</td>
          </tr>`
        }
        reader.readAsDataURL(file);
    }
}