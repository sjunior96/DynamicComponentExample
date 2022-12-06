import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ExpandableRowDirective } from './directives/expandable-row.directive';
import { ProfileComponent } from './components/profile.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    ExpandableRowDirective,
    ProfileComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
