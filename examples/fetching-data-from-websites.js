// Example of using ShortJS to fetch data using AJAX
ajax('https://example.com', {
    method: 'GET'
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));
