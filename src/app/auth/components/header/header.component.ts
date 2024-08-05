import { Component } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {Router} from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatMenuModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private router: Router){}
  openSupport(){
    this.router.navigate(['support']);
  }
}
