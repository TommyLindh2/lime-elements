System.register(["./core-e7aed7d8.system.js"],(function(t){"use strict";var e,r;return{setters:[function(t){e=t.r;r=t.h}],execute:function(){var s=t("limel_example_chart_custom_colors",function(){function t(t){e(this,t);this.labels=["A","B"];this.datasets=[{label:"Using hex-values",data:[5,3],backgroundColor:"#ff0000",borderColor:"#ff0000"},{label:"Semi-transparent background, solid border",data:[5,3],backgroundColor:"rgba(0, 0, 255, 0.2)",borderColor:"rgba(0, 0, 255, 1)"},{label:"No color set ",data:[5,3]},{label:"No color set",data:[5,3]}];this.type="bar";this.options={scales:{yAxes:[{ticks:{beginAtZero:true}}]}}}t.prototype.render=function(){return r("limel-chart",{type:this.type,labels:this.labels,datasets:this.datasets,options:this.options})};return t}())}}}));