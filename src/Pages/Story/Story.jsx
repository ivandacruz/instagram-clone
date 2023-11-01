import React from 'react'
import StoryViewer from '../../Components/StoryComponents/StoryViewer'

const Story = () => {
    const story = [

        {
            image:"https://images.pexels.com/photos/18721030/pexels-photo-18721030/free-photo-of-construcao-predio-edificio-igreja.jpeg"
        },
        {
            image:"https://images.pexels.com/photos/16690873/pexels-photo-16690873/free-photo-of-floresta-selva-mata-ajoelhado.jpeg"
        },
        {
            image:"https://images.pexels.com/photos/13149220/pexels-photo-13149220.jpeg"
        },
        {
            image:"https://images.pexels.com/photos/18705354/pexels-photo-18705354/free-photo-of-mar-negro-ponte-espaco-campo.jpeg"
        },
        {
            image:"https://images.pexels.com/photos/6862325/pexels-photo-6862325.jpeg"
        },
        {
            image:"https://images.pexels.com/photos/18490115/pexels-photo-18490115/free-photo-of-apartamento-arquitetura-construcao-predio.jpeg"
        }
    ]

  return (
    <div>
      <StoryViewer stories={story}/>
    </div>
  )
}

export default Story
