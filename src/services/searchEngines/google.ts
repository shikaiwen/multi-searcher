import { SearchEngineService, SearchResult } from '../../types/search';

export const googleEngine: SearchEngineService = {
  id: 'google',
  name: 'Google',
  domain: 'https://www.google.com',
  search: async (query: string): Promise<SearchResult> => {
    const encodedQuery = encodeURIComponent(query);
    return {
      title: `Search results for: ${query}`,
      content: `Google search results for "${query}"`,
      url: `https://www.google.com/search?igu=1&q=${encodedQuery}`,
    };
  },
};
