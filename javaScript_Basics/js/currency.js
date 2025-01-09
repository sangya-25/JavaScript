const base="https://v6.exchangerate-api.com/v6/cee7ea85e14e540d74e390b8/latest/USD";
const dropdown=document.querySelectorAll('.dropdown select'); //to select all the dropdown select tags('from','to')
const button=document.querySelector('.btn');
const fromCurr=document.querySelector(".from select");  //from "from" tag selecting "select"
const toCurr=document.querySelector(".to select"); //from "to" tag selecting "select"
const msg=document.querySelector('.msg');
// for(code in countryList){
//     console.log(code,countryList[code]);  //to access country and country code resp
// }
for(let select of dropdown){
    for(currCode in countryList){
        let newOption=document.createElement("option");
        newOption.innerText=currCode; //all the currency code from the list will now be added into the options in select
         //initially keeping it USD and INR converter:
         if(select.name==='from'&&currCode==='USD'){
            newOption.selected='selected'; 
        }else if(select.name==='to'&&currCode==='INR'){
            newOption.selected='selected';
        }
        select.append(newOption)
    }
    select.addEventListener('change',(evt)=>{   //on changing options in select call update flag func
        updataFlag(evt.target);
    })
}
//to update the flag icon with the chnge in currCode
const updataFlag=(element)=>{
    let currCode=element.value;   //currency code
    let countryCode=countryList[currCode]; //country codes
    let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`;  
    let img=element.parentElement.querySelector("img");
    img.src=newSrc;
}
button.addEventListener('click', async (evt)=>{
    evt.preventDefault(); //to prevent/avoid default behaviour of the button 
    let amount=document.querySelector(".amount input"); //selecting input box 
    let amtVal=amount.value; //to access the value from the input text box
    if(amtVal===""||amtVal<1){
        amtVal=1;  //to set the value to 1
        amount.value='1';  //to display
    }
    //const URL=`${base}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;  //fetching currency converter data from this url
    const URL=`${base}/${fromCurr.value.toLowerCase()}`;
    let response=await fetch(base);
    let data=await response.json();
    let obj=data.conversion_rates;
    let rate=obj[toCurr.value];
    let finalVal=amtVal*rate;
    msg.innerText=`${amtVal} ${fromCurr.value} = ${finalVal} ${toCurr.value}`;
})
