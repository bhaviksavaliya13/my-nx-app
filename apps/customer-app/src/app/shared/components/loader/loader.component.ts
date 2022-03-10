import { Component, OnDestroy } from '@angular/core';
import { LoaderService } from '../../services/loader/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
})
export class LoaderComponent implements OnDestroy {
  public show = false;
  isLoading = false;
  loaderEvent: any;

  constructor(private loaderService: LoaderService) {
    this.init();
  }

  init(): any {
    this.loaderEvent = this.loaderService.isLoading.subscribe(
      (res: boolean) => {
        this.isLoading = res;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnDestroy() {
    this.loaderEvent.unsubscribe();
  }
}
