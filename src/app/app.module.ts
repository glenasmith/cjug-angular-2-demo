import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { AppComponent } from './app.component';

@NgModule({
	declarations: [ AppComponent,  ],
	providers: [  ],
	imports: [ BrowserModule, FormsModule, ReactiveFormsModule, HttpModule ],
	bootstrap: [ AppComponent ]
})
export class AppModule { }