import { Component } from '@angular/core'
import { MatIconRegistry } from '@angular/material/icon'
import { DomSanitizer } from '@angular/platform-browser'

import { AuthService } from './auth/auth.service'

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar
      *ngIf="{
        status: authService.authStatus$ | async,
        user: authService.currentUser$ | async
      } as auth"
      fxLayoutGap="8px"
      color="primary"
    >
      <button mat-icon-button><mat-icon>menu</mat-icon></button>
      <a mat-icon-button routerLink="/home">
        <mat-icon svgIcon="lemon"></mat-icon>
        <span class="mat-h2">SilverMart</span>
      </a>
      <span class="flex-spacer"></span>
      <button
        *ngIf="auth?.status?.isAuthenticated"
        mat-mini-fab
        routerLink="/user/profile"
        aria-label="User Profile"
        matTooltip="Profile"
      >
        <img
          *ngIf="auth?.user?.picture"
          class="img-cropper"
          [src]="auth?.user?.picture"
        />
        <mat-icon *ngIf="!auth?.user?.picture">account_circle</mat-icon>
      </button>
      <button
        *ngIf="auth?.status?.isAuthenticated"
        mat-mini-fab
        routerLink="/user/logout"
        aria-label="Logout"
        matTooltip="Logout"
      >
        <mat-icon>lock_open</mat-icon>
      </button>
    </mat-toolbar>
    <router-outlet></router-outlet>
  `,
  styles: [
    `
      .img-cropper {
        border-radius: 50%;
        width: 40px;
        height: 40px;
        position: relative;
        overflow: hidden;
        margin-top: -8px;
      }
    `,
  ],
})
export class AppComponent {
  constructor(
    iconregistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    public authService: AuthService
  ) {
    iconregistry.addSvgIcon(
      'lemon',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/lemon.svg')
    )
  }
}
