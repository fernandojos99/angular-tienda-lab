import { Routes } from '@angular/router';

// Ya no se usan porque ahora son el routing (lazylo )
import { ListComponent } from './domains/products/pages/list/list.component';
import { AboutComponent } from './domains/info/pages/about/about.component';

import { NotFoundComponent } from './domains/info/pages/not-found/not-found.component';
import { LayoutComponent } from '@shared/components/layout/layout.component';
import { ProductDetailComponent } from './domains/products/pages/product-detail/product-detail.component'; 
// import ListComponent from './domains/products/pages/list/list.component';

//ESTO ERA ANTES DE LA TECNICA LAZYLOADING
// export const routes: Routes = [
//     {
//         path: '',
//         component: LayoutComponent,
//         children: [
//             {
//                 path: '',   
//                 component: ListComponent
//             },
//             {
//                 path: 'about',
//                 component: AboutComponent
//             },
//             {
//                 path: 'product/:id',
//                 component: ProductDetailComponent
//             },
//         ]
//     },
//     {
//         path: '**',
//         component: NotFoundComponent
//     }
// ];


export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '', 
                component: ListComponent  
                // Se usa ".then" porque se uso una promesa y de la promesa ya sacamos el componente 
                // loadComponent: () => import('./domains/products/pages/list/list.component').then(m =>m.ListComponent)
                //la otra forma es agregar (default a la cabezera del componente)
                // loadComponent: () => import('./domains/products/pages/list/list.component')

            },
            {

                path: 'about',
                component: AboutComponent
                // loadComponent: () => import('./domains/info/pages/about/about.component')

            },
            {
                path: 'product/:id',
                component: ProductDetailComponent
            },
        ]
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];






