let input        = document.getElementById('input');
let button       = document.getElementById('format-button');
let display      = document.getElementById('display');
let errorMsg     = document.getElementById('errorMsg');
let delBtn       = document.getElementById('delBtn');
let confirmation = document.getElementById('confirmation');
let confirmed    = document.getElementById('confirmed');
let unconfirm    = document.getElementById('unconfirm');

function formatText() {
    if (input.value === ''){
        errorMsg.style.display = 'block';
        setTimeout(() => errorMsg.style.display = 'none', 3000);
        return;
    }

    display.innerHTML = `
    <div class="text-sm px-3 py-2 rounded-lg bg-gray-900 text-white">${input.value}</div>
    <div class="text-sm px-3 py-2 rounded-lg bg-gray-100 text-gray-700 border border-gray-200 uppercase tracking-wider">${input.value}</div>
    <div class="text-sm px-3 py-2 rounded-lg bg-gray-100 text-gray-500 border border-gray-200 lowercase">${input.value}</div>
  `;

    input.value = '';
};
button.addEventListener('click', formatText);

function deleteText () {
    confirmation.style.display = 'block';
};
delBtn.addEventListener('click', deleteText);

function confirmDelete(){
    display.innerHTML = '';
    confirmation.style.display = 'none';
};
confirmed.addEventListener('click', confirmDelete);

function cancelDelete(){
    confirmation.style.display = 'none';
};
unconfirm.addEventListener('click', cancelDelete);