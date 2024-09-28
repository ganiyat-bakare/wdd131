const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("ul");


button.addEventListener('click', function() {
    if (input.value.trim() !== '') {
        
        const lst = document.createElement("li");
        const deleteButton = document.createElement("button");

        lst.textContent = input.value;
        deleteButton.textContent = "❌";

        lst.append(deleteButton);
        list.append(lst);

        deleteButton.addEventListener('click', function() {
            if (confirm("Are you sure you want to delete this item?")) {  
                list.removeChild(lst);
                input.value = '';
            }
        });
        input.value = '';
    } 
    input.focus();    

});

