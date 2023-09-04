import MarkdownIt from 'markdown-it';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

export default function Markdown(rawContent: { rawContent: string }) {
  const marked = new MarkdownIt({
    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(str, { language: lang }).value;
        } catch (__) {}
      }

      return ''; // use external default escaping
    }
  });
  
	return (
    <div
      class='markdown-body'
      dangerouslySetInnerHTML={{__html: marked.render(rawContent.rawContent)}}
    />
	);
}
