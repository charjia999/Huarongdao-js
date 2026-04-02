const LEVELS = [
  // 第1关，标准开局，横刀立马
  [
    { id:"zf", name:"张飞", shape:[[1],[1]], x:0, y:0, img:"./images/zhangfei.jpg", rot: 0 },
    { id:"zy", name:"赵云", shape:[[1],[1]], x:3, y:0, img:"./images/zhaoyun.jpg", rot: 0 },
    { id:"mc", name:"马超", shape:[[1],[1]], x:0, y:2, img:"./images/machao.jpg", rot: 0 },
    { id:"hz", name:"黄忠", shape:[[1],[1]], x:3, y:2, img:"./images/huangzhong.jpg", rot: 0 },
    { id:"gy", name:"关羽", shape:[[1,1]], x:1, y:2, img:"./images/guanyu.jpg", rot: 0 },
    { id:"cc", name:"曹操", shape:[[1,1],[1,1]], x:1, y:0, img:"./images/caocao.jpg", rot: 0 },
    { id:"b1", name:"兵", shape:[[1]], x:1, y:3, img:"./images/bing6.jpg", rot: 0 },
    { id:"b2", name:"兵", shape:[[1]], x:2, y:3, img:"./images/bing7.jpg", rot: 0 },
    { id:"b3", name:"兵", shape:[[1]], x:0, y:4, img:"./images/bing8.jpg", rot: 0 },
    { id:"b4", name:"兵", shape:[[1]], x:3, y:4, img:"./images/bing9.jpg", rot: 0 }
  ],

  // 第2关，指挥若定
  [
    { id:"zf", name:"张飞", shape:[[1],[1]], x:0, y:0, img:"./images/zhangfei.jpg", rot: 0 },
    { id:"zy", name:"赵云", shape:[[1],[1]], x:3, y:0, img:"./images/zhaoyun.jpg", rot: 0 },
    { id:"mc", name:"马超", shape:[[1],[1]], x:0, y:3, img:"./images/machao.jpg", rot: 0 },
    { id:"hz", name:"黄忠", shape:[[1],[1]], x:3, y:3, img:"./images/huangzhong.jpg", rot: 0 },
    { id:"gy", name:"关羽", shape:[[1,1]], x:1, y:2, img:"./images/guanyu.jpg", rot: 0 },
    { id:"cc", name:"曹操", shape:[[1,1],[1,1]], x:1, y:0, img:"./images/caocao.jpg", rot: 0 },
    { id:"b1", name:"兵", shape:[[1]], x:1, y:3, img:"./images/bing6.jpg", rot: 0 },
    { id:"b2", name:"兵", shape:[[1]], x:2, y:3, img:"./images/bing7.jpg", rot: 0 },
    { id:"b3", name:"兵", shape:[[1]], x:0, y:2, img:"./images/bing8.jpg", rot: 0 },
    { id:"b4", name:"兵", shape:[[1]], x:3, y:2, img:"./images/bing9.jpg", rot: 0 }
  ],

  // 第3关，将拥曹营
  [
    { id:"zf", name:"张飞", shape:[[1],[1]], x:0, y:1, img:"./images/zhangfei.jpg", rot: 0 },
    { id:"zy", name:"赵云", shape:[[1],[1]], x:3, y:1, img:"./images/zhaoyun.jpg", rot: 0 },
    { id:"mc", name:"马超", shape:[[1],[1]], x:1, y:2, img:"./images/machao.jpg", rot: 0 },
    { id:"hz", name:"黄忠", shape:[[1],[1]], x:2, y:2, img:"./images/huangzhong.jpg", rot: 0 },
    { id:"gy", name:"关羽", shape:[[1,1]], x:0, y:4, img:"./images/guanyu.jpg", rot: 0 },
    { id:"cc", name:"曹操", shape:[[1,1],[1,1]], x:1, y:0, img:"./images/caocao.jpg", rot: 0 },
    { id:"b1", name:"兵", shape:[[1]], x:0, y:3, img:"./images/bing6.jpg", rot: 0 },
    { id:"b2", name:"兵", shape:[[1]], x:3, y:3, img:"./images/bing7.jpg", rot: 0 },
    { id:"b3", name:"兵", shape:[[1]], x:2, y:4, img:"./images/bing8.jpg", rot: 0 },
    { id:"b4", name:"兵", shape:[[1]], x:3, y:4, img:"./images/bing9.jpg", rot: 0 }
  ],

  // 第4关，齐头并进
  [
    { id:"zf", name:"张飞", shape:[[1],[1]], x:0, y:0, img:"./images/zhangfei.jpg", rot: 0 },
    { id:"zy", name:"赵云", shape:[[1],[1]], x:3, y:0, img:"./images/zhaoyun.jpg", rot: 0 },
    { id:"mc", name:"马超", shape:[[1],[1]], x:0, y:3, img:"./images/machao.jpg", rot: 0 },
    { id:"hz", name:"黄忠", shape:[[1],[1]], x:3, y:3, img:"./images/huangzhong.jpg", rot: 0 },
    { id:"gy", name:"关羽", shape:[[1,1]], x:1, y:3, img:"./images/guanyu.jpg", rot: 0 },
    { id:"cc", name:"曹操", shape:[[1,1],[1,1]], x:1, y:0, img:"./images/caocao.jpg", rot: 0 },
    { id:"b1", name:"兵", shape:[[1]], x:0, y:2, img:"./images/bing6.jpg", rot: 0 },
    { id:"b2", name:"兵", shape:[[1]], x:1, y:2, img:"./images/bing7.jpg", rot: 0 },
    { id:"b3", name:"兵", shape:[[1]], x:2, y:2, img:"./images/bing8.jpg", rot: 0 },
    { id:"b4", name:"兵", shape:[[1]], x:3, y:2, img:"./images/bing9.jpg", rot: 0 }
  ],

  // 第5关，兵分三路
  [
    { id:"zf", name:"张飞", shape:[[1],[1]], x:0, y:1, img:"./images/zhangfei.jpg", rot: 0 },
    { id:"zy", name:"赵云", shape:[[1],[1]], x:3, y:1, img:"./images/zhaoyun.jpg", rot: 0 },
    { id:"mc", name:"马超", shape:[[1],[1]], x:0, y:3, img:"./images/machao.jpg", rot: 0 },
    { id:"hz", name:"黄忠", shape:[[1],[1]], x:3, y:3, img:"./images/huangzhong.jpg", rot: 0 },
    { id:"gy", name:"关羽", shape:[[1,1]], x:1, y:2, img:"./images/guanyu.jpg", rot: 0 },
    { id:"cc", name:"曹操", shape:[[1,1],[1,1]], x:1, y:0, img:"./images/caocao.jpg", rot: 0 },
    { id:"b1", name:"兵", shape:[[1]], x:0, y:0, img:"./images/bing6.jpg", rot: 0 },
    { id:"b2", name:"兵", shape:[[1]], x:3, y:0, img:"./images/bing7.jpg", rot: 0 },
    { id:"b3", name:"兵", shape:[[1]], x:1, y:3, img:"./images/bing8.jpg", rot: 0 },
    { id:"b4", name:"兵", shape:[[1]], x:2, y:3, img:"./images/bing9.jpg", rot: 0 }
  ],

  // 第6关，雨声淅沥
  // TODO: 按照选关的图示，赵云起始位置应该在正中，也就是下面代码往右半个格的位置，目前不支持半个格子，但是这个初始位置会影响最终的步数
  [
    { id:"zf", name:"张飞", shape:[[1],[1]], x:0, y:0, img:"./images/zhangfei.jpg", rot: 0 },
    { id:"zy", name:"赵云", shape:[[1],[1]], x:1, y:3, img:"./images/zhaoyun.jpg", rot: 0 },
    { id:"mc", name:"马超", shape:[[1],[1]], x:0, y:2, img:"./images/machao.jpg", rot: 0 },
    { id:"hz", name:"黄忠", shape:[[1],[1]], x:3, y:2, img:"./images/huangzhong.jpg", rot: 0 },
    { id:"gy", name:"关羽", shape:[[1,1]], x:1, y:2, img:"./images/guanyu.jpg", rot: 0 },
    { id:"cc", name:"曹操", shape:[[1,1],[1,1]], x:1, y:0, img:"./images/caocao.jpg", rot: 0 },
    { id:"b1", name:"兵", shape:[[1]], x:3, y:0, img:"./images/bing6.jpg", rot: 0 },
    { id:"b2", name:"兵", shape:[[1]], x:3, y:1, img:"./images/bing7.jpg", rot: 0 },
    { id:"b3", name:"兵", shape:[[1]], x:0, y:4, img:"./images/bing8.jpg", rot: 0 },
    { id:"b4", name:"兵", shape:[[1]], x:3, y:4, img:"./images/bing9.jpg", rot: 0 }
  ],

  // 第7关，左右布兵
  [
    { id:"zf", name:"张飞", shape:[[1],[1]], x:0, y:2, img:"./images/zhangfei.jpg", rot: 0 },
    { id:"zy", name:"赵云", shape:[[1],[1]], x:1, y:2, img:"./images/zhaoyun.jpg", rot: 0 },
    { id:"mc", name:"马超", shape:[[1],[1]], x:2, y:2, img:"./images/machao.jpg", rot: 0 },
    { id:"hz", name:"黄忠", shape:[[1],[1]], x:3, y:2, img:"./images/huangzhong.jpg", rot: 0 },
    { id:"gy", name:"关羽", shape:[[1,1]], x:1, y:4, img:"./images/guanyu.jpg", rot: 0 },
    { id:"cc", name:"曹操", shape:[[1,1],[1,1]], x:1, y:0, img:"./images/caocao.jpg", rot: 0 },
    { id:"b1", name:"兵", shape:[[1]], x:0, y:0, img:"./images/bing6.jpg", rot: 0 },
    { id:"b2", name:"兵", shape:[[1]], x:3, y:0, img:"./images/bing7.jpg", rot: 0 },
    { id:"b3", name:"兵", shape:[[1]], x:0, y:1, img:"./images/bing8.jpg", rot: 0 },
    { id:"b4", name:"兵", shape:[[1]], x:3, y:1, img:"./images/bing9.jpg", rot: 0 }
  ],

  // 第8关，桃花园中
  [
    { id:"zf", name:"张飞", shape:[[1],[1]], x:0, y:1, img:"./images/zhangfei.jpg", rot: 0 },
    { id:"zy", name:"赵云", shape:[[1],[1]], x:3, y:1, img:"./images/zhaoyun.jpg", rot: 0 },
    { id:"mc", name:"马超", shape:[[1],[1]], x:1, y:2, img:"./images/machao.jpg", rot: 0 },
    { id:"hz", name:"黄忠", shape:[[1],[1]], x:2, y:2, img:"./images/huangzhong.jpg", rot: 0 },
    { id:"gy", name:"关羽", shape:[[1,1]], x:1, y:4, img:"./images/guanyu.jpg", rot: 0 },
    { id:"cc", name:"曹操", shape:[[1,1],[1,1]], x:1, y:0, img:"./images/caocao.jpg", rot: 0 },
    { id:"b1", name:"兵", shape:[[1]], x:0, y:0, img:"./images/bing6.jpg", rot: 0 },
    { id:"b2", name:"兵", shape:[[1]], x:3, y:0, img:"./images/bing7.jpg", rot: 0 },
    { id:"b3", name:"兵", shape:[[1]], x:0, y:3, img:"./images/bing8.jpg", rot: 0 },
    { id:"b4", name:"兵", shape:[[1]], x:3, y:3, img:"./images/bing9.jpg", rot: 0 }
  ],

  // 第9关，一路进军
  [
    { id:"zf", name:"张飞", shape:[[1],[1]], x:0, y:0, img:"./images/zhangfei.jpg", rot: 0 },
    { id:"zy", name:"赵云", shape:[[1],[1]], x:1, y:2, img:"./images/zhaoyun.jpg", rot: 0 },
    { id:"mc", name:"马超", shape:[[1],[1]], x:0, y:2, img:"./images/machao.jpg", rot: 0 },
    { id:"hz", name:"黄忠", shape:[[1],[1]], x:2, y:2, img:"./images/huangzhong.jpg", rot: 0 },
    { id:"gy", name:"关羽", shape:[[1,1]], x:1, y:4, img:"./images/guanyu.jpg", rot: 0 },
    { id:"cc", name:"曹操", shape:[[1,1],[1,1]], x:1, y:0, img:"./images/caocao.jpg", rot: 0 },
    { id:"b1", name:"兵", shape:[[1]], x:3, y:0, img:"./images/bing6.jpg", rot: 0 },
    { id:"b2", name:"兵", shape:[[1]], x:3, y:1, img:"./images/bing7.jpg", rot: 0 },
    { id:"b3", name:"兵", shape:[[1]], x:3, y:2, img:"./images/bing8.jpg", rot: 0 },
    { id:"b4", name:"兵", shape:[[1]], x:3, y:3, img:"./images/bing9.jpg", rot: 0 }
  ],

  // 第10关，一路顺风
  [
    { id:"zf", name:"张飞", shape:[[1],[1]], x:0, y:0, img:"./images/zhangfei.jpg", rot: 0 },
    { id:"zy", name:"赵云", shape:[[1],[1]], x:2, y:3, img:"./images/zhaoyun.jpg", rot: 0 },
    { id:"mc", name:"马超", shape:[[1],[1]], x:0, y:2, img:"./images/machao.jpg", rot: 0 },
    { id:"hz", name:"黄忠", shape:[[1],[1]], x:3, y:2, img:"./images/huangzhong.jpg", rot: 0 },
    { id:"gy", name:"关羽", shape:[[1,1]], x:1, y:2, img:"./images/guanyu.jpg", rot: 0 },
    { id:"cc", name:"曹操", shape:[[1,1],[1,1]], x:1, y:0, img:"./images/caocao.jpg", rot: 0 },
    { id:"b1", name:"兵", shape:[[1]], x:3, y:0, img:"./images/bing6.jpg", rot: 0 },
    { id:"b2", name:"兵", shape:[[1]], x:3, y:1, img:"./images/bing7.jpg", rot: 0 },
    { id:"b3", name:"兵", shape:[[1]], x:1, y:3, img:"./images/bing8.jpg", rot: 0 },
    { id:"b4", name:"兵", shape:[[1]], x:1, y:4, img:"./images/bing9.jpg", rot: 0 }
  ],

  // 第11关，围而不歼
  [
    { id:"zf", name:"张飞", shape:[[1],[1]], x:0, y:0, img:"./images/zhangfei.jpg", rot: 0 },
    { id:"zy", name:"赵云", shape:[[1],[1]], x:1, y:3, img:"./images/zhaoyun.jpg", rot: 0 },
    { id:"mc", name:"马超", shape:[[1],[1]], x:0, y:2, img:"./images/machao.jpg", rot: 0 },
    { id:"hz", name:"黄忠", shape:[[1],[1]], x:2, y:3, img:"./images/huangzhong.jpg", rot: 0 },
    { id:"gy", name:"关羽", shape:[[1,1]], x:1, y:2, img:"./images/guanyu.jpg", rot: 0 },
    { id:"cc", name:"曹操", shape:[[1,1],[1,1]], x:1, y:0, img:"./images/caocao.jpg", rot: 0 },
    { id:"b1", name:"兵", shape:[[1]], x:3, y:0, img:"./images/bing6.jpg", rot: 0 },
    { id:"b2", name:"兵", shape:[[1]], x:3, y:1, img:"./images/bing7.jpg", rot: 0 },
    { id:"b3", name:"兵", shape:[[1]], x:3, y:2, img:"./images/bing8.jpg", rot: 0 },
    { id:"b4", name:"兵", shape:[[1]], x:3, y:3, img:"./images/bing9.jpg", rot: 0 }
  ],

  // 第12关，捷足先登
  [
    { id:"zf", name:"张飞", shape:[[1],[1]], x:0, y:3, img:"./images/zhangfei.jpg", rot: 0 },
    { id:"zy", name:"赵云", shape:[[1],[1]], x:1, y:3, img:"./images/zhaoyun.jpg", rot: 0 },
    { id:"mc", name:"马超", shape:[[1],[1]], x:2, y:3, img:"./images/machao.jpg", rot: 0 },
    { id:"hz", name:"黄忠", shape:[[1],[1]], x:3, y:3, img:"./images/huangzhong.jpg", rot: 0 },
    { id:"gy", name:"关羽", shape:[[1,1]], x:1, y:2, img:"./images/guanyu.jpg", rot: 0 },
    { id:"cc", name:"曹操", shape:[[1,1],[1,1]], x:1, y:0, img:"./images/caocao.jpg", rot: 0 },
    { id:"b1", name:"兵", shape:[[1]], x:0, y:0, img:"./images/bing6.jpg", rot: 0 },
    { id:"b2", name:"兵", shape:[[1]], x:3, y:0, img:"./images/bing7.jpg", rot: 0 },
    { id:"b3", name:"兵", shape:[[1]], x:0, y:1, img:"./images/bing8.jpg", rot: 0 },
    { id:"b4", name:"兵", shape:[[1]], x:3, y:1, img:"./images/bing9.jpg", rot: 0 }
  ],

  // 第13关，插翅难飞
  [
    { id:"zf", name:"张飞", shape:[[1],[1]], x:0, y:0, img:"./images/zhangfei.jpg", rot: 0 },
    { id:"zy", name:"赵云", shape:[[1,1]], x:0, y:2, img:"./images/zhaoyun.jpg", rot: 270 },
    { id:"mc", name:"马超", shape:[[1],[1]], x:0, y:3, img:"./images/machao.jpg", rot: 0 },
    { id:"hz", name:"黄忠", shape:[[1],[1]], x:3, y:3, img:"./images/huangzhong.jpg", rot: 0 },
    { id:"gy", name:"关羽", shape:[[1,1]], x:1, y:3, img:"./images/guanyu.jpg", rot: 0 },
    { id:"cc", name:"曹操", shape:[[1,1],[1,1]], x:1, y:0, img:"./images/caocao.jpg", rot: 0 },
    { id:"b1", name:"兵", shape:[[1]], x:3, y:0, img:"./images/bing6.jpg", rot: 0 },
    { id:"b2", name:"兵", shape:[[1]], x:3, y:1, img:"./images/bing7.jpg", rot: 0 },
    { id:"b3", name:"兵", shape:[[1]], x:2, y:2, img:"./images/bing8.jpg", rot: 0 },
    { id:"b4", name:"兵", shape:[[1]], x:3, y:2, img:"./images/bing9.jpg", rot: 0 }
  ],

  // 第14关，插翅难飞2
  [
    { id:"zf", name:"张飞", shape:[[1],[1]], x:0, y:1, img:"./images/zhangfei.jpg", rot: 0 },
    { id:"zy", name:"赵云", shape:[[1],[1]], x:3, y:1, img:"./images/zhaoyun.jpg", rot: 0 },
    { id:"mc", name:"马超", shape:[[1,1]], x:1, y:0, img:"./images/machao.jpg", rot: 268 },  // 应该是270， 但是马超的原始图片是斜的，所以这里转了268度
    { id:"hz", name:"黄忠", shape:[[1,1]], x:2, y:4, img:"./images/huangzhong.jpg", rot: 268 },   // 应该是270， 但是黄忠的原始图片是斜的，所以这里转了268度
    { id:"gy", name:"关羽", shape:[[1,1]], x:0, y:4, img:"./images/guanyu.jpg", rot: 0 },
    { id:"cc", name:"曹操", shape:[[1,1],[1,1]], x:1, y:1, img:"./images/caocao.jpg", rot: 0 },
    { id:"b1", name:"兵", shape:[[1]], x:0, y:0, img:"./images/bing6.jpg", rot: 0 },
    { id:"b2", name:"兵", shape:[[1]], x:3, y:0, img:"./images/bing7.jpg", rot: 0 },
    { id:"b3", name:"兵", shape:[[1]], x:0, y:3, img:"./images/bing8.jpg", rot: 0 },
    { id:"b4", name:"兵", shape:[[1]], x:3, y:3, img:"./images/bing9.jpg", rot: 0 }
  ],

  // 第15关，守口如瓶1
  [
    { id:"zf", name:"张飞", shape:[[1],[1]], x:0, y:0, img:"./images/zhangfei.jpg", rot: 0 },
    { id:"zy", name:"赵云", shape:[[1],[1]], x:3, y:0, img:"./images/zhaoyun.jpg", rot: 0 },
    { id:"mc", name:"马超", shape:[[1],[1]], x:1, y:2, img:"./images/machao.jpg", rot: 0 },
    { id:"hz", name:"黄忠", shape:[[1,1]], x:2, y:4, img:"./images/huangzhong.jpg", rot: 268 },   // 应该是270， 但是黄忠的原始图片是斜的，所以这里转了268度
    { id:"gy", name:"关羽", shape:[[1,1]], x:0, y:4, img:"./images/guanyu.jpg", rot: 0 },
    { id:"cc", name:"曹操", shape:[[1,1],[1,1]], x:1, y:0, img:"./images/caocao.jpg", rot: 0 },
    { id:"b1", name:"兵", shape:[[1]], x:0, y:2, img:"./images/bing6.jpg", rot: 0 },
    { id:"b2", name:"兵", shape:[[1]], x:3, y:2, img:"./images/bing7.jpg", rot: 0 },
    { id:"b3", name:"兵", shape:[[1]], x:0, y:3, img:"./images/bing8.jpg", rot: 0 },
    { id:"b4", name:"兵", shape:[[1]], x:3, y:3, img:"./images/bing9.jpg", rot: 0 }
  ],

  // 第16关，守口如瓶2
  [
    { id:"zf", name:"张飞", shape:[[1],[1]], x:0, y:1, img:"./images/zhangfei.jpg", rot: 0 },
    { id:"zy", name:"赵云", shape:[[1],[1]], x:3, y:1, img:"./images/zhaoyun.jpg", rot: 0 },
    { id:"mc", name:"马超", shape:[[1],[1]], x:1, y:2, img:"./images/machao.jpg", rot: 0 },
    { id:"hz", name:"黄忠", shape:[[1,1]], x:2, y:4, img:"./images/huangzhong.jpg", rot: 268 },   // 应该是270， 但是黄忠的原始图片是斜的，所以这里转了268度
    { id:"gy", name:"关羽", shape:[[1,1]], x:0, y:4, img:"./images/guanyu.jpg", rot: 0 },
    { id:"cc", name:"曹操", shape:[[1,1],[1,1]], x:1, y:0, img:"./images/caocao.jpg", rot: 0 },
    { id:"b1", name:"兵", shape:[[1]], x:0, y:0, img:"./images/bing6.jpg", rot: 0 },
    { id:"b2", name:"兵", shape:[[1]], x:3, y:0, img:"./images/bing7.jpg", rot: 0 },
    { id:"b3", name:"兵", shape:[[1]], x:0, y:3, img:"./images/bing8.jpg", rot: 0 },
    { id:"b4", name:"兵", shape:[[1]], x:3, y:3, img:"./images/bing9.jpg", rot: 0 }
  ],

  // 第17关，双将挡路
  [
    { id:"zf", name:"张飞", shape:[[1],[1]], x:0, y:0, img:"./images/zhangfei.jpg", rot: 0 },
    { id:"zy", name:"赵云", shape:[[1,1]], x:1, y:2, img:"./images/zhaoyun.jpg", rot: 270 },
    { id:"mc", name:"马超", shape:[[1],[1]], x:0, y:2, img:"./images/machao.jpg", rot: 0 },
    { id:"hz", name:"黄忠", shape:[[1],[1]], x:3, y:2, img:"./images/huangzhong.jpg", rot: 0 },
    { id:"gy", name:"关羽", shape:[[1,1]], x:1, y:3, img:"./images/guanyu.jpg", rot: 0 },
    { id:"cc", name:"曹操", shape:[[1,1],[1,1]], x:1, y:0, img:"./images/caocao.jpg", rot: 0 },
    { id:"b1", name:"兵", shape:[[1]], x:3, y:0, img:"./images/bing6.jpg", rot: 0 },
    { id:"b2", name:"兵", shape:[[1]], x:3, y:1, img:"./images/bing7.jpg", rot: 0 },
    { id:"b3", name:"兵", shape:[[1]], x:0, y:4, img:"./images/bing8.jpg", rot: 0 },
    { id:"b4", name:"兵", shape:[[1]], x:3, y:4, img:"./images/bing9.jpg", rot: 0 }
  ],

  // 第18关，横马当关
  [
    { id:"zf", name:"张飞", shape:[[1],[1]], x:0, y:0, img:"./images/zhangfei.jpg", rot: 0 },
    { id:"zy", name:"赵云", shape:[[1],[1]], x:3, y:0, img:"./images/zhaoyun.jpg", rot: 0 },
    { id:"mc", name:"马超", shape:[[1],[1]], x:1, y:3, img:"./images/machao.jpg", rot: 0 },
    { id:"hz", name:"黄忠", shape:[[1,1]], x:2, y:2, img:"./images/huangzhong.jpg", rot: 268 },   // 应该是270， 但是黄忠的原始图片是斜的，所以这里转了268度
    { id:"gy", name:"关羽", shape:[[1,1]], x:0, y:2, img:"./images/guanyu.jpg", rot: 0 },
    { id:"cc", name:"曹操", shape:[[1,1],[1,1]], x:1, y:0, img:"./images/caocao.jpg", rot: 0 },
    { id:"b1", name:"兵", shape:[[1]], x:0, y:3, img:"./images/bing6.jpg", rot: 0 },
    { id:"b2", name:"兵", shape:[[1]], x:3, y:3, img:"./images/bing7.jpg", rot: 0 },
    { id:"b3", name:"兵", shape:[[1]], x:0, y:4, img:"./images/bing8.jpg", rot: 0 },
    { id:"b4", name:"兵", shape:[[1]], x:3, y:4, img:"./images/bing9.jpg", rot: 0 }
  ],

  // 第19关，层层设防
  [
    { id:"zf", name:"张飞", shape:[[1],[1]], x:0, y:0, img:"./images/zhangfei.jpg", rot: 0 },
    { id:"zy", name:"赵云", shape:[[1],[1]], x:3, y:0, img:"./images/zhaoyun.jpg", rot: 0 },
    { id:"mc", name:"马超", shape:[[1,1]], x:1, y:2, img:"./images/machao.jpg", rot: 268 },  // 应该是270， 但是马超的原始图片是斜的，所以这里转了268度
    { id:"hz", name:"黄忠", shape:[[1,1]], x:1, y:3, img:"./images/huangzhong.jpg", rot: 268 },   // 应该是270， 但是黄忠的原始图片是斜的，所以这里转了268度
    { id:"gy", name:"关羽", shape:[[1,1]], x:1, y:4, img:"./images/guanyu.jpg", rot: 0 },
    { id:"cc", name:"曹操", shape:[[1,1],[1,1]], x:1, y:0, img:"./images/caocao.jpg", rot: 0 },
    { id:"b1", name:"兵", shape:[[1]], x:0, y:2, img:"./images/bing6.jpg", rot: 0 },
    { id:"b2", name:"兵", shape:[[1]], x:3, y:2, img:"./images/bing7.jpg", rot: 0 },
    { id:"b3", name:"兵", shape:[[1]], x:0, y:3, img:"./images/bing8.jpg", rot: 0 },
    { id:"b4", name:"兵", shape:[[1]], x:3, y:3, img:"./images/bing9.jpg", rot: 0 }
  ],

  // 第20关，层层设防2
  [
    { id:"zf", name:"张飞", shape:[[1],[1]], x:0, y:1, img:"./images/zhangfei.jpg", rot: 0 },
    { id:"zy", name:"赵云", shape:[[1],[1]], x:3, y:1, img:"./images/zhaoyun.jpg", rot: 0 },
    { id:"mc", name:"马超", shape:[[1,1]], x:1, y:2, img:"./images/machao.jpg", rot: 268 },  // 应该是270， 但是马超的原始图片是斜的，所以这里转了268度
    { id:"hz", name:"黄忠", shape:[[1,1]], x:1, y:3, img:"./images/huangzhong.jpg", rot: 268 },   // 应该是270， 但是黄忠的原始图片是斜的，所以这里转了268度
    { id:"gy", name:"关羽", shape:[[1,1]], x:1, y:4, img:"./images/guanyu.jpg", rot: 0 },
    { id:"cc", name:"曹操", shape:[[1,1],[1,1]], x:1, y:0, img:"./images/caocao.jpg", rot: 0 },
    { id:"b1", name:"兵", shape:[[1]], x:0, y:0, img:"./images/bing6.jpg", rot: 0 },
    { id:"b2", name:"兵", shape:[[1]], x:3, y:0, img:"./images/bing7.jpg", rot: 0 },
    { id:"b3", name:"兵", shape:[[1]], x:0, y:3, img:"./images/bing8.jpg", rot: 0 },
    { id:"b4", name:"兵", shape:[[1]], x:3, y:3, img:"./images/bing9.jpg", rot: 0 }
  ],

  // 第21关，兵挡将阻
  [
    { id:"zf", name:"张飞", shape:[[1],[1]], x:0, y:2, img:"./images/zhangfei.jpg", rot: 0 },
    { id:"zy", name:"赵云", shape:[[1],[1]], x:3, y:0, img:"./images/zhaoyun.jpg", rot: 0 },
    { id:"mc", name:"马超", shape:[[1,1]], x:1, y:2, img:"./images/machao.jpg", rot: 268 },  // 应该是270， 但是马超的原始图片是斜的，所以这里转了268度
    { id:"hz", name:"黄忠", shape:[[1,1]], x:1, y:3, img:"./images/huangzhong.jpg", rot: 268 },   // 应该是270， 但是黄忠的原始图片是斜的，所以这里转了268度
    { id:"gy", name:"关羽", shape:[[1,1]], x:1, y:4, img:"./images/guanyu.jpg", rot: 0 },
    { id:"cc", name:"曹操", shape:[[1,1],[1,1]], x:1, y:0, img:"./images/caocao.jpg", rot: 0 },
    { id:"b1", name:"兵", shape:[[1]], x:0, y:0, img:"./images/bing6.jpg", rot: 0 },
    { id:"b2", name:"兵", shape:[[1]], x:0, y:1, img:"./images/bing7.jpg", rot: 0 },
    { id:"b3", name:"兵", shape:[[1]], x:3, y:2, img:"./images/bing8.jpg", rot: 0 },
    { id:"b4", name:"兵", shape:[[1]], x:3, y:3, img:"./images/bing9.jpg", rot: 0 }
  ],

  // 第22关，堵塞要道
  [
    { id:"zf", name:"张飞", shape:[[1],[1]], x:0, y:2, img:"./images/zhangfei.jpg", rot: 0 },
    { id:"zy", name:"赵云", shape:[[1],[1]], x:1, y:2, img:"./images/zhaoyun.jpg", rot: 0 },
    { id:"mc", name:"马超", shape:[[1,1]], x:2, y:2, img:"./images/machao.jpg", rot: 268 },  // 应该是270， 但是马超的原始图片是斜的，所以这里转了268度
    { id:"hz", name:"黄忠", shape:[[1,1]], x:2, y:3, img:"./images/huangzhong.jpg", rot: 268 },   // 应该是270， 但是黄忠的原始图片是斜的，所以这里转了268度
    { id:"gy", name:"关羽", shape:[[1,1]], x:1, y:4, img:"./images/guanyu.jpg", rot: 0 },
    { id:"cc", name:"曹操", shape:[[1,1],[1,1]], x:1, y:0, img:"./images/caocao.jpg", rot: 0 },
    { id:"b1", name:"兵", shape:[[1]], x:0, y:0, img:"./images/bing6.jpg", rot: 0 },
    { id:"b2", name:"兵", shape:[[1]], x:3, y:0, img:"./images/bing7.jpg", rot: 0 },
    { id:"b3", name:"兵", shape:[[1]], x:0, y:1, img:"./images/bing8.jpg", rot: 0 },
    { id:"b4", name:"兵", shape:[[1]], x:3, y:1, img:"./images/bing9.jpg", rot: 0 }
  ],

  // 第23关，瓮中之鳖
  [
    { id:"zf", name:"张飞", shape:[[1],[1]], x:0, y:0, img:"./images/zhangfei.jpg", rot: 0 },
    { id:"zy", name:"赵云", shape:[[1],[1]], x:3, y:0, img:"./images/zhaoyun.jpg", rot: 0 },
    { id:"mc", name:"马超", shape:[[1,1]], x:0, y:2, img:"./images/machao.jpg", rot: 268 },  // 应该是270， 但是马超的原始图片是斜的，所以这里转了268度
    { id:"hz", name:"黄忠", shape:[[1,1]], x:2, y:2, img:"./images/huangzhong.jpg", rot: 268 },   // 应该是270， 但是黄忠的原始图片是斜的，所以这里转了268度
    { id:"gy", name:"关羽", shape:[[1,1]], x:1, y:4, img:"./images/guanyu.jpg", rot: 0 },
    { id:"cc", name:"曹操", shape:[[1,1],[1,1]], x:1, y:0, img:"./images/caocao.jpg", rot: 0 },
    { id:"b1", name:"兵", shape:[[1]], x:0, y:3, img:"./images/bing6.jpg", rot: 0 },
    { id:"b2", name:"兵", shape:[[1]], x:3, y:3, img:"./images/bing7.jpg", rot: 0 },
    { id:"b3", name:"兵", shape:[[1]], x:0, y:4, img:"./images/bing8.jpg", rot: 0 },
    { id:"b4", name:"兵", shape:[[1]], x:3, y:4, img:"./images/bing9.jpg", rot: 0 }
  ],

  // 第24关，层峦叠嶂
  [
    { id:"zf", name:"张飞", shape:[[1],[1]], x:0, y:0, img:"./images/zhangfei.jpg", rot: 0 },
    { id:"zy", name:"赵云", shape:[[1],[1]], x:3, y:0, img:"./images/zhaoyun.jpg", rot: 0 },
    { id:"mc", name:"马超", shape:[[1,1]], x:0, y:3, img:"./images/machao.jpg", rot: 268 },  // 应该是270， 但是马超的原始图片是斜的，所以这里转了268度
    { id:"hz", name:"黄忠", shape:[[1,1]], x:2, y:3, img:"./images/huangzhong.jpg", rot: 268 },   // 应该是270， 但是黄忠的原始图片是斜的，所以这里转了268度
    { id:"gy", name:"关羽", shape:[[1,1]], x:1, y:2, img:"./images/guanyu.jpg", rot: 0 },
    { id:"cc", name:"曹操", shape:[[1,1],[1,1]], x:1, y:0, img:"./images/caocao.jpg", rot: 0 },
    { id:"b1", name:"兵", shape:[[1]], x:0, y:2, img:"./images/bing6.jpg", rot: 0 },
    { id:"b2", name:"兵", shape:[[1]], x:3, y:2, img:"./images/bing7.jpg", rot: 0 },
    { id:"b3", name:"兵", shape:[[1]], x:0, y:4, img:"./images/bing8.jpg", rot: 0 },
    { id:"b4", name:"兵", shape:[[1]], x:3, y:4, img:"./images/bing9.jpg", rot: 0 }
  ],

  // 第25关，水泄不通
  [
    { id:"zf", name:"张飞", shape:[[1],[1]], x:0, y:0, img:"./images/zhangfei.jpg", rot: 0 },
    { id:"zy", name:"赵云", shape:[[1,1]], x:0, y:2, img:"./images/zhaoyun.jpg", rot: 270 },
    { id:"mc", name:"马超", shape:[[1,1]], x:2, y:2, img:"./images/machao.jpg", rot: 268 },  // 应该是270， 但是马超的原始图片是斜的，所以这里转了268度
    { id:"hz", name:"黄忠", shape:[[1,1]], x:2, y:3, img:"./images/huangzhong.jpg", rot: 268 },   // 应该是270， 但是黄忠的原始图片是斜的，所以这里转了268度
    { id:"gy", name:"关羽", shape:[[1,1]], x:0, y:3, img:"./images/guanyu.jpg", rot: 0 },
    { id:"cc", name:"曹操", shape:[[1,1],[1,1]], x:1, y:0, img:"./images/caocao.jpg", rot: 0 },
    { id:"b1", name:"兵", shape:[[1]], x:3, y:0, img:"./images/bing6.jpg", rot: 0 },
    { id:"b2", name:"兵", shape:[[1]], x:3, y:1, img:"./images/bing7.jpg", rot: 0 },
    { id:"b3", name:"兵", shape:[[1]], x:0, y:4, img:"./images/bing8.jpg", rot: 0 },
    { id:"b4", name:"兵", shape:[[1]], x:3, y:4, img:"./images/bing9.jpg", rot: 0 }
  ],

  // 第26关，四路进兵
  [
    { id:"zf", name:"张飞", shape:[[1],[1]], x:0, y:2, img:"./images/zhangfei.jpg", rot: 0 },
    { id:"zy", name:"赵云", shape:[[1,1]], x:2, y:2, img:"./images/zhaoyun.jpg", rot: 270 },
    { id:"mc", name:"马超", shape:[[1,1]], x:2, y:3, img:"./images/machao.jpg", rot: 268 },  // 应该是270， 但是马超的原始图片是斜的，所以这里转了268度
    { id:"hz", name:"黄忠", shape:[[1,1]], x:2, y:4, img:"./images/huangzhong.jpg", rot: 268 },   // 应该是270， 但是黄忠的原始图片是斜的，所以这里转了268度
    { id:"gy", name:"关羽", shape:[[1,1]], x:0, y:4, img:"./images/guanyu.jpg", rot: 0 },
    { id:"cc", name:"曹操", shape:[[1,1],[1,1]], x:1, y:0, img:"./images/caocao.jpg", rot: 0 },
    { id:"b1", name:"兵", shape:[[1]], x:0, y:0, img:"./images/bing6.jpg", rot: 0 },
    { id:"b2", name:"兵", shape:[[1]], x:3, y:0, img:"./images/bing7.jpg", rot: 0 },
    { id:"b3", name:"兵", shape:[[1]], x:0, y:1, img:"./images/bing8.jpg", rot: 0 },
    { id:"b4", name:"兵", shape:[[1]], x:3, y:1, img:"./images/bing9.jpg", rot: 0 }
  ],

  // 第27关，四路进兵2
  [
    { id:"zf", name:"张飞", shape:[[1],[1]], x:0, y:0, img:"./images/zhangfei.jpg", rot: 0 },
    { id:"zy", name:"赵云", shape:[[1,1]], x:0, y:3, img:"./images/zhaoyun.jpg", rot: 270 },
    { id:"mc", name:"马超", shape:[[1,1]], x:2, y:3, img:"./images/machao.jpg", rot: 268 },  // 应该是270， 但是马超的原始图片是斜的，所以这里转了268度
    { id:"hz", name:"黄忠", shape:[[1,1]], x:2, y:4, img:"./images/huangzhong.jpg", rot: 268 },   // 应该是270， 但是黄忠的原始图片是斜的，所以这里转了268度
    { id:"gy", name:"关羽", shape:[[1,1]], x:0, y:4, img:"./images/guanyu.jpg", rot: 0 },
    { id:"cc", name:"曹操", shape:[[1,1],[1,1]], x:1, y:0, img:"./images/caocao.jpg", rot: 0 },
    { id:"b1", name:"兵", shape:[[1]], x:0, y:2, img:"./images/bing6.jpg", rot: 0 },
    { id:"b2", name:"兵", shape:[[1]], x:1, y:2, img:"./images/bing7.jpg", rot: 0 },
    { id:"b3", name:"兵", shape:[[1]], x:2, y:2, img:"./images/bing8.jpg", rot: 0 },
    { id:"b4", name:"兵", shape:[[1]], x:3, y:2, img:"./images/bing9.jpg", rot: 0 }
  ],

  // 第28关，入地无门
  [
    { id:"zf", name:"张飞", shape:[[1],[1]], x:0, y:0, img:"./images/zhangfei.jpg", rot: 0 },
    { id:"zy", name:"赵云", shape:[[1,1]], x:1, y:2, img:"./images/zhaoyun.jpg", rot: 270 },
    { id:"mc", name:"马超", shape:[[1,1]], x:0, y:3, img:"./images/machao.jpg", rot: 268 },  // 应该是270， 但是马超的原始图片是斜的，所以这里转了268度
    { id:"hz", name:"黄忠", shape:[[1,1]], x:2, y:3, img:"./images/huangzhong.jpg", rot: 268 },   // 应该是270， 但是黄忠的原始图片是斜的，所以这里转了268度
    { id:"gy", name:"关羽", shape:[[1,1]], x:1, y:4, img:"./images/guanyu.jpg", rot: 0 },
    { id:"cc", name:"曹操", shape:[[1,1],[1,1]], x:1, y:0, img:"./images/caocao.jpg", rot: 0 },
    { id:"b1", name:"兵", shape:[[1]], x:3, y:0, img:"./images/bing6.jpg", rot: 0 },
    { id:"b2", name:"兵", shape:[[1]], x:3, y:1, img:"./images/bing7.jpg", rot: 0 },
    { id:"b3", name:"兵", shape:[[1]], x:0, y:2, img:"./images/bing8.jpg", rot: 0 },
    { id:"b4", name:"兵", shape:[[1]], x:3, y:2, img:"./images/bing9.jpg", rot: 0 }
  ],

  // 第29关，勇闯五关
  [
    { id:"zf", name:"张飞", shape:[[1,1]], x:0, y:2, img:"./images/zhangfei.jpg", rot: 270 },
    { id:"zy", name:"赵云", shape:[[1,1]], x:2, y:2, img:"./images/zhaoyun.jpg", rot: 270 },
    { id:"mc", name:"马超", shape:[[1,1]], x:0, y:3, img:"./images/machao.jpg", rot: 268 },  // 应该是270， 但是马超的原始图片是斜的，所以这里转了268度
    { id:"hz", name:"黄忠", shape:[[1,1]], x:2, y:3, img:"./images/huangzhong.jpg", rot: 268 },   // 应该是270， 但是黄忠的原始图片是斜的，所以这里转了268度
    { id:"gy", name:"关羽", shape:[[1,1]], x:1, y:4, img:"./images/guanyu.jpg", rot: 0 },
    { id:"cc", name:"曹操", shape:[[1,1],[1,1]], x:1, y:0, img:"./images/caocao.jpg", rot: 0 },
    { id:"b1", name:"兵", shape:[[1]], x:0, y:0, img:"./images/bing6.jpg", rot: 0 },
    { id:"b2", name:"兵", shape:[[1]], x:3, y:0, img:"./images/bing7.jpg", rot: 0 },
    { id:"b3", name:"兵", shape:[[1]], x:0, y:1, img:"./images/bing8.jpg", rot: 0 },
    { id:"b4", name:"兵", shape:[[1]], x:3, y:1, img:"./images/bing9.jpg", rot: 0 }
  ],

  // 第30关，四面楚歌
  [
    { id:"zf", name:"张飞", shape:[[1],[1]], x:0, y:0, img:"./images/zhangfei.jpg", rot: 0 },
    { id:"zy", name:"赵云", shape:[[1],[1]], x:3, y:0, img:"./images/zhaoyun.jpg", rot: 0 },
    { id:"mc", name:"马超", shape:[[1],[1]], x:0, y:3, img:"./images/machao.jpg", rot: 0 },
    { id:"hz", name:"黄忠", shape:[[1],[1]], x:3, y:2, img:"./images/huangzhong.jpg", rot: 0 },
    { id:"gy", name:"关羽", shape:[[1,1]], x:1, y:3, img:"./images/guanyu.jpg", rot: 0 },
    { id:"cc", name:"曹操", shape:[[1,1],[1,1]], x:1, y:1, img:"./images/caocao.jpg", rot: 0 },
    { id:"b1", name:"兵", shape:[[1]], x:1, y:0, img:"./images/bing6.jpg", rot: 0 },
    { id:"b2", name:"兵", shape:[[1]], x:2, y:0, img:"./images/bing7.jpg", rot: 0 },
    { id:"b3", name:"兵", shape:[[1]], x:0, y:2, img:"./images/bing8.jpg", rot: 0 },
    { id:"b4", name:"兵", shape:[[1]], x:3, y:4, img:"./images/bing9.jpg", rot: 0 }
  ],

  // 第31关，前呼后拥
  [
    { id:"zf", name:"张飞", shape:[[1,1]], x:0, y:1, img:"./images/zhangfei.jpg", rot: 270 },
    { id:"zy", name:"赵云", shape:[[1,1]], x:0, y:2, img:"./images/zhaoyun.jpg", rot: 270 },
    { id:"mc", name:"马超", shape:[[1,1]], x:2, y:2, img:"./images/machao.jpg", rot: 268 },  // 应该是270， 但是马超的原始图片是斜的，所以这里转了268度
    { id:"hz", name:"黄忠", shape:[[1,1]], x:2, y:3, img:"./images/huangzhong.jpg", rot: 268 },   // 应该是270， 但是黄忠的原始图片是斜的，所以这里转了268度
    { id:"gy", name:"关羽", shape:[[1,1]], x:0, y:3, img:"./images/guanyu.jpg", rot: 0 },
    { id:"cc", name:"曹操", shape:[[1,1],[1,1]], x:2, y:0, img:"./images/caocao.jpg", rot: 0 },
    { id:"b1", name:"兵", shape:[[1]], x:0, y:0, img:"./images/bing6.jpg", rot: 0 },
    { id:"b2", name:"兵", shape:[[1]], x:1, y:0, img:"./images/bing7.jpg", rot: 0 },
    { id:"b3", name:"兵", shape:[[1]], x:2, y:4, img:"./images/bing8.jpg", rot: 0 },
    { id:"b4", name:"兵", shape:[[1]], x:3, y:4, img:"./images/bing9.jpg", rot: 0 }
  ],

  // 第32关，兵临曹营
  [
    { id:"zf", name:"张飞", shape:[[1],[1]], x:0, y:2, img:"./images/zhangfei.jpg", rot: 0 },
    { id:"zy", name:"赵云", shape:[[1],[1]], x:3, y:2, img:"./images/zhaoyun.jpg", rot: 0 },
    { id:"mc", name:"马超", shape:[[1],[1]], x:1, y:3, img:"./images/machao.jpg", rot: 0 },
    { id:"hz", name:"黄忠", shape:[[1],[1]], x:2, y:3, img:"./images/huangzhong.jpg", rot: 0 },
    { id:"gy", name:"关羽", shape:[[1,1]], x:1, y:2, img:"./images/guanyu.jpg", rot: 0 },
    { id:"cc", name:"曹操", shape:[[1,1],[1,1]], x:1, y:0, img:"./images/caocao.jpg", rot: 0 },
    { id:"b1", name:"兵", shape:[[1]], x:0, y:0, img:"./images/bing6.jpg", rot: 0 },
    { id:"b2", name:"兵", shape:[[1]], x:3, y:0, img:"./images/bing7.jpg", rot: 0 },
    { id:"b3", name:"兵", shape:[[1]], x:0, y:1, img:"./images/bing8.jpg", rot: 0 },
    { id:"b4", name:"兵", shape:[[1]], x:3, y:1, img:"./images/bing9.jpg", rot: 0 }
  ],

  // 第33关，五将逼宫
  [
    { id:"zf", name:"张飞", shape:[[1],[1]], x:0, y:1, img:"./images/zhangfei.jpg", rot: 0 },
    { id:"zy", name:"赵云", shape:[[1],[1]], x:3, y:1, img:"./images/zhaoyun.jpg", rot: 0 },
    { id:"mc", name:"马超", shape:[[1,1]], x:0, y:0, img:"./images/machao.jpg", rot: 268 },  // 应该是270， 但是马超的原始图片是斜的，所以这里转了268度
    { id:"hz", name:"黄忠", shape:[[1,1]], x:2, y:0, img:"./images/huangzhong.jpg", rot: 268 },   // 应该是270， 但是黄忠的原始图片是斜的，所以这里转了268度
    { id:"gy", name:"关羽", shape:[[1,1]], x:1, y:3, img:"./images/guanyu.jpg", rot: 0 },
    { id:"cc", name:"曹操", shape:[[1,1],[1,1]], x:1, y:1, img:"./images/caocao.jpg", rot: 0 },
    { id:"b1", name:"兵", shape:[[1]], x:0, y:3, img:"./images/bing6.jpg", rot: 0 },
    { id:"b2", name:"兵", shape:[[1]], x:3, y:3, img:"./images/bing7.jpg", rot: 0 },
    { id:"b3", name:"兵", shape:[[1]], x:0, y:4, img:"./images/bing8.jpg", rot: 0 },
    { id:"b4", name:"兵", shape:[[1]], x:3, y:4, img:"./images/bing9.jpg", rot: 0 }
  ],

  // 第34关，云遮雾障
  [
    { id:"zf", name:"张飞", shape:[[1],[1]], x:0, y:0, img:"./images/zhangfei.jpg", rot: 0 },
    { id:"zy", name:"赵云", shape:[[1],[1]], x:3, y:0, img:"./images/zhaoyun.jpg", rot: 0 },
    { id:"mc", name:"马超", shape:[[1],[1]], x:0, y:2, img:"./images/machao.jpg", rot: 0 },
    { id:"hz", name:"黄忠", shape:[[1,1]], x:1, y:2, img:"./images/huangzhong.jpg", rot: 268 },   // 应该是270， 但是黄忠的原始图片是斜的，所以这里转了268度
    { id:"gy", name:"关羽", shape:[[1,1]], x:1, y:3, img:"./images/guanyu.jpg", rot: 0 },
    { id:"cc", name:"曹操", shape:[[1,1],[1,1]], x:1, y:0, img:"./images/caocao.jpg", rot: 0 },
    { id:"b1", name:"兵", shape:[[1]], x:3, y:2, img:"./images/bing6.jpg", rot: 0 },
    { id:"b2", name:"兵", shape:[[1]], x:3, y:3, img:"./images/bing7.jpg", rot: 0 },
    { id:"b3", name:"兵", shape:[[1]], x:0, y:4, img:"./images/bing8.jpg", rot: 0 },
    { id:"b4", name:"兵", shape:[[1]], x:3, y:4, img:"./images/bing9.jpg", rot: 0 }
  ],

  // 第35关，三军联防
  [
    { id:"zf", name:"张飞", shape:[[1],[1]], x:2, y:0, img:"./images/zhangfei.jpg", rot: 0 },
    { id:"zy", name:"赵云", shape:[[1],[1]], x:3, y:0, img:"./images/zhaoyun.jpg", rot: 0 },
    { id:"mc", name:"马超", shape:[[1,1]], x:0, y:2, img:"./images/machao.jpg", rot: 268 },  // 应该是270， 但是马超的原始图片是斜的，所以这里转了268度
    { id:"hz", name:"黄忠", shape:[[1,1]], x:2, y:2, img:"./images/huangzhong.jpg", rot: 268 },   // 应该是270， 但是黄忠的原始图片是斜的，所以这里转了268度
    { id:"gy", name:"关羽", shape:[[1,1]], x:1, y:3, img:"./images/guanyu.jpg", rot: 0 },
    { id:"cc", name:"曹操", shape:[[1,1],[1,1]], x:0, y:0, img:"./images/caocao.jpg", rot: 0 },
    { id:"b1", name:"兵", shape:[[1]], x:0, y:3, img:"./images/bing6.jpg", rot: 0 },
    { id:"b2", name:"兵", shape:[[1]], x:3, y:3, img:"./images/bing7.jpg", rot: 0 },
    { id:"b3", name:"兵", shape:[[1]], x:0, y:4, img:"./images/bing8.jpg", rot: 0 },
    { id:"b4", name:"兵", shape:[[1]], x:3, y:4, img:"./images/bing9.jpg", rot: 0 }
  ],

  // 第36关，前挡后阻
  [
    { id:"zf", name:"张飞", shape:[[1],[1]], x:0, y:2, img:"./images/zhangfei.jpg", rot: 0 },
    { id:"zy", name:"赵云", shape:[[1],[1]], x:1, y:2, img:"./images/zhaoyun.jpg", rot: 0 },
    { id:"mc", name:"马超", shape:[[1],[1]], x:2, y:1, img:"./images/machao.jpg", rot: 0 },
    { id:"hz", name:"黄忠", shape:[[1,1]], x:2, y:0, img:"./images/huangzhong.jpg", rot: 268 },   // 应该是270， 但是黄忠的原始图片是斜的，所以这里转了268度
    { id:"gy", name:"关羽", shape:[[1,1]], x:1, y:4, img:"./images/guanyu.jpg", rot: 0 },
    { id:"cc", name:"曹操", shape:[[1,1],[1,1]], x:0, y:0, img:"./images/caocao.jpg", rot: 0 },
    { id:"b1", name:"兵", shape:[[1]], x:3, y:1, img:"./images/bing6.jpg", rot: 0 },
    { id:"b2", name:"兵", shape:[[1]], x:3, y:2, img:"./images/bing7.jpg", rot: 0 },
    { id:"b3", name:"兵", shape:[[1]], x:2, y:3, img:"./images/bing8.jpg", rot: 0 },
    { id:"b4", name:"兵", shape:[[1]], x:3, y:3, img:"./images/bing9.jpg", rot: 0 }
  ],

  // 第37关，近在咫尺
  [
    { id:"zf", name:"张飞", shape:[[1],[1]], x:1, y:0, img:"./images/zhangfei.jpg", rot: 0 },
    { id:"zy", name:"赵云", shape:[[1],[1]], x:2, y:0, img:"./images/zhaoyun.jpg", rot: 0 },
    { id:"mc", name:"马超", shape:[[1],[1]], x:3, y:0, img:"./images/machao.jpg", rot: 0 },
    { id:"hz", name:"黄忠", shape:[[1,1]], x:0, y:2, img:"./images/huangzhong.jpg", rot: 268 },   // 应该是270， 但是黄忠的原始图片是斜的，所以这里转了268度
    { id:"gy", name:"关羽", shape:[[1,1]], x:0, y:3, img:"./images/guanyu.jpg", rot: 0 },
    { id:"cc", name:"曹操", shape:[[1,1],[1,1]], x:2, y:3, img:"./images/caocao.jpg", rot: 0 },
    { id:"b1", name:"兵", shape:[[1]], x:0, y:0, img:"./images/bing6.jpg", rot: 0 },
    { id:"b2", name:"兵", shape:[[1]], x:0, y:1, img:"./images/bing7.jpg", rot: 0 },
    { id:"b3", name:"兵", shape:[[1]], x:2, y:2, img:"./images/bing8.jpg", rot: 0 },
    { id:"b4", name:"兵", shape:[[1]], x:3, y:2, img:"./images/bing9.jpg", rot: 0 }
  ],

  // 第38关，走投无路
  [
    { id:"zf", name:"张飞", shape:[[1],[1]], x:0, y:0, img:"./images/zhangfei.jpg", rot: 0 },
    { id:"zy", name:"赵云", shape:[[1],[1]], x:3, y:0, img:"./images/zhaoyun.jpg", rot: 0 },
    { id:"mc", name:"马超", shape:[[1],[1]], x:0, y:2, img:"./images/machao.jpg", rot: 0 },
    { id:"hz", name:"黄忠", shape:[[1],[1]], x:3, y:2, img:"./images/huangzhong.jpg", rot: 0 },
    { id:"gy", name:"关羽", shape:[[1],[1]], x:1, y:2, img:"./images/guanyu.jpg", rot: 90 },
    { id:"cc", name:"曹操", shape:[[1,1],[1,1]], x:1, y:0, img:"./images/caocao.jpg", rot: 0 },
    { id:"b1", name:"兵", shape:[[1]], x:2, y:2, img:"./images/bing6.jpg", rot: 0 },
    { id:"b2", name:"兵", shape:[[1]], x:2, y:3, img:"./images/bing7.jpg", rot: 0 },
    { id:"b3", name:"兵", shape:[[1]], x:0, y:4, img:"./images/bing8.jpg", rot: 0 },
    { id:"b4", name:"兵", shape:[[1]], x:3, y:4, img:"./images/bing9.jpg", rot: 0 }
  ],

  // 第39关，小燕出巢
  [
    { id:"zf", name:"张飞", shape:[[1],[1]], x:0, y:0, img:"./images/zhangfei.jpg", rot: 0 },
    { id:"zy", name:"赵云", shape:[[1],[1]], x:3, y:0, img:"./images/zhaoyun.jpg", rot: 0 },
    { id:"mc", name:"马超", shape:[[1,1]], x:0, y:2, img:"./images/machao.jpg", rot: 268 },  // 应该是270， 但是马超的原始图片是斜的，所以这里转了268度
    { id:"hz", name:"黄忠", shape:[[1,1]], x:2, y:2, img:"./images/huangzhong.jpg", rot: 268 },   // 应该是270， 但是黄忠的原始图片是斜的，所以这里转了268度
    { id:"gy", name:"关羽", shape:[[1,1]], x:1, y:3, img:"./images/guanyu.jpg", rot: 0 },
    { id:"cc", name:"曹操", shape:[[1,1],[1,1]], x:1, y:0, img:"./images/caocao.jpg", rot: 0 },
    { id:"b1", name:"兵", shape:[[1]], x:0, y:3, img:"./images/bing6.jpg", rot: 0 },
    { id:"b2", name:"兵", shape:[[1]], x:3, y:3, img:"./images/bing7.jpg", rot: 0 },
    { id:"b3", name:"兵", shape:[[1]], x:0, y:4, img:"./images/bing8.jpg", rot: 0 },
    { id:"b4", name:"兵", shape:[[1]], x:3, y:4, img:"./images/bing9.jpg", rot: 0 }
  ],

  // 第40关，比翼横空
  [
    { id:"zf", name:"张飞", shape:[[1],[1]], x:3, y:3, img:"./images/zhangfei.jpg", rot: 0 },
    { id:"zy", name:"赵云", shape:[[1,1]], x:0, y:0, img:"./images/zhaoyun.jpg", rot: 270 },
    { id:"mc", name:"马超", shape:[[1,1]], x:0, y:1, img:"./images/machao.jpg", rot: 268 },  // 应该是270， 但是马超的原始图片是斜的，所以这里转了268度
    { id:"hz", name:"黄忠", shape:[[1,1]], x:0, y:2, img:"./images/huangzhong.jpg", rot: 268 },   // 应该是270， 但是黄忠的原始图片是斜的，所以这里转了268度
    { id:"gy", name:"关羽", shape:[[1,1]], x:2, y:2, img:"./images/guanyu.jpg", rot: 0 },
    { id:"cc", name:"曹操", shape:[[1,1],[1,1]], x:2, y:0, img:"./images/caocao.jpg", rot: 0 },
    { id:"b1", name:"兵", shape:[[1]], x:0, y:3, img:"./images/bing6.jpg", rot: 0 },
    { id:"b2", name:"兵", shape:[[1]], x:2, y:3, img:"./images/bing7.jpg", rot: 0 },
    { id:"b3", name:"兵", shape:[[1]], x:0, y:4, img:"./images/bing8.jpg", rot: 0 },
    { id:"b4", name:"兵", shape:[[1]], x:2, y:4, img:"./images/bing9.jpg", rot: 0 }
  ],

  // 第41关，夹道藏兵
  [
    { id:"zf", name:"张飞", shape:[[1],[1]], x:3, y:0, img:"./images/zhangfei.jpg", rot: 0 },
    { id:"zy", name:"赵云", shape:[[1,1]], x:0, y:2, img:"./images/zhaoyun.jpg", rot: 270 },
    { id:"mc", name:"马超", shape:[[1,1]], x:2, y:2, img:"./images/machao.jpg", rot: 268 },  // 应该是270， 但是马超的原始图片是斜的，所以这里转了268度
    { id:"hz", name:"黄忠", shape:[[1,1]], x:2, y:3, img:"./images/huangzhong.jpg", rot: 268 },   // 应该是270， 但是黄忠的原始图片是斜的，所以这里转了268度
    { id:"gy", name:"关羽", shape:[[1,1]], x:0, y:3, img:"./images/guanyu.jpg", rot: 0 },
    { id:"cc", name:"曹操", shape:[[1,1],[1,1]], x:0, y:0, img:"./images/caocao.jpg", rot: 0 },
    { id:"b1", name:"兵", shape:[[1]], x:2, y:0, img:"./images/bing6.jpg", rot: 0 },
    { id:"b2", name:"兵", shape:[[1]], x:2, y:1, img:"./images/bing7.jpg", rot: 0 },
    { id:"b3", name:"兵", shape:[[1]], x:0, y:4, img:"./images/bing8.jpg", rot: 0 },
    { id:"b4", name:"兵", shape:[[1]], x:3, y:4, img:"./images/bing9.jpg", rot: 0 }
  ],

  // 第42关，屯兵东路
  [
    { id:"zf", name:"张飞", shape:[[1],[1]], x:2, y:0, img:"./images/zhangfei.jpg", rot: 0 },
    { id:"zy", name:"赵云", shape:[[1],[1]], x:3, y:0, img:"./images/zhaoyun.jpg", rot: 0 },
    { id:"mc", name:"马超", shape:[[1],[1]], x:0, y:3, img:"./images/machao.jpg", rot: 0 },
    { id:"hz", name:"黄忠", shape:[[1],[1]], x:1, y:3, img:"./images/huangzhong.jpg", rot: 0 },
    { id:"gy", name:"关羽", shape:[[1,1]], x:0, y:2, img:"./images/guanyu.jpg", rot: 0 },
    { id:"cc", name:"曹操", shape:[[1,1],[1,1]], x:0, y:0, img:"./images/caocao.jpg", rot: 0 },
    { id:"b1", name:"兵", shape:[[1]], x:2, y:2, img:"./images/bing6.jpg", rot: 0 },
    { id:"b2", name:"兵", shape:[[1]], x:3, y:2, img:"./images/bing7.jpg", rot: 0 },
    { id:"b3", name:"兵", shape:[[1]], x:2, y:3, img:"./images/bing8.jpg", rot: 0 },
    { id:"b4", name:"兵", shape:[[1]], x:3, y:3, img:"./images/bing9.jpg", rot: 0 }
  ],

  // 第43关，四将连关
  [
    { id:"zf", name:"张飞", shape:[[1],[1]], x:0, y:2, img:"./images/zhangfei.jpg", rot: 0 },
    { id:"zy", name:"赵云", shape:[[1],[1]], x:1, y:2, img:"./images/zhaoyun.jpg", rot: 0 },
    { id:"mc", name:"马超", shape:[[1,1]], x:2, y:0, img:"./images/machao.jpg", rot: 268 },  // 应该是270， 但是马超的原始图片是斜的，所以这里转了268度
    { id:"hz", name:"黄忠", shape:[[1,1]], x:2, y:1, img:"./images/huangzhong.jpg", rot: 268 },   // 应该是270， 但是黄忠的原始图片是斜的，所以这里转了268度
    { id:"gy", name:"关羽", shape:[[1,1]], x:2, y:2, img:"./images/guanyu.jpg", rot: 0 },
    { id:"cc", name:"曹操", shape:[[1,1],[1,1]], x:0, y:0, img:"./images/caocao.jpg", rot: 0 },
    { id:"b1", name:"兵", shape:[[1]], x:2, y:3, img:"./images/bing6.jpg", rot: 0 },
    { id:"b2", name:"兵", shape:[[1]], x:3, y:3, img:"./images/bing7.jpg", rot: 0 },
    { id:"b3", name:"兵", shape:[[1]], x:0, y:4, img:"./images/bing8.jpg", rot: 0 },
    { id:"b4", name:"兵", shape:[[1]], x:3, y:4, img:"./images/bing9.jpg", rot: 0 }
  ],

  // 第44关，峰回路转
  [
    { id:"zf", name:"张飞", shape:[[1],[1]], x:2, y:1, img:"./images/zhangfei.jpg", rot: 0 },
    { id:"zy", name:"赵云", shape:[[1],[1]], x:3, y:0, img:"./images/zhaoyun.jpg", rot: 0 },
    { id:"mc", name:"马超", shape:[[1],[1]], x:3, y:2, img:"./images/machao.jpg", rot: 0 },
    { id:"hz", name:"黄忠", shape:[[1,1]], x:1, y:3, img:"./images/huangzhong.jpg", rot: 268 },   // 应该是270， 但是黄忠的原始图片是斜的，所以这里转了268度
    { id:"gy", name:"关羽", shape:[[1,1]], x:2, y:4, img:"./images/guanyu.jpg", rot: 0 },
    { id:"cc", name:"曹操", shape:[[1,1],[1,1]], x:0, y:1, img:"./images/caocao.jpg", rot: 0 },
    { id:"b1", name:"兵", shape:[[1]], x:0, y:0, img:"./images/bing6.jpg", rot: 0 },
    { id:"b2", name:"兵", shape:[[1]], x:1, y:0, img:"./images/bing7.jpg", rot: 0 },
    { id:"b3", name:"兵", shape:[[1]], x:2, y:0, img:"./images/bing8.jpg", rot: 0 },
    { id:"b4", name:"兵", shape:[[1]], x:1, y:4, img:"./images/bing9.jpg", rot: 0 }
  ],

  // 第45关，井底之蛙
  [
    { id:"zf", name:"张飞", shape:[[1],[1]], x:0, y:1, img:"./images/zhangfei.jpg", rot: 0 },
    { id:"zy", name:"赵云", shape:[[1],[1]], x:3, y:1, img:"./images/zhaoyun.jpg", rot: 0 },
    { id:"mc", name:"马超", shape:[[1,1]], x:1, y:0, img:"./images/machao.jpg", rot: 268 },  // 应该是270， 但是马超的原始图片是斜的，所以这里转了268度
    { id:"hz", name:"黄忠", shape:[[1,1]], x:1, y:3, img:"./images/huangzhong.jpg", rot: 268 },   // 应该是270， 但是黄忠的原始图片是斜的，所以这里转了268度
    { id:"gy", name:"关羽", shape:[[1,1]], x:1, y:4, img:"./images/guanyu.jpg", rot: 0 },
    { id:"cc", name:"曹操", shape:[[1,1],[1,1]], x:1, y:1, img:"./images/caocao.jpg", rot: 0 },
    { id:"b1", name:"兵", shape:[[1]], x:0, y:0, img:"./images/bing6.jpg", rot: 0 },
    { id:"b2", name:"兵", shape:[[1]], x:3, y:0, img:"./images/bing7.jpg", rot: 0 },
    { id:"b3", name:"兵", shape:[[1]], x:0, y:3, img:"./images/bing8.jpg", rot: 0 },
    { id:"b4", name:"兵", shape:[[1]], x:3, y:3, img:"./images/bing9.jpg", rot: 0 }
  ],

  // 第46关，似远实近
  [
    { id:"zf", name:"张飞", shape:[[1],[1]], x:0, y:3, img:"./images/zhangfei.jpg", rot: 0 },
    { id:"zy", name:"赵云", shape:[[1],[1]], x:1, y:3, img:"./images/zhaoyun.jpg", rot: 0 },
    { id:"mc", name:"马超", shape:[[1],[1]], x:3, y:3, img:"./images/machao.jpg", rot: 0 },
    { id:"hz", name:"黄忠", shape:[[1,1]], x:2, y:0, img:"./images/huangzhong.jpg", rot: 268 },   // 应该是270， 但是黄忠的原始图片是斜的，所以这里转了268度
    { id:"gy", name:"关羽", shape:[[1,1]], x:2, y:1, img:"./images/guanyu.jpg", rot: 0 },
    { id:"cc", name:"曹操", shape:[[1,1],[1,1]], x:0, y:0, img:"./images/caocao.jpg", rot: 0 },
    { id:"b1", name:"兵", shape:[[1]], x:2, y:2, img:"./images/bing6.jpg", rot: 0 },
    { id:"b2", name:"兵", shape:[[1]], x:3, y:2, img:"./images/bing7.jpg", rot: 0 },
    { id:"b3", name:"兵", shape:[[1]], x:2, y:3, img:"./images/bing8.jpg", rot: 0 },
    { id:"b4", name:"兵", shape:[[1]], x:2, y:4, img:"./images/bing9.jpg", rot: 0 }
  ],

  // 第47关，身先士卒
  [
    { id:"zf", name:"张飞", shape:[[1,1]], x:0, y:0, img:"./images/zhangfei.jpg", rot: 270 },
    { id:"zy", name:"赵云", shape:[[1,1]], x:0, y:1, img:"./images/zhaoyun.jpg", rot: 270 },
    { id:"mc", name:"马超", shape:[[1,1]], x:0, y:2, img:"./images/machao.jpg", rot: 268 },  // 应该是270， 但是马超的原始图片是斜的，所以这里转了268度
    { id:"hz", name:"黄忠", shape:[[1,1]], x:0, y:3, img:"./images/huangzhong.jpg", rot: 268 },   // 应该是270， 但是黄忠的原始图片是斜的，所以这里转了268度
    { id:"gy", name:"关羽", shape:[[1,1]], x:2, y:2, img:"./images/guanyu.jpg", rot: 0 },
    { id:"cc", name:"曹操", shape:[[1,1],[1,1]], x:2, y:0, img:"./images/caocao.jpg", rot: 0 },
    { id:"b1", name:"兵", shape:[[1]], x:2, y:3, img:"./images/bing6.jpg", rot: 0 },
    { id:"b2", name:"兵", shape:[[1]], x:3, y:3, img:"./images/bing7.jpg", rot: 0 },
    { id:"b3", name:"兵", shape:[[1]], x:0, y:4, img:"./images/bing8.jpg", rot: 0 },
    { id:"b4", name:"兵", shape:[[1]], x:1, y:4, img:"./images/bing9.jpg", rot: 0 }
  ],

  // 第48关，兵威将广
  [
    { id:"zf", name:"张飞", shape:[[1,1]], x:0, y:2, img:"./images/zhangfei.jpg", rot: 270 },
    { id:"zy", name:"赵云", shape:[[1,1]], x:2, y:2, img:"./images/zhaoyun.jpg", rot: 270 },
    { id:"mc", name:"马超", shape:[[1,1]], x:0, y:3, img:"./images/machao.jpg", rot: 268 },  // 应该是270， 但是马超的原始图片是斜的，所以这里转了268度
    { id:"hz", name:"黄忠", shape:[[1,1]], x:2, y:3, img:"./images/huangzhong.jpg", rot: 268 },   // 应该是270， 但是黄忠的原始图片是斜的，所以这里转了268度
    { id:"gy", name:"关羽", shape:[[1,1]], x:1, y:4, img:"./images/guanyu.jpg", rot: 0 },
    { id:"cc", name:"曹操", shape:[[1,1],[1,1]], x:0, y:0, img:"./images/caocao.jpg", rot: 0 },
    { id:"b1", name:"兵", shape:[[1]], x:2, y:0, img:"./images/bing6.jpg", rot: 0 },
    { id:"b2", name:"兵", shape:[[1]], x:3, y:0, img:"./images/bing7.jpg", rot: 0 },
    { id:"b3", name:"兵", shape:[[1]], x:2, y:1, img:"./images/bing8.jpg", rot: 0 },
    { id:"b4", name:"兵", shape:[[1]], x:3, y:1, img:"./images/bing9.jpg", rot: 0 }
  ],

];