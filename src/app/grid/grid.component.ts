import { Component, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html'
})
export class GridComponent {
  @ViewChild('gridRef') gridRef;
  settings: {};
  @Input() width;
  @Input() height;
  @Input() source;
  @Input() columns;
  @Input() showfilterrow;
  @Input() filterable;
  @Input() selectionmode;

  constructor() {

  }
  ngOnInit() {
    this.settings = {
      width: this.width,
      height: this.height,
      source: this.source,
      columns: this.columns,
      showfilterrow: this.showfilterrow,
      filterable: this.filterable,
      selectionmode: this.selectionmode
    }

  }
  ngAfterViewInit() {
    console.log('grid')
    this.gridRef.createComponent(this.settings);
  }
  onChange(){
    
  }
}