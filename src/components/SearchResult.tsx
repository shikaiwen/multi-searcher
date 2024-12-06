import React from 'react';
import { SearchResult } from '../types/search';

interface SearchResultProps {
  result: SearchResult;
}

export function SearchResultView({ result }: SearchResultProps) {
  if (result.url) {
    return (
      <div className="w-full h-[600px]">
        <iframe
          src={result.url}
          className="w-full h-full border-0 rounded-lg"
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          title={result.title}
        />
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <h3 className="text-lg font-medium text-gray-900">{result.title}</h3>
      <p className="text-gray-700 whitespace-pre-wrap">{result.content}</p>
    </div>
  );
}