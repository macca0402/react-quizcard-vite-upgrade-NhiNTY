import './App.css'
import FlashcardArray from "../src/components/FlashcardArray/FlashcardArray"
function App() {
    const cards = [
        {
            id: 1,
            frontHTML: <div>What is <i> the capital of</i> <u>Alaska</u>?</div>,
            backHTML: "Juneau",
        },
        {
            id: 2,
            frontHTML: <>What is the capital of California?</>,
            backHTML: <>Sacramento</>,
        },
        {
            id: 3,
            frontHTML: <>What is the capital of New York?</>,
            backHTML: <>Albany</>,
        },
        {
            id: 4,
            frontHTML: <>What is the capital of Florida?</>,
            backHTML: <>Tallahassee</>,
        },
        {
            id: 5,
            frontHTML: <>What is the capital of Texas?</>,
            backHTML: <>Austin</>,
        },
        {
            id: 6,
            frontHTML: <>What is the capital of New Mexico?</>,
            backHTML: <>Santa Fe</>,
        },
        {
            id: 7,
            frontHTML: <>What is the capital of Arizona?</>,
            backHTML: <>Phoenix</>,
        },
    ];
    const handleProgressStudy = (newRemember: number, newRecall: number) => {
            console.log(newRemember, newRecall);
    }
    return (
        <div>
            <FlashcardArray onProgressStudy={handleProgressStudy} onStudy={true} cards={cards}/>
        </div>
    );
}

export default App
