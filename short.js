/*
  ShortJS v1.0.0
  Copyright (c) 2023 tlochsta. All rights reserved.
*/
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);
const on = (element, event, callback) => element.addEventListener(event, callback);
const off = (element, event, callback) => element.removeEventListener(event, callback);
const hide = (element) => element.style.display = 'none';
const show = (element) => element.style.display = '';
const toggle = (element) => element.style.display = (element.style.display === 'none') ? '' : 'none';
const ajax = (url, options) => fetch(url, options);
const create = (tagName) => document.createElement(tagName);
const append = (parent, child) => parent.appendChild(child);
const prepend = (parent, child) => parent.insertBefore(child, parent.firstChild);
const remove = (element) => element.parentNode.removeChild(element);
const empty = (element) => {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
};
const addClass = (element, className) => element.classList.add(className);
const removeClass = (element, className) => element.classList.remove(className);
const toggleClass = (element, className) => element.classList.toggle(className);
const hasClass = (element, className) => element.classList.contains(className);
const attr = (element, attributeName, value) => {
    if (typeof value === 'undefined') {
        return element.getAttribute(attributeName);
    } else {
        element.setAttribute(attributeName, value);
    }
};
const data = (element, key, value) => {
    if (typeof value === 'undefined') {
        return element.dataset[key];
    } else {
        element.dataset[key] = value;
    }
};
const text = (element, content) => {
    if (typeof content === 'undefined') {
        return element.textContent;
    } else {
        element.textContent = content;
    }
};
const html = (element, content) => {
    if (typeof content === 'undefined') {
        return element.innerHTML;
    } else {
        element.innerHTML = content;
    }
};
const val = (element, value) => {
    if (typeof value === 'undefined') {
        return element.value;
    } else {
        element.value = value;
    }
};
const css = (element, styles) => {
    Object.assign(element.style, styles);
};
const width = (element, value) => {
    element.style.width = value;
};
const height = (element, value) => {
    element.style.height = value;
};
