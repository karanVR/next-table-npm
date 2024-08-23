# pretty-react-table-kit

A Super dynamic Table / Dashboard components that have a beautiful UI made in tailwindcss, built-in filters(individual and global) and pagination, comes with an optional side panel, that shows selected row data! Just throw in your data and use

# USAGE & INSTALLATION

```bash
npm pretty-react-table-kit
```

Please make sure you have all the dependencies installed, refer to package.json in demo folder to get a reference, you can clone and run demo folder to see demo usage

\*\* Please make sure you are using the same version of every package listed in dependencies here or see peerDependencies in github repo for reference:
"postcss": "^8",
"tailwindcss": "^3.4.1",
"typescript": "^5",
"@tanstack/react-table": "^8.20.1",
"clsx": "^2.1.1",
"tailwind-merge": "^2.5.2",
"date-fns": "^3.6.0",
"react-icons": "^5.3.0",
"lucide-react": "^0.427.0",
"shadcn-ui": "^0.8.0",

add this in postcss.config file:

module.exports = {
plugins: [
require('tailwindcss'),
require('autoprefixer'),
],
};

add plugins: [require('tailwindcss-animate')], in your tailwind.config.ts file

## Features

Dynamic Pagination
Global Filter
Individual Filter
Pass Columns, Data (Column file example in demo folder)
built in loader
built in Date Picker
Button for download
Fully responsive
Intersection Observer for mobile view for infinite scroll
Beautiful UI
Customizable Column wise styling
Much more....

## Example

Here is an example of the package in action:
![Example Usage](https://github.com/karanVR/pretty-react-table-kit/blob/main/src/assets/DocumentationImg.png?raw=true)
