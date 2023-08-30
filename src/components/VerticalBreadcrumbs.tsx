interface Breadcrumb {
  name: string;
  path: string;
}

interface VerticalBreadcrumbsProps {
  basePath?: string;
  path: string
}
export default function VerticalBreadcrumbs({ basePath = '', path = '' }: VerticalBreadcrumbsProps) {
  const parsedPath = path.replace(/^\/+/, '').replace(/\/+$/, '').split('/');
  const breadcrumbs = parsedPath.reduce((acc: Breadcrumb[], token: string, index: number) => {
    if(index === (parsedPath.length - 1) && !token) {
      return acc;
    }

    const parentPath = acc[index].path;
    return [
      ...acc,
      {
        name: token,
        path: `${parentPath}${parentPath ? '/' : ''}${token}`,
      }
    ]
  }, [{
    name: 'root',
    path: '',
  }]);
  return (
    <div>
      {basePath + '/' + path}
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
