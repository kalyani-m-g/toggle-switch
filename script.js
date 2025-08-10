const toggleBtn = document.getElementById('toggleBtn');
const root = document.documentElement;
toggleBtn.addEventListener('click', () => {
  const current = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', current);
  localStorage.setItem('theme', current);
});

const input = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const list = document.getElementById('taskList');
const toast = document.getElementById('toast');

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 1500);
}

addBtn.onclick = () => {
  const text = input.value.trim();
  if (!text) return;
  const li = document.createElement('li');
  li.textContent = text;
  li.onclick = () => {
    li.classList.toggle('completed');
    showToast(li.classList.contains('completed') ? 'Done!' : 'Undone');
  };
  const del = document.createElement('button');
  del.textContent = '✕';
  del.onclick = (e) => { e.stopPropagation(); li.remove(); showToast('Deleted'); };
  li.appendChild(del);
  list.appendChild(li);
  input.value = '';
  showToast('Added');
};
input.addEventListener('keydown', e => e.key === 'Enter' && addBtn.click());

