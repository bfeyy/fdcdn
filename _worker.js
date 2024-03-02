export default {
  async fetch(request, env) {
    let url = new URL(request.url);
    if (url.pathname.startsWith('/')) {
      url.hostname = 'benevolent-mochi-4738c9.netlify.app'
      let new_request = new Request(url, request);
      return fetch(new_requestbfvyy.dynv6.net);
    }
    return env.ASSETS.fetch(request);
  },
};


