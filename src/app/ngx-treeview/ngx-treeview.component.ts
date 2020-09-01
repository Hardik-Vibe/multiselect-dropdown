import { Component, OnInit } from '@angular/core';
import { TreeviewItem, TreeviewConfig } from 'ngx-treeview';

@Component({
  selector: 'app-ngx-treeview',
  templateUrl: './ngx-treeview.component.html',
  styleUrls: ['./ngx-treeview.component.css']
})
export class NgxTreeviewComponent implements OnInit {

  ngOnInit(): void { this.getRooms(); }

  config = TreeviewConfig.create({
    hasAllCheckBox: true,
    hasFilter: true,
    hasCollapseExpand: false,
    maxHeight: 500
  });
  items;

  onFilterChange(value: string): void {
    console.log('filter:', value);
  }

  getRooms() {
    this.items =  [
      new TreeviewItem({
        text: 'Children',
        value: 1,
        checked: false,
        children: [
          { text: 'Baby 3-5', value: 11, checked: false },
          { text: 'Baby 6-8', value: 12, checked: false },
          { text: 'Baby 9-12', value: 13, checked: false }
        ]
      })
    ];
  }

  onSelectedChange(e) {
    console.log(e);
  }

}
