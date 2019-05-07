// 使用mockjs提供的mock数据接口
import Mock from 'mockjs'
import data from './data.json'

Mock.mock('/goods', {code: 0, data: data.goods})
Mock.mock('/ratings', {code: 0, data: data.ratings})
Mock.mock('/info', {code: 0, data: data.info})
// 不需要向外暴露任何东西
