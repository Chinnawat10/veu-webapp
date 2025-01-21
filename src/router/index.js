import { createWebHistory, createRouter } from 'vue-router';
import Home from '../views/Home.vue';
import Products from '../views/Products.vue';
import About from '../views/About.vue';
import NotFound from '../views/NotFound.vue';
import ProductDetails from '../views/ProductDetail.vue';

const routes = [
  { path: '/', component: Home 
  },
  { path: '/about', component: About 

  },
  { path: '/products', component: Products 

  },

  { path: '/productsdetail', component: ProductDetails

  },
    {
      path: '/productdetails/:productId',
      name: 'ProductDetails',
      Comment : ProductDetails,
      props: true,
    },
    {
      path: "/products/:id",
      name: "ProductDetail",
      component : ProductDetails,
      props: true
    },
    {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
}
);

export default router;