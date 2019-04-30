import axios from 'axios'

export default function ajax (url, data = {}, type = 'Get') {
  // 通过两层promise 让axios返回的数据直接是就是response.data
  // 返回值： promise对象 (异步返回的数据是response.data 而不是原来的response了)
  // 一层的时候： const response = await ajax() const result = response.data
  // 现在两层： const result = await ajax()
  return new Promise(function (resolve, reject) {
    let promise
    if (type === 'Get') {
      let dataStr = ''
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      promise = axios.get(url)
    } else {
      promise = axios.post(url, data)
    }
    promise.then(function (response) {
      resolve(response.data)
    }).catch(function (error) {
      reject(error)
    })
  })
}
