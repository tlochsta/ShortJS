# ShortJS

ShortJS is a JavaScript function pack that rewraps common JavaScript functions to make them easier to type and read, similar to jQuery.

## Functions

### Selectors
- `$(selector)`: Equivalent to `document.querySelector(selector)`.
- `$$(selector)`: Equivalent to `document.querySelectorAll(selector)`.

### Event Handling
- `on(element, event, callback)`: Equivalent to `element.addEventListener(event, callback)`.
- `off(element, event, callback)`: Equivalent to `element.removeEventListener(event, callback)`.

### Display Manipulation
- `hide(element)`: Sets `element.style.display` to `'none'`.
- `show(element)`: Sets `element.style.display` to an empty string.
- `toggle(element)`: Toggles the `element.style.display` between `'none'` and `''`.

### DOM Manipulation
- `create(tagName)`: Equivalent to `document.createElement(tagName)`.
- `append(parent, child)`: Equivalent to `parent.appendChild(child)`.
- `prepend(parent, child)`: Equivalent to `parent.insertBefore(child, parent.firstChild)`.
- `remove(element)`: Removes the `element` from its parent.
- `empty(element)`: Removes all child nodes from the `element`.

### Class Manipulation
- `addClass(element, className)`: Adds the specified class to the `element`.
- `removeClass(element, className)`: Removes the specified class from the `element`.
- `toggleClass(element, className)`: Toggles the specified class on the `element`.
- `hasClass(element, className)`: Checks if the `element` has the specified class.

### Attribute Manipulation
- `attr(element, attributeName, value)`: Gets or sets the value of the specified attribute on the `element`.
- `data(element, key, value)`: Gets or sets the value of the specified data attribute on the `element`.

### Content Manipulation
- `text(element, content)`: Gets or sets the text content of the `element`.
- `html(element, content)`: Gets or sets the HTML content of the `element`.

### Value Manipulation
- `val(element, value)`: Gets or sets the value of the `element` (for inputs, selects, etc.).

### Style Manipulation
- `css(element, styles)`: Sets the CSS styles of the `element`.
- `width(element, value)`: Sets the width of the `element`.
- `height(element, value)`: Sets the height of the `element`.

### AJAX
- `ajax(url, options)`: Performs an AJAX request using the fetch API.

## What is Vanilla JS?

"Vanilla JS" refers to using plain, native JavaScript without any additional libraries or frameworks. ShortJS aims to provide a more concise and readable way to write common JavaScript code, similar to how jQuery simplifies DOM manipulation.

## Usage

To use ShortJS functions, simply include the ShortJS script in your HTML file:

```html
<script src="https://cdn.jsdelivr.net/gh/tlochsta/ShortJS@main/short.js"></script>
```
Then, you can use the functions in your JavaScript code:

```js
const element = $('.my-element');
hide(element);
```
## License
ShortJS is licensed under the MIT License. See LICENSE for more information.
Created by tlochsta
