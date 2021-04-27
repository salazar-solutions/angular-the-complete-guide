import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DefaultPublication, Publication } from './publication.model';
import { PublicationService } from './publications.service';

@Component({
  selector: 'app-httpclient',
  templateUrl: './httpclient.component.html',
  styleUrls: ['./httpclient.component.css'],
})
export class HttpclientComponent implements OnInit, OnDestroy {
  publications: Publication[] = [];
  subscriptions: Subscription[] = [];
  error?: string;

  form = this.fb.group({
    title: ['test-title-1', [Validators.required]],
    content: ['test-content-1', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private publicationService: PublicationService
  ) {}

  ngOnInit(): void {
    const subsciption = this.publicationService.publicationsChanged.subscribe({
      next: () => {
        if (this.publications.length === 0) return;
        this.fetch();
      },
    });
    this.subscriptions.push(subsciption);
  }

  onSubmit() {
    const publication: Publication = new DefaultPublication(this.form.value);
    this.publicationService
      .publish(publication)
      .subscribe((response) => console.log('response [%o]', response));
    console.log('Sumit:[%o]', publication);
  }

  fetch() {
    this.publicationService.list().subscribe(
      (publications) => (this.publications = publications),
      (error) => {
        console.log('Error: [%o]', error);
        this.error = error;
      }
    );
  }

  retrieve(id?: string) {
    if (!id) return;
    this.publicationService.detail(id).subscribe();
  }

  delete(id?: string) {
    if (!id) return;
    this.publicationService.delete(id).subscribe();
  }

  clear() {
    this.publicationService.clear().subscribe();
  }
  clearError() {
    this.error = undefined;
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe);
  }
}
