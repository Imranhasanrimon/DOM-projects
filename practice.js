// some reusable functions 

// for input value 
function inpValue(id) {
    return document.getElementById(id).value
}

//for innerText
function innText(id) {
    return document.getElementById(id).innerText
}

//for element selection
function element(id) {
    return document.getElementById(id)
}

//___________________________________________________________________
//calculate btn
element('calculate').addEventListener('click', function calculateBtn() {
    const income = parseFloat(inpValue('income'));
    const software = parseFloat(inpValue('software'));
    const courses = parseFloat(inpValue('courses'));
    const internet = parseFloat(inpValue('internet'))
    //calculation
    const totalExp = software + courses + internet;
    const balance = income - totalExp;


    //showing output
    element('results').classList.remove('hidden')
    element('total-expenses').innerText = totalExp;
    element('balance').innerText = balance;

    //making history
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = today.getFullYear();

    fullDate = `${day}/${month}/${year}`;

    const list = document.createElement('div');
    list.innerHTML = `
            <p>${fullDate}</p>
            <h3 class="font-bold">Income: $${income}.00</h3>
            <p>Expenses: $${totalExp}.00</p>
            <p>Balance: $${balance}.00</p>
    `
    element('history-list').append(list)



})

//saving calculate btn
element('calculate-savings').addEventListener('click', function () {
    const savingPersentage = parseFloat(inpValue('savings')) / 100;
    const balance = parseFloat(element('balance').innerText);

    // showing output 
    const savingsAmount = balance * savingPersentage;
    const remainingBalance = balance - savingsAmount;
    element('savings-amount').innerText = savingsAmount;
    element('remaining-balance').innerText = remainingBalance;
})

//_____________________________________________________
//Navigating to history
element('history-tab').addEventListener('click', function () {
    element('history-section').classList.remove('hidden')
    element('expense-form').classList.add('hidden')
    element('assistant-tab').classList.remove('bg-gradient-to-r', 'text-white')
    element('assistant-tab').classList.add('text-gray-600')
    element('history-tab').classList.add('bg-gradient-to-r', 'text-white')
    element('history-tab').classList.remove('text-gray-600')
})

//Navigating to Assistant 
element('assistant-tab').addEventListener('click', function () {
    element('history-section').classList.add('hidden')
    element('expense-form').classList.remove('hidden')
    element('assistant-tab').classList.add('bg-gradient-to-r')
    element('assistant-tab').classList.add('text-white')
    element('assistant-tab').classList.remove('text-gray-600')
    element('history-tab').classList.remove('bg-gradient-to-r')
    element('history-tab').classList.add('text-gray-600')
    element('history-tab').classList.remove('text-white')
})
