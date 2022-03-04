const economyClsInput = document.getElementById("ecoCls-tic-input");
const FirstClsInput = document.getElementById("firstCls-tic-input");


function displayUpdates(isPlus,id){
    const clsInput = document.getElementById(id);
    console.log(clsInput.value);
    const ticketCount = parseInt(clsInput.value);
    if(isPlus){
        const newTicketCount = ticketCount + 1;
        clsInput.value = newTicketCount;
    }else if(ticketCount > 0){
        const newTicketCount = ticketCount - 1;
        clsInput.value = newTicketCount;
    }

    calculateTotal()
}
// first class increase decrease
const firstClsPlusBtn = document.getElementById('firstCls-plus-btn');
firstClsPlusBtn.addEventListener('click', function(){
    displayUpdates(true,'firstCls-tic-input');
    
})

const firstClsMinusBtn = document.getElementById('firstCls-minus-btn');
firstClsMinusBtn.addEventListener('click', function(){
    displayUpdates(false,'firstCls-tic-input')
})

// economy class increase decrease
const ecoPlusBtn = document.getElementById("ecoCls-plus-btn");
ecoPlusBtn.addEventListener("click",function(){
    displayUpdates(true,'ecoCls-tic-input');
})

const ecoMinusBtn = document.getElementById("ecoCls-minus-btn");
ecoMinusBtn.addEventListener("click",function(){
    // console.log("minus is click");
    displayUpdates(false,'ecoCls-tic-input');
})

// function TotalCost() {
//     const ecoTicket = document.getElementById("ecoCls-tic-input");
//     console.log(ecoTicket);
// }
// TotalCost();
const getInputValue =(cls)=>{
    const ticketInput = document.getElementById(cls + "-tic-input");
    const ticketNumber = parseInt(ticketInput.value);
    return ticketNumber;
}

function calculateTotal(){
    
    const firstClsCost = getInputValue('firstCls') * 150;

    const ecoClsCost = getInputValue('ecoCls') * 100;

    const subTotal = firstClsCost + ecoClsCost ;

    const vatCharge = subTotal / 10;
    const total = vatCharge + subTotal;

    document.getElementById('subTotal').innerText = subTotal;
    document.getElementById('VatCharge').innerText = vatCharge;
    document.getElementById('total').innerText = total;
    
    
    // console.log(vatCharge);
   
}