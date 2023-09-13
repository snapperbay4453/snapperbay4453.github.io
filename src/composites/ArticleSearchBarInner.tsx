import { useRef, useState } from 'preact/hooks';
import useClickOutside from '@/hooks/useClickOutside'
import type { Article } from '@/types/file';
import { createFuzzyStringMatcher } from '@/utils/search';

interface HighlightedArticle extends Article {
  longestDistance: number;
  rawHighlightedTitle: string;
}

interface ArticleSearchBarInnerProps {
  articles: Article[];
}
export default function ArticleSearchBarInner({ articles }: ArticleSearchBarInnerProps) {
  // User's input
  const [query, setQuery] = useState<string>('');
  const [filteredArticles, setFilteredArticles] = useState<HighlightedArticle[]>([]);
  const [isOpen, setOpen] = useState<boolean>(false)

  const handleClickOutsideCandidateList = () => {
    setOpen(false);
  };

  const candidateListRef = useRef();
  
  useClickOutside(candidateListRef, handleClickOutsideCandidateList);

  const handleOnSearch = (event) => {
    const keyword = event.target.value;
    setQuery(keyword)
    if(!keyword) {
      setFilteredArticles([]);
    } else {
      const fuzzyStringMatcher = createFuzzyStringMatcher(keyword);
      const searchResults = articles
        .filter(article => fuzzyStringMatcher.test(article.title))
        .map((article) => {
          let longestDistance = 0;
          const highlightedArticleTitle = article.title.replace(fuzzyStringMatcher, (match, ...groups) => {
            const letters = groups.slice(0, keyword.length);
            let lastIndex = 0;
            let highlighted = [];
            for (let i = 0, l = letters.length; i < l; i++) {
              const index = match.indexOf(letters[i], lastIndex);
              highlighted.push(match.substring(lastIndex, index));
              highlighted.push(`<mark>${letters[i]}</mark>`);
              if (lastIndex > 0) {
                longestDistance = Math.max(longestDistance, index - lastIndex);
              }
              lastIndex = index + 1;
            }
            return highlighted.join('');
          });
          return {
            ...article,
            longestDistance,
            rawHighlightedTitle: highlightedArticleTitle,
          };
        });
      searchResults.sort((lhs, rhs) => {
        return lhs.longestDistance - rhs.longestDistance;
      });
      setFilteredArticles(searchResults);
    }
    setOpen(true);
  }

  return (
    <div
      class='relative'
    >
      <input
        class='w-80 max-w-[80vw] px-4 py-2 border-2 rounded-3xl bg-zinc-100 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800'
        type='text'
        value={query}
        onInput={handleOnSearch}
        placeholder='키워드를 입력하세요.'
      />
      {isOpen && (
        <div
          class='absolute left-0 right-0 bg-white dark:bg-black mt-2 px-4 py-2 border-2 rounded-3xl z-40'
          ref={candidateListRef}
        >
          {filteredArticles.length > 0 && (
						<>
							<p>
								{filteredArticles.length}건의 검색 결과:
							</p>
							<ul class='divide-y'>
								{filteredArticles && filteredArticles.map((article) => (
									<li>
										<a
                      class='block py-1'
                      href={`/articles/${article.path}`}
                      dangerouslySetInnerHTML={{__html: article.rawHighlightedTitle}}
                    ></a>
									</li>
								))}
							</ul>
						</>
          )}
          {filteredArticles.length <= 0 && (
						<>
							<p>
								검색 결과가 없습니다.
							</p>
						</>
          )}
        </div>
      )}
    </div>
  );
}
