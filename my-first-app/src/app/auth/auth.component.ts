import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertAnchorDirective } from '../shared/alert-anchor.directive';
import { AlertComponent } from '../shared/alert/alert.component';
import { LoginRequest, SignInRequest, User } from './auth-adaptor.model';
import { AuthAdaptorService } from './auth-adaptor.service';
import { AuthService } from './auth.service';

enum FormModeType {
  LOGIN,
  SIGN_IN,
}

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  @ViewChild(AlertAnchorDirective) alertAnchor: AlertAnchorDirective;
  FormModeType = FormModeType;
  isLoading = false;
  mode: FormModeType = FormModeType.LOGIN;

  form = this.fb.group({
    email: ['test@test.com', [Validators.required, Validators.email]],
    password: ['000000', [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private fb: FormBuilder,
    private authAdaptorService: AuthAdaptorService,
    private authService: AuthService,
    private router: Router,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnInit(): void {}

  onSwitchMode() {
    switch (this.mode) {
      case FormModeType.LOGIN:
        this.mode = FormModeType.SIGN_IN;
        break;

      default:
        this.mode = FormModeType.LOGIN;
        break;
    }
    console.log('Mode [%s]', this.mode);
  }

  onSubmit() {
    switch (this.mode) {
      case FormModeType.LOGIN:
        this.logIn();
        break;

      default:
        this.signIn();
        break;
    }
  }

  logIn() {
    this.isLoading = true;
    this.authAdaptorService.logIn(new LoginRequest(this.form.value)).subscribe(
      (response) => {
        console.log('response: [%o]', response);
        const user = User.fromLoginResponse(response);
        console.log('user: [%o]', user);
        this.authService.authenticate(user, true);
        this.isLoading = false;
      },
      (e) => {
        console.log('error: [%o]', e);
        this.showAlert(e);
        this.isLoading = false;
      }
    );
  }

  signIn() {
    this.authAdaptorService
      .signIn(new SignInRequest(this.form.value))
      .subscribe(
        (response) => {
          console.log('response: [%o]', response);
          this.form.reset();
          this.mode = FormModeType.LOGIN;
          this.isLoading = false;
        },
        (e) => {
          console.log('error: [%o]', e);
          this.showAlert(e);
          this.isLoading = false;
        }
      );
  }

  showAlert(message: String) {
    const alertComponent = this.componentFactoryResolver.resolveComponentFactory(
      AlertComponent
    );
    this.alertAnchor.viewContainerRef.clear();
    const alertComponentRef = this.alertAnchor.viewContainerRef.createComponent(
      alertComponent
    );
    alertComponentRef.instance.message = message;
    const subscription = alertComponentRef.instance.close.subscribe(() => {
      this.alertAnchor.viewContainerRef.clear();
      subscription.unsubscribe();
    });
  }
}
