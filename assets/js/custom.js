// let secElem = document.querySelector('.sec');
// let minElem = document.querySelector('.min');
// let hrElim = document.querySelector('.hr');



// function clock (){
// let d = new Date();
// let sec = d.getSeconds() / 60;
// let min = (sec + d.getMinutes()) / 60;
// let hr =(min +  d.getHours()) / 12;

// secElem.style.transform = `rotate(${sec * 360}deg)`;
// minElem.style.transform = `rotate(${min * 360}deg)`;
// hrElim.style.transform = `rotate(${hr * 360}deg)`;
 
// }

// setInterval(clock,1000);


// let oneElem = document.querySelector('.sec');
// let twoElem = document.querySelector('.min');
// let threeElem = document.querySelector('.hr');


// function clock(){
//     let d = new Date();

//     let sec = d.getSeconds() /60;
//     let min = d.getMinutes() /60;
//     let hr = d.getHours() / 12;


//     oneElem.style.transform = `rotate(${sec * 360}deg)`;
//     twoElem.style.transform = `rotate(${min *360}deg)`;
//     threeElem.style.transform =`rotate(${hr * 360}deg)`;

// }

// setInterval(clock,1000);




// let firstElem = document.querySelector('.sec');
// let secondElem = document.querySelector('.min');
// let thirdElem = document.querySelector('.hr');



// function clock(){

//     let t = new Date();
    
//     let sec = t.getSeconds() / 60;
//     let min = (sec + t.getMinutes()) / 60;
//     let hr = (min + t.getHours()) / 12;



//     firstElem.style.transform = `rotate(${sec * 360}deg)`;
//     secondElem.style.transform = `rotate(${min * 360}deg)`;
//     thirdElem.style.transform = `rotate(${hr * 360}deg)`;

// }

// setInterval(clock,1000);




// let aElem = document.querySelector('.sec');
// let bElem = document.querySelector('.min');
// let cElem = document.querySelector('.hr');



// function clock(){
//     let a = new Date();

//     let sec = a.getSeconds() / 60;
//     let min = (sec + a.getMinutes()) / 60;
//     let hr = (min + a.getHours()) / 12;


//     aElem.style.transform = `rotate(${sec * 360}deg)`;
//     bElem.style.transform = `rotate(${min * 360}deg)`;
//     cElem.style.transform = `rotate(${hr *360}deg)`;
// }

// setInterval(clock,1000);




// let myElem = document.querySelector('.sec');
// let youElem = document.querySelector('.min');
// let heElem = document.querySelector('.hr');


// function we (){

//     let a = new Date();

//    let sec = a.getSeconds() /60;
//    let min = (sec + a.getMinutes() /60);
//    let hr = (hr(a.getHours) /12);



//    myElem.style.transform = `rotate(${sec * 360}deg)`;
//    youElem.style.transform =`rotate(${min * 360}deg)`;
//    heElem.style.transform = `rotate(${hr * 360}deg)`;
// }

// setInterval(we,1000);

// let myClock = document.querySelector('.clock');




// function stripe(){

//     let parentDiv = document.createElement('div');
//     parentDiv.classList.add('stripe-area');
    
//    for( let a = 1;a<=60;a++){
//     let spanElem = document.createElement('span');

//     spanElem.style.transform = `rotate(${a * 6}deg)`;

//     if(a % 5 == 0){
//         spanElem.classList.add('stripe','circle');  
//     }
//     else{
//         spanElem.classList.add('stripe');
//     }

//     parentDiv.append('spanElem');

//    }

//    return parentDiv  ;

// }

// let analogClock = document.querySelector('.clock');
// analogClock.append(myClock()); 

// function myClock() {
//     let parentDiv = document.createElement('div');
//     parentDiv.classList('stripe-area');

//     for(let a = 0; a < 60; a++) {
//         let spanElem = document.createElement('span');

//         // spanElem.style.transform =`rotate(${a * 6}deg)`;


//         // if(a % 5 ==0){
//         //     spanElem.classList.add('stripe','circle');
//         // }
//         // else{
//         //     spanElem.classList.add('stripe');   
//         // }
//         parentDiv.append(spanElem);
//     }
//     return parentDiv;
// }






// let myClockElement = document.querySelector('.clock');
// myClockElement.append(stripeArea());
// myClockElement.append(numberArea());
// myClockElement.append(handlerArea());

// function stripeArea() {
//     let createParentDiv = document.createElement('div');
//     createParentDiv.classList.add('stripe-area');

//     for(let i = 0; i < 60; i++) {
//         let createSpanTagForStripe = document.createElement('span');

//         createSpanTagForStripe.style.transform = `rotate(${i * 6}deg)`;

//         if(i % 5 == 0) {
//             createSpanTagForStripe.classList.add('stripe', 'circle');
//         } else {
//             createSpanTagForStripe.classList.add('stripe');
//         }


//         createParentDiv.append(createSpanTagForStripe);
//     }

//     return createParentDiv;
// }


let newClock = document.querySelector('.clock');

newClock.append(myClock());
newClock.append(numberArea());
newClock.append(hendler());

function myClock() {
    let mainDiv = document.createElement('div');
    mainDiv.classList.add('stripe-area');

    for(let i = 0; i < 60; i++){
        let spanDiv = document.createElement('span');
        spanDiv.style.transform =`rotate(${i * 6}deg)`;

        if(i % 5 == 0) {
            spanDiv.classList.add('stripe', 'circle');
        }
        else{
            spanDiv.classList.add('stripe');
        }
        mainDiv.append(spanDiv);
    }
    return mainDiv;
}




function numberArea() {
    let numberElem = document.createElement('div');
    numberElem.classList.add('number-area');

    for(let i = 1; i <= 12; i++){
        let numberTeg = document.createElement('div');
        numberTeg.classList.add('number');
        numberTeg.style.transform =`rotate(${i * 30}deg)`;

        let spanTag = document.createElement('span');
        spanTag.textContent = i;
        spanTag.style.transform =`rotate(-${i * 30}deg)`;

        numberTeg.append(spanTag);
        numberElem.append(numberTeg);
    }

    return numberElem;
}


function hendler(){
    let hendlerElim = document.createElement('div');
    hendlerElim.classList.add('time-handler');

    let hrDiv = document.createElement('div');
    hrDiv.classList.add('hr');
    let minDiv = document.createElement('div');
    minDiv.classList.add('min');
    let secDiv = document.createElement('div');
    secDiv.classList.add('sec');

    hendlerElim.append(hrDiv);
    hendlerElim.append(minDiv);
    hendlerElim.append(secDiv);

    return hendlerElim; 

}

function ourClock(){
    let d = new Date();

    let sec = d.getSeconds() / 60;
    let min = (sec + d.getMinutes()) / 60;
    let hr = (min + d.getHours()) / 12;

    let secDiv = document.querySelector('.sec');
    let minDiv = document.querySelector('.min');
    let hrDiv = document.querySelector('.hr');

    secDiv.style.transform = `rotate(${sec * 360}deg)`;
    minDiv.style.transform = `rotate(${min * 360}deg)`;
    hrDiv.style.transform = `rotate(${hr * 360}deg)`;

}
ourClock();

setInterval(ourClock, 1000);


