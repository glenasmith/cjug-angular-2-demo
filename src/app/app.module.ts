import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewsComponent } from './news';
import { MenuComponent } from './menu';
import { HttpModule }    from '@angular/http';
import { NewsService } from './news.service';
import { AppComponent } from './app.component';

import { routing,
         appRoutingProviders } from './app.routing';

@NgModule({
	declarations: [ AppComponent, MenuComponent, NewsComponent  ],
	providers: [ appRoutingProviders, NewsService ],
	imports: [ BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, routing ],
	bootstrap: [ AppComponent ]
})
export class AppModule { }