# forkify Project

This project is built with the MVC architecture.

In MVC, views are responsible for rendering the user interface based on the data provided by the model, and they are typically triggered by events from the controller.

This project is done with [JavaScript](https://www.javascript.com/) and [Parcel](https://parceljs.org/) for compiling & bundling.

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) ![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![SASS](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white) ![Parcel](https://img.shields.io/badge/-Parcel-F7B93E?logo=parcel&logoColor=white&style=for-the-badge)
![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black) ![Prettier](https://img.shields.io/badge/-Prettier-F7B93E?logo=prettier&logoColor=black&style=for-the-badge)

## Features

- Search over 1,000,000 recipes
- Search for a recipe or an ingredient
- Search results shown with pagination
- A recipe shows cooking time, servings and ingredients
- You can adjust the number of servings, which will then update the quantity of ingredients
- Bookmark a recipe for later
- Add your own recipes

## Live Version

TO DO: Deploy to Netlify

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

- Recommended `node` : `>=16.13.0`.
- Recommended to use `pnpm` for better experience, but `npm` or `yarn` works for the commands below too.

### Setup

- Clone the repository.
- Install all dependencies using: - `npm install`.

### Directory Structure

| Name             | Description                                                          |
| ---------------- | -------------------------------------------------------------------- |
| **src/img**      | Images (favicon, logo, icons)                                        |
| **src/js**       | Scripts like model, views, controller (MVC architecture) and helpers |
| **src/js/views** | Scripts for rendering the UI                                         |
| **src/sass**     | Style configurations are placed here                                 |

## Scripts

##### Start dev server

- `npm run start`

Starts the development mode to the browser at `http://localhost:1234`

##### Build for production

- `npm run build`
