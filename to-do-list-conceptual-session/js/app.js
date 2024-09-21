let index = 0;

function addTask(e) {
    const description = inputValue('inputValue');
    const tr = document.createElement('tr');
    const i = document.createElement('i');
    i.setAttribute('class', "delete-icon fa-solid fa-xmark cursor-pointer text-red-500");

    if (document.getElementById('inputValue').value === '') {
        return;
    }

    index += 1;

    tr.innerHTML = `
    <th>${index}</th>
    <td>${description}</td>
    <td onclick="deleteItem(this)">${i.outerHTML}</td>
    `;

    document.getElementById('tbody').append(tr)
    document.getElementById('inputValue').value = '';

}

//by clicking
document.getElementById('add-btn').addEventListener('click', addTask)

//by pressing enter
document.getElementById('inputValue').addEventListener('keyup', function (e) {
    if (e.key === 'Enter') {
        addTask()
    }
})

// clear-all-btn 
document.getElementById('clear-all-btn').addEventListener('click', function () {
    document.getElementById('tbody').innerHTML = '';
    index = 0;
})

// clear one by one 
function deleteItem(element) {
    console.log(element.parentNode.remove());
    console.log(element);
}
