import React from 'react'

interface Props {
   caption?: string,
   text?: string,
   Icon?: any

}

function Card(props: Props) {
   const { caption, Icon, text } = props

   return (
      <div>
         <Icon />
         <div>{caption}</div>
         <p>{text}</p>
      </div>
   )
}

export default Card
