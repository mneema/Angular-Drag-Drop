export function DraggableDirective() {
  'ngInject';

  let directive = {
    restrict: 'A',
    
    scope: {
        
    },
    link: link, 
    controller: DragController,
    controllerAs: 'vm',
    bindToController: true
  };

  function link(scope, element, attrs) {
        var el = element[0];

        // Apply cursor style to "move" in each draggable element
        el.style.cursor = 'move';

        // Apply draggable property on element
        el.draggable = true;

        // If element don't have any id, create random id
        if (!el.id) el.id = Math.floor((Math.random() * 100000) + 1);

        // Event on drag start
        el.addEventListener('dragstart', function(e) {
                e.dataTransfer.setData('Text', e.target.id);
                // When element is on drag, add drag class
                this.classList.add('drag');
            },
            false
        );

        // Event on drag end
        el.addEventListener('dragend', function(e) {
                // When drag over, remove drag class
                this.classList.remove('drag');
            },
            false
        );
  }

  return directive;
}

class DragController {
  constructor () {
    
    

    // "this.creation" is available by directive option "bindToController: true"
    
  }
}
