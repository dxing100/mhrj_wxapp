//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    imgUrls: [
      '/image/logo.png'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    iconArray:[
      {
        title:'全职工作',
        url:'/pages/components/dishes/dishes',      picture_url:'http://www.jiuyunda.net:90//system/home_page_icon_flags/pictures/57ae/efab/0653/4d58/dfbd/f75a/original/%E9%85%92%E5%BA%93_2x.png?1488186336'
      },
      {
        title:'兼职工作',
        url:'take',
        isSplot:true,        picture_url:'http://www.jiuyunda.net:90//system/home_page_icon_flags/pictures/57ae/efc5/0653/4d58/c7bd/f7f8/original/%E8%AE%A2%E5%8D%95_2x.png?1488186353'
      },
      {
        title:'二手房',
        url:'out',    picture_url:'http://www.jiuyunda.net:90//system/home_page_icon_flags/pictures/57ae/efe8/0653/4d58/c7bd/f7fe/original/%E9%85%92%E5%88%B8_2.png?1488192286'
      },
      {
        title:'出租房',
        url:'bill',    picture_url:'http://www.jiuyunda.net:90//system/home_page_icon_flags/pictures/57ae/f000/0653/4d58/dfbd/f760/original/%E4%BC%98%E6%83%A0%E5%88%B8_2.png?1488192298'
      },
      {
        title:'吃在孟河',
        url:'bill',
        isSplot:true, picture_url:'http://www.jiuyunda.net:90//system/home_page_icon_flags/pictures/57ae/f050/0653/4d58/dfbd/f765/original/%E6%94%B6%E8%97%8F_2x.png?1488186435'
      },
      {
        title:'乐在孟河',
        url:'bill',picture_url:'http://www.jiuyunda.net:90//system/home_page_icon_flags/pictures/57ae/f253/0653/4d58/dfbd/f785/original/%E6%8E%A8%E8%8D%90%E6%9C%89%E7%A4%BC_2.png?1488192255'
      }
    ]
  },
  onLoad: function () {
    console.log('onLoad')
  },
  pushControl() {
    wx.navigateTo({
      url: 'String',
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  }
    
})
