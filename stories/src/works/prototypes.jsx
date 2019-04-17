import React from 'react'
import '../../css/prototypes.sass'
import imageFiles1 from '../../img/01-prototype-facility.png'
import imageFiles2 from '../../img/02-prototype-fidr.png'
import imageFiles3 from '../../img/03-protoype-fws.png'



const test = () =>
  <div className="prototypes">
    <div className="prototypes thumbnail-container">
      <div className="prototypes thumbnail-img">
        <a href="https://facility-lc.firebaseapp.com/" target="_blank">
          <img src={imageFiles1}/><div className="prototypes thumbnail-title">農糧署-設施補助申請管理系統</div>
        </a>
      </div>
      <div className="prototypes thumbnail-img">
        <a href="https://tshihyi.github.io/fidsr/#p=%E6%A1%88%E4%BB%B6%E5%AF%A9%E6%A0%B8%E7%AE%A1%E7%90%86%E7%B7%A8%E8%BC%AF" target="_blank">
          <img src={imageFiles2}/><div className="prototypes thumbnail-title">農委會-農保爭議審議管理系統</div>
        </a>
      </div>
      <div className="prototypes thumbnail-img">
        <a href="https://tshihyi.github.io/fws-insure/#p=%E8%81%B7%E4%BF%9D%E6%89%B9%E6%AC%A1%E6%8A%95%E4%BF%9D" target="_blank"><img src={imageFiles3}/>
         <div className="prototypes thumbnail-title">農委會-農民福利管理系統</div>
        </a>
      </div>
    </div>
  </div>
export { test as Prototypes }
