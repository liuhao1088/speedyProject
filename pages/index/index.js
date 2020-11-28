// pages/wode/wode.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl:[
      'https://img14.360buyimg.com/ddimg/jfs/t1/130213/8/17180/165679/5fbdba09Ec6de8f8f/93f75ee31016cc5b.jpg',
      'https://img13.360buyimg.com/ddimg/jfs/t1/139969/5/16038/290231/5fc06645E788f72e3/84c76231b63d581b.jpg',
      'https://img14.360buyimg.com/ddimg/jfs/t1/143409/39/15708/126373/5fbdc072Ee4b95bda/f554445ecfcd7075.jpg',
    ],
    urlList:[
      'https://img13.360buyimg.com/ddimg/jfs/t1/149292/11/16059/239034/5fc06671Ee068b6ae/a75579574db52e58.png',
      'https://img11.360buyimg.com/ddimg/jfs/t1/141398/40/15882/318090/5fc06663E4d04d335/b4a774e0ce71f612.png',
     
    ]
  },

  toProduct(event){
    let id = event.currentTarget.id;
    if(id === '0'){
      wx.navigateTo({
        url: '/pages/streamMedia/streamMedia',
      })
    }else{
      wx.navigateTo({
        url: '/pages/hidden/hidden',
      })
    }
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
    wx.showShareMenu({

      withShareTicket:true,
      
      menus:['shareAppMessage','shareTimeline']
      
      })
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