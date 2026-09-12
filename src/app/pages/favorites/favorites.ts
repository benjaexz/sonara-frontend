import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { Favorite, FavoriteResponse } from '../../services/favorite';

@Component({
  selector: 'app-favorites',
  imports: [],
  templateUrl: './favorites.html',
  styleUrl: './favorites.css',
})
export class Favorites implements OnInit {
  favorites: FavoriteResponse[] = [];
  errorMessage = '';

  constructor(
    private favoriteService: Favorite,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.loadFavorites();
  }

  loadFavorites(): void {
    this.favoriteService.getFavorites().subscribe({
      next: (response) => {
        console.log('Favoritos recebidos:', response);
        this.favorites = response;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Erro ao carregar favoritos:', error);
        this.errorMessage = 'Erro ao carregar favoritos.';
        this.cdr.detectChanges();
      }
    });
  }
}