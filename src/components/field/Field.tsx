import { Style } from "./Field.style.ts";
import { Card } from "../card/Card.tsx";
import { useEffect, useState } from "react";
import { Button } from "../fancyButton/Button.tsx";

export type ContentType = {
    emoji: string
    id: number
    matched: boolean
};
const emojisArr: string[] = ['🥗', '🌭', '🍟', '🍔', '🍕', '🍳', '🍪', '🍫'];

export const Field = () => {

    const [cards, setCards] = useState<ContentType[]>([]);
    const [turns, setTurns] = useState(0);
    const [choiseOne, setChoiseOne] = useState<ContentType | null>(null);
    const [choiseTwo, setChoiseTwo] = useState<ContentType | null>(null);
    const [disabled, setDisabled] = useState(false);

// for correct game start
    useEffect(() => {
        shuffleCards(emojisArr);
    }, []);

    //compare two selected cards
    useEffect(() => {
        if (choiseOne && choiseTwo) {
            setDisabled(true);
            if (choiseOne.emoji === choiseTwo.emoji) {
                setTimeout(() => {
                    resetTurn();
                    setCards(prevCards => {
                        return prevCards.map(card => {
                            if (card.emoji === choiseOne.emoji) {
                                return {...card, matched: true};
                            } else {
                                return card;
                            }
                        });
                    });
                }, 300);

                if (cards.reduce((acc, el) => (!el.matched ? acc + 1 : acc), 0) === 2) {
                    setTimeout(() => {
                        alert(`Congratulations! You win! It's took ${turns + 1} attemps.`);
                    }, 700);
                }

            } else {
                setTimeout(() => {
                    resetTurn();
                }, 1000);
            }
        }
    }, [choiseOne, choiseTwo]);

//make a game data
    const shuffleCards = (arr: string[]) => {
        const shuffledCards = arr.concat(arr).sort(() => Math.random() - 0.5).map((el, index): ContentType => {
            return {
                emoji: el,
                id: index,
                matched: false
            };
        });
        setChoiseOne(null);
        setChoiseTwo(null);
        setCards(shuffledCards);
        setTurns(0);
    };

    //handle a choice
    const handleChoise = (card: ContentType) => {
        if (choiseOne) {
            if (choiseOne.id !== card.id) {
                setChoiseTwo(card)
            }
        } else {
            setChoiseOne(card);
        }
    };

    //reset choices & increase turn
    const resetTurn = () => {
        setDisabled(false);
        setChoiseOne(null);
        setChoiseTwo(null);
        setTurns(prev => prev + 1);
    };

    return (<>
            <Button onClick={() => shuffleCards(emojisArr)}>New Game</Button>
            <Style.Field>
                {cards.map(el => {
                    return (
                        <Card
                            key={el.id}
                            content={el}
                            isOpen={el === choiseOne || el === choiseTwo}
                            handleChoice={handleChoise}
                            disabled={disabled}
                        />)
                })}
            </Style.Field>
            <p>Turns: {turns}</p>
        </>
    );
};
