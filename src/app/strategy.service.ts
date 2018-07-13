import { Injectable } from '@angular/core';
import {
  Hand
} from './base.service';

class SuitCounter {
  private counts: any = {};
  add(suit: number) {
    if (this.counts[suit]) {
      this.counts[suit]++;
    } else {
      this.counts[suit] = 1;
    }
  }
  getMaxCount() {
    let maxCount = 0;
    for (const suit in this.counts) {
      if (this.counts[suit] >= maxCount) {
        maxCount = this.counts[suit];
      }
    }
    return maxCount;
  }
}

class Strategy {
  is(hand: Hand) {

  }
}

class RoyalFlush extends Strategy {
  count: number;
  constructor(count: number) {
    super();
    this.count = count;
  }
  is(hand: Hand) {
    const suitCounter = new SuitCounter();
    for (const card of hand.cards) {
      if (card.rank > 9) {
        suitCounter.add(card.suit);
      }
    }
    return (suitCounter.getMaxCount() >= this.count);
  }
}

class Pair extends Strategy {
  rank: number;
  constructor(rank: number) {
    super();
    this.rank = rank;
  }
  is(hand: Hand) {
    let count = 0;
    for (const card of hand.cards) {
      if (card.rank === this.rank) {
        count++;
      }
    }
    return (count > 1);
  }
}

let stategies = [
  new RoyalFlush(5),
  new RoyalFlush(4),
  new Pair(1),

];

@Injectable({
  providedIn: 'root'
})
export class StrategyService {

  constructor() {
  }
}
