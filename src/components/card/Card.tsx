import { ContentType } from "../field/Field.tsx";
import { BilletStyled } from "./Card.style.ts";

type BilletProps = {
    content: ContentType
    isOpen: boolean
    handleChoice: (card: ContentType) => void
    disabled: boolean
};
export const Card = ({content, handleChoice, isOpen, disabled}: BilletProps) => {
    const onClickHandler = () => {
        if(!disabled) {
            if(!content.matched) {
                handleChoice(content);
            }
        }
    };

    return (
        <BilletStyled onClick={onClickHandler} $isOpen={isOpen} $isMatch={content.matched}>
            {content.emoji}
        </BilletStyled>
    );
};

