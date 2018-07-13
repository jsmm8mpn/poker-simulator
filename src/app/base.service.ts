// export enum Suit {
//   D, C, H, S
// }

export class Card {
  rank: number;
  suit: number;
  constructor(rank: number, suit: number) {
    this.rank = rank;
    this.suit = suit;
  }
  matchesSuit(card: Card) {
    return this.suit === card.suit;
  }
  matchesRank(card: Card) {
    return this.rank === card.rank;
  }
  isFace() {
    return this.rank > 10;
  }
}

export class Hand {
  cards: Card[];
  constructor(cards: Card[]) {
    this.cards = cards;
  }
}
