System.register(["./core-e7aed7d8.system.js"],(function(e){"use strict";var t,s;return{setters:[function(e){t=e.r;s=e.h}],execute:function(){var i=e("limel_example_chart_line",function(){function e(e){t(this,e);this.labels=["January","February","March","April","May","June"];this.datasets=[{data:[65,59,80,81,56,55],fill:false}];this.type="line";this.options={legend:{display:false},elements:{line:{tension:0}},scales:{yAxes:[{ticks:{beginAtZero:true}}]}}}e.prototype.render=function(){return s("limel-chart",{type:this.type,labels:this.labels,datasets:this.datasets,options:this.options})};return e}())}}}));