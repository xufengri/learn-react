import IconGlobal from '@/assets/svg/icon_global'
import IconAvatar from '@/assets/svg/icon_avatar'
import IconMenu from '@/assets/svg/icon_menu'
import React, { memo, useEffect, useState } from 'react'
import { RightWrapper } from './style'

const HeaderRight = memo(() => {
  const [showPanel, setShowPanel] = useState(false)
  // 副作用代码
  useEffect(() => {
    function windowHandleClick() {
      setShowPanel(false)
    }
    //增加监听的时候点击
    window.addEventListener("click", windowHandleClick, true)
    //取消监听的时候返回
    return () => {
      window.addEventListener("click", windowHandleClick, true)
    }
  }, [])
  function profileClickHandle() {
    setShowPanel(true)
  }
  return (
    <RightWrapper>
      <div className='btns'>
        <span className='btn'>登录</span>
        <span className='btn'>注册</span>
        <span className='btn'>
          <IconGlobal></IconGlobal>
        </span>
      </div>
      <div className='profile' onClick={profileClickHandle}>
        <IconMenu></IconMenu>
        <IconAvatar></IconAvatar>

        {showPanel && (
          <div className='panel'>
            <div className='top'>
              <div className='item register'>注册</div>
              <div className='item login'>登录</div>
            </div>
            <div className='bottom'>
              <div className='item'>出租房源</div>
              <div className='item'>开展体验</div>
              <div className='item'>帮助</div>
            </div>
          </div>
        )}
      </div>
    </RightWrapper>
  )
})

export default HeaderRight