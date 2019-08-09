import Mock from 'mockjs'
import data from './data.json'
Mock.mock( '/shop/goods', {code: 0,data: data.goods} )
Mock.mock( '/shop/ratings', {code: 0,data: data.ratings} )
Mock.mock( '/shop/info', {code: 0,data: data.info} )