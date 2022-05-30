import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { JoinusComponent } from './joinus/joinus.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PaymentComponent } from './payment/payment.component';
import { ContactusComponent } from './contactus/contactus.component';
import { MovieComponent } from './movie/movie.component'
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchPipe } from './search.pipe'
import {FormsModule } from '@angular/forms';
import { FeedbackComponent } from './feedback/feedback.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    JoinusComponent,
    LoginComponent,
    RegisterComponent,
    AboutusComponent,
    PaymentComponent,
    ContactusComponent,
    MovieComponent,
    SearchPipe,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
