# scrolldirection

A zero-dependency, vanilla JavaScript library for detecting scroll direction.

## Features

* Throttling for optimized performance
* Handling of mobile browser overscroll effects

## Installation

NPM:

    npm install @jarijokinen/scrolldirection --save

Yarn:

    yarn add @jarijokinen/scrolldirection

## Usage

    import { scrolldirection } from '@jarijokinen/scrolldirection';

    document.addEventListener('DOMContentLoaded', () => {
      scrolldirection();
    });

## Configuration

    const options = {
      dataElement: document.querySelector('html'), // element for data attribute
      dataAttribute: 'data-scroll-direction',      // data attribute name
      dataValueUp: 'up',                           // attribute value for up
      dataValueDown: 'down',                       // attribute value for down
      dataUpdateInterval: 250,                     // attribute update interval
      throttleInterval: 250                        // throttle interval
    };

    scrolldirection(options);

## Example

Hiding a navigation bar with CSS when scrolling down:

    html[data-scroll-direction='down'] .navbar {
      display: none;
    }

## License

MIT License. Copyright (c) 2022 [Jari Jokinen](https://jarijokinen.com).  See
[LICENSE](https://github.com/jarijokinen/scrolldirection/blob/main/LICENSE.txt)
for further details.
