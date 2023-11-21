import { Component, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Typed from 'typed.js';


declare let Email: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements AfterViewInit {
  private pronunciationAudio: HTMLAudioElement;

  constructor() {
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

  sendEmail(form: NgForm) {
    if (form.valid) {
      Email.send({
        SecureToken: "3af98cf5-9ffe-44bf-b1d0-911edf42b100",
        To: 'tuan.tran6703@gmail.com',
        From: 'tranquangtuan060703@gmail.com',
        Subject: `New message from ${form.value.firstName} ${form.value.lastName}`,
        Body: `Message: ${form.value.message} <br> From: ${form.value.email}`
      }).then(
        () => alert("Message Sent Successfully")
      );
    }
  }
  
}
