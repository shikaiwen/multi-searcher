import { SearchEngineService, SearchResult } from '../../types/search';

export const chatGPTEngine: SearchEngineService = {
  id: 'chatgpt',
  name: 'ChatGPT',
  domain: 'https://www.chatgpt.com',
  search: async (query: string): Promise<SearchResult> => {
    // In a real implementation, this would make an API call to ChatGPT
    return {
      title: `Response for: ${query}`,
      content: `ChatGPT response for "${query}" would appear here`,
    };
  },
};
