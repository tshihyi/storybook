import React from 'react'
import '../../css/prototypes.sass'
import imageFiles3 from '../../img/01-protoype-fws.png'
import imageFiles2 from '../../img/02-prototype-fidr.png'
import imageFiles1 from '../../img/03-prototype-facility.png'

const Prototypes = () =>
  <div className="prototypes">
    <div className="prototypes thumbnail-container">
      <div className="prototypes thumbnail-img">
        <img src={imageFiles3}/><div className="prototypes thumbnail-title">1-農委會-農民福利管理系統</div>
      </div>
      <div className="prototypes thumbnail-img">
        <img src={imageFiles2}/><div className="prototypes thumbnail-title">2-農委會-農保爭議審議管理系統</div>
      </div>
      <div className="prototypes thumbnail-img">
        <img src={imageFiles1}/><div className="prototypes thumbnail-title">3-農糧署-設施補助申請管理系統</div>
      </div>
    </div>
  </div>

export default Prototypes
