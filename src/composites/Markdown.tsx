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

import Button from '@/components/Button';

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
      <div class='p-2'>
        <blockquote 
          class='pl-4 border-l-4 border-indigo-500'
          dangerouslySetInnerHTML={{__html: marked.parse(quote)}}
        >
        </blockquote>
      </div>
    );
  };
  
  renderer.heading = function (text: string, level: number) {
    switch(level) {
      case 1:
        return render(
          <h1
            class='my-4 first:mt-0 last:mb-0 text-3xl font-bold'
          >
            {text}
          </h1>
        )
      case 2:
        return render(
          <h2
            class='my-3 first:mt-0 last:mb-0 text-2xl font-bold'
          >
            {text}
          </h2>
        )
      case 3:
        return render(
          <h3
            class='my-2 first:mt-0 last:mb-0 text-xl font-bold'
          >
            {text}
          </h3>
        )
      case 4:
        return render(
          <h4
            class='my-1 first:mt-0 last:mb-0 font-bold'
          >
            {text}
          </h4>
        )
      case 5:
        return render(
          <h5
            class='my-1 first:mt-0 last:mb-0 font-bold'
          >
            {text}
          </h5>
        )
      case 6:
        return render(
          <h6
            class='my-1 first:mt-0 last:mb-0 font-bold'
          >
            {text}
          </h6>
        )
      default:
        return render(
          <span>{text}</span>
        )
    }
  };
  
  renderer.list = function (body: string, ordered: boolean, start: number) {
    if(ordered) {
      return render(
        <ol
          class='list-decimal pl-5'
          dangerouslySetInnerHTML={{__html: marked.parse(body)}}
        >
        </ol>
      );
    } else {
      return render(
        <ul
          class='list-disc pl-5'
          dangerouslySetInnerHTML={{__html: marked.parse(body)}}
        >
        </ul>
      );
    }
  };
  
  renderer.listitem = function (body: string, task: boolean, checked: boolean) {
    return render(
      <li
        dangerouslySetInnerHTML={{__html: marked.parse(body)}}
      >
      </li>
    );
  };
  
  renderer.paragraph = function (text: string) {
    return render(
      <p
        class='py-1'
        dangerouslySetInnerHTML={{__html: marked.parse(text)}}
      >
      </p>
    );
  };
  
  renderer.link = function (href: string, title: string, text: string) {
    return render(
      <a
        class='underline'
        href={href}
      >
        {text}
      </a>
    );
  };
  
  renderer.image = function (href: string, title: string, text: string) {
    return render(
      <img
        class='m-2'
        src={href}
      >
        {text}
      </img>
    );
  };
  
	return (
    <div dangerouslySetInnerHTML={{__html: marked.parse(rawContent.rawContent, { renderer })}} />
	);
}
