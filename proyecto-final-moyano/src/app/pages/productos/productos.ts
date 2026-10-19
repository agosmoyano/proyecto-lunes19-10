import { Component } from '@angular/core';
import { Producto } from '../../models/producto';
import { ProductoCard } from '../../components/producto-card/producto-card';

@Component({
  imports: [ProductoCard],
  selector: 'app-productos',
  styleUrl: './productos.css',
  templateUrl: './productos.html',
})
export class Productos {
  productos: Producto[] = [
    { titulo: 'Osaka Pro Tour 100 2.0 - Proto Bow', precio: '$799.000,00', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbaOqVMzIp9cWgFRsnK_WLvapPiW8BvZ88fto8Z_sa4w&s=10' },
    { titulo: 'Osaka Pro Tour Stickbag XL 2.0 - Iconic Black', precio: '$390.000,00', image: 'https://acdn-us.mitiendanube.com/stores/005/296/339/products/bag00062_9013_1_pro-tour-stickbag-xl-2-0_iconic-black-a08dd55e9af895dcaf17392955867064-1024-1024.webp' },
    { titulo: 'Osaka Footwear RYU - Iconic White', precio: '$325.000,00', image: 'https://acdn-us.mitiendanube.com/stores/005/296/339/products/ftw00049_1022_1_ryu_iconic-white-49fdfe300f4361612217901012599693-1024-1024.webp' },
    { titulo: 'Osaka Proto Bow 85 - Navy Peony', precio: '$530.000,00', image: 'https://acdn-us.mitiendanube.com/stores/005/296/339/products/stk00370_6099_1_proto-bow-85_navy-peony-e912466083d44af8f517745509657005-1024-1024.webp' },
    { titulo: 'Osaka Sports Stickbag Large - Peony', precio: '$195.000,00', image: 'https://acdn-us.mitiendanube.com/stores/005/296/339/products/bag00121_6086_1_sports-stickbag-large_peony-bdcdde445601b0d55d17539858458982-1024-1024.webp' },
    { titulo: 'Osaka Footwear Kai Mk1 - Blue Topaz', precio: '$245.000,00', image: 'https://acdn-us.mitiendanube.com/stores/005/296/339/products/ftw00044_6005_1_kai-mk1-pro-tour_blue-topaz-c0f833be1df75138e817901010357126-1024-1024.webp' },
    { titulo: 'Osaka Giga Waterbottle - Retro Blue', precio: '$17.713,00 ', image: 'https://osakaworld.com/cdn/shop/files/GDG00123_6080_1_Giga_Water_Bottle_Retro_Blue_842x.jpg?v=1770304539' },
    { titulo: 'Osaka Field Hockey Stick Pro Bow LTD - Futurelab | Rose Bud', precio: '$664.237,50 ', image: 'https://osakaworld.com/cdn/shop/files/STK00422_5050_1_Pro_Bow_Ltd_-_Futurelab_Rose_Bud_842x.jpg?v=1778577759' },
    { titulo: 'Osaka Pro Tour Stickbag Modular - French Navy', precio: '$296.546,60', image: 'https://osakaworld.com/cdn/shop/files/BAG00154_6003_1_Pro_Tour_Stickbag_Modular_French_Navy_842x.jpg?v=1770304448' },
    { titulo: 'Osaka Footwear KAI Mk1 - Pro Tour - Electric Fuchsia', precio: '$203.394,48', image: 'https://osakaworld.com/cdn/shop/files/FTW00033_5046_1_KaiMK1-ProTour_RhodamineRed_842x.jpg?v=1776428136' },
    {titulo:'Osaka Footwear KAI Mk1 - Manor Blue', precio:'$81.370,46',image:'https://osakaworld.com/cdn/shop/files/FTW00015_6050_1_Kai_MK1_Manor_Blue_842x.jpg?v=1770304528'},
    {titulo:'Osaka Footwear IDO Mk1 | White-Begonia Pink', precio:'$115.275,91',image:'https://osakaworld.com/cdn/shop/files/FTW00014_1029_1_Ido_MK1_White-Begonia_Pink_842x.jpg?v=1770304528'},
  ];
}