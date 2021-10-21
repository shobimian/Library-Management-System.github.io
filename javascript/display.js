window.addEventListener('DOMContentLoaded',displayItems);
//....................displaying items..................//
function displayItems() {
	let itemStorage = localStorage.getItem("books");
	if (itemStorage == null) {
		itemArray.push({
			book : bookName.value,
			author : authorName.value,
			publisher : publisherName.value,
			date : date.value
		});
	}
	else{
		itemArray = JSON.parse(itemStorage);
	}
	let htmlTable = document.getElementById("dataTable");
	let displayData = '';
	 itemArray.map((items,index)=>{
		displayData += `<tr>
		<td>${index+1}</td>
		<td>${items.book}</td>
		<td>${items.author}</td>
		<td>${items.publisher}</td>
		<td>${items.date}</td>
		<td>
		<button class="editBtn" onclick="editItem()" id="editBtn">Edit</button>
		<button class="deleteBtn" onclick="deleteitem(${index})" id="deleteBtn">Delete</button>
		</td>
	</tr>`;
	});
	htmlTable.innerHTML = displayData;
}
//................deleting items .............................//
let deleteitem = (index)=>{
    let itemStorage = localStorage.getItem("books");
		itemArray = JSON.parse(itemStorage);
    console.log(itemArray);
    itemArray.splice(index, 1);
    localStorage.setItem("books", JSON.stringify(itemArray));
	alert("items has been deleted");
	displayItems();
	
}
