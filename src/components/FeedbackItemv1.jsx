import {useState} from "react"

function FeedbackItemv1() {
    const [rating, setRating] = useState(7)
    const [text, setText] = useState("This is an example of a feedback item")

    const handleClick = () => {
        setRating((prev) => {
            console.log(prev)
            return prev + 1
        })
    }

  return (
    <div className="card">
        <div className="num-display"> {rating} </div>
        <div className="text-display">{text}   </div>
        <button onClick={handleClick}> Click </button>
    </div>
  )
}

export default FeedbackItemv1