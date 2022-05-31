export class TripDestination {
  private selectec: boolean = false;
  public services: string[];

  constructor(public name: string, public imageUrl: string) {
    this.services = ['pool', 'restaurant', 'bar'];
  }

  isSelected(): boolean {
    return this.selectec;
  }

  setSelected(selected: boolean): void {
    this.selectec = selected;
  }
}
