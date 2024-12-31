import { computed, Injectable, signal, Signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HackathonCardsService {
  constructor() {}
  private readonly query = signal<string>('');
  private readonly level = signal<string[]>([]);
  private readonly status = signal<string[]>([]);

  setQuery(query: string) {
    this.query.set(query);
  }

  setLevels(levels: string[]) {
    this.level.set(levels);
  }
  setStatuses(statuses: string[]) {
    this.status.set(statuses);
  }
  removeFilter(filter: string) {
    this.level.set(this.level().filter((l) => l !== filter));
    this.status.set(this.status().filter((s) => s !== filter));
  }
  getQuery: Signal<string> = computed(()=>  {
    return this.query();
  })
  getStatuses: Signal<string[]> = computed(()=> {
    return this.status();
  })
  getLevels: Signal<string[]> = computed(()=>{
    return this.level();
  })
}
