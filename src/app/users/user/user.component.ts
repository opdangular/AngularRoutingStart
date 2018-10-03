import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};

  paramsSubscruption: Subscription;

  constructor(private activatedRoute: ActivatedRoute) { }

  // to get data from the route
  ngOnInit() {
    this.user = {
      id: this.activatedRoute.snapshot.params['id'],
      name: this.activatedRoute.snapshot.params['name']
    };

    // to update data on the same component
    // this is route observables
    // when the component is destroyed, the subscruption is also destroyed (theoretically though)
    this.paramsSubscruption = this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.user.id = params['id'];
        this.user.name = params['name'];
      }
    );
  }

  ngOnDestroy(){
    console.log("destroying UserComponent ....")
    // this step may not be required as Angular will take care of this. though it won't hurt.
    this.paramsSubscruption.unsubscribe();
  }

}
