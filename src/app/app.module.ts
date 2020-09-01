import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import {CheckboxModule} from 'primeng/checkbox';
import {TreeModule} from 'primeng/tree';
import {TreeNode} from 'primeng/api';
import { AppComponent } from './app.component';
import { TreeviewModule } from 'ngx-treeview';
import { Routes, RouterModule } from '@angular/router';
import { PrimengMultiselectComponent } from './primeng-multiselect/primeng-multiselect.component';
import { PrimengTreeComponent } from './primeng-tree/primeng-tree.component';
import {TooltipModule} from 'primeng/tooltip';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { NgxPopperModule } from 'ngx-popper';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { NgxTreeviewComponent } from './ngx-treeview/ngx-treeview.component';
import { DocComponent } from './doc/doc.component';

const routes: Routes = [
  {
    path: 'primeng-multiselect',
    component: PrimengMultiselectComponent
  },
  {
    path: 'primeng-tree',
    component: PrimengTreeComponent
  },
  {
    path: 'ngx-treeview',
    component: NgxTreeviewComponent
  },
  {
    path: '',
    component: DocComponent
  }
]

@NgModule({
  imports:      [
    // Angular
    BrowserModule, BrowserAnimationsModule, FormsModule,
    
    // PrimeNG
    DropdownModule,
    InputTextModule,
    MultiSelectModule,
    CheckboxModule,
    TreeModule,
    TreeviewModule.forRoot(),
    RouterModule.forRoot(routes),
    TooltipModule,
    PopoverModule.forRoot(),
    NgxPopperModule.forRoot({
      hideOnClickOutside: true,
      positionFixed: true,
      hideOnScroll: true,
      preventOverflow: false
    }),
    OverlayPanelModule
  ],
  declarations: [ AppComponent, PrimengMultiselectComponent, PrimengTreeComponent, NgxTreeviewComponent, DocComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
