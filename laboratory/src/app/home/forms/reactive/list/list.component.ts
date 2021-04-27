import { Component, OnInit } from '@angular/core';
import { Client } from '..';
import { ClientsService } from '../clients.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  clients: Client[] = [];
  constructor(private clientService: ClientsService) {}

  ngOnInit(): void {
    this.clients = this.clientService.clients;
    this.clientService.clientChanged.subscribe({
      next: () => {
        this.clients = this.clientService.clients;
      },
    });
  }

  onDelete(index: number) {
    this.clientService.delete(index);
  }
}
