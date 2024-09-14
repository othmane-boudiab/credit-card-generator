import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {DropdownModule} from "primeng/dropdown";
import {CalendarModule} from "primeng/calendar";
import {TableModule} from "primeng/table";
import {PaginatorModule} from "primeng/paginator";
import {SidebarModule} from "primeng/sidebar";
import {AccordionModule} from "primeng/accordion";
import {InputTextareaModule} from "primeng/inputtextarea";
import {FileUploadModule} from "primeng/fileupload";
import {HttpClientModule} from "@angular/common/http";
import {MultiSelectModule} from "primeng/multiselect";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {MessagesModule} from "primeng/messages";
import {MessageModule} from "primeng/message";
import {InputSwitchModule} from "primeng/inputswitch";
import {ToastModule} from "primeng/toast";
import {DialogModule} from "primeng/dialog";
import {TabViewModule} from "primeng/tabview";
import {KnobModule} from "primeng/knob";
import {MegaMenuModule} from "primeng/megamenu";
import {StepsModule} from "primeng/steps";
import {ProgressBarModule} from "primeng/progressbar";
import {RadioButtonModule} from "primeng/radiobutton";
import {CardModule} from "primeng/card";
import {DividerModule} from "primeng/divider";
import {SelectButtonModule} from "primeng/selectbutton";
import {CheckboxModule} from "primeng/checkbox";
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {RatingModule} from "primeng/rating";



const material: any[] | Type<any> | ModuleWithProviders<{}> = [
  ButtonModule,
  InputTextModule,
  DropdownModule,
  CalendarModule,
  TableModule,
  PaginatorModule,
  SidebarModule,
  AccordionModule,
  InputTextareaModule,
  FileUploadModule,
  HttpClientModule,
  MultiSelectModule,
  ConfirmDialogModule,
  MessagesModule,
  MessageModule,
  InputSwitchModule,
  ToastModule,
  DialogModule,
  TabViewModule,
  KnobModule,
  MegaMenuModule,
  StepsModule,
  ProgressBarModule,
  RadioButtonModule,
  CardModule,
  DividerModule,
  SelectButtonModule,
  CheckboxModule,
  ProgressSpinnerModule,
  RatingModule
];

@NgModule({
  imports: [
    material
  ],
  exports: [
    material
  ]
})
export class PrimengModule { }
