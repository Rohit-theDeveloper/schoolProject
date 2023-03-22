import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
 
}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

