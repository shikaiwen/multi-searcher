import { SearchEngineService } from '../../types/search';
import { googleEngine } from './google';
import { baiduEngine } from './baidu';
import { chatGPTEngine } from './chatgpt';
import { claudeEngine } from './claude';
import { perplexityEngine } from './perplexity';

export const searchEngines: SearchEngineService[] = [
  googleEngine,
  baiduEngine,
  chatGPTEngine,
  claudeEngine,
  perplexityEngine,
];