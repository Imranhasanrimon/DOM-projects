const items = document.getElementsByClassName('item');
for (let item of items) {
    item.addEventListener('click', function (event) {
        event.target.parentNode.removeChild(event.target)
        console.log(event.target);

    })
}

// this is for table
const tbody = document.getElementsByClassName('tr');
for (let tr of tbody) {
    tr.addEventListener('click', function (event) {
        console.log(event.target);
    })
}
