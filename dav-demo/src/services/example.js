//示例请求

import request from '../utils/request';

export function query() {
  return request('/api/users');
}

