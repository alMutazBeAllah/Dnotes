
// add notes
const list = document.querySelector('#notes');

const addForm = document.querySelector('#addForm');

addForm.addEventListener('submit', (action) => {
    const data = addForm.querySelector('input[type = "text"]').value;
    action.preventDefault();
    console.log(data);
    
    const li  = document.createElement('li');
    const noteName = document.createElement('span');
    const noteDelete = document.createElement('span');
    const br = document.createElement('br');
    const br1 = document.createElement('br');

    noteName.className = 'name';
    noteDelete.className = 'delet';

    noteName.textContent = data;
    noteDelete.textContent = 'Delete';

    li.appendChild(noteName);
    li.appendChild(br);
    li.appendChild(br1);
    li.appendChild(noteDelete);
    list.appendChild(li);
    console.log(li)
});

// delet elements
function addDeleteListener(){
    const deletList = document.querySelectorAll('#notes .delet');
    deletList.forEach((element) => {
        element.addEventListener('click', (del) => {
            const li = del.target.parentElement;
            li.parentNode.removeChild(li);
        });
    });
}

// search for elements

const search = document.forms['searchArea'].querySelector('#searchField');

search.addEventListener('keyup', (find) => {
    const data = find.target.value.toLowerCase();
    console.log(data);
    const notes = list.getElementsByTagName('li');
    Array.from(notes).forEach((element) => {
        const noteValue = element.firstElementChild.textContent;
        if(noteValue.toLowerCase().indexOf(data) != -1){
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    })
});