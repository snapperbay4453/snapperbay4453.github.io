interface Breadcrumb {
  name: string;
  path: string;
}

interface VerticalBreadcrumbsProps {
  basePath: string;
  parentPath?: string;
  breadcrumbs: Breadcrumb[];
}
export default function VerticalBreadcrumbs({
	basePath,
	parentPath,
	breadcrumbs
}: VerticalBreadcrumbsProps) {
	return (
		<div>
			{parentPath && (
				<a
					class='block text-lg'
					href={parentPath}
				>
					<i class='icon-[material-symbols--arrow-back-rounded]'></i>
					<span>Go back</span>
				</a>
			)}
			<div class='mt-2 first:mt-0'>
				<a
					class='flex gap-2 text-lg'
					href={`${basePath}`}
				>
					<i class='icon-[material-symbols--home-outline-rounded] mt-1'></i>
					<span>{'루트 디렉토리'}</span>
				</a>
				{breadcrumbs.map((breadcrumb: Breadcrumb, index: number) => (
					<a
						class='flex gap-2 text-lg'
						href={`${basePath}/${breadcrumb.path}`}
					>
					<i class='icon-[material-symbols--subdirectory-arrow-right-rounded] mt-1'></i>
						{breadcrumb.name}
					</a>
				))}
			</div>
		</div>
	);
}
