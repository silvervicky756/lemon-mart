import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { combineLatest } from 'rxjs'
import { filter, tap } from 'rxjs/operators'

import { AuthService } from '../auth/auth.service'

@Component({
  selector: 'app-home',
  template: `
    <div *ngIf="(authService.authStatus$ | async)?.isAuthenticated; else doLogin">
      <div class="mat-display-3">
        Everybody Welcome
      </div>
    </div>
    <ng-template #doLogin>
      <app-login></app-login>
    </ng-template>
  `,
  styles: [
    `
      div[fxLayout] {
        margin-top: 32px;
      }
    `,
  ],
})
export class HomeComponent implements OnInit {
  constructor(public authService: AuthService) {}

  ngOnInit(): void {}
}
