import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  store_data = new FormGroup({
    'username': new FormControl(null, Validators.required),
    'password': new FormControl(null, Validators.required),
    'email_id': new FormControl(null, [Validators.required, Validators.email]),
    'img': new FormControl(null, [Validators.required])
  })

  selectedfile: File | any = null;
  constructor() { }

  ngOnInit(): void {

  }

  onFileChange(event: any) {
    // selectedfile: File;
    // currentFileUpload;
    this.selectedfile = <File>event.target.files[0];
  }


  get_store_Data() {
    let fd: FormData = new FormData();
    // console.log(selectedfile)
    fd.append('images', this.selectedfile, this.selectedfile.name)
    console.log(fd.has('images'))
  }



}

