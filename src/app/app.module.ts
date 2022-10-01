import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { RegisteredUserListComponent } from './admin/registered-user-list/registered-user-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManageCategoryComponent } from './admin/manage-category/manage-category.component';
import { UpdateCategoryComponent } from './admin/update-category/update-category.component';
import { CreateCategoryComponent } from './admin/create-category/create-category.component';
import { ManageFooditemComponent } from './admin/manage-fooditem/manage-fooditem.component';
import { CreateFooditemComponent } from './admin/create-fooditem/create-fooditem.component';
import { UpdateFoodItemComponent } from './admin/update-food-item/update-food-item.component';
import { HomePageComponent } from './customer/home-page/home-page.component';
import { FoodItemComponent } from './customer/food-item/food-item.component';
import { ShoppingCartComponent } from './customer/shopping-cart/shopping-cart.component';
import { HeaderComponent } from './customer/header/header.component';
import { NotFoundComponent } from './customer/not-found/not-found.component';
import { CustomerLoginComponent } from './customer/customer-login/customer-login.component';
import { CheckoutComponent } from './customer/checkout/checkout.component';
import { TextInputComponent } from './partials/text-input/text-input.component';
import { OrderItemsListComponent } from './partials/order-items-list/order-items-list.component';
import { InputContainerComponent } from './partials/input-container/input-container.component';
import { TitleComponent } from './partials/title/title.component';
import { InputValidationComponent } from './partials/input-validation/input-validation.component';
import { OrderSummaryComponent } from './customer/order-summary/order-summary.component';
import { RegisterComponent } from './customer/register/register.component';
import { WelcomePageComponent } from './customer/welcome-page/welcome-page.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { OrderReportComponent } from './admin/order-report/order-report.component';
import { YesNoPipe } from './pipes/yes-no.pipe';
import { FooterComponent } from './footer/footer.component';





@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RegisteredUserListComponent,
    ManageCategoryComponent,
    UpdateCategoryComponent,
    CreateCategoryComponent,
    ManageFooditemComponent,
    CreateFooditemComponent,
    UpdateFoodItemComponent,
    HomePageComponent,
    HeaderComponent,
    FoodItemComponent,
    ShoppingCartComponent,
    NotFoundComponent,
    CustomerLoginComponent,
    CheckoutComponent,
    TextInputComponent,
    OrderItemsListComponent,
    InputContainerComponent,
    TitleComponent,
    InputValidationComponent,
    OrderSummaryComponent,
    RegisterComponent,
    WelcomePageComponent,
    AdminHeaderComponent,
    AdminDashboardComponent,
    OrderReportComponent,
    YesNoPipe,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
