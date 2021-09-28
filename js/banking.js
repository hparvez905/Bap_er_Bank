// code with function 

function MyDepositMoney() {
    const addMoney=document.getElementById('deposit-amount');
    const depositMoney=addMoney.value; 
    const TotalDepositMoney= parseFloat(depositMoney);

    addMoney.value='';
    return TotalDepositMoney;

    
}
document.getElementById('depositButton').addEventListener('click',function () {
    const getdepositeAmount= MyDepositMoney();
    
    
})
























































































// code without function 






// handle deposite button  event
/*
document.getElementById('deposit-button').addEventListener('click',function () {
    const addMoney=document.getElementById('deposit-amount');
    const depositMoney=addMoney.value;
    console.log(depositMoney);  
    const TotalDepositedMoney=depositedMoney.innerText;
    const TotalDepositMoney=  depositMoney;
        const TotalMoney= parseFloat( TotalDepositedMoney) + parseFloat(TotalDepositMoney);
       
        depositedMoney.innerText= TotalMoney;
        // clear input 
      



        // update Balance 

        const balanceUpdated= document.getElementById('balanceUpdate');

         const UpdateBalance= parseFloat(balanceUpdated.innerText) + parseFloat(TotalDepositMoney);

        balanceUpdated.innerText=UpdateBalance;


    })


    // withdraw update

    document.getElementById('withdraw-button').addEventListener('click',function () {
         const withdrawAmount= document.getElementById('withdraw-amount'); 
         const addWithdraw =withdrawUpdate.innerText;
         const cashWithdrawAmount=withdrawAmount.value;
         
         
            
         const withdwarTotalAmount = parseFloat(addWithdraw)+ parseFloat(cashWithdrawAmount);
         console.log(cashWithdrawAmount);
         withdrawUpdate.innerText= withdwarTotalAmount;

         withdrawAmount.value='';


        //  UpdateBalance for withdrawAmount
        const a= document.getElementById('balanceUpdate');
        
        const b= a.innerText;
        
        const c= parseFloat(b);
        
        const d=parseFloat (cashWithdrawAmount);
        const totalBalanceAmount= c-d ;
        a.innerText=totalBalanceAmount;
        
      

        

    
        




    })
    */