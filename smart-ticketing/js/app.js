const selectedSeat = document.getElementById('selected-seat');
let currentSeat = 0;
// console.log(selectedSeat.innerHTML);

//button onclick event
function btnOnclick(event) {
    const newList = document.createElement('div')

    newList.innerHTML = `
    <h4>${event.innerText}</h4>
        <h4>Economy</h4>
        <h4>550</h4>
    `
    newList.setAttribute('class', 'flex justify-between')
    newList.setAttribute('onclick', 'removeSeat(this)')
    document.getElementById('no-seat').classList.add('hidden')
    selectedSeat.append(newList)
    //total seat
    currentSeat += 1;
    document.getElementById('total-seats').innerText = currentSeat;
    //total amount
    const correntAmount = parseFloat(document.getElementById('total-amount').innerText)
    document.getElementById('total-amount').innerText = correntAmount + 550
    console.log(currentSeat, 'add');
}

//remove seat
function removeSeat(event) {
    event.remove()

    //total seat
    currentSeat -= 1;
    document.getElementById('total-seats').innerText = currentSeat;
    //total amount
    const correntAmount = parseFloat(document.getElementById('total-amount').innerText)
    document.getElementById('total-amount').innerText = correntAmount - 550

    //no seat text
    if (currentSeat === 0) {
        document.getElementById('no-seat').classList.remove('hidden')
    }
    console.log(currentSeat, 'remo');
}