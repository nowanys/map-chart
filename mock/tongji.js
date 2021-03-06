import { points } from '../src/util/baoan-map'
import { mapData } from './task'
import Mock from 'mockjs'

const count = 10
let List = null
const departNameArr = ['马可波罗', '程咬金', '狄仁杰', '甄姬', '鲁班七号', '亚瑟', '安琪拉', '典韦', '钟无艳', '司马懿']
const departData = []

List = Mock.mock({
  total: ['@natural(49, 89)', '@natural(49, 89)', '@natural(49, 89)', '@natural(49, 89)', '@natural(49, 89)', '@natural(49, 89)', '@natural(49, 89)'],
  theEnd: ['@natural(49, 99)', '@natural(49, 99)', '@natural(49, 99)', '@natural(49, 99)', '@natural(49, 99)', '@natural(49, 99)', '@natural(49, 99)'],
  untreat: ['@natural(3, 19)', '@natural(3, 19)', '@natural(3, 19)', '@natural(3, 19)', '@natural(3, 19)', '@natural(3, 19)', '@natural(3, 19)'],
  audit: ['@natural(5, 39)', '@natural(5, 39)', '@natural(5, 39)', '@natural(5, 39)', '@natural(5, 39)', '@natural(5, 39)', '@natural(5, 39)'],
  untreating: ['@natural(29, 59)', '@natural(29, 59)', '@natural(29, 59)', '@natural(29, 59)', '@natural(29, 59)', '@natural(29, 59)', '@natural(29, 59)']
})

for(let i = 0; i < count; i++) {
  departData.push(Mock.mock({
    id: '@increment',
    departName: departNameArr[i],
    // rate: '@float(0, 30, 2, 2)',
    number: '@natural(0, 199)',
    percentage: '@natural(39, 79)'
  }))
}

let allNumber = 0
departData.forEach(item => {
  allNumber += item.number
})
departData.forEach(item => {
  item.rate = (item.number * 100 / allNumber).toFixed(2) + '%'
})

export default [{
  url: '/mobile/getTongji',
  type: 'get',
  response: config => {
    let areaXData = []
    points.forEach(item => {
      areaXData.push(item.name)
    })
    let data = {
      date: ['10-01', '10-02', '10-03', '10-04', '10-05', '10-06', '10-07'],
      total: List.total,
      theEnd: List.theEnd,
      untreat: List.untreat,
      audit: List.audit,
      untreating: List.untreating,
      areaXData,
      areaYData: mapData,
      catelogData: [
        {
          name: '数学',
          number: 120,
          children: [{
            name: '高数',
            number: 60
          }, {
            name: '线性代数',
            number: 60
          }]
        },
        {
          name: '语文',
          number: 100
        },
        {
          name: '英语',
          number: 88,
          children: [{
            name: '四级',
            number: 50
          }, {
            name: '六级',
            number: 111
          }]
        },
        {
          name: '化学',
          number: 77
        },
        {
          name: '物理',
          number: 110
        },
        {
          name: '生物',
          number: 100
        }
      ],
      departData
    }
    return {
      code: 0,
      data
    }
  }
}]
