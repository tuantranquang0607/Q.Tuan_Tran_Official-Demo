import { Component, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Typed from 'typed.js';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  constructor(private emailService: EmailService) {}

  ngAfterViewInit(): void {
    const typed = new Typed(".text", {
      strings: ["a Full-stack developer!", "a Game developer!", "an UI designer!", "a digital artist!"],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 50,
      loop: true
    });
  }

  onSubmit(form: NgForm) {
    const formData = form.value;

    const mailOptions = {
      from: formData.email,
      to: 'tuan.tran6703@gmail.com', 
      text: `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    };

    this.emailService.sendEmail(mailOptions)
      .subscribe(
        response => console.log('Email sent successfully', response),
        error => console.error('Error sending email', error)
      );
  }

  onClear(form: NgForm) {
    form.reset();
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
