import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  openForm(){
    console.log("Working")
    window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLScBs7mbMbOgAy0VKETAgjChY0ILSUJ4GWXvyuVB1TfLrv_zkw/viewform";
  }
}
