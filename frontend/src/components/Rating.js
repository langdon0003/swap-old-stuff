import React from 'react'

const Rating = (props) => {
  return (
    <>
      <span>
        <i
          style={{ color: props.color }}
          className={
            props.value >= 1
              ? 'fas fa-star'
              : props.value === 0.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>

        <i
          style={{ color: props.color }}
          className={
            props.value >= 2
              ? 'fas fa-star'
              : props.value === 1.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>

        <i
          style={{ color: props.color }}
          className={
            props.value >= 3
              ? 'fas fa-star'
              : props.value === 2.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>

        <i
          style={{ color: props.color }}
          className={
            props.value >= 4
              ? 'fas fa-star'
              : props.value === 3.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>

        <i
          style={{ color: props.color }}
          className={
            props.value >= 5
              ? 'fas fa-star'
              : props.value === 4.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
        {props.text && props.text}
      </span>
    </>
  )
}

export default Rating
