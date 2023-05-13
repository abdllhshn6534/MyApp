import React from 'react'

const Events = () => {
    const sayHello1 = () => {
        alert("Hello")
    }

    const sayHello2 = (NAME) => {
        alert(`hELLO${NAME}`)
    }
    return (
        <div>
            <div onClick={sayHello1}>Event</div>
            <div onClick={()=>sayHello2(' ali')}>Event</div>
            {/* eğer parametre gönderilecekse başta bir fonksiyon açılımı yapmamız gerekiyor */}

        </div>
    )
}

export default Events