export interface Article {
  path: string;
  title: string;
  Content: any;
  rawContent: {
    rawContent: string;
  };
  tags: string[];
}

export interface Directory {
  path?: string;
  imagePath?: string;
  backgroundColorPalette?: string;
  title: string;
  Content: any;
  rawContent: {
    rawContent: string;
  };
}
