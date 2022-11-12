import {Component, ElementRef, Input, OnInit, ViewChild} from "@angular/core";
import {FormControl} from "@angular/forms";
import {map, Observable, startWith} from "rxjs";
import {AdminService, ProductDTO, ProductService, ProductTitleAndIdDTO} from "../../core/services/flower-shop";


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  myControl = new FormControl('');
  productTitle:ProductTitleAndIdDTO[];
  filteredOptions: Observable<ProductTitleAndIdDTO[]>;
  products:Array<ProductDTO>;
productId:number
  isCompled=false;
  @ViewChild("variable",{static:false})
  nameParagraph:ElementRef|undefined;
  public constructor(private productServ:ProductService,
                     private adminService: AdminService) {

  }

  async ngOnInit() {
    await this.getAllTitle();


  }

  private _filter(value: string): ProductTitleAndIdDTO[] {
    const filterValue = value.toLowerCase();

    return this.productTitle.filter(option => option.title.toLowerCase().includes(filterValue));
  }

  private getAllTitle() {
    this.productServ.getProductTitle().subscribe(x=>this.productTitle=x);
  }

  show() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
    this.isCompled=false;
  }

  find() {
 this.productId=Number(this.nameParagraph.nativeElement.textContent)
    console.log("Admin"+this.productId);
    this.isCompled=true;
  }
}

