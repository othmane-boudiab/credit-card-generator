import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PrimengModule} from "./primeng/primeng.module";
import { NavbarComponent } from './components/navbar/navbar.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { CalculatorComponent } from './components/calculator/calculator.component';
import { AmortizationTableComponent } from './components/amortization-table/amortization-table.component';
import { AmortizationChartComponent } from './components/amortization-chart/amortization-chart.component';
import {HighchartsChartModule} from "highcharts-angular";
import {ReactiveFormsModule} from "@angular/forms";
import {PanelModule} from "primeng/panel";
import { HomeComponent } from './pages/home/home.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { TermsOfServiceComponent } from './pages/terms-of-service/terms-of-service.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { InputTextComponent } from './components/input-text/input-text.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CalculatorComponent,
    AmortizationTableComponent,
    AmortizationChartComponent,
    HomeComponent,
    PrivacyPolicyComponent,
    TermsOfServiceComponent,
    FooterComponent,
    ContactComponent,
    AboutComponent,
    InputTextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PrimengModule,
    HighchartsChartModule,
    ReactiveFormsModule,
    PanelModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
