import { TestBed } from '@angular/core/testing'

import { FirebaseAuthService } from './auth.firebase.service'

describe('FirebaseAuthService', () => {
  let service: FirebaseAuthService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(FirebaseAuthService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
