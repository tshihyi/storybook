import React from 'react'

const test = () =>
<div class="wrapper fadeInDown">
  <div id="formContent">
  <h2 class="active"><a href="#"> 登入 </a></h2>
  <h2 class="active"><a href="#"> 註冊 </a></h2>
  <div class="fadeIn first">
    <img src='' id="icon" alt="system logo" />
  </div>
  <div>
    <form>
      <input type="text" id="login" class="fadeIn second" name="login" maxlength="10" placeholder="自然人憑證帳號" />
      <input type="password" id="password" class="fadeIn third" name="login" placeholder="自然人憑證密碼" />
      <input type="submit" class="fadeIn fourth" value="登入" />
    </form>
  </div>
  <div id="formFooter">
    <a class="underlineHover" href="#">忘記密碼?</a>
  </div>
  </div>
</div>

export { test as Register }
