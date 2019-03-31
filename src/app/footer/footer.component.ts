import { Component, OnInit } from '@angular/core';
import { faTwitter, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {
   faTwitter = faTwitter;
   faLinkedinIn = faLinkedinIn;
   faGithub = faGithub;
  constructor() { }

  ngOnInit() {
  }

}
