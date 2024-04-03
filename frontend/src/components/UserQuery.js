import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchOpenAiResponse,
  resetError,
  resetOpenAiResponse,
  setQuery,
} from "../features/user_query/userQuerySlice";

export default function UserQuery() {
  const { query, openAiResponse, isLoading, error } = useSelector(
    (state) => state.userQuery
  );
  const dispatch = useDispatch();
  const queryRef = useRef();
  const handleUserQueryForm = (e) => {
    e.preventDefault();
    const queryRefValue = queryRef.current.value;
    queryRef.current.value = "";
    dispatch(resetOpenAiResponse());
    dispatch(resetError());
    dispatch(setQuery(queryRefValue));
    dispatch(fetchOpenAiResponse(queryRefValue));
  };
  return (
    <>
      <div className="bg-blue-500 p-8 rounded-lg shadow-lg max-w-md mx-auto mt-8">
        <h2 className="text-white text-2xl font-bold mb-4">Chat App</h2>
        <form onSubmit={handleUserQueryForm}>
          <div className="mb-4">
            <textarea
              className="w-full bg-white rounded-lg p-4"
              placeholder="Write here...."
              ref={queryRef}
            ></textarea>
            {error && (
              <p className="text-yellow-500 text-sm mt-1 font-bold">{error}</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-white text-blue-500 px-4 py-2 rounded-lg font-bold hover:bg-blue-200"
          >
            Submit
          </button>
        </form>
        {isLoading && (
          <div className="flex justify-center mt-4">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white-500"></div>
          </div>
        )}
        {openAiResponse && (
          <div className="bg-white rounded-lg p-4 mt-4">
            {query && (
              <h3 className="text-blue-500 text-lg font-bold mb-2">
                Query: {query}
              </h3>
            )}
            <h3 className="text-blue-500 text-lg font-bold mb-2">
              Query Response: 
            </h3>
            <p className="text-gray-700">{openAiResponse}</p>
          </div>
        )}
      </div>
    </>
  );
}
