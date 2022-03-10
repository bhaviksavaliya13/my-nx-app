import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OktaAuthModule, OKTA_CONFIG } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import oktaConfig from './core/okta/okta.config';
import { LoaderService } from './shared/services/loader/loader.service';
import { SharedModule } from './shared/shared.module';

const oktaAuth = new OktaAuth(oktaConfig.oidc);

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, SharedModule, CoreModule, FormsModule, OktaAuthModule],
  providers: [LoaderService, { provide: OKTA_CONFIG, useValue: { oktaAuth } }],
  bootstrap: [AppComponent],
})
export class AppModule {}
