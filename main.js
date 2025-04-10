function addToList() {
    // получение данных из строки ввода
    const note = document.querySelector(".notes").value;
    if(note !== ''){
        // создание элемента списка и присваивание значения из строки ввода
        const newLi = document.createElement("li");
        newLi.textContent = note;

        const delBtn = document.createElement("button");
        delBtn.textContent = "Х";

        delBtn.classList.add("delBtnList");

        newLi.appendChild(delBtn);
        delBtn.onclick = function delBtnClick() {
            newLi.remove();
        };
        // добавление на страницу
        let noteList = document.querySelector(".notesOl");
        noteList.appendChild(newLi);
        note.innerHTML = "";
        document.querySelector(".notes").value = "";
    }
}
// удаление всех заметок
function deleteNotes() {
    const delList = document.querySelector(".notesOl");
    delList.innerHTML = "";
}