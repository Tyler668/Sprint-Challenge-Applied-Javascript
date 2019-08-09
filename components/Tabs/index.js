// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


const topicsContainer = document.querySelector('.topics');

function createTab(topic){
// Create tab ===
const tabDiv = document.createElement('div');

//Assign class ===
tabDiv.classList.add('tab');

// Fill text content ===
tabDiv.textContent = topic;


return tabDiv;

};



axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(response =>{
    const topicsArray = response.data.topics;
    topicsArray.forEach(element => {
        topicsContainer.appendChild(createTab(element));
    });

});
