import React, { memo } from 'react'
import Rating from '@mui/material/Rating';
import PropTypes from 'prop-types'
import { RoomWrapper } from './style'
const RoomItem = memo(function RoomItem(props) {
  const { itemData, itemWidth = "25%" } = props
  return (
    <RoomWrapper 
      verifyColor={itemData?.verify_info?.text_color || "#39576a"}
      itemWidth = {itemWidth}
      >
      <div className='inner'>
        <div className='cover'>
          <img src={itemData.picture_url ?? " "} alt="" />
        </div>
        <div className='desc'>
          {itemData.verify_info.messages.join(".")}
        </div>
        <div className='name'>{itemData.name}</div>
        <div className='price'>￥{itemData.price}/晚</div>
        <div className='bottom'>
          <Rating name="half-rating" 
                  value={ itemData.star_rating ?? 0 } 
                  readOnly 
                  sx={{ fontSize: '12px', color: "#00848a" }} 
          />
          <span className='count'>{itemData.reviews_count}</span>
          <span className='extra'>.{itemData?.bottom_info?.content}</span> 
        </div>
      </div>
    </RoomWrapper>
  )
})

RoomItem.propTypes = {
  itemData: PropTypes.object,
  itemWidth:PropTypes.string
}

export default RoomItem
