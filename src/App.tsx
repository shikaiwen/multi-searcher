import React, { useState } from 'react';
import { Compass } from 'lucide-react';
import { SearchBar } from './components/SearchBar';
import { SearchEngineSelector } from './components/SearchEngineSelector';
import { ResultsPanel } from './components/ResultsPanel';
import { searchEngines } from './services/searchEngines';
import { SearchResultView } from './components/SearchResult';
import { SearchResultDisplay } from './types/search';

function App() {
  const [selectedEngines, setSelectedEngines] = useState(['google']);
  const [searchResults, setSearchResults] = useState<SearchResultDisplay[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [lastQuery, setLastQuery] = useState('test');

  const handleSearch = async (query: string) => {
    if (!query.trim() || selectedEngines.length === 0) return;

    setLastQuery(query);
    setIsLoading(true);

    // Search with all engines to maintain results even when deselected
    selectedEngines.forEach((e) => {
      let curengines = searchEngines.filter((engine) => engine.id == e);
      curengines.forEach(async (engine) => {
        // window.open();
        const result = await engine.search(query);
        window.open(result.url);
        // engine.search(query)
      });
    });

    setIsLoading(false);

    return;
    const results = await Promise.all(
      searchEngines.map(async (engine) => {
        const result = await engine.search(query);
        return {
          engineId: engine.id,
          displayName: engine.name,
          content: <SearchResultView result={result} />,
          // url: result.url,
          url: 'https://www.google.com/search?igu=1',
        };
      })
    );

    setSearchResults(
      results.filter((r): r is SearchResultDisplay => r !== null)
    );
  };

  const toggleEngine = (engineId: string) => {
    setSelectedEngines((prev) =>
      prev.includes(engineId)
        ? prev.filter((id) => id !== engineId)
        : [...prev, engineId]
    );
  };

  // Filter results based on selected engines
  const visibleResults = searchResults.filter((result) =>
    selectedEngines.includes(result.engineId)
  );

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex items-center justify-center gap-4 mb-8">
          <Compass className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-900">MultiSearcher</h1>
        </div>

        <div className="flex flex-col items-center gap-6">
          <SearchBar onSearch={handleSearch} initialQuery={lastQuery} />
          <SearchEngineSelector
            engines={searchEngines}
            selectedEngines={selectedEngines}
            onToggle={toggleEngine}
          />
        </div>

        <div className="mt-8">
          {isLoading ? (
            <div className="text-center text-gray-600">Loading results...</div>
          ) : (
            <ResultsPanel results={visibleResults} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
