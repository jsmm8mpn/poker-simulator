import { Card } from './base.service';

const deck = [];
for (let suit = 1; suit < 5; suit++) {
  for (let rank = 2; rank < 15; rank++) {
    deck.push(new Card(rank, suit));
  }
}

const getRandomCard = function(aDeck) {
  return aDeck[Math.floor(Math.random() * aDeck.length)];
};

const getRandomCardIndex = function() {
  return Math.floor(Math.random() * 52);
};

export class DeckService {
  static getDeck(): Card[] {
    return deck;
  }
  static shuffleDeck(times?: number): Card[] {
    const newDeck = deck.slice(0); // copy
    for (let count = 0; count < (times || 1); count++) {
      for (let i = 0; i < newDeck.length; i++) {
        const randIndex = getRandomCardIndex();
        const temp = newDeck[i];
        newDeck[i] = newDeck[randIndex];
        newDeck[randIndex] = temp;
      }
    }
    return newDeck;
  }
}
