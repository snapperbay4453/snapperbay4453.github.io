import { render } from 'preact-render-to-string';
import { Marked } from 'marked';
import { markedHighlight } from "marked-highlight";
import prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-liquid';
import 'prismjs/components/prism-markdown';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-php';
import 'prismjs/components/prism-scss';

export default function Markdown(rawContent: { rawContent: string }) {
  const marked = new Marked(markedHighlight({
    highlight(code: string, lang: string = 'plaintext') {
      if (prism.languages[lang]) {
        return prism.highlight(code, prism.languages[lang], lang);
      } else {
        return code;
      }
    }
  }));
  const renderer = new marked.Renderer();
  
  renderer.blockquote = function (quote: string) {
    return render(
      <blockquote 
        class='pl-4 border-l-4 border-indigo-500'
        dangerouslySetInnerHTML={{__html: marked.parse(quote)}}
      >
      </blockquote>
    );
  };
  
  renderer.heading = function (text: string, level: number) {
    switch(level) {
      case 1:
        return render(
          <h1>{text}</h1>
        )
      case 2:
        return render(
          <h1>{text}</h1>
        )
      case 3:
        return render(
          <h1>{text}</h1>
        )
      case 4:
        return render(
          <h1>{text}</h1>
        )
      case 5:
        return render(
          <h1>{text}</h1>
        )
      case 6:
        return render(
          <h1>{text}</h1>
        )
      default:
        return render(
          <span>{text}</span>
        )
    }
  };
  
  renderer.paragraph = function (text: string) {
    return render(
      <p>
        {text}
      </p>
    );
  };
  
	return (
    <div dangerouslySetInnerHTML={{__html: marked.parse(rawContent.rawContent, { renderer })}} />
	);
}
