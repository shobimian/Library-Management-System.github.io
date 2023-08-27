window.addEventListener("DOMContentLoaded", displayItems);
function displayItems() {
  let itemStorage = localStorage.getItem("books");
    itemArray = JSON.parse(itemStorage);
    let countPublisher = itemArray.reduce((accu, curr) => {
      if (accu[curr.publisher]) {
        accu[curr.publisher].count++;
      } else {
        accu[curr.publisher] = { publisher: curr.publisher, count: 1 };
      }
      return accu;
    }, {});
    let displayData = "";
    let htmlTable = document.getElementById("dataTable");
    for (accu in countPublisher) {
      let dataContent = countPublisher[accu];
      displayData += `<tr>
					<td>${dataContent.publisher}</td>
					<td>${dataContent.count}</td>
					<td>
					<button class="deleteBtn" onClick='deleteditem()' id="deleteBtn">Delete</button>
				    </td>
				 </tr>`;
      htmlTable.innerHTML = displayData;
    }
  }
//...............delete function publisher............

  let deleteItem =  document.getElementsByClassName("deleteBtn");
// console.log(deleteItem);
function deleteditem() {
	let targetData = event.target.parentElement.parentElement;
	// console.log(dummy);
	let name = targetData.children[0].innerHTML;
	let itemStorage = localStorage.getItem("books");
		itemArray = JSON.parse(itemStorage);
		let filterdata = itemArray.filter(items=>{
			return items.publisher !== name;
		})
		// console.log(filterdata);
		localStorage.setItem("books", JSON.stringify(filterdata));
    targetData.remove();
	 	alert("item has been deleted");
    displayItems();
}
