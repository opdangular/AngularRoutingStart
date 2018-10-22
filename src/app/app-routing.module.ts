import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuardService } from './auth-guard.service';
import { CanDeactivateGuardService } from './servers/edit-server/can-deactivate-guard.service';



// Routing and Child Routing
const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'users', component: UsersComponent , children: [
      { path: ':id/:name', component: UserComponent },
    ]},
    { 
        path: 'servers', 
        //canActivate: [AuthGuardService] ,
        canActivateChild: [AuthGuardService] ,
        component: ServersComponent , 
        children: [
            { path: ':id', component: ServerComponent },
            { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuardService] }
        ]
    },
    { path: 'not-found', component: PageNotFoundComponent },
    /* wild card route must be the last one in routes array as 
      routes are parsed from top to bottom.
     */
    { path: '**', redirectTo: '/not-found' }
  ]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes) // this is how we register our Routes
    ],
    exports: [RouterModule]
    
    // no need to declare the components again here
    // as they are already declared in app.module.ts
})
export class AppRoutingModule {

}