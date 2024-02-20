// /users/:id => /users/1
export function buildRoutePath(path) {
  const routeParametersRegex = /:([a-zA-Z]+)/g;
  const pathWithParams = path.replaceAll(
    routeParametersRegex,
    '(?<$1>[a-zA-Z0-9-_]+)'
  );

  const pathRegex = new RegExp(`^${pathWithParams}(?<query>\\?(.*))?$`);

  console.log(pathRegex);

  return pathRegex;
}
