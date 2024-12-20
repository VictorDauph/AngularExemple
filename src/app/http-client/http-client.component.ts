import { Component } from '@angular/core';
import { HttpServiceService } from '../services/http-service.service';

@Component({
  selector: 'app-http-client',
  imports: [],
  templateUrl: './http-client.component.html',
  styleUrl: './http-client.component.css'
})
export class HttpClientComponent {

  constructor(private httpService: HttpServiceService) { }

  data!: any[];

  ngOnInit() {

    this.httpService.getPosts().subscribe(
      data => {
        this.data = data
        console.log(this.data);
      });

  }
}
