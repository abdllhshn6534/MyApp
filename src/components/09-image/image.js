import React from 'react'
import resim from '../../assets/img/1.jpg'
const Image = () => {
  return (
    <div>
        {/*Statik yöntemde görüntüler public klasöründe görünür direkt publice bakar*/}
        <img src='assets/img/car.jpg' alt='' width={300}></img>
        {/*imprt ve require yönteminde dosyalar src içinde olmalıdır*/}
        <img src={resim} alt=""  width={300} />

        <img src={require("../../assets/img/2.jpg")} alt="" width={300} />
    </div>
  )
}

export default Image