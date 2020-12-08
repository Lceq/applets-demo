const {request} = require('../utils/bsurl.js');
module.exports ={
  search:(data) =>{ return request('/search/suggest',data)},//搜索
  tabsList: [
    {type:1,name:"单曲",relist:[],klass:'songs', offset:0, limit:20},
    {type:100,name:"歌手", relist:[],klass:'artis', offset:0,limit:20},
    {type:10,name:"专辑", relist:[],klass:'album',offset:0, limit:20},
    { type:1000, name:"歌单",relist:[],klass:'playlist', offset:0, limit:20},
    {type:1004,name:"MV",relist:[],klass:'mv',offset:0,limit:20},
    {type:1009,name:"主播电台",relist:[],klass:'dj',offset:0,limit:20},
    {type:1002,name:"用户",relist:[],klass:'user',offset:0,limit:20}
  ]

}