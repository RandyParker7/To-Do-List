const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if(inputBox.value === ''){
        alert("Harus Di Isi");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    inputBox.value = '';
    save();
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        save();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        save();
    }
}, false);

function save(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data")
}
showTask();


// Jquery untuk memfilter kategori task, untuk semua task, task yang sudah selesai dan yang belum selesai
$(document).ready(function() {
    $("#showAll").click(function() {
        $("#list-container li").show();
    });

    $("#showCompleted").click(function() {
        $("#list-container li").hide();  
        $("#list-container li.checked").show(); 
    });

    $("#showUncompleted").click(function() {
        $("#list-container li").hide();  
        $("#list-container li:not(.checked)").show();  
    });
});
