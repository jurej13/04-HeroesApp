import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
@NgModule({
  exports:[
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule, 
    MatFormFieldModule,
    MatListModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatGridListModule
  ]
})
export class MaterialModule { }
