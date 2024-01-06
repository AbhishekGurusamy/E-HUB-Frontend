import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toast:ToastrService) { }

  showsuccess(msg:any,title?:any){
    this.toast.success(msg,title,{
      timeOut: 5000,
      closeButton: true,
      progressBar: true,
      progressAnimation: 'increasing'
    })
  }

  showerror(msg:any,title?:any){
    this.toast.error(msg,title,{
      timeOut: 5000,
      closeButton: true,
      progressBar: true,
      progressAnimation: 'increasing'
    })
  }

  showwarning(msg:any,title?:any){
    this.toast.warning(msg,title,{
      timeOut: 5000,
      closeButton: true,
      progressBar: true,
      progressAnimation: 'increasing'
    })
  }

  showinfo(msg:any,title?:any){
    this.toast.info(msg,title,{
      timeOut: 5000,
      closeButton: true,
      progressBar: true,
      progressAnimation: 'increasing'
    })
  }
}
