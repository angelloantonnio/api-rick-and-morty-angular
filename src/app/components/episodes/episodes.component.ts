import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-episodes',
  standalone: true,
  imports: [],
  templateUrl: './episodes.component.html',
  styleUrl: './episodes.component.scss'
})
export class EpisodesComponent implements OnInit {

  episodes: any[] = [];

  httpClient = inject(HttpClient);

  ngOnInit() {
    this.httpClient.get('https://rickandmortyapi.com/api/episode')
      .subscribe((response: any) => {
        this.episodes = response.results;
      });
  }
}

