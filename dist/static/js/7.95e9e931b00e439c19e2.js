webpackJsonp([7],{"7aVY":function(a,e){},l4Nl:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={components:{Head:t("teIl").default},data:function(){return{username:"",password:"",isWorks:!1,num:"",value1:!0,value2:!1}},methods:{sub:function(){for(var a="",e=0;e<6;e++)a+=parseInt(10*Math.random());localStorage.setItem("a",a),this.$router.push("List")},chang:function(){for(var a="",e=0;e<4;e++)a+=parseInt(10*Math.random());this.num=a}},mounted:function(){for(var a="",e=0;e<4;e++)a+=parseInt(10*Math.random());this.num=a}},n={render:function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("div",[s("div",{staticClass:"box"},[s("Head",[s("router-link",{attrs:{slot:"left",to:"/List"},slot:"left"},[s("img",{attrs:{src:t("pvh7"),alt:""}})]),a._v(" "),s("span",{attrs:{slot:"center"},slot:"center"},[a._v("账号注册")])],1),a._v(" "),s("div",{staticClass:"con"},[s("div",{staticClass:"span"},[s("input",{directives:[{name:"model",rawName:"v-model",value:a.username,expression:"username"}],staticClass:"user",attrs:{type:"text",placeholder:"账号"},domProps:{value:a.username},on:{input:function(e){e.target.composing||(a.username=e.target.value)}}}),a._v(" "),s("input",{directives:[{name:"show",rawName:"v-show",value:!a.value2,expression:"!value2"},{name:"model",rawName:"v-model",value:a.password,expression:"password"}],staticClass:"pass",attrs:{type:"password",placeholder:"密码"},domProps:{value:a.password},on:{input:function(e){e.target.composing||(a.password=e.target.value)}}}),a._v(" "),s("input",{directives:[{name:"show",rawName:"v-show",value:a.value2,expression:"value2"},{name:"model",rawName:"v-model",value:a.password,expression:"password"}],staticClass:"pass",attrs:{type:"text",placeholder:"密码"},domProps:{value:a.password},on:{input:function(e){e.target.composing||(a.password=e.target.value)}}}),a._v(" "),s("input",{staticClass:"yan",attrs:{type:"text",placeholder:"验证码"}}),a._v(" "),s("span",[a._v(a._s(this.num))]),a._v(" "),s("span",[a._v("看不清")]),a._v(" "),s("span",{on:{click:a.chang}},[a._v("换一张")]),a._v(" "),s("el-switch",{staticClass:"an",attrs:{id:"an","active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:a.value2,callback:function(e){a.value2=e},expression:"value2"}})],1),a._v(" "),s("span",{staticClass:"wenxin"},[a._v("温馨提示：未注册过的账号，登陆时将自动注册")]),a._v(" "),s("span",{staticClass:"tishi"},[a._v("注册过的用户可凭账号账号密码登陆")]),a._v(" "),s("button",{on:{click:a.sub}},[a._v("注册")]),a._v(" "),s("p",[a._v("重置密码？")])])],1)])},staticRenderFns:[]};var r=t("VU/8")(s,n,!1,function(a){t("7aVY")},"data-v-209aff93",null);e.default=r.exports},pvh7:function(a,e){a.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAnCAIAAAB8ENSTAAACy0lEQVR42tWWXUgUURTHZ2addd0cV/eDogKhKKSgKIySiqAIJOgDtH2IHjQSfRB7KAiih32oIKigiDAsi94yhSwIYSuQHpZkXwqKMBOkjGRndl0G92ucnf55c6j9mJ2vHjoPy/3D3R93zj3nfw+989Ys9Q+CNs1lHXRTgE0vKtOClFds4rqd9INgoLGhCuspXuobFeKpvFUuTnr7mG/raieRIJ4aiv0QZUtchqauHvLuXeciMpVTuob5L4JkNQ8X9tcf2ewma0lWep8K777nircZ43bu4Lp3cWSNuzr/Iv5mOlNypwFua5M7dLBelVdezz/7kCq3WS+3pdF1/bAXySUx8Fa8PyFq7NfF3Rhg7x33Ox2/qTgmDqv9l8rcNZ6qwaDf42KIREKR1uJGMMb1upnBYGAV5yASV48CQBlU/EQtbg1L4/PX+1giUaQoVRRsRagW18FQN4/6mtdWE4l2QlMVNKthLi7oUmvDgQ01RCYz6FR+NrmoE1qWe26fp33LCrJOS0r3CD8Zk/RDS3NPbKvt21NH1nKeOjMqRL9lDUFLcPHtyMBy+VMXxxIvP6eNQitzh98vXBtP2sBFILPIryrvRMRHUdEYtdy99e6uO7m9VpWh8PzYp5QBqkb9Xv6jztC1Z5/HIzMZG7gFfZGTlZ4R4eNcziqXWurju21+mBmRYjZ/+gk/k9DVHRV8BzYGM4OlEckvyB2Pefxa5SJgZrA0GBuROC9OjbNb5SJgaQPtfswMRCLLyHVO0y31vkOYFjAzsMtPBmoDFaLh7gbeTcwMmBzUJw4Vjbq2gYvA5ID5QZUPo2J/pHQrGp5Lelq4jmZOlXAPeIgNXASmCMwSZK0sed6rIs8zw0WKMUtgoiASHt05FCswfpNzKmaJ/jbfppW/RsrwZDoUTsh/F7T5uZqrZvBaT3zN3hhPFtebeS5Bl2s8S1yN+N+4PwEmaEy5nZIriAAAAABJRU5ErkJggg=="}});
//# sourceMappingURL=7.95e9e931b00e439c19e2.js.map