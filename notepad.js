const noteTextarea = document.getElementById('note');

// Load the saved note from local storage, if any
const savedNote = localStorage.getItem('note');
if (savedNote) {
  noteTextarea.value = savedNote;
}

// Save the note to local storage whenever the user types something
noteTextarea.addEventListener('input', () => {
  localStorage.setItem('note', noteTextarea.value);
});
