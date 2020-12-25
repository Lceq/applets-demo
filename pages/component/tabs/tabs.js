Component({
  properties:{
    tabsList: {    // 菜单列表
      type: Array,
      value: [],
    },
    tabIndex: {
      type: Number,
      value:0
    },
  },
  data: {
    userInfo:[
        {nickName:'username',avatarUrl:'userImg.jpg'}
    ],
    nickName:'nickName'
  },
  methods:{
    clickTabItem(e){
      this.triggerEvent('clickTabItem', e.currentTarget.dataset.t);
    }
  }
})