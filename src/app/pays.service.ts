import { Hand } from './base.service';

enum Hands {
  ROYAL,
  ACES_KICKER,
  ACES,
  TWO_TO_FOURS_KICKER,
  TWO_TO_FOURS,
  FIVE_TO_KINGS,
  STRAIGHT_FLUSH,
  FULL_HOUSE,
  FLUSH,
  STRAIGHT,
  THREE_OF_A_KIND,
  TWO_PAIR,
  TWO_FACE_CARDS,
  NOTHING
}

class Win {
  name: string;
  prize: number;
  constructor(name: string, prize: number) {
    this.name = name;
    this.prize = prize;
  }
  is(hand: Hand) {

  }
  getName(): string {
    return this.name;
  }
  getPrize(): number {
    return this.prize;
  }
}

class RoyalFlush extends Win {
  is(hand: Hand) {
    const suit = hand.cards[0].suit;
    for (const card of hand.cards) {
      if (card.rank < 10 || card.suit !== suit) {
        return false;
      }
    }
    return true;
  }
}

class JacksOrBetter extends Win {
  is(hand: Hand) {
    const cards = hand.cards;
    for (let i = 0; i < cards.length; i++) {
      if (cards[i].isFace()) {
        for (let j = (i + 1); j < cards.length; j++) {
          if (cards[i].rank === cards[j].rank) {
            return true;
          }
        }
      }
    }
    return false;
  }
}

const payTable = [
  new RoyalFlush('Royal Flush', 4000),
  new JacksOrBetter('Jacks or Better', 5)
];

export class PayTable {
  static getResult(hand: Hand) {
    for (const win of payTable) {
      if (win.is(hand)) {
        return win;
      }
    }
  }
}

// let payTable: Map<Hands, number> = new Map();
// payTable.set(Hands.ROYAL, 4000);
// payTable.set(Hands.ACES_KICKER, 2000);
// payTable.set(Hands.ACES, 800);
// payTable.set(Hands.TWO_TO_FOURS_KICKER, 800);
// payTable.set(Hands.TWO_TO_FOURS, 400);
// payTable.set(Hands.FIVE_TO_KINGS, 250);
// payTable.set(Hands.STRAIGHT_FLUSH, 250);
// payTable.set(Hands.FULL_HOUSE, 45);
// payTable.set(Hands.FLUSH, 25);
// payTable.set(Hands.STRAIGHT, 20);
// payTable.set(Hands.THREE_OF_A_KIND, 15);
// payTable.set(Hands.TWO_PAIR, 5);
// payTable.set(Hands.TWO_FACE_CARDS, 5);
// payTable.set(Hands.NOTHING, 0);
