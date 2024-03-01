// Example of using ShortJS to create a new div element and append it to the body
const div = create('div');
addClass(div, 'example-div');
text(div, 'This is a new div created using ShortJS');
append(document.body, div);
