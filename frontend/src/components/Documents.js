import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDocuments,
  setPageNo,
} from "../features/documents/documentsSlice";

export default function Documents() {
  const { page, documentsAreLoading, documents, documentsError } = useSelector(
    (state) => state.documents
  );
  const dispatch = useDispatch();
  const handleFetchDocuments = () => {
    dispatch(setPageNo());
    dispatch(fetchDocuments(page));
  };
  return (
    <>
      <div className="flex justify-center items-center mt-8">
        <button
          onClick={handleFetchDocuments}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Fetch previously saved documents
        </button>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Previous Documents</h1>

        {/* Table */}
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="border border-gray-200 px-4 py-2">Query</th>
              <th className="border border-gray-200 px-4 py-2">Response</th>
            </tr>
          </thead>
          <tbody>
            {documentsError && (
              <tr>
                <td
                  colSpan="4"
                  className="text-center py-4 text-pink-500 text-sm font-bold"
                >
                  {documentsError}
                </td>
              </tr>
            )}
            {documentsAreLoading && (
              <tr>
                <td
                  colSpan="4"
                  className="text-center py-4 text-pink-500 text-sm font-bold"
                >
                  Loading...
                </td>
              </tr>
            )}
            {documents &&
              documents.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className="border border-gray-200 px-4 py-2">
                      {item.usersQuery}
                    </td>
                    <td className="border border-gray-200 px-4 py-2">
                      {item.openAiResponse}
                    </td>
                  </tr>
                );
              })}
            {documents && documents.length === 0 && (
              <tr>
                <td
                  colSpan="4"
                  className="text-center py-4 text-pink-500 text-sm font-bold"
                >
                  There are no items left
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-center mt-4">
          {/* Pagination buttons go here */}
        </div>
      </div>
    </>
  );
}
