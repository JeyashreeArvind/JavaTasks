// Sample data to pass to our components
const cardData = [
    { title: "Component 1", body: "This is the first dynamic component created with JS functions." },
    { title: "Component 2", body: "This is the second component, demonstrating reusability and props." },
    { title: "Component 3", body: "We can easily generate many instances from a single function." }
];

// Get the mount point element
const appRoot = document.getElementById('app');

/**
 * Renders all components into the DOM.
 */
function renderApp() {
    // Generate all the HTML strings by mapping over the data and calling the component function
    const allCardsHTML = cardData.map(data => CardComponent(data)).join('');

    // Insert the generated HTML into the mount point
    if (appRoot) {
        appRoot.innerHTML = allCardsHTML;
    } else {
        console.error("App root element #app not found!");
    }
}

// Initialize the application rendering
renderApp();
// Initialize IndexedDB
function saveNote() {
    const input = document.getElementById('noteInput');
    const notes = JSON.parse(localStorage.getItem('notes') || '[]');
    
    notes.push(input.value);
    localStorage.setItem('notes', JSON.stringify(notes)); // Save data locally
    input.value = '';
    displayNotes();
}

function displayNotes() {
    const notes = JSON.parse(localStorage.getItem('notes') || '[]');
    const list = document.getElementById('noteList');
    list.innerHTML = notes.map(note => `<li>${note}</li>`).join('');
}

// Initial load
displayNotes();
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then(() => console.log('Service Worker Registered'))
            .catch(err => console.log('Registration Failed', err));
    });
}


