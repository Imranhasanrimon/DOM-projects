const selectedSeat = document.getElementById('selected-seat');
let currentSeat = 0;
let allSeat = 40;
// console.log(selectedSeat.innerHTML);




//button onclick event (add)
function btnOnclick(event) {
    //max 5 seat
    if (currentSeat >= 5) {
        alert('you cannot add more than 5 seats')
        return;
    }

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

    // all seat 
    allSeat -= 1
    document.getElementById('all-seats').innerText = allSeat;

    //total seat
    currentSeat += 1;
    document.getElementById('total-seats').innerText = currentSeat;

    //total amount
    const correntAmount = parseFloat(document.getElementById('total-amount').innerText)
    document.getElementById('total-amount').innerText = correntAmount + 550


    // apply coupon 
    if (currentSeat > 3) {
        document.getElementById('coupon-btn').removeAttribute('disabled', true)
        document.getElementById('coupon-input').removeAttribute('disabled', true)
    } else {
        document.getElementById('coupon-btn').setAttribute('disabled', true)
        document.getElementById('coupon-input').setAttribute('disabled', true)
    }

}

//_________________________________________________________________________________
//remove seat
function removeSeat(event) {
    event.remove()
    // all seat 
    allSeat += 1
    document.getElementById('all-seats').innerText = allSeat;

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




    // apply coupon 
    if (currentSeat > 3) {
        document.getElementById('coupon-btn').removeAttribute('disabled', true)
        document.getElementById('coupon-input').removeAttribute('disabled', true)
    } else {
        document.getElementById('coupon-btn').setAttribute('disabled', true)
        document.getElementById('coupon-input').setAttribute('disabled', true)
    }
}

// get coupon discount 
document.getElementById('coupon-btn').addEventListener('click', function () {
    const couponContainer = document.getElementById('coupon-container');
    couponContainer.innerHTML = `
    <div>
         <h3>Discount</h3>
         <h3>-BDT: 330</h3>
    </div>
    `
})