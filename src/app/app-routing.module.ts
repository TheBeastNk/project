import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { ContactListComponent } from './contacts-list/contact-list.component';

const _routes: Routes =[
{ path: '', component: ContactListComponent},
// { path: '**', redirectTo: '' ,pathMath: 'full'}
];

@NgModule({
	imports: [CommonModule,RouterModule.forRoot(_routes)],
	exports: [RouterModule]
})

export class AppRoutingModule{}