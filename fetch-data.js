async function fetchUserData() {
    try{
        const apiUrl = 'https://jsonplaceholder.typicode.com/users'
        const response = await fetch(apiUrl);
        const users = await response.json();
       
        const dataContainer = document.getElementById('api-data');
        dataContainer.innerHTML = '';
        const userList = document.createElement("ul")
        
        users.forEach(element => {
         const listItem = document.createElement("li")   
         listItem.textContent = element.name;
         userList.appendChild(listItem)
        });

        dataContainer.appendChild(userList)   

    } catch (error) {
        const dataContainer = document.getElementById('api-data');
        dataContainer.innerHTML = '<p>Failed to load user data</p>';
        console.error('Failed to load user data.', error);
    }
    
    
}

document.addEventListener('DOMContentLoaded', () => {
    fetchUserData()
})






