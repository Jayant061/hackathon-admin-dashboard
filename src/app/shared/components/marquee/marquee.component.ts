import { Component, HostBinding, input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-marquee',
  standalone: true,
  imports: [],
  templateUrl: './marquee.component.html',
  styleUrl: './marquee.component.scss'
})
export class MarqueeComponent implements OnInit{
  image = input.required<string>();
  heading = input.required<string>();
  description = input.required<string>();
  isLastEl = input.required<boolean>();
  @HostBinding("class.marquee-border") isLast = false;

  ngOnInit(): void {
    this.isLast = !this.isLastEl()
  }

}
