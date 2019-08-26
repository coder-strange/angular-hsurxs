import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import {SlideMenuModule} from 'primeng/slidemenu';
import {SidebarModule} from 'primeng/sidebar';
import {AccordionModule} from 'primeng/accordion';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {FieldsetModule} from 'primeng/fieldset';
import {CheckboxModule} from 'primeng/checkbox';
import {MultiSelectModule} from 'primeng/multiselect';
import { FormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { AgGridModule } from 'ag-grid-angular';
import {TreeModule} from 'primeng/tree';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AgGridComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SlideMenuModule,
    FormsModule,
    SidebarModule,
    AccordionModule,
    BreadcrumbModule,
    FieldsetModule,
    CheckboxModule,
    MultiSelectModule,
    InputTextModule,
    TreeModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
