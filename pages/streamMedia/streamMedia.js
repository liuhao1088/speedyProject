// pages/streamMedia/streamMedia.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item:{
      url:'https://img12.360buyimg.com/ddimg/jfs/t1/153877/32/7567/172566/5fc1be18E34ff889a/504b550f18453fdb.jpg',
      urlList:[
        'https://img11.360buyimg.com/ddimg/jfs/t1/152619/25/7219/97129/5fbdc467E8bdd5ac9/9a068b92f597ba4c.jpg',
        'https://img13.360buyimg.com/ddimg/jfs/t1/122743/35/19975/116645/5fbdc474E4a6244c8/497bb26d6616e886.jpg',
        'https://img10.360buyimg.com/ddimg/jfs/t1/142166/30/15840/88625/5fbdc47fEc9963dc1/762361cfea2f6a45.jpg',
        'https://img12.360buyimg.com/ddimg/jfs/t1/151429/29/8072/84800/5fbdc48bE314bd3c8/111257316c79baf6.jpg',
        'https://img14.360buyimg.com/ddimg/jfs/t1/147513/10/15622/80726/5fbdc495Ec446a588/14761e107887cafc.jpg',
        'https://img11.360buyimg.com/ddimg/jfs/t1/149610/19/15793/73663/5fbdc4a5Eb3987c57/faa93c558af587d3.jpg',
        'https://img12.360buyimg.com/ddimg/jfs/t1/141018/40/15485/83722/5fbdc4b0Eabe2c9a0/11d601a203b94b15.jpg',
        'https://img10.360buyimg.com/ddimg/jfs/t1/127540/33/19698/72855/5fbdc4bbEc6db8da6/8490013710d3e9c8.jpg',
        'https://img12.360buyimg.com/ddimg/jfs/t1/137747/7/15515/62180/5fbdc4c5E4df8fcbf/04484666357f9863.jpg',
      ]
    },
    
  },
  toProduct(event){
    let id = event.currentTarget.id;
    if(id === '0'){
      wx.navigateTo({
        url: '/pages/gOneNineMax/gOneNineMax',
      })
    }else if(id === '1'){
      wx.navigateTo({
        url: '/pages/gThreePro/gThreePro',
      })
    }else if(id === '2'){
      wx.navigateTo({
        url: '/pages/gOneEightMax/gOneEightMax',
      })
    }else if(id === '3'){
      wx.navigateTo({
        url: '/pages/yEightPlus/yEightPlus',
      })
    }else if(id === '4'){
      wx.navigateTo({
        url: '/pages/sFives/sFives',
      })
    }else if(id === '5'){
      wx.navigateTo({
        url: '/pages/gSixs/gSixs',
      })
    }else if(id === '6'){
      wx.navigateTo({
        url: '/pages/gOneThreeMax/gOneThreeMax',
      })
    }else if(id === '7'){
      wx.navigateTo({
        url: '/pages/cTwoPro/cTwoPro',
      })
    }else{
      wx.navigateTo({
        url: '/pages/cFivess/cFivess',
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