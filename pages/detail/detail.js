// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    postId: "",//记录跳转时带过来的商品id
    detail: {},//判断获取到的商品信息放到这个里面

    //连接数据库之后要通过商品id获取商品信息并赋值，目前只是本地，所以用本地数据代替模拟。
    details: [
      {
        "detailName": "氨糖",
        "detailId": "00001",
        "price": 100,
        "specification": "10g/盒",
        "stock": 60,//库存
        "imagepath": "../../images/detail_img/00001.jpg",
        "city": "美国",
        "describe": "氨糖就是药",
      }, {
        "detailName": "古楼手串",
        "detailId": "00002",
        "price": 3000,
        "specification": "30g/串",
        "stock": 90,//库存
        "imagepath": "../../images/detail_img/00002.jpg",
        "city":"德国",
        "describe": "就是个手串",
      }, {
        "detailName": "蜜蜡手串",
        "detailId": "00003",
        "price": 2500,
        "specification": "35g/串",
        "stock": 10,//库存
        "imagepath": "../../images/detail_img/00003.jpg",
        "city": "中国",
        "describe": "嗯。。。蜜蜡手串",
      },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //options:页面跳转带来的参数
    var that = this;//setdata函数直接用this操作会报错，所以新建变量使用
    that.data.postId = options.postid;//带过来的商品id参数
    var id = that.data.postId;//不知道为什么this.data.postId不能进行if判断，所以暂且先用另一个变量
    //console.log(this.data.postId);
    let list = that.data.details;//let:快级变量，出去括号即失效，var:全局变量，出去括号依然可用
    list.forEach(function (arr) {
      //console.log(arr);
      if (id == arr.detailId) {
        that.setData({
          detail: arr,//此处有问题，detail得到的数据跟arr的不一样，回去看下是什么情况
        });
      }
    })
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