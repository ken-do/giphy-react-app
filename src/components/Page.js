import React from 'react'

const Page = (props) => {
  const title = 'GIPHY'

  return (
    props.render(title)
  )
}

export default Page
