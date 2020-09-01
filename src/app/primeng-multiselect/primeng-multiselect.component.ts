import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-primeng-multiselect',
  templateUrl: './primeng-multiselect.component.html',
  styleUrls: ['./primeng-multiselect.component.css']
})
export class PrimengMultiselectComponent implements OnInit {

  public selectedOptions: Array<SelectItem> = new Array<SelectItem>();
  public selectedItemsLabel = 'Choose';
  @Output() onPanelHide: EventEmitter<any> = new EventEmitter<any>();
  public options = [
    {
      label: 'Firewall group - 1',
      value: {
        id: '1234',
        children: [
          {
            label: 'Firewall - 1',
            id: '12345',
            parent: '1234',
            value: '12345',
            disabled: false
          },
          {
            label: 'Firewall - 1',
            id: '123456',
            parent: '1234',
            value: '123456',
            disabled: false
          },
          {
            label: 'Firewall - 1',
            id: '123457',
            parent: '1234',
            value: '123457',
            disabled: false
          }
        ]
      },
      disabled: false,
      id: '1234',
      selectedChildOptions: [] 
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  public onChangeMultiSelect($event) {
    // $event.itemValue is clicked element always, whether checked or unchecked.
    // $event.value is the total selected value in p-multiselect after this change.
    // So, if $event.itemValue is present in $event.value it means itemValue was checked else unchecked.
    // itemValue is not present in $event if header checkbox is clicked, though $event.value is present.
    if ($event.itemValue) {
      // this is when a single multi select option is clicked
      this.handleMultiSelectOptionClicked($event);
    } else {
      // this is when header check box is clicked
      this.handleMultiSelectHeaderClicked($event);
    }
    console.log(this.selectedOptions);
  }

  private handleMultiSelectOptionClicked(event) {
    let elementChecked = false;
    event.value.children.forEach(element => {
      if (element.label === event.itemValue.label) {
        elementChecked = true;
      }
    });
    if (elementChecked) {
      // this is when element is checked
      this.options.forEach((option) => {
        if (option.label === event.itemValue.label) {
          option.selectedChildOptions = [];
          event.itemValue.childOptions.forEach(element => {
            option.selectedChildOptions.push(element.value);
          });
        }
      });
    } else {
      // this is when element is unchecked
      this.options.forEach((option) => {
        if (option.label === event.itemValue.label) {
          option.selectedChildOptions = [];
        }
      });
    }
  }

  private handleMultiSelectHeaderClicked(event) {
    if (event.value.children.length === this.options.length) {
      this.options.forEach((option) => {
          option.selectedChildOptions = [];
          option.value.children.forEach(element => {
            option.selectedChildOptions.push(element.value);
          });
      });
    } else {
      this.options.forEach((option) => {
          option.selectedChildOptions = [];
      });
    }
  }

  public onChangeChildOptionCheckbox(option) {
    // $event is true or false depending on whether its checked or unchecked.
    if (option.value.children.length !== option.selectedChildOptions.length) {
        this.selectedOptions = this.selectedOptions.filter((selectedOption) => selectedOption.label !== option.label);
      } else {
        this.selectedOptions = [...this.selectedOptions];
        this.selectedOptions.push(option.value);
      }
      console.log(this.selectedOptions);
  }

  public onClickChildOptionChecbox(event) {
    event.stopPropagation();
  }

  public onClickChildOptionContainer(event) {
    event.stopPropagation();
  }

  public getSelectedItemsLabel() {
    // return 'Label';
    const selectedItemLabels = [];
    this.options.forEach((option) => {
      if (option.value.children.length === option.selectedChildOptions.length) {
        selectedItemLabels.push(option.label);
      } else {
        option.selectedChildOptions.forEach((childOption) => {
          selectedItemLabels.push(childOption.label);
        });
      }
    });
    return selectedItemLabels.length > 0 ? selectedItemLabels.join(',') : this.selectedItemsLabel;
  }

  public onMultiSelectPanelHide() {
    const selectedresults = {
      parentOptions: [],
      childOptions: []
    };

    this.options.forEach((option) => {
      if (option.value.children.length === option.selectedChildOptions.length) {
        selectedresults.parentOptions.push(option);
      } else {
        option.selectedChildOptions.forEach((childOption) => {
          selectedresults.childOptions.push(childOption);
        });
      }
    });
    this.onPanelHide.emit(selectedresults);
  }

}
