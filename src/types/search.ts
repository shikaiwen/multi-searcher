import { ReactNode } from 'react';

export interface SearchEngine {
  id: string;
  name: string;
  icon?: string;
  domain: string;
}

export interface SearchEngineService extends SearchEngine {
  search: (query: string) => Promise<SearchResult>;
}

export interface SearchResult {
  title: string;
  content: string;
  url?: string;
}

export interface SearchResultDisplay {
  engineId: string;
  displayName: string;
  content: ReactNode;
  url?: string;
}
