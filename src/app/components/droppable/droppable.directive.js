export function DroppableDirective() {
  'ngInject';

  let directive = {
    restrict: 'A',
    scope: {
        
    },
    link: link,
    controller: DroppableController,
    controllerAs: 'vm',
    bindToController: true
  };

  function link(scope, element, attrs) {
    var el = element[0],
            droppable = scope.droppable||[];
        // If element don't have any id, create random id
        if (!el.id) el.id = Math.floor((Math.random() * 100000) + 1);

        // Add element to droppable list
        droppable.push(el);

        // Start dropped items property
        el.items = [];

        // Event to drop action on droppable element
        el.addEventListener('drop', function(e) {
                e.preventDefault();

                var data = e.dataTransfer.getData("Text"),
                    element = document.getElementById(data),
                    box = document.getElementById(this.id);

                //box.appendChild(element);
                scope.$emit('dropped',{source:element.getAttribute("data-type"),target:attrs.id});
                droppable.forEach(function(box) {
                    var dragItem = box.childNodes;

                    box.items = [];

                    Object.keys(dragItem).forEach(function(key) {
                        if (dragItem[key].draggable === true) 
                            box.items.push(dragItem[key]);
                    });
                });

                return false;
            },
            false
        );
  
        el.addEventListener('dragenter', function(e) {
            this.classList.add('over');
          },false);

        el.addEventListener('dragleave', function(e) {
          this.classList.remove('over');
            },false);

        // Event to drag over action on droppable element
        el.addEventListener('dragover', function(e) {
                e.preventDefault();
            },false);
    
  }

  return directive;
}



class DroppableController {
  constructor () {
    'ngInject';

    // "this.creation" is available by directive option "bindToController: true"
    
  }
}
