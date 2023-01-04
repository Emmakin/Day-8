// filterSelection('all')
// function filterSelection(c) {
//     var x, i;
//     x = document.getElementsByClassName('itemDiv')
//     if (c == 'all') c = '';
//     for (i = 0; i < x.length; i++){
//         removeClass(x[i], 'show');
//         if(x[i].className.indexOf(c) > -1) addClass(x[i], 'show');
//     }
// }

// function addClass(element, name){
// var1, arr1, arr2;
// arr1= element.className.split(" ");
// arr2= name.split(" ");
//  for (i=0; i< arr2.length - 1; i++){
//     if(arr1.indexOf(arr2[i]) == -1){
//         element.className += " ", arr2[i];
//     }
//     }
// }

// function removeClass(element, name){
//     var1, arr1, arr2;
//     arr1 = element.className.split(" ");
//     arr2 = name.split(" ");
//         for (i=0; i < arr2.length - 1; i++){
//             while(arr1.indexOf(arr[i]) > -1){
//                 arr1.splice(arr1.indexOf(arr1), 1)
//             }
//         }
//         element.className = arr1.join(" ");
//     }

// var btnContainer = document.getElementsByClassName("our-storeBtns");
// var btns = btnContainer.getElementsByClassName("our-storeBtn");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function(){
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }

//I want to try my method
let itemsArray = document.querySelectorAll("figure");
// console.log(itemsArray)

let buttons = document.querySelectorAll('input');
// console.log(buttons)

buttons.forEach(function(button){
    button.addEventListener("click",function(){
        if(button.classList.contains("allBtn")){
            itemsArray.forEach(function (figure){
                figure.style.display = 'flex'
            })
        }

        // writing the code for each button
        if(button.classList.contains("cakeBtn")){
            itemsArray.forEach(function(figure){
                figure.style.display = 'flex'
            })
        itemsArray.forEach(function(figure){
            if(!(figure.classList.contains("cakes"))){
                figure.style.display = 'none';
            }
        })
        }

        if(button.classList.contains("cupcakeBtn")){
            itemsArray.forEach(function(figure){
                figure.style.display = 'flex'
            })
            itemsArray.forEach(function(figure){
                if(!(figure.classList.contains("cupcakes"))){
                    figure.style.display = 'none';
                }
            })
        }

        if(button.classList.contains('sweetBtn')){
            itemsArray.forEach(function(figure){
                figure.style.display = 'flex';
            })
            itemsArray.forEach(function(figure){
                if(!(figure.classList.contains("sweets"))){
                    figure.style.display = 'none';
                }
            })
        }

        if(button.classList.contains('doughtnutBtn')){
            itemsArray.forEach(function(figure){
                figure.style.display = 'flex';
            })
            itemsArray.forEach(function(figure){
                if(!(figure.classList.contains('doughnut'))){
                    figure.style.display  = 'none'
                }
            })
        }
        


    })
})

// for the searchbar
let searchBtn = document.querySelector(".searchIconC")
// console.log(searchBtn)

let searchMsg = document.querySelector('.searchBox')
// console.log(searchMsg);

searchMsg.addEventListener('input', function (){
    for(i=0; i < itemsArray.length -1; i++){
        if(itemsArray[i].innerText.toUpperCase().includes(searchMsg.value.toUpperCase())){
            itemsArray[i].classList.add('is-hidden')
        }else{
        itemsArray[i].classList.remove('is-hidden')  
    }
    }
})