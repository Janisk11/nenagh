import React from 'react'
import styled from 'styled-components'
import Masonry from 'react-masonry-css'
import { Element } from 'react-scroll'

// CSS
import './portfolio.css'
// Assets
import Arrow from '../../assets/portfolio/arrow.svg'
import onam1 from '../../assets/portfolio/onam/onam01.jpg'
import onam2 from '../../assets/portfolio/onam/onam02.jpg'
import onam3 from '../../assets/portfolio/onam/onam03.jpg'
import christ1 from '../../assets/portfolio/christmas/christ01.jpg'
import christ2 from '../../assets/portfolio/christmas/christ02.jpg'
import christ3 from '../../assets/portfolio/christmas/christ03.jpg'
import christ4 from '../../assets/portfolio/christmas/christ04.jpg'
import eastVish1 from '../../assets/portfolio/eastervishu/ev01.jpg'
import eastVish2 from '../../assets/portfolio/eastervishu/ev02.jpg'
import eastVish3 from '../../assets/portfolio/eastervishu/ev03.jpg'
import eastVish4 from '../../assets/portfolio/eastervishu/ev04.jpg'

// Components
import Button from '../uiComponents/button/button'
import Title from '../uiComponents/title/title'
import ProjectBox from '../uiComponents/projectBox/projectBox'

// Styled Components
const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* margin: 0 -15px; */
`

const Col = styled.div`
  flex: ${(props) => (props.size ? props.size / 12 : 1)};
  max-width: ${(props) => (props.size ? (props.size / 12) * 100 : 100)}%;
  padding: 0 15px;

  @media (max-width: 768px) {
    flex: 1;
    max-width: 100%;
  }
`

class Portfolio extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: [
        { id: '1', preview: onam1, title: 'Onam', tag: 'onam' },
        { id: '2', preview: christ1, title: 'Christmas', tag: 'christmas' },
        {
          id: '3',
          preview: eastVish1,
          title: 'Easter-Vishu',
          tag: 'easterVishu',
        },
        { id: '4', preview: christ2, title: 'Christmas', tag: 'christmas' },
        {
          id: '5',
          preview: eastVish2,
          title: 'Easter-Vishu',
          tag: 'easterVishu',
        },
        { id: '6', preview: onam2, title: 'Onam', tag: 'onam' },
        { id: '7', preview: christ3, title: 'Christmas', tag: 'christmas' },
        {
          id: '8',
          preview: eastVish3,
          title: 'Easter-Vishu',
          tag: 'easterVishu',
        },
        { id: '9', preview: onam3, title: 'Onam', tag: 'onam' },
        { id: '10', preview: christ4, title: 'Christmas', tag: 'christmas' },
        {
          id: '11',
          preview: eastVish4,
          title: 'Easter-Vishu',
          tag: 'easterVishu',
        },
      ],
      filterResult: null,
      pickedFilter: 'all',
      filterMenuActive: false,
      pickedFilterDropdown: 'NEWEST',
    }
  }

  componentDidMount() {
    this.filterGallery('all')
  }

  filterGallery = (target) => {
    const projectsArr = [...this.state.projects]
    const result =
      target !== 'all'
        ? projectsArr.filter((project) => project.tag === target)
        : projectsArr
    this.setState({
      filterResult: result,
      pickedFilter: target,
      pickedFilterDropdown: 'NEWEST',
    })
  }

  filterMenuHover = (event) => {
    this.setState({ filterMenuActive: event })
  }

  filterDropDownHandler = (filter) => {
    const projectsArr = [...this.state.filterResult]
    const result =
      filter === 'NEWEST'
        ? projectsArr.sort((a, b) => (a.id > b.id ? 1 : -1))
        : projectsArr.sort((a, b) => (a.id > b.id ? 1 : -1)).reverse()
    this.setState({
      pickedFilterDropdown: filter,
      filterMenuActive: false,
      filterResult: result,
    })
  }

  render() {
    const projectsRender = this.state.filterResult
      ? this.state.filterResult.map((project) => (
          <ProjectBox
            preview={project.preview}
            key={project.id}
            title={project.title}
            tag={project.tag}
          />
        ))
      : null

    const portfolioBreakpoints = {
      default: 3,
      1100: 3,
      700: 2,
      500: 1,
    }

    const filterDropDown = this.state.filterMenuActive ? (
      <div className="portfolio-filter-menu shadow">
        <p
          className="font12"
          onClick={() => this.filterDropDownHandler('NEWEST')}
        >
          NEWEST
        </p>
        <p
          className="font12"
          onClick={() => this.filterDropDownHandler('OLDEST')}
        >
          OLDEST
        </p>
      </div>
    ) : null

    return (
      <Element name="portfolio" id="portfolio">
        <div className="wrapper">
          <Title title="EVENTS SHOWCASE." />
          <Row>
            <Col size={8}>
              <div className="portfolio-nav">
                <ul>
                  <li
                    className={
                      this.state.pickedFilter === 'all'
                        ? 'portfolio-nav-active font12'
                        : 'font12'
                    }
                    onClick={() => this.filterGallery('all')}
                  >
                    ALL
                  </li>
                  <li
                    className={
                      this.state.pickedFilter === 'onam'
                        ? 'portfolio-nav-active font12'
                        : 'font12'
                    }
                    onClick={() => this.filterGallery('onam')}
                  >
                    ONAM
                    {/* onam */}
                  </li>
                  <li
                    className={
                      this.state.pickedFilter === 'easterVishu'
                        ? 'portfolio-nav-active font12'
                        : 'font12'
                    }
                    onClick={() => this.filterGallery('easterVishu')}
                  >
                    {/* easterVishu */}
                    EASTER-VISHU
                  </li>
                  <li
                    className={
                      this.state.pickedFilter === 'christmas'
                        ? 'portfolio-nav-active font12'
                        : 'font12'
                    }
                    onClick={() => this.filterGallery('christmas')}
                  >
                    CHRISTMAS
                  </li>
                </ul>
              </div>
            </Col>
            <Col size={4}>
              <div
                className="portfolio-filter"
                onMouseEnter={() => this.filterMenuHover(true)}
                onMouseLeave={() => this.filterMenuHover(false)}
              >
                <p className="font12">
                  {this.state.pickedFilterDropdown} FIRST
                </p>
                <img src={Arrow} alt="arrow" />
                {filterDropDown}
              </div>
            </Col>
          </Row>
          <Masonry
            breakpointCols={portfolioBreakpoints}
            className="my-masonry-grid"
            columnClassName="nenagh-gallery"
          >
            {projectsRender}
          </Masonry>
          <Row className="flex-center padding40">
            <Button label="JOIN US?" target={'contact'} />
          </Row>
        </div>
      </Element>
    )
  }
}

export default Portfolio
