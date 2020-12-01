// pages/wode/wode.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl:[
      'https://img14.360buyimg.com/ddimg/jfs/t1/130213/8/17180/165679/5fbdba09Ec6de8f8f/93f75ee31016cc5b.jpg',
      'https://img12.360buyimg.com/ddimg/jfs/t1/135228/16/17936/129578/5fc59e42E0836f306/c52cce76ef8bb817.jpg',
      'https://img13.360buyimg.com/ddimg/jfs/t1/139969/5/16038/290231/5fc06645E788f72e3/84c76231b63d581b.jpg',
      'https://img11.360buyimg.com/ddimg/jfs/t1/153419/32/7825/132329/5fc44d30E77052f32/0ddf7cbef34cc7c2.jpg',
    ],
    urlList:[
      'https://img13.360buyimg.com/ddimg/jfs/t1/136931/11/17480/245211/5fc1be48Ed4cf9af5/659ce151d856bbbd.png',
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