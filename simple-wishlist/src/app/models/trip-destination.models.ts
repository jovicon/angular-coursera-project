export class TripDestination {
  private selected: boolean = false;
  public services: string[];

  constructor(
    public name: string,
    public imageUrl: string,
    public votes: number = 0,
    public id: string | null = null
  ) {
    this.services = ['pool', 'restaurant', 'bar'];
    this.id = id
      ? id
      : name.toLowerCase().replace(/ /g, '-') + '-' + Math.random();
  }

  isSelected(): boolean {
    return this.selected;
  }

  setSelected(selected: boolean): void {
    console.log('init setSelected: ', this.selected);
    this.selected = selected;
    console.log('end setSelected: ', this.selected);
  }

  voteUp(): void {
    this.votes++;
  }

  voteDown(): void {
    this.votes--;
  }
}
