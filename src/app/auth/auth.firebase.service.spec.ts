import { HttpClientTestingModule } from '@angular/common/http/testing'
import { TestBed } from '@angular/core/testing'
import { AngularFireAuth } from '@angular/fire/auth'
import { autoSpyObj } from 'angular-unit-test-helper'

import { UiService } from '../common/ui.service'
import { FirebaseAuthService } from './auth.firebase.service'

describe('FirebaseAuthService', () => {
  let service: FirebaseAuthService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        FirebaseAuthService,
        { provide: AngularFireAuth, useValue: autoSpyObj(AngularFireAuth) },
        { provide: UiService, useValue: autoSpyObj(UiService) },
      ],
    })
    service = TestBed.inject(FirebaseAuthService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
