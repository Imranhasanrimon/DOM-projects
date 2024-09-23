const selectedSeat = document.getElementById('selected-seat');
let currentSeat = 0;
let allSeat = 40;
let currentAmount = parseFloat(document.getElementById('total-amount').innerText);
let grandAmout = parseFloat(document.getElementById('grand-amount').innerText);




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
    currentAmount += 550
    document.getElementById('total-amount').innerText = currentAmount


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
    currentAmount -= 550
    document.getElementById('total-amount').innerText = currentAmount - 550

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
    couponContainer.outerHTML = `
    <div class="flex justify-between">
         <h3>Discount</h3>
         <h3>-BDT: 330.00</h3>
    </div>
    `
})

//enabling modal
document.getElementById('phone-number-input').addEventListener('keyup', function (event) {
    const emailValue = event.target.value;
    if (emailValue.length >= 11) {
        document.getElementById('modal-btn').removeAttribute('disabled', true)
    } else {
        document.getElementById('modal-btn').setAttribute('disabled', true)
    }

})

//reload page
document.getElementById('continue-btn').addEventListener('click', function () {
    location.reload()
})