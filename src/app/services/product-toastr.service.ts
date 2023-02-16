import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ProductToastrService {

  constructor(private toast: ToastrService){}
  sepetSuccess(title:any , message:any){
    this.toast.success(message,title,{
    });
  }
}
