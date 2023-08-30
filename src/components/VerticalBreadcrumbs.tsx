interface Breadcrumb {
  name: string;
  path: string;
}

interface VerticalBreadcrumbsProps {
  basePath?: string;
  breadcrumbs: Breadcrumb[]
}
export default function VerticalBreadcrumbs({ basePath = '', breadcrumbs = [] }: VerticalBreadcrumbsProps) {
  return (
    <div>
      {breadcrumbs.map((breadcrumb, index) => (
        <div>
          <a
            href={`${basePath}/${breadcrumb.path}`}
          >
            {index > 0 ? '↳' : ''}{breadcrumb.name}
          </a>
        </div>
      ))}
    </div>
  );
}
