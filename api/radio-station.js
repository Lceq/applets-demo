const {request} = require('../utils/bsurl.js');
module.exports =  {
  djBanner : (data) => { return request('dj/banner',data) },// 电台banner
  djCatelist : (data) => { return request('dj/catelist',data) },// 电台分类
  programRecommend : (data) => { return request('program/recommend',data) },//推荐节目
  djRecommend : (data) => { return request('dj/recommend',data) }, //精选电台
  djHot : (data) => { return request('dj/hot',data) }, //热门电台 /dj/hot
  djPersonalizeRecommend : (data) => { return request('dj/personalize/recommend',data) }, //热门电台 /dj/hot
}