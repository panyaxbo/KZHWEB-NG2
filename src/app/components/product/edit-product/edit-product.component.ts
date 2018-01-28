import { UomService } from './../../../services/uom/uom.service';
import { SupplierService } from './../../../services/supplier/supplier.service';
import { ProductCategoryService } from './../../../services/product-category/product-category.service';
import { ProductTypeService } from './../../../services/product-type/product-type.service';
import { Uom } from './../../../classes/uom';
import { Supplier } from './../../../classes/supplier';
import { ProductCategory } from './../../../classes/product-category';
import { ProductType } from './../../../classes/product-type';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { UploadService } from './../../../services/upload/upload.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Product } from '../../../classes/product';
import { ProductService } from '../../../services/product/product.service';


declare var firebase: any;
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  ProductId: any;
  Product: Product;
  IsProductSet = false;

  ProductTypeControl = new FormControl();
  ProductCategoryControl = new FormControl();
  SupplierControl = new FormControl();
  UomControl = new FormControl();
  ContainUomControl = new FormControl();

  FilteredProductType: Observable<ProductType[]>;
  FilteredProductCategory: Observable<ProductCategory[]>;
  FilteredSupplier: Observable<Supplier[]>;
  FilteredUom: Observable<Uom[]>;
  FilteredContainUom: Observable<Uom[]>;

  // Collections
  ProductTypes: ProductType[];
  ProductCategories: ProductCategory[];
  Suppliers: Supplier[];
  Uoms: Uom[];
  ContainUoms: Uom[];

  private ProductUid: string;
  private ProductFirebaseStorage: any;

  @Input() folder: string;
  constructor(private router: Router,
              private ar: ActivatedRoute,
              private db: AngularFireDatabase,
              public _productService: ProductService,
              public _uploadService: UploadService,
              private _productTypeService: ProductTypeService,
              private _productCategoryService: ProductCategoryService,
              private _supplierService: SupplierService,
              private _uomService: UomService) {

  }

  ngOnInit() {
    this.ar.params.subscribe(param => {
      this.ProductId = param.id;
      if (this.ProductId === 'new') {
        this.NewProduct();
      } else {
        this._productService.LoadProductByKey(this.ProductId)
        .subscribe(product => {
          this.PopulatedProduct(product);
        });
      }
    });

    this._productTypeService.LoadProductTypeComboBox().subscribe(data => {
      this.ProductTypes = data;
      this.FilteredProductType = this.ProductTypeControl.valueChanges
      .startWith(null)
      .map(productType => productType && typeof productType === 'object' ? productType.ProductTypeNameTh : productType)
      .map(name => name ? this.filterProductType(name) : this.ProductTypes.slice());
    });
    this._productCategoryService.LoadProductCategoryComboBox().subscribe(data => {
      this.ProductCategories = data;
      this.FilteredProductCategory = this.ProductCategoryControl.valueChanges
      .startWith(null)
      // tslint:disable-next-line:max-line-length
      .map(productCategory => productCategory && typeof productCategory === 'object' ? productCategory.ProductCategoryNameTh : productCategory)
      .map(name => name ? this.filterProductCategory(name) : this.ProductCategories.slice());
    });
    this._supplierService.LoadSupplierComboBox().subscribe(data => {
      this.Suppliers = data;
      this.FilteredSupplier = this.SupplierControl.valueChanges
      .startWith(null)
      // tslint:disable-next-line:max-line-length
      .map(supplier => supplier && typeof supplier === 'object' ? supplier.SupplierNameTh : supplier)
      .map(name => name ? this.filterSupplier(name) : this.Suppliers.slice());
    });
    this._uomService.LoadUomComboBox().subscribe(uomCombo => {
      this.Uoms = uomCombo;
      this.FilteredUom = this.UomControl.valueChanges
      .startWith(null)
      // tslint:disable-next-line:max-line-length
      .map(uom => uom && typeof uom === 'object' ? uom.UomNameTh : uom)
      .map(name => name ? this.filterUom(name) : this.Uoms.slice());
    });

    this._uomService.LoadContainUomComboBox().subscribe(containUomCombo => {
      this.ContainUoms = containUomCombo;
      this.FilteredContainUom = this.ContainUomControl.valueChanges
      .startWith(null)
      // tslint:disable-next-line:max-line-length
      .map(containUom => containUom && typeof containUom === 'object' ? containUom.UomNameTh : containUom)
      .map(name => name ? this.filterContainUom(name) : this.ContainUoms.slice());
    });

  }
  // Filtering Product Type Method
  filterProductType(name: string): ProductType[] {
    return this.ProductTypes.filter(productType =>
      productType.ProductTypeNameTh.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }
  displayProductType(productType: ProductType): any {
    return productType ? productType.ProductTypeNameTh : productType;
  }
  // Filtering Product Category Method
  filterProductCategory(name: string): ProductCategory[] {
    return this.ProductCategories.filter(productCategory =>
      productCategory.ProductCategoryNameTh.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }
  displayProductCategory(productCategory: ProductCategory): any {
    return productCategory ? productCategory.ProductCategoryNameTh : productCategory;
  }
  // Filtering Supplier Method
  filterSupplier(name: string): Supplier[] {
    return this.Suppliers.filter(supplier =>
      supplier.SupplierNameTh.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }
  displaySupplier(supplier: Supplier): any {
    return supplier ? supplier.SupplierNameTh : supplier;
  }
  // Filtering Uom Method
  filterUom(name: string): Uom[] {
    return this.Uoms.filter(uom =>
      uom.UomNameTh.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }
  displayUom(uom: Uom): any {
    return uom ? uom.UomNameTh : uom;
  }
  // Filtering Contain Uom Method
  filterContainUom(name: string): Uom[] {
    return this.ContainUoms.filter(containUom =>
      containUom.UomNameTh.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }
  displayContainUom(containUom: Uom): any {
    return containUom ? containUom.UomNameTh : containUom;
  }

  NewProduct() {
    this.Product = this._productService.NewProduct();
  }
  // tslint:disable-next-line:no-shadowed-variable
  PopulatedProduct(popProduct) {
    console.log(popProduct);
    this.Product = this._productService.PopulatedProduct(popProduct);
    console.log(this.Product);
  }
  SaveProduct() {
    if (this.Product.$key === '' || this.Product.$key === undefined) {
      this._productService.CreateProduct(this.Product);
    } else {
      this._productService.UpdateProduct(this.Product);
    }
  }
  DeleteProduct() {
  //  this.Product = this._productService.NewProduct();
  }
  BacktoSearchProduct() {
    this.router.navigateByUrl('/main/(main-detail:search-product)');
  }
  ExitProduct() {
    this.router.navigateByUrl('/main');
  }
  SetProductSet() {
    this.IsProductSet = true;
  }

}
