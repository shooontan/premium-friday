export default class PremiumFriday {
  get() {
    const now = new Date();
    return this.getBy(now.getFullYear(), now.getMonth());
  }

  isPremium(date?: Date | string | number, month?: number, day?: number) {
    if (typeof date === 'undefined') {
      const d1 = new Date();
      const d2 = this.getBy(d1.getFullYear(), d1.getMonth());
      return this.isEqual(d1, d2);
    }

    if (date instanceof Date) {
      const d2 = this.getBy(date.getFullYear(), date.getMonth());
      return this.isEqual(date, d2);
    }

    if (typeof date === 'string') {
      const d1 = new Date(date);
      const d2 = this.getBy(d1.getFullYear(), d1.getMonth());
      return this.isEqual(d1, d2);
    }

    if (
      typeof date === 'number' &&
      typeof month === 'number' &&
      typeof day === 'number'
    ) {
      const d1 = new Date(date, month - 1, day);
      const d2 = this.getBy(d1.getFullYear(), d1.getMonth());
      return this.isEqual(d1, d2);
    }

    return false;
  }

  private getBy(year: number, monthIndex: number) {
    monthIndex++;
    const d = new Date(year, monthIndex, 0);
    const w = d.getDay();
    return new Date(year, monthIndex, -(w + 2) % 7);
  }

  private isEqual(d1: Date, d2: Date) {
    return (
      d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate()
    );
  }
}
