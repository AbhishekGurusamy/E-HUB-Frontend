import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StoreService } from 'src/app/services/store.service'


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

  selectedfile: File;

  constructor(private storeservice: StoreService) {
    this.selectedfile = new File([], '');
  }

  ngOnInit(): void {

  }

  onFileChange(event: any) {
    this.selectedfile = <File>event.target.files[0];
  }


  get_store_Data() {
    console.log(this.store_data.value)
    let fd: FormData = new FormData();
    fd.append('images', this.selectedfile, this.selectedfile.name)
    console.log(fd.has('images'))
    this.storeservice.upload_img(fd)
  }
}

