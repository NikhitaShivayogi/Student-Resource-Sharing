const form = document.getElementById('resource-form');
const resourceList = document.getElementById('resource-list');

// Store resources in memory
let resources = [];

// Handle form submission
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent page reload

    // Get form values
    const title = form.title.value;
    const description = form.description.value;
    const type = form.type.value;
    const subject = form.subject.value;
    const notes = form.notes.value;
    const contact = form.contact.value;

    // Create a resource object
    const resource = { title, description, type, subject, notes, contact };
    resources.push(resource);

    // Display resources
    displayResources();

    // Reset form
    form.reset();
});

// Function to display resources
function displayResources() {
    resourceList.innerHTML = '';
    resources.forEach(item => {
        const div = document.createElement('div');
        div.className = 'resource-item';
        div.innerHTML = `
            <h3>${item.title} <span>[${item.type}]</span></h3>
            <p><strong>Subject:</strong> ${item.subject}</p>
            <p><strong>Description:</strong> ${item.description}</p>
            ${item.notes ? `<p><strong>Notes:</strong> ${item.notes}</p>` : ''}
            <p><strong>Submitted By:</strong> ${item.contact}</p>
        `;
        resourceList.appendChild(div);
    });
}
