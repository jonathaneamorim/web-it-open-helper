import javascriptData from "./programming/javascript.json";
import dockerData from "./programming/docker.json";
import gitData from "./programming/git.json";
import cssData from "./programming/css.json";
import htmlData from "./programming/html.json";
import markdownData from "./programming/markdown.json";
import softwareData from "./softwares/desktop_linux.json";
import soLinuxData from "./so/linux.json";
import search from "./navigators/search.json";

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
  category: string; 
  description?: string;
  levels: Level[];
  links?: Array<{ title: string; url: string }>;
}

export const contentRegistry: Record<string, PageContent> = {
  "javascript": javascriptData as unknown as PageContent,
  "docker": dockerData as unknown as PageContent,
  "git": gitData as unknown as PageContent,
  "css": cssData as unknown as PageContent,
  "html": htmlData as unknown as PageContent,
  "markdown": markdownData as unknown as PageContent,
  "linux": soLinuxData as unknown as PageContent,
  "desktop-linux": softwareData as unknown as PageContent,
  "search": search as unknown as PageContent,
};