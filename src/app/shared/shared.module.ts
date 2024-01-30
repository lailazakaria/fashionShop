import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SelectComponent } from './components/select/select.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent, SelectComponent, SpinnerComponent],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  exports: [
    HeaderComponent,
    SpinnerComponent,
    SelectComponent,
    FormsModule,
    RouterModule,
    BrowserModule,
 
  ],
})
export class SharedModule {}
