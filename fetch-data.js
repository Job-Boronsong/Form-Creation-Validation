// Define the asynchronous function to fetch user data
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // API URL
    const dataContainer = document.getElementById('api-data');   // Select container

    try {
        const response = await fetch(apiUrl);                    // Fetch data
        const users = await response.json();                     // Parse JSON

        dataContainer.innerHTML = '';                            // Clear loading text

        const userList = document.createElement('ul');           // Create <ul> element

        users.forEach(user => {
            const listItem = document.createElement('li');       // Create <li>
            listItem.textContent = user.name;                    // Set user name
            userList.appendChild(listItem);                      // Add <li> to <ul>
        });

        dataContainer.appendChild(userList);                     // Add list to container
    } catch (error) {
        dataContainer.innerHTML = '';                            // Clear container
        dataContainer.textContent = 'Failed to load user data.'; // Show error message
    }
}

// Run the function after the document has loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
