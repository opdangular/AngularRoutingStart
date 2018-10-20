import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  onLoadServers(){
    // some processing
    // now we want to navigate to somewhere else
    this.router.navigate(['/servers']); // remember to give a absolute path..

  }

  onLoadServer(id: number){
    // some processing
    // now we want to navigate to somewhere else
    this.router.navigate(['/servers', id, 'edit'], { queryParams: { allowEdit: '1'}, fragment: "loading"}); // remember to give a absolute path..

  }

  onLogin() {
    this.authService.login();
  }

  onLogout() {
    this.authService.logout();
  }

}
