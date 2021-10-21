window.addEventListener("DOMContentLoaded", displayItems);
function displayItems() {
  let itemStorage = localStorage.getItem("books");
    itemArray = JSON.parse(itemStorage);
    let countAuthor = itemArray.reduce((accu, curr) => {
      if (accu[curr.author]) {
        accu[curr.author].count++;
      } else {
        accu[curr.author] = { author: curr.author, count: 1 };
      }
      return accu;
    }, {});
    let displayData = "";
    let htmlTable = document.getElementById("dataTable");
    for (accu in countAuthor) {
      let dataContent = countAuthor[accu];
      displayData += `<tr>
					<td>${dataContent.author}</td>
					<td>${dataContent.count}</td>
					<td>
					<button class="deleteBtn" onClick='deleteditem()' id="deleteBtn">Delete</button>
				    </td>
				 </tr>`;
      htmlTable.innerHTML = displayData;
    }
  }
//...............delete function author............

  let deleteItem =  document.getElementsByClassName("deleteBtn");
// console.log(deleteItem);
function deleteditem() {
	let targetData = event.target.parentElement.parentElement;
	// console.log(dummy);
	let name = targetData.children[0].innerHTML;
	let itemStorage = localStorage.getItem("books");
		itemArray = JSON.parse(itemStorage);
		let filterdata = itemArray.filter(items=>{
			return items.author !== name;
		})
		// console.log(filterdata);
		localStorage.setItem("books", JSON.stringify(filterdata));
    targetData.remove();
	 	alert("item has been deleted");
    displayItems();
}
