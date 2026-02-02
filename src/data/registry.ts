import javascriptData from "./programming/javascript.json";
import dockerData from "./programming/docker.json";
import gitData from "./programming/git.json";
import cssData from "./programming/css.json";
import htmlData from "./programming/html.json";
import markdownData from "./programming/markdown.json";


export interface TopicBlock {
  type: string;
  content?: string;
  language?: string;
  items?: string[];
  src?: string;
  alt?: string;
  label?: string;
  url?: string;
}

export interface Topic {
  title: string;
  blocks: TopicBlock[];
}

export interface Level {
  id: string;
  title: string;
  topics: Topic[];
}

export interface PageContent {
  trackTitle: string;
  description?: string;
  levels: Level[];
  links?: Array<{ title: string; url: string }>;
}

export const contentRegistry: Record<string, PageContent> = {
  "javascript": javascriptData as PageContent,
  "docker": dockerData as PageContent,
  "git": gitData as PageContent,
  "css": cssData as PageContent,
  "html": htmlData as PageContent,
  "markdown": markdownData as PageContent,
};