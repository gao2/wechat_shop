// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    postId : "",//记录跳转时带过来的商品id
    detail:{},//判断获取到的商品信息放到这个里面

    //连接数据库之后要通过商品id获取商品信息并赋值，目前只是本地，所以用本地数据代替模拟。
    details: [
      {
        "detailName": "洗衣粉",
        "detailId": "00001",
        "price": 100,
        "specification": "10kg/箱",
        "stock": 60,//库存
        "imagepath": "../images/image.png",
        "describe": "这是商品简单描述",
      }, {
        "detailName": "洗衣机",
        "detailId": "00002",
        "price": 3000,
        "specification": "60kg/台",
        "stock": 90,//库存
        "imagepath": "../images/image.png",
        "describe": "这是洗衣机商品简单描述",
      }, {
        "detailName": "ak47",
        "detailId": "00003",
        "price": 2500,
        "specification": "6kg/把",
        "stock":10,//库存
        "imagepath": "../images/image.png",
        "describe": "这是ak47商品简单描述",
      },
      ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //options:页面跳转带来的参数
    this.data.postId = options.postid;//带过来的商品id参数
    var id = this.data.postId;//不知道为什么this.data.postId不能进行if判断，所以暂且先用另一个变量
    //console.log(this.data.postId);
    let list = this.data.details;//let:快级变量，出去括号即失效，var:全局变量，出去括号依然可用
    list.forEach(function(arr){
      console.log(arr);
      if (id == arr.detailId) {
          this.setData({
            detail: arr//此处有问题，detail得到的数据跟arr的不一样，回去看下是什么情况
          })
          console.log(detail);
      }
    })
    console.log(this.data.detail);
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
  
  }
})