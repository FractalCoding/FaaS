const myForm = document.getElementById('user');

myForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
  
    const formData = new FormData(myForm); // Create a new FormData object from the form
    const xhr = new XMLHttpRequest(); // Create a new XMLHttpRequest object
  
    xhr.open('POST', '/submit-form'); // Set up the request
    xhr.setRequestHeader('Content-Type', 'application/json'); // Set the content type
  
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        console.log(xhr.responseText); // Do something with the response
      }
    };
  
    xhr.send(JSON.stringify(formData)); // Send the request
  });