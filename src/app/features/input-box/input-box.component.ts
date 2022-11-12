import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {read} from "@popperjs/core";
import {AdminService, Body, CategoriesDTO, ProductCategoruService, ProductDTO} from "../../core/services/flower-shop";
import {EntityDetailsBaseComponent} from "../../core/components/abstractions/entity-details-base.component";
import {fileCountValidator} from "../../shared/validators/fileCount.validator";
import {Image} from "../../core/modals/Image";
import {Observable, takeUntil} from "rxjs";
import {FileInput} from "ngx-material-file-input";

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.css']
})
export class InputBoxComponent extends EntityDetailsBaseComponent implements OnInit {
  @Output() productAdd = new EventEmitter<any>();

  @Input() title='';
  @Input() description='';
  @Input() price='';
  @Input() categoryId:number;

  public categories: CategoriesDTO[];
  public fileList:File[]=[];
  public data= [];

  constructor(private categoriesService: ProductCategoruService,
              ) {
    super();
    this.getCategories()



  }

  ngOnInit() {
    this.detailsForm = new FormGroup({
      title: new FormControl(this.title, Validators.required),
      description: new FormControl(this.description, Validators.required),
      price: new FormControl(this.price, Validators.required),
      productCategoryId: new FormControl(this.categoryId, Validators.required),
      files: new FormControl('', [Validators.required])
    })
    this.detailsForm.get('files').valueChanges.subscribe((filesI: FileInput) =>{//Отслеживание изменений формы осуществляется через подписку на valueChanges

      for (let i of filesI.files) {
        this.show(i).subscribe(x=>this.data.push(x))

      }
    })
  }
  change() {
    this.productAdd.emit(this.detailsForm.value);

  }

  public show(file) {
    return new Observable(observer => {
      let reader = new FileReader();
      reader.onloadend = function () {
        let readingData = reader.result.toString();
        observer.next(readingData);
      }
      reader.readAsDataURL(file)
    })
  }

  getCategories(): void {
    this.categoriesService.getAllCategories()
      .subscribe(category => this.categories = category);


  }

  public saveInternal() {

  }



}
