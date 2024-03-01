// Example of using ShortJS to add and remove classes from an element
const element = $('.example-div');
addClass(element, 'highlighted');
setTimeout(() => {
    removeClass(element, 'highlighted');
}, 2000);
