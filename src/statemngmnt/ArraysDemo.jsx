import dateImage from '../assets/TodayDate.png'
const ArrayDemo = () => {
    const arr = [1, 4, 3, 8, 6];

    arr.map((item) => { console.log(item * 2) })

    return (
        <>
            <img src={dateImage}  />
        </>
    )
}

export default ArrayDemo 