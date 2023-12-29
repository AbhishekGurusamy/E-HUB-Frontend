import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  store_data = new FormGroup({
    'username': new FormControl(null,Validators.required),
    'password': new FormControl(null,Validators.required),
    'email_id': new FormControl(null, [Validators.required,Validators.email]),
    'img': new FormControl(null,[Validators.required])
  })

  selectedfile: File | any = null;
  currentFileUpload: any;

  constructor(){}

  ngOnInit(): void {
    
  }

  onFileChanged(event:any){
    let fd = new FormData();
    this.selectedfile = event.target.files;
    this.currentFileUpload = this.selectedfile[0];
    console.log(this.currentFileUpload)
    fd.append("file", "gk")
    console.log(JSON.stringify(fd))



    // this.selectedfile = event.target.files
    // this.currentFileUpload = this.selectedfile.item(0)
    // console.log(this.selectedfile)
    // console.log(this.currentFileUpload)
    
  }

  get_store_Data(){
    // const fd = new FormData();
    // this.selectedFiles = event.target.files;
    // this.currentFileUpload = this.selectedfile.name;
    // fd.append('image',this.currentFileUpload)
    // console.log(fd)
    // console.log(this.store_data.value)
  }

  

}

