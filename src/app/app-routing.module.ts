import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { CreateCategoryComponent } from './admin/create-category/create-category.component';
import { CreateFooditemComponent } from './admin/create-fooditem/create-fooditem.component';
import { ManageCategoryComponent } from './admin/manage-category/manage-category.component';
import { ManageFooditemComponent } from './admin/manage-fooditem/manage-fooditem.component';
import { OrderReportComponent } from './admin/order-report/order-report.component';
import { RegisteredUserListComponent } from './admin/registered-user-list/registered-user-list.component';
import { UpdateCategoryComponent } from './admin/update-category/update-category.component';
import { UpdateFoodItemComponent } from './admin/update-food-item/update-food-item.component';
import { CheckoutComponent } from './customer/checkout/checkout.component';
import { CustomerLoginComponent } from './customer/customer-login/customer-login.component';
import { FoodItemComponent } from './customer/food-item/food-item.component';
import { HomePageComponent } from './customer/home-page/home-page.component';
import { OrderSummaryComponent } from './customer/order-summary/order-summary.component';
import { RegisterComponent } from './customer/register/register.component';
import { ShoppingCartComponent } from './customer/shopping-cart/shopping-cart.component';
import { WelcomePageComponent } from './customer/welcome-page/welcome-page.component';
import { AuthenticationGuardGuard } from './guard/authentication-guard.guard';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'welcome', component: WelcomePageComponent },
  { path: 'admin', component:  AdminDashboardComponent},
  { path: 'users', component: RegisteredUserListComponent },
  { path: 'order-report', component: OrderReportComponent },
  { path: 'category', component: ManageCategoryComponent },
  { path: 'update-category/:id', component: UpdateCategoryComponent },
  { path: 'create-category', component: CreateCategoryComponent },
  { path: 'foodItem', component: ManageFooditemComponent },
  { path: 'create-foodItem', component: CreateFooditemComponent },
  { path: 'update-foodItem/:id', component:UpdateFoodItemComponent},
  { path: 'search/:searchTerm', component: HomePageComponent },
  { path: 'login', component:CustomerLoginComponent},
  { path: 'register', component:RegisterComponent},
  { path: 'view-foodItem/:id', component: FoodItemComponent },
  { path: 'cart', component:ShoppingCartComponent},
  { path: 'checkout', component:CheckoutComponent, canActivate:[AuthenticationGuardGuard]},
  { path: 'order-summary', component:OrderSummaryComponent,canActivate:[AuthenticationGuardGuard]},
  { path: '**', component:WelcomePageComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
