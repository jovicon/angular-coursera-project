export class TripDestination {
  private selectec: boolean = false;
  public services: string[];
  public id: string;

  constructor(public name: string, public imageUrl: string) {
    this.services = ['pool', 'restaurant', 'bar'];
    this.id = name.toLowerCase().replace(/ /g, '-') + '-' + Math.random();
  }

  isSelected(): boolean {
    return this.selectec;
  }

  setSelected(selected: boolean): void {
    this.selectec = selected;
  }
}
