export class TripDestination {
  private selected: boolean = false;
  public services: string[];
  public id: string;

  constructor(public name: string, public imageUrl: string) {
    this.services = ['pool', 'restaurant', 'bar'];
    this.id = name.toLowerCase().replace(/ /g, '-') + '-' + Math.random();
  }

  isSelected(): boolean {
    return this.selected;
  }

  setSelected(selected: boolean): void {
    console.log('init setSelected: ', this.selected);
    // this.selected = selected;
    console.log('end setSelected: ', this.selected);
  }
}
