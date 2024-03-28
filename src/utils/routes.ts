type Routes = {
  HOME: string;
  REGISTRATION: string;
  BASKET: string;
  AUTHORIZATION: string;
  PRODUCT_PAGE: string;
};

export const ROUTES: Routes = {
  HOME: '/',
  REGISTRATION: '/registration',
  BASKET: '/basket',
  AUTHORIZATION: '/authorization',
  PRODUCT_PAGE: '/product/:id',
};
