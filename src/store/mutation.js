import Vue from 'vue'
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RECEIVE_USER_LOGOUT,
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_INFO,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEAR_CART,
  RECEIVE_SEARCH_SHOPS
} from './mutation-types'
export default {
  [RECEIVE_ADDRESS] (state, {address}) {
    state.address = address
  },
  [RECEIVE_CATEGORYS] (state, {categorys}) {
    state.categorys = categorys
  },
  [RECEIVE_SHOPS] (state, {shops}) {
    state.shops = shops
  },
  [RECEIVE_USER_INFO] (state, {userinfo}) {
    state.userinfo = userinfo
  },
  [RECEIVE_USER_LOGOUT] (state) {
    state.userinfo = {}
  },
  [RECEIVE_GOODS] (state, {goods}) {
    state.goods = goods
  },
  [RECEIVE_RATINGS] (state, {ratings}) {
    state.ratings = ratings
  },
  [RECEIVE_INFO] (state, {info}) {
    state.info = info
  },
  // 以往是操作state里面的数据 现在要操作food
  [INCREMENT_FOOD_COUNT] (state, {food}) {
  // food里面没有count属性
  // food.count = 1 food.count++ 这种写法是新增属性 但是没有数据绑定效果 因此不能知道数据变化了
  // 新增数据要是已经有数据绑定的数据
  // 对象、属性名、属性值
    if (!food.count) {
      Vue.set(food, 'count', 1) // 让新增的数据也有数据绑定
      // 将food添加到cartFoods中
      state.cartFoods.push(food)
    } else {
      food.count++
    }
  },
  [DECREMENT_FOOD_COUNT] (state, {food}) {
    if (food.count) {
      food.count--
      if (food.count === 0) {
        state.cartFoods.splice(state.cartFoods.indexOf(food), 1)
      }
    }
  },
  [CLEAR_CART] (state) {
    // 清除food.count 有的是没有count的
    state.cartFoods.forEach((food) => {
      food.count = 0
    })
    // 移除购物车所有购物项
    state.cartFoods = [] // 这样做购物车中的列表是没了 但是food.count还在
  },
  [RECEIVE_SEARCH_SHOPS] (state, {searchShops}) {
    state.searchShops = searchShops
  }
}
