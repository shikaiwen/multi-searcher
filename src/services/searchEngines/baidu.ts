import { SearchEngineService, SearchResult } from '../../types/search';

export const baiduEngine: SearchEngineService = {
  id: 'baidu',
  name: 'Baidu',
  domain: 'https://www.baidu.com',
  search: async (query: string): Promise<SearchResult> => {
    const encodedQuery = encodeURIComponent(query);
    return {
      title: `Search results for: ${query}`,
      content: `Baidu search results for "${query}"`,
      url: `https://www.baidu.com/s?ie=utf-8&wd=${encodedQuery}`,
    };
  },
};
