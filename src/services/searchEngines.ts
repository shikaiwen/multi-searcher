import { SearchEngineService } from '../types/search';

export const searchEngines: SearchEngineService[] = [
  {
    id: 'google',
    name: 'Google',
    search: async (query: string) => {
      return {
        title: `Google Search Results`,
        content: `Search results for "${query}" from Google would appear here`,
        url: `https://www.google.com/search?q=${query}`,
      };
    },
    domain: 'https://www.google.com/',
  },
  {
    id: 'baidu',
    name: 'Baidu',
    search: async (query: string) => {
      return {
        title: `Baidu Search Results`,
        content: `Search results for "${query}" from Baidu would appear here`,
        url: `https://www.baidu.com/s?wd=${query}`,
      };
    },
    domain: 'https://www.baidu.com/',
  },
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    search: async (query: string) => {
      return {
        title: `ChatGPT Response`,
        content: `AI response for "${query}" from ChatGPT would appear here`,
        url: `https://www.chatgpt.com/?q=${query}&hints=search&ref=ext`,
      };
    },
    domain: 'https://www.chatgpt.com/',
  },
  {
    id: 'claude',
    name: 'Claude',
    search: async (query: string) => {
      return {
        title: `Claude Response`,
        content: `AI response for "${query}" from Claude would appear here`,
        url: `https://claude.ai/new?q=${query}`,
      };
    },
    domain: 'https://www.claude.com/',
  },
  {
    id: 'perplexity',
    name: 'Perplexity',
    search: async (query: string) => {
      return {
        title: `Perplexity Response`,
        content: `AI response for "${query}" from Perplexity would appear here`,
        url: `https://www.perplexity.ai/search?s=o&q=${query}`,
      };
    },
    domain: 'https://www.perplexity.com/',
  },
];
