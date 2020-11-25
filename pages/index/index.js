// pages/wode/wode.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl:[
      'https://img14.360buyimg.com/ddimg/jfs/t1/130213/8/17180/165679/5fbdba09Ec6de8f8f/93f75ee31016cc5b.jpg',
      'https://img10.360buyimg.com/ddimg/jfs/t1/125491/25/19915/126626/5fbdc061E4b5fef33/0616c71d64d3b99c.jpg',
      'https://img14.360buyimg.com/ddimg/jfs/t1/143409/39/15708/126373/5fbdc072Ee4b95bda/f554445ecfcd7075.jpg',
    ],
    urlList:[
      'https://img13.360buyimg.com/ddimg/jfs/t1/121089/24/19832/86925/5fbdbae1Ec37ee7b9/0af4ab5dd58cba11.jpg',
      'https://img14.360buyimg.com/ddimg/jfs/t1/154353/30/7030/66124/5fbdbb01Eead6257f/8db3a85f358f0ddf.jpg',
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