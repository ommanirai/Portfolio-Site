import React from 'react'

// const Card = (props) => {
//     // console.log(props.card_item)
//     return (
//         <>
//             <div className='text-center'>
//                 <h1>Post Id: {props.card_item.id}</h1>
//                 <h2>Title: {props.card_item.title}</h2>
//                 <p>Body: {props.card_item.body}</p>
//                 <hr />
//             </div>
//         </>
//     )
// }


const Card = ({card_item}) => {
    // console.log(props.card_item)
    return (
        <>
            <div className='text-center'>
                <h1>Post Id: {card_item.id}</h1>
                <h2>Title: {card_item.title}</h2>
                <p>Body: {card_item.body}</p>
                <hr />
            </div>
        </>
    )
}

export default Card