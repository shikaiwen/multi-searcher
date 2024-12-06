import React from 'react';

export interface SearchEngine {
  id: string;
  name: string;
  icon?: string;
}

interface SearchEngineSelectorProps {
  engines: SearchEngine[];
  selectedEngines: string[];
  onToggle: (engineId: string) => void;
}

export function SearchEngineSelector({ engines, selectedEngines, onToggle }: SearchEngineSelectorProps) {
  return (
    <div className="flex gap-4 flex-wrap">
      {engines.map((engine) => (
        <label
          key={engine.id}
          className="flex items-center space-x-2 cursor-pointer"
        >
          <input
            type="checkbox"
            checked={selectedEngines.includes(engine.id)}
            onChange={() => onToggle(engine.id)}
            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
          />
          <span className="text-gray-700">{engine.name}</span>
        </label>
      ))}
    </div>
  );
}