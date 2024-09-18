import React, { useState, useMemo } from 'react'
import Masonry from 'react-masonry-css'
import './gallery.css'

import onam1 from '../../assets/portfolio/onam/onam01.jpg'
import onam2 from '../../assets/portfolio/onam/onam02.jpg'
import christ1 from '../../assets/portfolio/christmas/christ01.jpg'
import christ2 from '../../assets/portfolio/christmas/christ02.jpg'
import christ3 from '../../assets/portfolio/christmas/christ03.jpg'
import christ4 from '../../assets/portfolio/christmas/christ04.jpg'
import eastVish1 from '../../assets/portfolio/eastervishu/ev01.jpg'

// Components
import Title from '../uiComponents/title/title'

const tabItems = [
  {
    id: 1,
    title: 'ONAM',
    data: [
      { id: '1', preview: onam1, title: 'Onam', year: '2023' },
      { id: '2', preview: onam1, title: 'Onam', year: '2023' },
      { id: '3', preview: onam2, title: 'Onam', year: '2022' },
    ],
  },
  {
    id: 2,
    title: 'CHRISTMAS',
    data: [
      { id: '1', preview: christ1, title: 'Christmas', year: '2023' },
      { id: '2', preview: christ2, title: 'Christmas', year: '2023' },
    ],
  },
  {
    id: 3,
    title: 'EASTER-VISHU',
    data: [
      { id: '1', preview: christ3, title: 'Easter', year: '2023' },
      { id: '2', preview: christ4, title: 'Easter', year: '2023' },
    ],
  },
  {
    id: 4,
    title: 'SPORTS',
    data: [
      { id: '1', preview: eastVish1, title: 'Sports', year: '2023' },
      { id: '2', preview: eastVish1, title: 'Sports', year: '2023' },
    ],
  },
]

const galleryBreakpoints = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1,
}

// Helper function to group images by year and sort them
const groupAndSortByYear = (data) => {
  const grouped = data.reduce((acc, item) => {
    if (!acc[item.year]) {
      acc[item.year] = []
    }
    acc[item.year].push(item)
    return acc
  }, {})

  return Object.keys(grouped)
    .sort((a, b) => b - a)
    .map((year) => ({
      year,
      images: grouped[year],
    }))
}

const TabsComponent = () => {
  const [active, setActive] = useState(1)

  const activeTabData = useMemo(() => {
    const activeTab = tabItems.find((tab) => tab.id === active)
    return activeTab ? groupAndSortByYear(activeTab.data) : []
  }, [active])

  return (
    <div className="wrapper">
      <Title title="EVENTS SHOWCASE." />
      <div className="tabs">
        {tabItems.map(({ id, title }) => (
          <TabItemComponent
            key={id}
            title={title}
            onItemClicked={() => setActive(id)}
            isActive={active === id}
          />
        ))}
      </div>

      {activeTabData.map(({ year, images }) => (
        <div className="year-section" key={year}>
          <h2>{year}</h2>
          <Masonry
            breakpointCols={galleryBreakpoints}
            className="masonry-grid"
          >
            {images.map((image) => (
              <div className="image-item" key={`${image.id}-${year}`}>
                <img src={image.preview} alt={image.title} />
              </div>
            ))}
          </Masonry>
        </div>
      ))}
    </div>
  )
}

const TabItemComponent = ({
  title = '',
  onItemClicked = () => console.error('No action passed to the component'),
  isActive = false,
}) => (
  <div
    className={isActive ? 'tabitem' : 'tabitem tabitem-inactive'}
    onClick={onItemClicked}
  >
    <p className="tabitem-title">{title}</p>
  </div>
)

const gallery = () => <TabsComponent />

export default gallery
