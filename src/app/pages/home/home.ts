import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Track, TrackResponse } from '../../services/track';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  tracks: TrackResponse[] = [];
  errorMessage = '';

  constructor(
    private trackService: Track,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.trackService.getTracks().subscribe({
      next: (response) => {
        console.log('Tracks recebidas:', response);
        this.tracks = response;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Erro ao carregar tracks:', error);
        this.errorMessage = 'Erro ao carregar músicas. Faça login novamente.';
        this.cdr.detectChanges();
      }
    });
  }
}