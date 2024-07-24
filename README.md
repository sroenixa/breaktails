# Breaktails

**Breaktails** is a utility function for managing responsive TailwindCSS class names in your project. It takes an object where keys represent responsive prefixes and values represent class names. It outputs a concatenated string of class names with their respective prefixes.

## Installation

You can install Breaktails via npm or yarn:

```sh
npm install breaktails
yarn add breaktails


# Usage

## Basic Usage

1. Import the `breaktails` function into your JavaScript or TypeScript file:

    ```javascript
    import { breaktails } from 'breaktail';
    ```

2. Define an object with responsive prefixes and class names:

    ```javascript
    const inputObj = {
      glb: 'flex flex col',
      sm: 'text-center',
      md: 'text-color-white object-fit',
      lg: 'text-align'
    };
    ```

3. Use the `breaktails` function to generate a concatenated string of class names:

    ```javascript
    const result = breaktails(inputObj);
    console.log(result); // Output: 'flex flex col sm:text-center md:text-color-white md:object-fit lg:text-align'
    ```

4. Apply the resulting string to your HTML or React components:

    ```javascript
    function App() {
      const result = breaktails(inputObj);

      return (
        <div className="App">
          <header className="App-header">
            <h1 className={result}>Hello, Breaktails!</h1>
          </header>
        </div>
      );
    }
    ```

## Advanced Usage

You can also use `breaktails` with different scenarios, such as dynamically generated class names or combined with other utility functions. Here’s an example:

```javascript
import { breaktails } from 'breaktails';

const responsiveClasses = {
  glb: 'container mx-auto',
  sm: 'p-4',
  md: 'p-8',
  lg: 'p-16',
  xl: 'p-24'
};

const dynamicClasses = {
  glb: 'flex flex-col',
  sm: 'text-center text-sm',
  md: 'text-lg text-color-gray',
  lg: 'text-xl',
  xl: 'text-2xl'
};

const result = breaktails(responsiveClasses);
console.log(result);
// Output: 'container mx-auto sm:p-4 md:p-8 lg:p-16 xl:p-24'
