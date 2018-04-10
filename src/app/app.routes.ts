import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';

import { AuthGuard } from './services/auth-guard.service';
import { VideoaulasComponent } from './views/videos/videoaulas.component';
import { VideosComponent } from './views/videos/videos.component';

const appRoutes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'dashboard',
        canActivate: [AuthGuard],
        component: DashboardComponent
    }, 
    {
        path: 'videos',
        canActivate: [AuthGuard],
        component: VideoaulasComponent
    } ,
    {
        path: 'video/:id',
        //canActivate: [AuthGuard],
        component: VideosComponent
    },
    {
        path: 'video/nome/:name',
        //canActivate: [AuthGuard],
        component: VideosComponent
    }
    
];

export const AppRoutes = RouterModule.forRoot(appRoutes);