// Define the routes and their corresponding content/functions
const routes = {
    '/': () => '<h1>Welcome Home!</h1><p>This is the main page content.</p>',
    '/about': () => '<h1>About Us</h1><p>Learn more about our company.</p>',
    '/contact': () => '<h1>Contact</h1><p>Get in touch with us.</p>',
    '/404': () => '<h1>404 Page Not Found</h1>'
};

// Function to handle the routing
function handleRouting() {
    // Get the current hash from the URL (e.g., "#/about") and remove the leading '#'
    const path = window.location.hash.substring(1) || '/';
    
    // Select the content container
    const container = document.getElementById('app-container');
    
    // Get the content function for the current path, or fallback to 404
    const render = routes[path] || routes['/404'];
    
    // Render the content into the container
    container.innerHTML = render();
}

// Listen for the 'hashchange' event and the 'load' event
// The 'hashchange' event fires when the URL hash changes
window.addEventListener('hashchange', handleRouting);

// The 'load' event fires when the page first loads
window.addEventListener('load', handleRouting);
