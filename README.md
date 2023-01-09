# react-cesium-demo

> This is React boilerplate for Cesium

## Explain

- this repository supports `react 18`
- used [craco](https://github.com/dilanx/craco), [craco-cesium](https://github.com/reearth/craco-cesium)

## Setup

1. clone this repository to your local
2. install node modules
   ```
   npm install
   ```
3. run project
   ```
   npm run start
   ```

## etc

- when trying to import something, you may use `absolute path` not `relative path`

  ```javascript
  // Bad
  import Viewer from "../../Viewer";

  // Good
  import Viewer from "@engines/Viewer";
  ```
