import { Component } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // Text typing and loopback effect for single word.
  ngAfterViewInit(): void {
    const typed = new Typed(".text", {
      strings: ["a Full-stack developer.", "a Game developer.", "an UI designer😝", "a digital artist🤔"],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 50,
      loop: true
    });
  }
}
