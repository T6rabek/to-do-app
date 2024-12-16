const button = document.querySelector('#button');
const listContainer = document.querySelector('#list-container');

// ADDING NEW TASK
function addTask() {
  button.addEventListener('click', () => {
    let task = document.querySelector('#input-box');
    if (task.value.trim() === '') {
      window.alert('Please, enter a task!');
    } else {
      let li = document.createElement('li');
      li.innerHTML = task.value;
      listContainer.appendChild(li);
      let span = document.createElement('span');
      span.innerHTML = '\u00d7';
      li.appendChild(span);
      saveData();
      task.value = '';
    }
  });
}

// MARKING AS DONE AND REMOVE TASK
function markAndRemove() {
  listContainer.addEventListener('click', e => {
    if (e.target.tagName === 'LI') {
      e.target.classList.toggle('checked');
      saveData();
    } else if (e.target.tagName === 'SPAN') {
      e.target.parentElement.remove();
      saveData();
    }
  });
}

// SAVE DATA
function saveData() {
  localStorage.setItem('data', listContainer.innerHTML);
}

// SHOW DATA
function showData() {
  listContainer.innerHTML = localStorage.getItem('data');
}

// CALLING FUNCTIONS
addTask();
markAndRemove();
showData();
