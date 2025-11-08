const EventsDemo = () => {

    const clickTest = (abc, e) => {
        console.log(abc, "Click event triggered!!!")
    }

    return (
        <>
            <button onClick={(e) => { clickTest("test", e) }}>Submit</button>
        </>
    )
}

export default EventsDemo