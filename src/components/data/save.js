import React, {useEffect} from 'react';

const Save = (props) => {

    const items=[
        {
            id: 0,
            value: "Nakarmić psa!",
            isCompleted: false
        }
    ]

    useEffect(()=>{
        items.push({
            id: props.element.id,
            value: props.element.value,
            isCompleted: false
        })
    })

    return (
        <div>
            {items.map(element => <div key={element.id}>
                <div className='description'>{element.value}
                    <button>Oznacz jako wykonane</button>
                </div>

            </div>)}
        </div>
    )




}

export default Save;