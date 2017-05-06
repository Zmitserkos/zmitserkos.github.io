import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';

import { Routes, RouterModule } from '@angular/router';

import { AppComponent }   from './app.component';
import { HomeComponent }   from './home.component';

import { MatchesCompletedPipe } from './matches-completed-pipe';

import { TodoService } from './todo.service';

import { ShareModal } from './custom-modal';

// routes definition
const appRoutes: Routes = [
    { path: '', component: HomeComponent, pathMatch:'full' },
    { path: 'share/:state', redirectTo: '/' },
    { path: 'active', component: HomeComponent },
    { path: 'completed', component: HomeComponent },
    { path: '**', redirectTo: '/' }
];

@NgModule({
    imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes), ModalModule.forRoot(), BootstrapModalModule ],
    declarations: [ AppComponent, HomeComponent, MatchesCompletedPipe, ShareModal ],
    providers: [ TodoService ],
    bootstrap:    [ AppComponent ],
    entryComponents: [ ShareModal ]
})

export class AppModule { }
