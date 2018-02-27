// pages/main/main.js
var app = getApp();//获取全局js:app.js中的函数、变量
Page({
  /**
   * 页面的初始数据，也就是变量，之前在前台写的变量都需要在这里定义
   */
  data: {
    indicatorDots:"true",
    autoplay:"true",
    interval:"3000",
    duration:"500",
    swiper_imagesUrl : [//顶部轮播图片
      {
        "img": [
          {
            url: "http://img.laozongyi.com/portal/201512/25/114519w3k7kpsu7zu6sq9d.jpg",
            id:
            "1",
          },
          {
            url: "http://img.laozongyi.com/portal/201512/25/114519w3k7kpsu7zu6sq9d.jpg",
            id:
            "2",
          },
          {
            url: "http://img.laozongyi.com/portal/201512/25/114519w3k7kpsu7zu6sq9d.jpg",
            id:
            "3",
          }
        ]
      }
      ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  onSwiperTap_JumpDetail:function(event) {
    // target是当前触发事件的组件，也就是点击的img标签
    //console.log(event.target.dataset.data-post-id);
    //不知道为什么，在前台给的参数名是data-post-id，后台获取却变成了postId
    var post = event.target.dataset
    //console.log(event.target.dataset.postId);
    wx.navigateTo({
      url: "../detail/detail?postid=" + post.postId,//url跳转地址
      success: function (res) {
        //console.log(res)
      },
      fail: function (res) {
        console.log(res)
      }
    })
  },
})