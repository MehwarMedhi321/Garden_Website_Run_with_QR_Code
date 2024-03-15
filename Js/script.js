let FirstNumberIcon = document.getElementById('FirstNumberIcon')
let SecondNumberIcon = document.getElementById('SecondNumberIcon')

let copyIcon = document.getElementById('copyIcon')
let copyIconTow = document.getElementById('copyIconTow')



let FormContent = document.getElementById('FormContent');
let BtnLease = document.getElementById('BtnLease');
let BtnContact = document.getElementById('BtnContact');
let toggle = document.getElementById('toggle');

copyIcon.addEventListener("click", () => {

    if (FirstNumberIcon.value != "" || FirstNumberIcon.value.length >= 1) {
        navigator.clipboard.writeText(FirstNumberIcon.value);
        copyIcon.innerText = "check";

        setTimeout(() => {
            copyIcon.innerHTML = "content_copy";
        }, 3000);
    }

});
copyIconTow.addEventListener("click", () => {

    if (SecondNumberIcon.value != "" || SecondNumberIcon.value.length >= 1) {
        navigator.clipboard.writeText(SecondNumberIcon.value);
        copyIconTow.innerText = "check";

        setTimeout(() => {
            copyIconTow.innerHTML = "content_copy";
        }, 3000);
    }

});












// // Form open and hide

// BtnLease.addEventListener('click', function () {
//     FormContent.style.display="inline"
// })

// BtnContact.addEventListener('click', function () {
//     FormContent.style.display="inline"
// })

// // Toggle button
// function ShowUrdu() {
//     window.open("file:///D:/ProjectGarden/Urdu.html","_self");
// }
// function ShowEnglish() {
//     window.open("file:///D:/ProjectGarden/index.html","_self");
// }