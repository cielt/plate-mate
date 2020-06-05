import { useState, useReducer } from 'react';
import { useForm } from 'react-hook-form';
import fetch from 'unfetch';

import { USDA_FOOD_CENTRAL_FOODS_SEARCH_URI } from '../constants/endpoints';

const SearchInput = ({ label, register, isRequired, fieldId }) => (
  <div className="form-row">
    <label htmlFor={fieldId}>{label}</label>
    <input type="text" name={fieldId} ref={register({ isRequired })} />
  </div>
);

const initSearchState = (initSearchStateVals) => ({ ...initSearchStateVals });

const foodSearchReducer = (state, action) => {
  switch (action.type) {
    case 'query':
      return {
        ...state,
        activeQuery: action.payload.query,
        activeFoodResults: action.payload.foodResults,
      };

    case 'reset':
      return initSearchState(action.payload);

    default:
      return state;
  }
};

const FoodSearchBox = () => {
  const [state, dispatch] = useReducer(
    foodSearchReducer,
    {
      activeQuery: undefined,
      activeFoodResults: [],
    },
    initSearchState
  );

  const resetSearch = () => {
    dispatch({
      type: 'reset',
      payload: {
        query: '',
        foodResults: [],
      },
    });
  };

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (formData) => {
    const res = fetch(USDA_FOOD_CENTRAL_FOODS_SEARCH_URI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: formData.searchQuery }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // update reducer
        dispatch({
          type: 'query',
          payload: {
            query: formData.searchQuery,
            foodResults: data ? data.foods : [],
          },
        });
      });
  };

  return (
    <div className="food-search">
      <div className="food-lookup-box">
        <form onSubmit={handleSubmit(onSubmit)}>
          <SearchInput
            label="Look up a Food"
            register={register}
            isRequired
            fieldId="searchQuery"
          />
          <button type="submit" className="btn-submit btn-search">
            Search
          </button>
          <button
            type="button"
            className="btn-reset"
            onClick={() => {
              reset();
              resetSearch();
            }}
          >
            Reset
          </button>
        </form>
      </div>
      {/* Search Results */}
      {state.activeQuery && (
        <div className="food-search-results">
          {state.activeFoodResults.length > 0 ? (
            <div className="results-box">
              <ul>
                {state.activeFoodResults.map((foodResult) => (
                  <li key={foodResult.fdcId}>{foodResult.description}</li>
                ))}
              </ul>
            </div>
          ) : (
            <p>{`Sorry, no results found for "${state.activeQuery}"`}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default FoodSearchBox;
