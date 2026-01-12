En la siguiente parte le va a cambiar a list.component la forma en que recibe los 
parametros para crear objetos

estos : 
<div class="container mx-auto">
    <!-- <app-header /> -->
    <div class="grid grid-cols-4 gap-8 mt-5">
        <!-- En este caso crea varios elementos solo variando sus atributos atraves del ngFor -->
        <app-product
            *ngFor="let product of products()" 
            [title]="product.title"
            [price]="product.price"
            [img]="product.img"
            (addToCart)="fromChild($event)" />
    </div>
</div>
