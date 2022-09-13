const arrCat = document.querySelectorAll('.task-category');
// arrCat.map((data) => {
//     if(data.innerText == 'SCHOOL') {
//         data.style.backgroundColor = "yellow";
//     } 
//     else if(data.innerText == 'WORK') {
//         data.style.backgroundColor = "purple";
//     }
//     else {
//         data.style.backgroundColor = "red";
//     }
//     console.log(data.innerText);
// });
for(let i = 0; i < arrCat.length; i++) {
    if(arrCat[i].innerText == 'SCHOOL') {
        arrCat[i].style.backgroundColor = "#f2a700";
    } 
    else if(arrCat[i].innerText == 'WORK') {
        arrCat[i].style.backgroundColor = "#9c00af";
    }
    else if(arrCat[i].innerText == 'PERSONAL') {
        arrCat[i].style.backgroundColor = "#8dd19c";
    }
    else if(arrCat[i].innerText == 'CLEANING') {
        arrCat[i].style.backgroundColor = "#f36bb3";
    } 
    else {
        arrCat[i].style.backgroundColor = "#5358c8";
    }
    console.log(arrCat[i].innerText);   
}