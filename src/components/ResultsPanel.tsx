import React from 'react';
import { SearchResultDisplay } from '../types/search';

interface ResultsPanelProps {
  results: SearchResultDisplay[];
}

export function ResultsPanel({ results }: ResultsPanelProps) {
  if (results.length === 0) {
    return (
      <div className="p-8 text-center text-gray-500">
        use this search with search engine and get the best answer from it.
      </div>
    );
  }

  // Calculate the grid columns based on number of results
  const getGridCols = (count: number) => {
    if (count === 1) return 'grid-cols-1';
    if (count === 2) return 'grid-cols-2';
    if (count === 3) return 'grid-cols-3';
    return 'grid-cols-2 lg:grid-cols-3';
  };

  return (
    <div className={`grid ${getGridCols(results.length)} gap-4 h-[700px]`}>
      {results.map((result) => (
        <div
          key={result.engineId}
          className="bg-white rounded-lg shadow-lg p-6 overflow-auto"
        >
          <h2 className="text-xl font-semibold mb-4 sticky top-0 bg-white py-2 border-b">
            {result.engineId},{result.url} ,{result.displayName} Results
          </h2>

          <div className="h-[calc(100%-4rem)]">
            <iframe
              src={result.url}
              sandbox="allow-scripts allow-same-origin"
            ></iframe>
            {/* {result.content} */}
          </div>
        </div>
      ))}
    </div>
  );
}
