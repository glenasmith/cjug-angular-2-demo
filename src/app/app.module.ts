import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { AppComponent } from './app.component';
import { routing,
         appRoutingProviders } from './app.routing';

@NgModule({
	declarations: [ AppComponent,  ],
	providers: [ appRoutingProviders ],
	imports: [ BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, routing ],
	bootstrap: [ AppComponent ]
})
export class AppModule { }