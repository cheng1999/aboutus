var profilesdata=[
  { 
    index:0,
    name:"李国成",
    img:"rabbit.jpg",
    age:18,
    areas:["电脑","编程"],
    description:"想学专业的 学渣。",
    deeper:"<h1>hi</h1>",
    contacts:[
      {link:false,  msg:["电话","-"]},
      {link:false,  msg:["Wechat","detective1999"]},
      {link:true,   msg:["Facebook","https://www.facebook.com/detective1999"]},
      {link:true,   msg:["Email","mailto:detective1854@gmail.com"]},
      {link:true,   msg:["Github","https://github.com/cheng1999"]},
    ]
  },
  { 
    index:1,
    name:"许善旻",
    img:"cat.jpg",
    age:17,
    areas:["数学"],
    description:"正在寻找自我的学霸。",
    deeper:"大家好",
    contacts:[
      {link:true,   msg:["Facebook","https://www.facebook.com/iih.racso"]},
    ],
  },
  
  {
    index: 2,
    name: "吴宇航",
    img: "cat.jpg",
    age: 16,
    areas: ["电脑", "编程"],
    description: "学渣",
    deeper: "( ͡° ͜ʖ ͡°)",
    contacts: [
      { link: true, msg: ["电话", "-"] },
      { link: false, msg: ["Wechat", "jonathangoh333"] },
      { link: true, msg: ["Facebook", "https://www.facebook.com/hang333"] },
      { link: true, msg: ["Email", "mailto:jonathan.goh333@gmail.com"] },
      { link: true, msg: ["Github", "https://github.com/hang333"] },
     ],
  },
  { 
    index:0,
    name:"你的名字",
    img:"add.jpg",
    age:17,
    areas:["你的专业"],
    description:"想把你的名字挂在这里请联系我(第一个名片)",
    deeper:"大家好",
    contacts:[{}],
  },
];

var namecards = new Vue({
  el: '#namecards',
  data: {
    profiles:profilesdata
  },
  
});

var details = new Vue({
  el: '#details',
  data: {
    profile:profilesdata[0]
  }
});

$('.cards .dimmable').dimmer({
  on: 'hover'
});

function showdetails(index){
  details.$data.profile=profilesdata[index];
  $(".ui.modal").modal("show");
  window.location.hash="#"+index;
}

var hash=window.location.hash.slice(1);
if(hash){
  showdetails(hash); 
}

