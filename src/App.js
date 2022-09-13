import { useState } from "react"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./data/FeedbackData"
import Card from "./components/shared/Card"

function App(){
    const [feedback, setFeedback] = useState(FeedbackData)

    return (
        <>
        <Header />
        <div className="container">
            <FeedbackList feedback = {feedback}/>
            <Card> Hello World</Card>
        </div>
        </>
    )
}

export default App
