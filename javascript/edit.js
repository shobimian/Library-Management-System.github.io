let editBtn = document.getElementsByClassName("editBtn");
function editItem() {
  let targetData = event.target.parentElement.parentElement;
  console.log(targetData);
  let index = targetData.children[0].innerHTML;
  console.log(index);
  let itemStorage = localStorage.getItem("books");
  itemArray = JSON.parse(itemStorage);
  targetData.children[1].innerHTML = null;
  targetData.children[2].innerHTML = null;
  targetData.children[3].innerHTML = null;
  targetData.children[4].innerHTML = null;
  targetData.children[5].innerHTML = null;

  let bookName = document.createElement("input");
  let authorName = document.createElement("input");
  let publisherName = document.createElement("input");
  let date = document.createElement("input");
  bookName.className = "updateInputs";
  authorName.className = "updateInputs";
  publisherName.className = "updateInputs";
  date.className = "updateInputs";
  date.type = "Date";

  let doneBtn = document.createElement("button");
  doneBtn.innerText = "Done";
  doneBtn.className = "doneBtn";
  doneBtn.style.display = "inline-block";
  doneBtn.style.margin = "3px";
  let cancelBtn = document.createElement("button");
  cancelBtn.innerText = "Cancel";
  cancelBtn.className = "cancelBtn";
  cancelBtn.style.display = "inline-block";
  cancelBtn.style.margin = "3px";

  targetData.children[1].appendChild(bookName);
  targetData.children[2].appendChild(authorName);
  targetData.children[3].appendChild(publisherName);
  targetData.children[4].appendChild(date);
  targetData.children[5].appendChild(doneBtn);
  targetData.children[5].appendChild(cancelBtn);

  bookName.value = itemArray[index - 1].book;
  console.log( bookName.value);
  authorName.value = itemArray[index - 1].author;
  console.log(authorName.value);
  publisherName.value = itemArray[index - 1].publisher;
  console.log( publisherName.value);
  date.value = itemArray[index - 1].date;
  console.log(  date.value);

  doneBtn.addEventListener("click", updateFunction);
  function updateFunction() {
    itemArray[index - 1] = {
      book: bookName.value,
      author: authorName.value,
      publisher: publisherName.value,
      date: date.value,
    };
    window.location.href = "index.html";
    console.log(itemArray);
    localStorage.setItem("books", JSON.stringify(itemArray));
    alert("data updated");
  }

  cancelBtn.addEventListener("click", () => {
    window.location.href = "index.html";
  });
}
