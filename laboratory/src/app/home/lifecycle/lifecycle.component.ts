import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

type LifecycleHook = {
  msg: string;
  time: number;
  arg: any;
};

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css'],
})
export class LifecycleComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  public lifecycleHooks: LifecycleHook[] = [];
  private startTime = performance.now();

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    this.processHook(
      '•	ngOnChanges: When an input/output binding value changes.',
      changes
    );
  }
  ngOnInit(): void {
    this.processHook('•	ngOnInit: After the first ngOnChanges.');
  }
  ngDoCheck(): void {
    this.processHook("•	ngDoCheck: Developer's custom change detection.");
  }
  ngAfterContentInit(): void {
    this.processHook(
      '•	ngAfterContentInit: After component content initialized.'
    );
  }
  ngAfterContentChecked(): void {
    this.processHook(
      '•	ngAfterContentChecked: After every check of component content.'
    );
  }
  ngAfterViewInit(): void {
    this.processHook(
      "•	ngAfterViewInit: After a component's views are initialized."
    );
  }
  ngAfterViewChecked(): void {
    this.processHook(
      "•	ngAfterViewChecked: After every check of a component's views."
    );
  }
  ngOnDestroy(): void {
    this.processHook('•	ngOnDestroy: Just before the directive is destroyed.');
  }

  private processHook(msg: string, arg: any = undefined) {
    const timeDiff: any = performance.now() - this.startTime;
    const item: LifecycleHook = {
      msg: msg,
      time: timeDiff,
      arg: arg,
    };
    console.table(item);
    this.lifecycleHooks.push(item);
  }

  refreshView() {
    console.log('Refreshed');
  }
}
