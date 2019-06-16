import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './view/particale/navbar/navbar.component';
import { FooterComponent } from './view/particale/footer/footer.component';
import { SidebarComponent } from './view/particale/sidebar/sidebar.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { WelcomeNoteComponent } from './welcome-note/welcome-note.component';
import { MainComponent } from './view/main/main.component';
import { CutomerComponent } from './view/cutomer/cutomer.component';
import { ItemComponent } from './view/item/item.component';
import { OrderComponent } from './view/order/order.component';
import { ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    DashboardComponent,
    SlideShowComponent,
    WelcomeNoteComponent,
    MainComponent,
    CutomerComponent,
    ItemComponent,
    OrderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
