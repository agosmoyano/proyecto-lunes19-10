import { Component, signal, } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { ProductoCard } from './components/producto-card/producto-card';
import { Nosotros } from './pages/nosotros/nosotros';
import { Contacto } from './pages/contacto/contacto';


@Component({
  imports: [RouterOutlet, Navbar, Footer,ProductoCard,Nosotros,Contacto],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',

})
export class App {
  protected readonly title = signal('proyecto-final-moyano');
}
