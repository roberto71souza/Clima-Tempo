import { Component, OnInit } from '@angular/core';
import { RequisicaoWeatherApiService } from './servicos/requisicaoWeatherApi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ClimaTempoApp';
  clima: any;
  constructor(private service: RequisicaoWeatherApiService) {}
  ngOnInit(): void {}

  carregarClima(local: string): void {
    if (local != null) {
      this.service.getWeather(local).subscribe(
        (response) => {
          this.clima = response,
          console.log(this.clima);

        },
        (error) => {console.error(error);
        },
      );
    }
  }
}
