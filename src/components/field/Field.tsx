import { Style } from "./Field.style.ts";
import { Card } from "../card/Billet.tsx";
import { useEffect, useState } from "react";
import { Styles } from "../App.style.ts";

export type ContentType = {
    emoji: string
    id: number
    matched: boolean
};

// const emojisArr: EmojiType[] = [
//     {emoji: '🥗', match: false,},
//     {emoji: '🌭', match: false,},
//     {emoji: '🍟', match: false,},
//     {emoji: '🍔', match: true,},
//     {emoji: '🍕', match: false,},
//     {emoji: '🍳', match: false,},
//     {emoji: '🍪', match: false,},
//     {emoji: '🍫', match: false,}
// ];
const emojisArr: string[] = ['🥗', '🌭', '🍟', '🍔', '🍕', '🍳', '🍪', '🍫'];

export const Field = () => {

    const [cards, setCards] = useState<ContentType[]>([]);
    const [turns, setTurns] = useState(0);
    const [choiseOne, setChoiseOne] = useState<ContentType | null>(null);
    const [choiseTwo, setChoiseTwo] = useState<ContentType | null>(null);
    const [disabled, setDisabled] = useState(false);


    useEffect(() => {
        shuffleCards(emojisArr)
    }, []);

    //compare two selected cards
    useEffect(()=> {
        if(choiseOne && choiseTwo) {
            setDisabled(true);
            if(choiseOne.emoji === choiseTwo.emoji) {
                setTimeout(() => {
                    resetTurn();
                    setCards(prevCards => {
                        return prevCards.map(card => {
                            if(card.emoji === choiseOne.emoji) {
                                return {...card, matched: true};
                            } else {
                                return card;
                            }
                        });
                    });
                }, 300);

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
        setCards(shuffledCards);
        setTurns(0);
    };


    //handle a choice
    const handleChoise = (card: ContentType) => {
        if(choiseOne) {
            if(choiseOne.id !== card.id) {
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
            <Style.Field>
                {cards.map(el => {
                    return (
                        <Card
                            key={el.id}
                            content={el}
                            isOpen={el === choiseOne || el === choiseTwo}
                            handleChoise={handleChoise}
                            disabled={disabled}
                        />)
                })}
            </Style.Field>
            <Styles.Button onClick={() => shuffleCards(emojisArr)}>New Game</Styles.Button>
        </>
    );
};