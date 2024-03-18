import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./pages/nav/nav.component";
import { FooterComponent } from "./pages/footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavComponent, FooterComponent]
})
export class AppComponent {
  title = 'Mai Bhi Jal Rakshak';
}
