# pretty-react-table-kit

A super dynamic Table/Dashboard component with a beautiful UI made in Tailwind CSS. It features built-in filters (both individual and global), pagination, and an optional side panel that displays selected row data. Just plug in your data and use it!

## Beautiful UI

Here is an example of the package in action:

![Example Usage](https://github.com/karanVR/pretty-react-table-kit/blob/main/src/assets/DocumentationImg.png?raw=true)

## Features

- Dynamic Pagination
- Global Filter
- Individual Filter
- Pass Columns and Data (see column file example in demo folder)
- Built-in Loader
- Built-in Date Picker
- Button for Download
- Fully Responsive
- Intersection Observer for Mobile View for Infinite Scroll
- Beautiful UI
- Customizable Column-wise Styling
- Much More...

## Usage & Installation

To install the package, run:

````bash
npm i pretty-react-table-kit
```

Please ensure you have all the necessary dependencies installed. Refer to the `package.json` in the demo folder for a reference. You can clone the demo folder to see the package in action.

**Ensure you are using the same version of every package listed below or refer to the `peerDependencies` in the GitHub repo for guidance:**

1. `postcss`: ^8
2. `tailwindcss`: ^3.4.1
3. `typescript`: ^5
4. `@tanstack/react-table`: ^8.20.1
5. `clsx`: ^2.1.1
6. `tailwind-merge`: ^2.5.2
7. `date-fns`: ^3.6.0
8. `react-icons`: ^5.3.0
9. `lucide-react`: ^0.427.0
10. `shadcn-ui`: ^0.8.0

Add the following to your `postcss.config.js` file:

```js
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};

````

Add the following to your tailwind.config.ts file:

```js
module.exports = {
  plugins: [require('tailwindcss-animate')],
}
```
