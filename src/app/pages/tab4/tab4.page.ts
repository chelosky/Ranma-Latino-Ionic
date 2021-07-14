import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnDestroy {

  $subscription:Subscription;

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  constructor(
    private router: Router
  ) {}

  test(){
    console.log('xd')
    this.$subscription = timer(500).subscribe(() => {
        console.log('router')
        this.router.navigateByUrl('/tabs/tab1');
    });
  }

  ngOnDestroy() {
    if (this.$subscription) {
      console.log('cancel')
        this.$subscription.unsubscribe();
    }
 }

}
