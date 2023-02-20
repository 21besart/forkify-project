'use strict';

import * as model from './model.js';
import { MODAL_CLOSE_SEC } from './config.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import addRecipeView from './views/addRecipeView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeView.renderSpinner();

    // Update view to mark selected recipe
    resultsView.update(model.getResultsPage());
    bookmarksView.update(model.state.bookmarks);

    // Loading recipe
    await model.loadRecipe(id);

    // Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (error) {
    recipeView.renderError();
    console.log(error);
  }
};

const controlSearchResults = async function () {
  // Get query
  const query = searchView.getQuery();
  if (!query) return;

  resultsView.renderSpinner();
  // Load query
  await model.loadSearchResults(query);

  // Render results
  resultsView.render(model.getResultsPage());
  // Render pagination
  paginationView.render(model.state.search);
};

const controlPagination = function (goToPage) {
  // Render NEW results
  resultsView.render(model.getResultsPage(goToPage));
  // Render NEW pagination
  paginationView.render(model.state.search);
};

const controlServings = function (updateTo) {
  // Update the servings state
  model.updateServings(updateTo);

  // Update the recipe view
  recipeView.update(model.state.recipe);
};

const controlAddBookmark = function () {
  // Add/remove  bookmark
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);

  // Update recipe view
  recipeView.update(model.state.recipe);

  // Render bookmarks view
  bookmarksView.render(model.state.bookmarks);
};

const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};

const controlAddRecipe = async function (recipe) {
  try {
    // Show spinner
    addRecipeView.renderSpinner();

    // upload recipe data
    await model.uploadRecipe(recipe);

    // Render recipe
    recipeView.render(model.state.recipe);

    // Success message
    addRecipeView.renderMessage();

    // Render recipe in bookmarks
    bookmarksView.render(model.state.bookmarks);

    // Change ID in url
    window.history.pushState(null, '', '#' + model.state.recipe.id);

    // Close form window
    setTimeout(() => {
      addRecipeView._toggleWindow();
    }, MODAL_CLOSE_SEC * 1000);
  } catch (error) {
    console.error(error);
    addRecipeView.renderError(error.message);
  }
  setTimeout(() => {
    location.reload();
  }, MODAL_CLOSE_SEC * 1000);
};

const init = function () {
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRecipe);
  console.log('Welcome');
};

init();
