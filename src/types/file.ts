export interface Article {
  path: string;
  title: string;
  Content: any;
  rawContent: {
    rawContent: string;
  };
}

export interface Directory {
  path?: string;
  title: string;
  Content: any;
  rawContent: {
    rawContent: string;
  };
}
