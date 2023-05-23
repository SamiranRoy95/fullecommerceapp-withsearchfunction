// // Sample array of objects
// const data = [
//     { id: 1, name: "John Doe", age: 25 },
//     { id: 2, name: "Jane Smith", age: 30 },
//     { id: 3, name: "Bob Johnson", age: 35 },
//     { id: 4, name: "Alice Williams", age: 28 },
//     { id: 5, name: "David Brown", age: 32 }
//   ];
  
//   // Function to perform the search
//   function search(query, data, searchKey) {
//     const results = [];
//     const lowercaseQuery = query.toLowerCase();
  
//     for (let i = 0; i < data.length; i++) {
//       const item = data[i];
//       const lowercaseValue = item[searchKey].toLowerCase();
  
//       if (lowercaseValue.includes(lowercaseQuery)) {
//         results.push(item);
//       }
//     }
//   // Add event listener for keyup event
//  searchBar.addEventListener('keyup', function(event) {
//     // Get the search query
//     var query = searchBar.value.toLowerCase();

//     // Filter the data based on the search query
//     var filteredData =showData.filter(function(item) {
//       return (
//         item.name.toLowerCase().includes(query) ||
//         item.des.toLowerCase().includes(query)
//       );
//     });

//     // Display the filtered results
//     displayResults(filteredData);
//   });

//   // Function to display the search results
//   function displayResults(results) {
//     // Clear previous results*
//     resultsElement.innerHTML = '';

//     // Create list items for each result
//     results.forEach(function(item) {
//       var li = document.createElement('li');
//       li.textContent = item.name + ' - ' + item.des;
//       resultsElement.appendChild(li);
//     });
//   }
//     return results;
//   }
  
//   // Example usage
//   const searchTerm = "John";
//   const searchKey = "name";
//   const searchResults = search(searchTerm, data, searchKey);
//   console.log(searchResults);
  