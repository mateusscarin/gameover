import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout.component';
import { TopbarComponent } from './topbar/topbar.component';



@NgModule({
  declarations: [
    LayoutComponent,
    TopbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LayoutModule { }
