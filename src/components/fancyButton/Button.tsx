import { ReactNode, useState } from "react";
import { Style } from "./FancyButton.style.ts";

type ButtonProps = {
    onClick: () => void
    children: ReactNode
};
export const Button = ({onClick, children}: ButtonProps) => {

    const [circles, setCircles] = useState<ReactNode[]>([]);

    const onClickHandler = () => {
        onClick();
        // setCircles(Array(50).fill(<Circle></Circle>));
        const randomCircles: ReactNode[] = [];
        for (let i = 0; i < 50; i++) {
            const randomX = (Math.random() - 0.5) * window.innerWidth + 'px';
            const randomY = (Math.random() - 0.5) * window.innerHeight + 'px';
            const randomSize = Math.random() * 8 + 2;
            const randomDuration = Math.random() * 2 + 0.5 + 's';
            const style = {
                width: randomSize + 'px',
                height: randomSize + 'px',
            }
            randomCircles.push(<Style.Circle style={style} $x={randomX} $y={randomY} $duration={randomDuration}></Style.Circle>);
        }
        setCircles(randomCircles);


        setTimeout(() => {
            setCircles([]);
        }, 2000);

    }
    return (<>
            <Style.Button onClick={onClickHandler}>{children}{circles}</Style.Button>
        </>
    );
};

