// drag colored items into drop-zones: A Tier, B Tier, C Tier
// double click to restore the items to the unranked drop-zone

let draggedItem;

document.querySelectorAll(".item").forEach(setUpItem);
document.querySelectorAll(".drop-zone").forEach(setUpDropZone);

function setUpItem(item) {
  item.addEventListener("dragstart", onDragItem);
  item.addEventListener("dblclick", onDoubleClickItem);
}
function onDragItem(event) {
  draggedItem = event.target;
}
function onDoubleClickItem() {
  const unrankedDropZone = document.getElementById("unranked-drop-zone");
  if (unrankedDropZone !== this.parentNode) {
    unrankedDropZone.appendChild(this);
  }
}

function setUpDropZone(dropZoneNode) {
  dropZoneNode.addEventListener("drop", onDropOverDropZone);
  dropZoneNode.addEventListener("dragover", onDragOverDropZone);
}
function onDropOverDropZone() {
  if (this !== draggedItem.parentNode) {
    this.appendChild(draggedItem);
  }
}

function onDragOverDropZone(event) {
  event.preventDefault();
}
