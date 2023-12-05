import { Component, AfterViewInit } from '@angular/core';
import Typed from 'typed.js';
import { FormBuilder, Validators } from '@angular/forms';
import { EmailService } from '../email.service';

declare let Email: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements AfterViewInit {
  firstName: any;
  lastName: any;
  email: any;
  message: any;

  private pronunciationAudio: HTMLAudioElement;

  constructor(private fb: FormBuilder, private emailService: EmailService) {
    this.pronunciationAudio = new Audio('../../assets/images/pronunciation_vi_tuấn.mp3');
  }

  ngAfterViewInit(): void {
    const typed = new Typed(".text", {
      strings: ["a Full-stack developer!", "a Game developer!", "an UI designer!", "a digital artist!"],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 50,
      loop: true
    });
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  playPronunciation() {
    this.pronunciationAudio.play();
  }

  contactForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
  });

  onSubmit(options: any): void {
    // TODO: Use EventEmitter with form value
    console.warn(options);
    const { firstName, lastName, email, message } = options;

    this.emailService.sendEmail({from: "nguyen.ngoc.hai@vsi-international.com", to: email, text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nMessage: ${message}`}).subscribe((data: any) => {
      console.log("result", data)
    });
  }
}
