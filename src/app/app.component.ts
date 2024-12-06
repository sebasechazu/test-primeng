import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonModule, MenuModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      { label: 'Datos Personales', icon: 'pi pi-user', routerLink: '/datos-personales' },
      { label: 'Datos Académicos', icon: 'pi pi-book', routerLink: '/datos-academicos' },
      { label: 'Dirección Profesional', icon: 'pi pi-briefcase', routerLink: '/direccion-profesional' },
      { label: 'Datos Bancarios', icon: 'pi pi-credit-card' },
      { label: 'Especialidades', icon: 'pi pi-star' },
      { label: 'Premios y distinciones', icon: 'pi pi-trophy' },
      { label: 'Publicación de datos', icon: 'pi pi-upload' },
      { label: 'Aceptación y Enviar', icon: 'pi pi-check' }
    ];
  }
}
