import React, { useState, useMemo } from 'react'
import Masonry from 'react-masonry-css'
import './gallery.css'

import onam1 from '../../assets/gallery/onam/onam1.png'
import onam2 from '../../assets/gallery/onam/onam2.png'
import onam3 from '../../assets/gallery/onam/onam3.png'
import onam4 from '../../assets/gallery/onam/onam4.png'
import onam5 from '../../assets/gallery/onam/onam5.png'
import onam6 from '../../assets/gallery/onam/onam6.png'
import onam7 from '../../assets/gallery/onam/onam7.png'

import east1 from '../../assets/gallery/eastervishu/easter1.png'
import east2 from '../../assets/gallery/eastervishu/easter2.png'
import east3 from '../../assets/gallery/eastervishu/easter3.png'
import east4 from '../../assets/gallery/eastervishu/easter4.png'
import east5 from '../../assets/gallery/eastervishu/easter5.png'
import east6 from '../../assets/gallery/eastervishu/easter6.png'
import east7 from '../../assets/gallery/eastervishu/easter7.png'
import east8 from '../../assets/gallery/eastervishu/easter8.png'
import east9 from '../../assets/gallery/eastervishu/easter9.png'
import east10 from '../../assets/gallery/eastervishu/easter10.png'
import east11 from '../../assets/gallery/eastervishu/easter11.png'
import east12 from '../../assets/gallery/eastervishu/easter12.png'

import sports1 from '../../assets/gallery/sports/sp1.png'
import sports2 from '../../assets/gallery/sports/sp2.png'
import sports3 from '../../assets/gallery/sports/sp3.png'
import sports4 from '../../assets/gallery/sports/sp4.png'
import sports5 from '../../assets/gallery/sports/sp5.png'
import sports6 from '../../assets/gallery/sports/sp6.png'
import sports7 from '../../assets/gallery/sports/sp7.png'
import sports8 from '../../assets/gallery/sports/sp8.png'
import sports9 from '../../assets/gallery/sports/sp9.png'
import sports10 from '../../assets/gallery/sports/sp10.png'
import sports11 from '../../assets/gallery/sports/sp11.png'
import sports12 from '../../assets/gallery/sports/sp12.png'

// Components
import Title from '../uiComponents/title/title'

const tabItems = [
  {
    id: 1,
    title: 'ONAM',
    data: [
      { preview: onam1, title: 'Onam', year: '2022' },
      { preview: onam2, title: 'Onam', year: '2022' },
      { preview: onam3, title: 'Onam', year: '2022' },
      { preview: onam4, title: 'Onam', year: '2022' },
      { preview: onam5, title: 'Onam', year: '2022' },
      { preview: onam6, title: 'Onam', year: '2022' },
      { preview: onam7, title: 'Onam', year: '2022' },
    ],
  },
  {
    id: 2,
    title: 'CHRISTMAS',
    data: [
      // { preview: christ1, title: 'Christmas', year: '2023' },
      // { preview: christ2, title: 'Christmas', year: '2023' },
    ],
  },
  {
    id: 3,
    title: 'EASTER-VISHU',
    data: [
      { preview: east1, title: 'Easter', year: '2023' },
      { preview: east2, title: 'Easter', year: '2023' },
      { preview: east3, title: 'Easter', year: '2023' },
      { preview: east4, title: 'Easter', year: '2023' },
      { preview: east5, title: 'Easter', year: '2023' },
      { preview: east6, title: 'Easter', year: '2023' },
      { preview: east7, title: 'Easter', year: '2023' },
      { preview: east8, title: 'Easter', year: '2023' },
      { preview: east9, title: 'Easter', year: '2023' },
      { preview: east10, title: 'Easter', year: '2023' },
      { preview: east11, title: 'Easter', year: '2023' },
      { preview: east12, title: 'Easter', year: '2023' },
    ],
  },
  {
    id: 4,
    title: 'SPORTS',
    data: [
      { preview: sports1, title: 'Sports', year: '2023' },
      { preview: sports2, title: 'Sports', year: '2023' },
      { preview: sports3, title: 'Sports', year: '2023' },
      { preview: sports4, title: 'Sports', year: '2023' },
      { preview: sports5, title: 'Sports', year: '2023' },
      { preview: sports6, title: 'Sports', year: '2023' },
      { preview: sports7, title: 'Sports', year: '2023' },
      { preview: sports8, title: 'Sports', year: '2023' },
      { preview: sports9, title: 'Sports', year: '2023' },
      { preview: sports10, title: 'Sports', year: '2023' },
      { preview: sports11, title: 'Sports', year: '2023' },
      { preview: sports12, title: 'Sports', year: '2023' },
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
    <div className="wrapper gallery-wrapper">
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
      <div className="tab-content">
        {activeTabData.map(({ year, images }) => (
          <div className="year-section" key={year}>
            <h2>{year}</h2>
            <Masonry
              breakpointCols={galleryBreakpoints}
              className="masonry-grid"
            >
              {images.map((image, index) => (
                <div className="image-item" key={`${index}-${year}`}>
                  <img src={image.preview} alt={image.title} />
                </div>
              ))}
            </Masonry>
          </div>
        ))}
      </div>
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
