let index = 0;
document.getElementById('add-btn').addEventListener('click', function () {
    index += 1;
    const description = inputValue('inputValue');
    const tr = document.createElement('tr');
    const i = document.createElement('i');
    i.setAttribute('class', "fa-solid fa-xmark cursor-pointer text-red-500");

    tr.innerHTML = `
    <th>${index}</th>
    <td>${description}</td>
    <td>${i.outerHTML}</td>
    `
    document.getElementById('tbody').append(tr)
    document.getElementById('inputValue').value = '';

})

// clear-all-btn functionality 
document.getElementById('clear-all-btn').addEventListener('click', function () {
    document.getElementById('tbody').remove();
})