/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { ManipulationDlgController } from './dialogs/ManipulationDlg/manipulationDlg.controller';
import { StreamDlgController } from './dialogs/StreamDlg/streamDlg.controller';
import { ExpressionMgrService } from '../app/components/expressionMgr/expressionMgr.service';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { ExpressionDirective } from '../app/components/expWidget/expression.directive';
import { DraggableDirective } from '../app/components/draggable/draggable.directive';
import { DroppableDirective } from '../app/components/droppable/droppable.directive';
import { ExpressionFactory } from '../app/components/expression/expression.factory';
import { StreamFactory } from '../app/components/stream/stream.factory';
import { ManipulationFactory } from '../app/components/manipulation/manipulation.factory';

angular.module('fogHorn', ['ngAnimate', 'ngTouch', 'ngSanitize', 'ngMessages', 'ui.router', 'ngMaterial', 'toastr'])
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('expressionMgrSvc', ExpressionMgrService)
  .controller('MainController', MainController)
  .controller('StreamDlgController', StreamDlgController)
  .controller('ManipulationDlgController', ManipulationDlgController)
  .directive('fhNavbar', NavbarDirective)
  .directive('fhExpr', ExpressionDirective)
  .directive('draggable', DraggableDirective)
  .directive('droppable', DroppableDirective)
  .factory('streamFactory', () => new StreamFactory())
  .factory('manipulationFactory', () => new ManipulationFactory())
  .factory('expressionFactory', (streamFactory,manipulationFactory) => new ExpressionFactory(streamFactory,manipulationFactory));
