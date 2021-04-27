import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css'],
})
export class ConfirmationDialogComponent implements OnInit {
  @Input() message: string = '';
  @Output() close = new EventEmitter<void>();
  @Output() accept = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  onClose() {
    this.close.next();
  }

  onAccept() {
    this.accept.next();
  }

  onCancel() {
    this.cancel.next();
  }
}
