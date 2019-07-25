
import { Component, ViewChild } from '@angular/core';
import { ServiceProvider,Item } from '../../providers/service/service';
import { Platform, ToastController, List } from 'ionic-angular';
import { v4 as uuid } from 'uuid';
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: Item[] = [];

  newItem: Item = <Item>{};

  @ViewChild('mylist')mylist: List;

  constructor(private storageService: ServiceProvider, private plt: Platform, private toastController: ToastController) {
    this.plt.ready().then(() => {
      this.loadItems();
    }).catch();
  }

  // CREATE
  addItem():void{
    this.newItem.modified = Date.now();
    this.newItem.id=uuid();
    this.storageService.addItem(this.newItem).then(item => {
      this.newItem = <Item>{};
      this.showToast('Item added!')
      this.loadItems(); // Or add it to the array directly
    }).catch(err=>{

    });
  }

  // READ
  loadItems():void {
    this.storageService.getItems().then(items => {
      this.items = items;
    }).catch(err=>{
      
    });
  }

  // UPDATE
  updateItem(item: Item):void {
    item.title = `UPDATED: ${item.title}`;
    item.modified = Date.now();

    this.storageService.updateItem(item).then(item => {
      this.showToast('Item updated!');
      console.log(this.mylist);
      this.mylist.sliding=false;
      // Fix or sliding is stuck afterwards
      this.loadItems(); // Or update it inside the array directly
    }).catch(eror=>{
      console.log(eror);
    });
  }

  // DELETE
  deleteItem(item: Item):void{
    this.storageService.deleteItem(item.id).then(item => {
      this.showToast('Item removed!');
      this.mylist.sliding=false; // Fix or sliding is stuck afterwards
      this.loadItems(); // Or splice it from the array directly
    }).catch(err=>{
      console.log(err)
    });
  }

  // Helper
  async showToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

}
