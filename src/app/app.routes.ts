import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Favorites } from './pages/favorites/favorites';
import { Playlists } from './pages/playlists/playlists';
import { History } from './pages/history/history';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'login', component: Login },
    { path: 'register', component: Register },
    { path: 'favorites', component: Favorites },
    { path: 'playlists', component: Playlists },
    { path: 'history', component: History }
];