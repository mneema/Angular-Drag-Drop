/******/!function(e){function n(a){if(t[a])return t[a].exports;var i=t[a]={exports:{},id:a,loaded:!1};return e[a].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}// webpackBootstrap
/******/
var t={};return n.m=e,n.c=t,n.p="",n(0)}([function(e,n,t){"use strict";var a=t(1),i=t(2),o=t(3),r=t(4),s=t(5),l=t(6),c=t(7),u=t(8),d=t(9),m=t(10),p=t(11),v=t(12),f=t(13),g=t(14);angular.module("fogHorn",["ngAnimate","ngTouch","ngSanitize","ngMessages","ui.router","ngMaterial","toastr"]).constant("moment",moment).config(a.config).config(i.routerConfig).run(o.runBlock).service("expressionMgrSvc",c.ExpressionMgrService).controller("MainController",r.MainController).controller("StreamDlgController",l.StreamDlgController).controller("ManipulationDlgController",s.ManipulationDlgController).directive("fhNavbar",u.NavbarDirective).directive("fhExpr",d.ExpressionDirective).directive("draggable",m.DraggableDirective).directive("droppable",p.DroppableDirective).factory("streamFactory",function(){return new f.StreamFactory}).factory("manipulationFactory",function(){return new g.ManipulationFactory}).factory("expressionFactory",["streamFactory","manipulationFactory",function(e,n){return new v.ExpressionFactory(e,n)}])},function(e,n){"use strict";function t(e,n){"ngInject";e.debugEnabled(!0),n.allowHtml=!0,n.timeOut=3e3,n.positionClass="toast-top-right",n.preventDuplicates=!0,n.progressBar=!0}t.$inject=["$logProvider","toastrConfig"],Object.defineProperty(n,"__esModule",{value:!0}),n.config=t},function(e,n){"use strict";function t(e,n){"ngInject";e.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}),n.otherwise("/")}t.$inject=["$stateProvider","$urlRouterProvider"],Object.defineProperty(n,"__esModule",{value:!0}),n.routerConfig=t},function(e,n){"use strict";function t(e){"ngInject";e.debug("runBlock end")}t.$inject=["$log"],Object.defineProperty(n,"__esModule",{value:!0}),n.runBlock=t},function(e,n){"use strict";function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),i=function(){function e(n,a,i){"ngInject";t(this,e),this.expressions=[],this.droppable=[],this.classAnimation="",this.expressionMgrSvc=i,this.activate(),this.$mdDialog=a,n.$on("dropped",this.dropHandler.bind(this))}return e.$inject=["$scope","$mdDialog","expressionMgrSvc"],a(e,[{key:"keyPress",value:function(e,n){}},{key:"dropHandler",value:function(e,n){"stream"===n.source?this.openStreamDialog(n.target):"manipulation"===n.source&&(0==this.expressions[n.target].streams.length?this.openAlert():this.openManipulationDialog(n.target))}},{key:"openAlert",value:function(){this.$mdDialog.show(this.$mdDialog.alert().parent(angular.element(document.body)).clickOutsideToClose(!0).title("Alert").content("There are no streams added to expression.").ariaLabel("Alert Dialog Demo").ok("Got it!"))}},{key:"openStreamDialog",value:function(e){var n=this;this.$mdDialog.show({templateUrl:"app/dialogs/StreamDlg/streamDialog.tmpl.html",parent:angular.element(document.body),clickOutsideToClose:!0,fullscreen:!0}).then(function(t){n.addStreamToExpression(e,t.name,t.unit)},function(){})}},{key:"addStreamToExpression",value:function(e,n,t){this.expressionMgrSvc.addStreamToExpression(e,n,t)}},{key:"openManipulationDialog",value:function(e){var n=this;this.$mdDialog.show({templateUrl:"app/dialogs/ManipulationDlg/ManipulationDlg.tmpl.html",parent:angular.element(document.body),locals:{availableStreams:this.expressions[e].streams},controller:"ManipulationDlgController",controllerAs:"vm",clickOutsideToClose:!0,fullscreen:!0}).then(function(t){n.addManipulationToExpression(e,t.stream,t.operator,t.value,t.action)},function(){})}},{key:"addManipulationToExpression",value:function(e,n,t,a,i){this.expressionMgrSvc.addManipulationToExpression(e,n,t,a,i)}},{key:"activate",value:function(){}},{key:"deleteExp",value:function(e){this.expressionMgrSvc.deleteExp(e)}},{key:"deleteStream",value:function(e,n){this.expressionMgrSvc.isStreamUsedInExp(e,n)===!0?this.openStreamAlert(e,n):this.expressionMgrSvc.deleteStreamInExp(e,n)}},{key:"openStreamAlert",value:function(e,n){var t=this,a=this.$mdDialog.confirm().title("Are you sure to delete this stream?").content("the stream is being used in one or more manipulations. If you delete the stream, all manipulations using that stream will also be deleted.").ariaLabel("Lucky day").ok("Delete").cancel("Cancel");this.$mdDialog.show(a).then(function(){t.expressionMgrSvc.deleteAssociatedManipulationsInExp(e,n),t.expressionMgrSvc.deleteStreamInExp(e,n)},function(){})}},{key:"deleteManipulation",value:function(e,n){this.expressionMgrSvc.deleteManInExp(e,n)}},{key:"addExpression",value:function(){this.expressionMgrSvc.add(),this.expressions=this.expressionMgrSvc.getExpressions()}}]),e}();n.MainController=i},function(e,n){"use strict";function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),i=function(){function e(n,a,i){"ngInject";t(this,e),this.$mdDialog=a,this.$scope=n,this.activate(i),this.showErr=!1}return e.$inject=["$scope","$mdDialog","availableStreams"],a(e,[{key:"cancel",value:function(e){this.$mdDialog.cancel()}},{key:"save",value:function(e){this.manForm.$invalid?this.showErr=!0:this.$mdDialog.hide(e)}},{key:"activate",value:function(e){this.streams=e,this.operators=[{name:">"},{name:"<"},{name:"="},{name:">="},{name:"<="}],this.actions=[{name:"trigger"},{name:"reset"},{name:"stop"}]}}]),e}();n.ManipulationDlgController=i},function(e,n){"use strict";function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),i=function(){function e(n,a){"ngInject";t(this,e),this.$mdDialog=a,this.$scope=n,this.dataModel={name:"",unit:""},this.showErr=!1}return e.$inject=["$scope","$mdDialog"],a(e,[{key:"cancel",value:function(e){this.$mdDialog.cancel()}},{key:"save",value:function(e){this.streamForm.$invalid?this.showErr=!0:this.$mdDialog.hide(e)}},{key:"activate",value:function(){}}]),e}();n.StreamDlgController=i},function(e,n){"use strict";function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),i=function(){function e(n){"ngInject";t(this,e),this.exprFactory=n,this.expressions=[]}return e.$inject=["expressionFactory"],a(e,[{key:"getExpressions",value:function(){return this.expressions}},{key:"add",value:function(){var e=this.exprFactory.newExpression(this.expressions.length+1,"",[],[]);this.expressions.push(e)}},{key:"addStreamToExpression",value:function(e,n,t){this.expressions[e].addStream(n,t)}},{key:"addManipulationToExpression",value:function(e,n,t,a,i){this.expressions[e].addManipulation(n,t,a,i)}},{key:"deleteExp",value:function(e){this.expressions.splice(e,1)}},{key:"isStreamUsedInExp",value:function(e,n){return this.expressions[n].isStreamUsed(e)}},{key:"deleteStreamInExp",value:function(e,n){this.expressions[n].removeStream(e)}},{key:"deleteManInExp",value:function(e,n){this.expressions[n].removeManipulation(e)}},{key:"deleteAssociatedManipulationsInExp",value:function(e,n){this.expressions[n].removeAssociatedManipulation(e)}},{key:"setExpression",value:function(e){e&&this.expressions.push(e)}}]),e}();n.ExpressionMgrService=i},function(e,n){"use strict";function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(){"ngInject";var e={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:i,controllerAs:"vm",bindToController:!0};return e}Object.defineProperty(n,"__esModule",{value:!0}),n.NavbarDirective=a;var i=function o(e){"ngInject";t(this,o),this.relativeDate=e(this.creationDate).fromNow()};i.$inject=["moment"]},function(e,n){"use strict";function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(){"ngInject";var e={restrict:"E",templateUrl:"app/components/expWidget/expression.html",scope:{expression:"=",idx:"@",onDelete:"&",onStrDelete:"&",onManDelete:"&",onKeyPress:"&"},link:i,controller:r,controllerAs:"vm",bindToController:!0};return e}function i(e,n,t,a){var i=n.find("input");i.on("click",function(e){13===e.which&&a.onKeyPress({val:e.val()})})}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}();n.ExpressionDirective=a;var r=function(){function e(n){"ngInject";t(this,e)}return e.$inject=["$scope"],o(e,[{key:"delete",value:function(){}}]),e}()},function(e,n){"use strict";function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(){"ngInject";function e(e,n,t){var a=n[0];a.style.cursor="move",a.draggable=!0,a.id||(a.id=Math.floor(1e5*Math.random()+1)),a.addEventListener("dragstart",function(e){e.dataTransfer.setData("Text",e.target.id),this.classList.add("drag")},!1),a.addEventListener("dragend",function(e){this.classList.remove("drag")},!1)}var n={restrict:"A",scope:{},link:e,controller:i,controllerAs:"vm",bindToController:!0};return n}Object.defineProperty(n,"__esModule",{value:!0}),n.DraggableDirective=a;var i=function o(){t(this,o)}},function(e,n){"use strict";function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(){"ngInject";function e(e,n,t){var a=n[0],i=e.droppable||[];a.id||(a.id=Math.floor(1e5*Math.random()+1)),i.push(a),a.items=[],a.addEventListener("drop",function(n){n.preventDefault();var a=n.dataTransfer.getData("Text"),o=document.getElementById(a);document.getElementById(this.id);return e.$emit("dropped",{source:o.getAttribute("data-type"),target:t.id}),i.forEach(function(e){var n=e.childNodes;e.items=[],Object.keys(n).forEach(function(t){n[t].draggable===!0&&e.items.push(n[t])})}),!1},!1),a.addEventListener("dragenter",function(e){this.classList.add("over")},!1),a.addEventListener("dragleave",function(e){this.classList.remove("over")},!1),a.addEventListener("dragover",function(e){e.preventDefault()},!1)}var n={restrict:"A",scope:{},link:e,controller:i,controllerAs:"vm",bindToController:!0};return n}Object.defineProperty(n,"__esModule",{value:!0}),n.DroppableDirective=a;var i=function o(){"ngInject";t(this,o)}},function(e,n){"use strict";function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),i=function(){function e(n,a,i,o){"ngInject";t(this,e),this.id=n,this.text=a,this.streams=i,this.manipulations=o,this.streamFactory=null,this.manipulationFactory=null}return e.$inject=["id","text","streams","manipulations"],a(e,[{key:"getDescription",value:function(){return this.text}},{key:"addFactory",value:function(e,n){this.streamFactory=e,this.manipulationFactory=n}},{key:"addStream",value:function(e,n){var t=this.streamFactory["new"](e,n);this.streams.push(t)}},{key:"addManipulation",value:function(e,n,t,a){var i=this.manipulationFactory["new"](e,n,t,a);this.manipulations.push(i)}},{key:"isStreamUsed",value:function(e){for(var n=!1,t=0;t<this.manipulations.length;t++)if(this.streams[e].name===this.manipulations[t].stream){n=!0;break}return n}},{key:"removeStream",value:function(e){this.streams.splice(e,1)}},{key:"removeManipulation",value:function(e){this.manipulations.splice(e,1)}},{key:"removeAssociatedManipulation",value:function(e){for(var n=0;n<this.manipulations.length;)this.streams[e].name===this.manipulations[n].stream?this.removeManipulation(n):n++}}]),e}();n.Expression=i;var o=function(){function e(n,a){"ngInject";t(this,e),this.activate(n,a)}return e.$inject=["streamFactory","manipulationFactory"],a(e,[{key:"activate",value:function(e,n){this.streamFactory=e,this.manipulationFactory=n}},{key:"newExpression",value:function(e,n,t,a){var o=new i(e,n,t,a);return o.addFactory(this.streamFactory,this.manipulationFactory),o}}]),e}();n.ExpressionFactory=o},function(e,n){"use strict";function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),i=function(){function e(n,a){"ngInject";t(this,e),this.name=n,this.unit=a}return e.$inject=["name","unit"],a(e,[{key:"getDescription",value:function(){return this.name+" ("+this.unit+")"}}]),e}();n.Stream=i;var o=function(){function e(){t(this,e)}return a(e,[{key:"new",value:function(e,n){return new i(e,n)}}]),e}();n.StreamFactory=o},function(e,n){"use strict";function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),i=function(){function e(n,a,i,o){"ngInject";t(this,e),this.stream=n,this.operator=a,this.value=i,this.action=o}return e.$inject=["stream","operator","value","action"],a(e,[{key:"getDescription",value:function(){return"if "+this.stream+" is "+this.operator+" "+this.value+" then "+this.action}}]),e}();n.Manipulation=i;var o=function(){function e(){t(this,e)}return a(e,[{key:"new",value:function(e,n,t,a){return new i(e,n,t,a)}}]),e}();n.ManipulationFactory=o}]),angular.module("fogHorn").run(["$templateCache",function(e){e.put("app/main/main.html",'<div layout="row" layout-xs="column" layout-fill=""><md-content flex=""><header flex="" layout="column"><fh-navbar creation-date="main.creationDate"></fh-navbar></header><section class="topSection" layout="row" flex="100"><div flex="70" class="mainSection"><md-button class="md-raised expBtn" ng-class="main.classAnimation" ng-click="main.addExpression()">Add New Expression</md-button><div ng-repeat="expr in main.expressions" data-id="{{$index}}" class="expContainer"><fh-expr expression="expr" idx="{{$index}}" on-delete="main.deleteExp($index)" on-str-delete="main.deleteStream(strIndex,$index)" on-man-delete="main.deleteManipulation(manIndex,$index)" on-key-press="main.keyPress(event,$index)"></fh-expr></div></div><div flex="30" layout="row" class="toolsContainer" layout-fill=""><div layout="column" class="toolSection" layout-fill="" layout-align="center center"><h1 class="md-center">TOOLS</h1><h3 class="md-center">(Drag and drop us on expressions)</h3><div class="card streamCard" layout-align="center center" data-type="stream" ng-class="main.classAnimation" draggable="" id="streamBtn">STREAM</div><div class="card manCard" data-type="manipulation" ng-class="main.classAnimation" id="manipulationBtn" draggable="">MANIPULATION</div></div></div></section></md-content></div>'),e.put("app/components/expWidget/expression.html",'<div layout="row" layout-wrap="" layout-padding=""><div class="md-whiteframe-1dp expToken" flex-sm="45" flex-gt-sm="35" flex-gt-md="25" layout="" layout-align="center center" droppable="" data-id="{{vm.idx}}"><md-input-container ng-if="vm.expression.text==\'\'" ng-model-options="{updateOn:\'blur\'}"><label>Enter Name Here</label> <input ng-model="vm.expression.text" ng-keypress="vm.onKeyPress({event:$event})"></md-input-container><div ng-if="vm.expression.text!=\'\'" ng-mouseover="showDel=true" ng-mouseleave="showDel=false"><label>{{vm.expression.text}}</label>&nbsp;<div ng-if="showDel" class="del" ng-click="vm.onDelete()">delete</div></div></div><div><ul><li ng-repeat="stream in vm.expression.streams" ng-mouseover="showDel=true" ng-mouseleave="showDel=false"><span>{{stream.getDescription()}}</span>&nbsp;<span ng-if="showDel" class="del" ng-click="vm.onStrDelete({strIndex:$index})">delete</span></li></ul><ul><li ng-repeat="man in vm.expression.manipulations" ng-mouseover="showDel=true" ng-mouseleave="showDel=false"><span>{{man.getDescription()}}</span>&nbsp;<span class="del" ng-if="showDel" ng-click="vm.onManDelete({manIndex:$index})">delete</span></li></ul></div><div></div></div>'),e.put("app/components/navbar/navbar.html",'<md-toolbar layout="column" layout-align="center center"><md-button>FogHorn Angular Task</md-button></md-toolbar>'),e.put("app/dialogs/ManipulationDlg/manipulationDlg.tmpl.html",'<md-dialog ng-cloak=""><form name="vm.manForm" novalidate=""><md-dialog-content><div class="md-dialog-content"><h1>Configure Manipulation</h1><md-input-container><label>If</label><md-select ng-model="vm.dataModel.stream" name="stream" required=""><md-option ng-repeat="stream in vm.streams" value="{{stream.name}}">{{stream.name}}</md-option></md-select><div ng-messages="vm.manForm.stream.$error" ng-show="vm.showErr"><div ng-message="required">Stream is required.</div></div></md-input-container><div layout="row" flex="100"><md-input-container flex="40"><label>Is</label><md-select ng-model="vm.dataModel.operator" name="operator" required=""><md-option ng-repeat="operator in vm.operators" value="{{operator.name}}">{{operator.name}}</md-option></md-select><div ng-messages="vm.manForm.operator.$error" ng-show="vm.showErr"><div ng-message="required">Operator is required.</div></div></md-input-container><md-input-container flex="55" flex-offset="5"><label>Value</label> <input ng-model="vm.dataModel.value" name="value" required=""><div ng-messages="vm.manForm.value.$error" ng-show="vm.showErr"><div ng-message="required">Value is required.</div></div></md-input-container></div><md-input-container><label>Then</label><md-select ng-model="vm.dataModel.action" name="action" required=""><md-option ng-repeat="action in vm.actions" value="{{action.name}}">{{action.name}}</md-option></md-select><div ng-messages="vm.manForm.action.$error" ng-show="vm.showErr"><div ng-message="required">Action is required.</div></div></md-input-container></div></md-dialog-content><div class="md-actions" layout="row"><span flex=""></span><md-button ng-click="vm.cancel()">Cancel</md-button><md-button class="savebtn" ng-click="vm.save(vm.dataModel)" style="margin-right:20px;">Save</md-button></div></form></md-dialog>'),e.put("app/dialogs/StreamDlg/Streamdialog.tmpl.html",'<md-dialog ng-cloak="" ng-controller="StreamDlgController as vm"><form name="vm.streamForm" novalidate=""><md-dialog-content><div class="md-dialog-content"><h1>Configure Stream</h1><md-input-container><label>Name</label> <input ng-model="vm.dataModel.name" name="name" required=""> <label ng-show="vm.streamForm.name.$invalid && vm.showErr" class="help-block">Name is required.</label></md-input-container><md-input-container><label>Unit</label> <input ng-model="vm.dataModel.unit" name="unit" required=""> <label ng-show="vm.streamForm.unit.$invalid && vm.showErr" class="help-block">Unit is required.</label></md-input-container></div></md-dialog-content><div class="md-actions" layout="row"><span flex=""></span><md-button ng-click="vm.cancel()">Cancel</md-button><md-button class="savebtn" ng-click="vm.save(vm.dataModel)" style="margin-right:20px;">Save</md-button></div></form></md-dialog>')}]);
//# sourceMappingURL=../maps/scripts/app-a851d2f3ef.js.map