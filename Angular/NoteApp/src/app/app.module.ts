import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatSelectModule } from '@angular/material/select';

import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NoteComponent } from './components/note/note.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { NotesComponent } from './components/notes/notes.component';
import { NewNoteComponent } from './components/new-note/new-note.component';
import { CategoriesService } from './services/categories.service';
import { NotesService } from './services/notes.service';
import { Language } from '../languages/language.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookiesService } from './services/cookies.service';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent,
    NoteComponent,
    SideMenuComponent,
    NotesComponent,
    NewNoteComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSelectModule
  ],
  providers: [
    CookieService,
    CookiesService,
    CategoriesService,
    NotesService,
    Language
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
