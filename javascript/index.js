let bookName = document.getElementById('bookName');
let authorName = document.getElementById('authorName');
let publisherName = document.getElementById('publisherName');
let date = document.getElementById('date');
let submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', () => {
	itemsValue = [bookName.value, authorName.value, publisherName.value, date.value];
	let itemStorage = localStorage.getItem("books");
	if (bookName.value == "" && authorName.value == "" && publisherName.value == "" && date.value == "") {
        alert("Inputs should not be empty");
    }
	else if (itemStorage == null && itemsValue) {
		itemArray = [];
	}
	else{
		itemArray = JSON.parse(itemStorage);
	}  
	itemArray.push({
		book : bookName.value,
		author : authorName.value,
		publisher : publisherName.value,
		date : date.value
	});
	localStorage.setItem("books", JSON.stringify(itemArray));
	if (itemArray) {
		alert("book has been added successfuly");
	}
	
});


