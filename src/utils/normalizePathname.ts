export const normalizePathname = (pathname: string): string => {
  const withoutTrailingSlash = pathname.replace(/\/+$/, '') || '/';
  const withoutHtmlExtension = withoutTrailingSlash.replace(/\.html$/, '');
  const withoutIndex = withoutHtmlExtension.replace(/\/index$/, '');

  return withoutIndex || '/';
};
