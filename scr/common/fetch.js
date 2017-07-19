import fetchJsonp from 'fetch-jsonp';
require('es6-promise').polyfill();

// 获取电影列表
export function fetch_movie(REQUEST_PATH) {

  const result = fetchJsonp(REQUEST_PATH, {
    timeout: 5000,
  });

  return result.then(response=> {
    return response.json();
  }).catch(err=>
    console.log('parsing failed', err)
  );
}

// 获取电影详情
export function fetch_movieDetail(REQUEST_PATH) {

  const result = fetchJsonp(REQUEST_PATH, {
    timeout: 5000,
  });

  return result.then(response=> {
    return response.json();
  }).catch(err=>
    console.log('parsing failed', err)
  );
}


// 获取新闻热点
export function fetch_spot(opt) {
  return fetch(`http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=${opt.type}&count=${opt.count}`,
    {method: 'GET'})
    .then(response=> {
      return response.json();
    })
}
