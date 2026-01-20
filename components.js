/**
 * A reusable Card component function.
 * @param {object} props - The data for the card.
 * @param {string} props.title - The card title.
 * @param {string} props.body - The card body text.
 * @returns {string} The HTML string for the card component.
 */
function CardComponent(props) {
    return `
        <div class="card">
            <h2>${props.title}</h2>
            <p>${props.body}</p>
            <button onclick="handleButtonClick('${props.title}')">
                Learn More
            </button>
        </div>
    `;
}

// A global function to handle events from the dynamically injected HTML
function handleButtonClick(title) {
    alert(`You clicked the button on the "${title}" card!`);
}
