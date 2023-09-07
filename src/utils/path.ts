import type { Article, Directory } from '../types/file';
import type { MarkdownInstance } from '../types/markdown';

export const getParentPath = (path?: string) => {
  if(!path) return null;
  return path.split('/').slice(0, -1).join('/');
};

interface IsChildPathOptions {
  allowSibling?: boolean;
}
export const isChildPath = (parentPath: string, childPathCandidate: string, options: IsChildPathOptions = {}) => {
  if(!childPathCandidate) return false;
  
  const { allowSibling = false } = options;

  const parsedParentPath = parentPath?.split('/') ?? [];
  const parsedChildPathCandidate = childPathCandidate?.split('/') ?? [];
  if(!allowSibling && (parsedParentPath.length + 1 !== parsedChildPathCandidate.length)) return false;
  if(allowSibling && (parsedParentPath.length + 1 >= parsedChildPathCandidate.length)) return false;
  if(parsedParentPath.some((parentPathToken, index) => parentPathToken !== parsedChildPathCandidate[index])) return false;
  return true;
};

interface IsAdjacentPathOptions {
  includeSelf?: boolean;
}
export const isAdjacentPath = (path: string, adjacentPathCandidate: string, options: IsAdjacentPathOptions = {}) => {
  if(!adjacentPathCandidate) return false;
  
  const { includeSelf = false } = options;

  const parsedPath = path?.split('/') ?? [];
  const parsedAdjacentPathCandidate = adjacentPathCandidate?.split('/') ?? [];
  if(parsedPath.length !== parsedAdjacentPathCandidate.length) return false;
  if(parsedPath.slice(0, -1).some((pathToken, index) => pathToken !== parsedAdjacentPathCandidate[index])) return false;
  if(!includeSelf && (path === adjacentPathCandidate)) return false;
  return true;
};

export const getAllDirectories: () => Directory[] = () => {
  const allDirectories = import.meta.glob<MarkdownInstance>('../articles/**/index.md', { eager: true })
  const directories = Object.entries(allDirectories)
  .map(([path, md]) => ({
    path: path.replace('../articles/', '').replace('index.md', '').replace(/\/$/, '') || undefined,
    imagePath: md.frontmatter.imagePath,
    backgroundColorPalette: md.frontmatter.backgroundColorPalette,
    title: md.frontmatter.title,
    Content: md.Content,
    rawContent: md.rawContent(),
  }));

  return directories;
};

export const getDevelopmentDirectories: () => Directory[] = () => {
  const allDirectories = import.meta.glob<MarkdownInstance>('../articles/development/*/index.md', { eager: true })
  const directories = Object.entries(allDirectories)
  .map(([path, md]) => ({
    path: path.replace('../articles/', '').replace('index.md', '').replace(/\/$/, '') || undefined,
    imagePath: md.frontmatter.imagePath,
    backgroundColorPalette: md.frontmatter.backgroundColorPalette,
    title: md.frontmatter.title,
    Content: md.Content,
    rawContent: md.rawContent(),
  }));

  return directories;
};

export const getAllArticles: () => Article[] = () => {
  const allArticles = import.meta.glob<MarkdownInstance>('../articles/**/!(index).md', { eager: true })
  const articles = Object.entries(allArticles)
  .map(([path, md]) => ({
    path: path.replace('../articles/', '').replace('.md', ''),
    title: md.frontmatter.title,
    Content: md.Content,
    rawContent: md.rawContent(),
  }));

  return articles;
};

export interface Breadcrumb {
  name: string;
  path: string;
}
export const createBreadcrumbs = (path = '') => {
  const allDirectories = getAllDirectories();
  const parsedPath = path.replace(/^\/+/, '').replace(/\/+$/, '').split('/');
  const breadcrumbs = parsedPath.reduce((acc: Breadcrumb[], token: string, index: number) => {
    if(index === (parsedPath.length - 1) && !token) {
      return acc;
    }

    const parentPath = acc[index].path;
    const breadcrumbPath = `${parentPath}${parentPath ? '/' : ''}${token}`;
    const breadcrumbName = allDirectories.find(directory => directory.path === breadcrumbPath)?.title ?? token;
    return [
      ...acc,
      {
        name: breadcrumbName,
        path: breadcrumbPath,
      }
    ]
  }, [{
    name: 'root',
    path: '',
  }]);

  return breadcrumbs.slice(1);
}
