import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss'
})
export class CharactersComponent implements OnInit {

  characters: any[] = [];

  httpClient = inject(HttpClient);

  ngOnInit() {
    this.httpClient.get('https://rickandmortyapi.com/api/character')
      .subscribe((response: any) => {
        this.characters = response.results;
      });
  }
}


