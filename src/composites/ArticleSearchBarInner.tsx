import { useRef, useState } from 'preact/hooks';
import useClickOutside from '@/hooks/useClickOutside'
import type { Article } from '@/types/file';

interface ArticleSearchBarInnerProps {
  articles: Article[]
}
export default function ArticleSearchBarInner({ articles }: ArticleSearchBarInnerProps) {
  // User's input
  const [query, setQuery] = useState<string>('');
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);
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
      const searchResults = articles.filter(article => article.title?.includes(keyword));
      setFilteredArticles(searchResults);
    }
    setOpen(true);
  }

  return (
    <div
      class='relative'
    >
      <input
        class='w-full px-4 py-2 border-2 rounded-3xl bg-zinc-100 dark:bg-zinc-900 border-zinc-300 dark:border-zinc-700'
        type='text'
        value={query}
        onInput={handleOnSearch}
        placeholder='키워드를 입력하세요'
      />
      {isOpen && (
        <div
          class='absolute left-0 right-0 bg-white dark:bg-black mt-2 px-4 py-2 border-2 rounded-3xl'
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
										<a class='block py-1' href={`/articles/${article.path}`}>{article.title}</a>
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
