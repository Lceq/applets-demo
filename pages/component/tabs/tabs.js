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
    width:{
      type: String,
      value: '100%'
    }
  },
  data: {
    userInfo:[
        {nickName:'username',avatarUrl:'userImg.jpg'}
    ]
  },
  methods:{
    clickTabItem(e){
      this.triggerEvent('clickTabItem', e.currentTarget.dataset.t);
    }
  }
})