export function request(endpoint, { body, ...customConfig } = {}) {
  const headers = { 'content-type': 'application/json' };
  const server = "http://127.0.0.1:3000";
  const config = {
    method: body ? 'POST' : 'GET',
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    }
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  return window
    .fetch(`${server}/api/${endpoint}`, config)
    .then(async (response) => {
      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        return Promise.reject(data);
      }
    });
}
