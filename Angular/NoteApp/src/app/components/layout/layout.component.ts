import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Language } from '../../../languages/language.service';
import { CookiesService } from 'src/app/services/cookies.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./layout.component.sass']
})
export class LayoutComponent {

}
