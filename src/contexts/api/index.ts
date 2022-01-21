const storeKey = process.env.REACT_APP_STORE_FRONT_KEY;
const url = process.env.REACT_APP_STORE_GRAPHQL_API + "";
const headers = {
  "Content-type": "application/json",
  "X-Shopify-Storefront-Access-Token": `${storeKey}`,
};

export const getProducts = (query: string) => {
  return fetch(url, {
    headers,
    method: "POST",
    body: JSON.stringify({
      query: ` ${query}`,
    }),
  });
};

export const cartCreation = (query: string, variables: any) => {
  return fetch(url, {
    headers,
    method: "POST",
    body: JSON.stringify({
      query: query,
      variables: variables,
    }),
  });
};

export const getCart = (query: string, variables: any) => {
  return fetch(url, {
    headers,
    method: "POST",
    body: JSON.stringify({
      query: query,
      variables: variables,
    }),
  });
};

export const cartAddLine = (query: string, variables: any) => {
  return fetch(url, {
    headers,
    method: "POST",
    body: JSON.stringify({
      query: query,
      variables: variables,
    }),
  });
};

export const cartRemoveLine = (query: string, variables: any) => {
  return fetch(url, {
    headers,
    method: "POST",
    body: JSON.stringify({
      query: query,
      variables: variables,
    }),
  });
};
