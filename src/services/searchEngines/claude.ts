import { SearchEngineService, SearchResult } from '../../types/search';

export const claudeEngine: SearchEngineService = {
  id: 'claude',
  name: 'Claude',
  domain: 'https://www.chatgpt.com',
  search: async (query: string): Promise<SearchResult> => {
    // In a real implementation, this would make an API call to Claude
    return {
      title: `Response for: ${query}`,
      content: `Claude response for "${query}" would appear here`,
    };
  },
};
