import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './layouts/footer/footer.component';
import { HeaderComponent } from './layouts/header/header.component';
import { NavmenuComponent } from './layouts/navmenu/navmenu.component';
import { NavEntryComponent } from './layouts/navmenu/nav-entry/nav-entry.component';



@NgModule({
  declarations: [FooterComponent, HeaderComponent, NavmenuComponent, NavEntryComponent],
  exports: [
    HeaderComponent,
    NavmenuComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
