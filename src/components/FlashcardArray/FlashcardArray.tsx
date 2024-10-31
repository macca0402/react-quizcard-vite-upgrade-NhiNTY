import {useCallback, useEffect, useState} from "react";
import FlashcardArrayProps from "../../interfaces/IFlashcardArray";
import Flashcard from "../Flashcard/Flashcard";
import "./FlashcardArray.scss";
import Previous from "../Button/Previous.tsx";
import Recall from "../Button/Recall.tsx";
import Minimize from "../Button/Minimize.tsx";
import Remember from "../Button/Remember.tsx";
import Reset from "../Button/Reset.tsx";
import Return from "../Button/Return.tsx";
import Maximize from "../Button/Maximize.tsx";
import Next from "../Button/Next.tsx";
import ShowCount from "../ShowCount/ShowCount.tsx";

function FlashcardArray({
                            cards,
                            onCardChange = () => {
                            },
                            onCardFlip = () => {
                            },
                            frontCardStyle = {},
                            frontContentStyle = {},
                            backCardStyle = {},
                            backContentStyle = {},
                            forwardRef = {current: null},
                            FlashcardArrayStyle = {},
                            currentCardFlipRef,
                            cycle = false,
                            onStudy = false,
                            minimize = () => {
                            },
                            maximize = () => {
                            },
                            onProgressStudy = () => {
                            },
                            onUpdateCards = () => {
                            },
                            onSound = () => {
                            },
                            showCount = true
                        }: FlashcardArrayProps) {
    const [cardNumber, setCardNumber] = useState(0);
    const [numberRecall, setNumberRecall] = useState(0);
    const [numberRemember, setNumberRemember] = useState(0);
    const currentCard = cards[cardNumber];

    const [updateCards, setUpdateCards] = useState(
        cards.map((card) => ({...card, mark: false})) // Khởi tạo mark cho từng thẻ
    );

    const [cardsInDisplay, setCardsInDisplay] = useState(
        !cycle ? [-1, 0, 1] : [cards.length - 1, 0, 1]
    );
    const [isOverFlow, setIsOverFlow] = useState("");

    const placeFillerCard = (
        <Flashcard
            className="FlashcardArrayWrapper__empty"
            width="100%"
            backHTML=""
            frontHTML=""
        />
    );
    const handleMarkChange = (index: number, marked: boolean) => {
        setUpdateCards((prevCards) =>
            prevCards.map((card) =>
                card.id === index ? {...card, mark: marked} : card
            )
        );
        onUpdateCards(updateCards);
    };
    useEffect(() => {

        onUpdateCards(updateCards);
    }, [updateCards]);
    const cardsList = updateCards.map((card, index) => (
        <Flashcard
            key={index}
            frontHTML={card.frontHTML}
            backHTML={card.backHTML}
            manualFlipRef={cardNumber === index ? currentCardFlipRef : {current: null}}
            frontCardStyle={{...card.frontCardStyle, ...frontCardStyle}}
            frontContentStyle={{...card.frontContentStyle, ...frontContentStyle}}
            backCardStyle={{...card.backCardStyle, ...backCardStyle}}
            backContentStyle={{...card.backContentStyle, ...backContentStyle}}
            className={card.className}
            height={card.height || "100%"}
            width={card.width || "100%"}
            style={card.style}
            onCardFlip={(state) => {
                onCardFlip(card.id, index, state);
                setIsOverFlow("hidden");
                setTimeout(() => {
                    setIsOverFlow("");
                }, 3);
            }}
            onMarkChange={(marked) => handleMarkChange(card.id, marked)}
            isMarked={card.mark} // cập nhập mark cho phần tử flashcard khi mảng card có giá trị mới
            onSaveEdit={(front: string | JSX.Element, back: string | JSX.Element) => handleSaveEdit(card.id, front, back)}
            onSound={(content: string) => onSound(content)} // sử dụng htmlToText sẽ ho trợ đổi html sang string thuần

        />
    ));
    const handleSaveEdit = (id: number, front: string | JSX.Element, back: string | JSX.Element) => {
        setUpdateCards((prevCards) => (
            prevCards.map((card) =>
                card.id === id ? {...card, frontHTML: front, backHTML: back} : card
            )
        ))
    }

    const numberOfCards =
        cardsList.length !== undefined ? cardsList.length - 1 : 0;

    const resetArray = () => {
        setCardsInDisplay(!cycle ? [-1, 0, 1] : [cards.length - 1, 0, 1]);
        setCardNumber(0);
    };

    const nextCard = useCallback(() => {
        const currentCardNumber =
            cardNumber + 1 < numberOfCards ? cardNumber + 1 : numberOfCards;

        if (currentCardNumber < numberOfCards) {
            setIsOverFlow("hidden");
            setTimeout(() => {
                setIsOverFlow("");
            }, 90);
        }
        if (cycle) {
            setCardsInDisplay((prevState) => {
                setCardNumber(prevState[1] + 1 < cards.length ? prevState[1] + 1 : 0);
                return [
                    prevState[0] + 1 < cards.length ? prevState[0] + 1 : 0,
                    prevState[1] + 1 < cards.length ? prevState[1] + 1 : 0,
                    prevState[2] + 1 < cards.length ? prevState[2] + 1 : 0,
                ];
            });
        } else {
            setCardNumber(currentCardNumber);
            setCardsInDisplay(
                currentCardNumber < numberOfCards
                    ? [currentCardNumber - 1, currentCardNumber, currentCardNumber + 1]
                    : [numberOfCards - 1, numberOfCards, -1]
            );
        }

        onCardChange(cards[currentCardNumber].id, currentCardNumber + 1);
    }, [cardNumber, cycle, numberOfCards]);

    const prevCard = useCallback(() => {
        const currentCardNumber = cardNumber - 1 >= 0 ? cardNumber - 1 : 0;

        if (currentCardNumber !== 0) {
            setIsOverFlow("hidden");
            setTimeout(() => {
                setIsOverFlow("");
            }, 90);
        }

        if (cycle) {
            setCardsInDisplay((prevState) => {
                const activeCard =
                    prevState[1] - 1 < 0 ? cards.length - 1 : prevState[1] - 1;

                setCardNumber(
                    prevState[1] - 1 >= 0 ? prevState[1] - 1 : cards.length - 1
                );

                return [
                    activeCard - 1 < 0 ? cards.length - 1 : activeCard - 1,
                    activeCard,
                    activeCard + 1 < cards.length ? activeCard + 1 : 0,
                ];
            });
        } else {
            setCardNumber(currentCardNumber);
            setCardsInDisplay(
                currentCardNumber === 0
                    ? [-1, 0, 1]
                    : [currentCardNumber - 1, currentCardNumber, currentCardNumber + 1]
            );
        }
        onCardChange(cards[currentCardNumber].id, currentCardNumber + 1);
    }, [cardNumber, cycle, numberOfCards]);

    useEffect(() => {
        if (forwardRef.current) {
            forwardRef.current.nextCard = nextCard;
            forwardRef.current.prevCard = prevCard;
            forwardRef.current.resetArray = resetArray;
        }
    });

    const handleRecall = () => {
        let newRecall = 0;
        const isRemembered = currentCard.isRemembered;

        if (isRemembered === undefined || isRemembered === true) {
            currentCard.isRemembered = false;
            setNumberRecall(prev => {
                newRecall = prev + 1;
                return newRecall;
            });

            if (isRemembered === true && numberRemember > 0) {
                setNumberRemember(prev => prev - 1);
            }
        }
        nextCard();
    };

    const handleRemember = () => {
        let newRemember = 0;
        const isRemembered = currentCard.isRemembered;

        if (isRemembered === undefined || isRemembered === false) {
            currentCard.isRemembered = true;
            setNumberRemember(prev => {
                newRemember = prev + 1;
                return newRemember;
            });

            if (isRemembered === false && numberRecall > 0) {
                setNumberRecall(prev => prev - 1);
            }
        }
        nextCard();
    };

    useEffect(() => {
        onProgressStudy(numberRemember, numberRecall);
    }, [numberRecall, numberRemember]);
    return (
        <div className="FlashcardArrayWrapper" style={FlashcardArrayStyle}>
            <div
                className="FlashcardArrayWrapper__CardHolder"
                style={{overflow: isOverFlow}}
            >
                {cardsInDisplay[0] !== -1
                    ? cardsList[cardsInDisplay[0]]
                    : placeFillerCard}
                {cardsList[cardsInDisplay[1]]}
                {cardsInDisplay[2] !== -1
                    ? cardsList[cardsInDisplay[2]]
                    : placeFillerCard}


            </div>
            {(onStudy) && (
                <div className="FlashcardArrayWrapper__controls">
                    <Previous onClick={prevCard}/>
                    <span style={{color: "#babefd"}}>Pre </span>
                    <Recall onClick={handleRecall}/>
                    {
                        showCount &&
                        <ShowCount currentPage={cardNumber + 1} totalPages={cardsList.length}/>
                    }

                    <Minimize onClick={minimize}/>
                    <Remember onClick={handleRemember}/>
                    <Reset onClick={resetArray}/>
                </div>
            )}
            {
                !onStudy && (
                    <div className="FlashcardArrayWrapper__controls">
                        <Return onClick={prevCard}/>
                        <Maximize onClick={maximize}/>
                        {
                            showCount &&
                            <ShowCount currentPage={cardNumber + 1} totalPages={cardsList.length}/>
                        }
                        <Next onClick={nextCard}/>
                        <Reset onClick={resetArray}/>
                    </div>
                )
            }

        </div>
    );
}

export default FlashcardArray;
