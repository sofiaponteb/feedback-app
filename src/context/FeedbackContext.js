import { createContext, useState, useEffect } from "react"
//import {v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true)

    const [feedback, setFeedback] = useState([])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    useEffect(() => {
        //console.log(123)
        fetchFeedback()
    }, [])

    //fetch feedback
    const fetchFeedback = async ()=> {
        const response = await fetch(`/feedback?_sort=id&_order=desc`)
        const data = await response.json()

        //console.log(data)
        setFeedback(data)
        setIsLoading(false)
    }

    //delete feedback
    const deleteFeedback = (id) => {
        if(window.confirm("Are you sure you want to delete?")){
            setFeedback(feedback.filter((item) => item.id !== id))
        } 
    }

    //update feedback item
    const updateFeedback = (id, updItem) => {
        //console.log(id, updItem) ;
        setFeedback(
            feedback.map((item) => (item.id === id ? { ...item, ...updItem} : item ))
            )
    }

    //add feedback
    const addFeedback = async (newFeedback) => {
        const response = await fetch('/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newFeedback),
        })

        const data = await response.json()

        //newFeedback.id = uuidv4()
        setFeedback([data, ...feedback])
    }

    // set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    return (
    <FeedbackContext.Provider value = {{
        feedback,
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
    )
} 

export default FeedbackContext