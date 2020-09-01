import { Component, OnInit, Type } from '@angular/core';
import { find, isEmpty } from 'lodash';

const enum deviceType {
  Free = 'free',
  Paid = 'paid'
}

@Component({
  selector: 'app-primeng-tree',
  templateUrl: './primeng-tree.component.html',
  styleUrls: ['./primeng-tree.component.css']
})
export class PrimengTreeComponent implements OnInit {

  dropdownConfig = {
    mode: 'checkbox',
    filter: true,
    emptyMessage: 'No Records',
  };
  disableFreeDevice: boolean = false;
  selectedFiles: Array<any> = [];
  firewalls = [
    {
      "label": "Firewall group - 1",
      "id": "1",
      "key": "1",
      "selectable": true,
      "type": deviceType.Paid,
      "children": [{
        "label": "Firewall - 1",
        "id": "12",
        "key": "12",
        "leaf": true,
        "type": deviceType.Free,
        "styleClass": "free-device",
        "selectable": false
      },
      {
        "label": "Firewall - 2",
        "key": "13",
        "id": "13",
        "leaf": true,
        "type": deviceType.Paid,
        "styleClass": "paid-device",
        "selectable": true
      }]
    },
  ];
  constructor() { }

  ngOnInit() {
  }

  nodeSelect(e){
    if (e.node && !e.node.parent) {
      this.selectedFiles = this.selectedFiles.filter((rec) => rec.selectable );
    }
    this.checkLicenseRules();
  }

  nodeUnselect(e) {
    this.checkLicenseRules();
  }

  checkLicenseRules() {
    const paidDevices = find(this.selectedFiles, { type: deviceType.Paid });
    this.disableFreeDevice = !isEmpty(paidDevices);
  }

  selectSingleDevice(node) {
    console.log(node);
  }
}
