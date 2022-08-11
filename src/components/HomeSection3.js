import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { BlogContext } from './Data';
import Topposts from './Topposts';

const HomeSection3 = () => {

  const { value1, value2, value3, value4, value5 } = useContext(BlogContext);

    const [tourism] = value1;
    const [fitness] = value2;
    const [technology] = value3;
    const [bollywood] = value4;
    const [food] = value5;

  return (
    <div className='main_home_section3'>
    <h1 className='home_section3_heading'>Latest Articles</h1>
    <div className='home_section3_flex'>
      <div>
        {// eslint-disable-next-line
          tourism.map((item, index) => {
            if(index <= tourism.length - 5) {
              return(
                <NavLink key={index} className='home_section3_flex_items' to={`/category/article/${item.Title}/${item.CategoryName}`}>
                  <img src={item.Image} alt='' />
                  <div className='home_section3_flex_items_right'>
                    <h2>{item.Title}</h2>
                    <p>{item.Description.slice(0, 200)}</p>
                    <span>{item.CategoryName} / {item.PublishDate}</span>
                  </div>
                </NavLink>
              )
            }
          })
        }
        {// eslint-disable-next-line
          fitness.map((item, index) => {
            if(index <= fitness.length - 5) {
              return(
                <NavLink key={index} className='home_section3_flex_items' to={`/category/article/${item.Title}/${item.CategoryName}`}>
                  <img src={item.Image} alt='' />
                  <div className='home_section3_flex_items_right'>
                    <h2>{item.Title}</h2>
                    <p>{item.Description.slice(0, 200)}</p>
                    <span>{item.CategoryName} / {item.PublishDate}</span>
                  </div>
                </NavLink>
              )
            }
          })
        }
        {// eslint-disable-next-line
          technology.map((item, index) => {
            if(index <= technology.length - 5) {
              return(
                <NavLink key={index} className='home_section3_flex_items' to={`/category/article/${item.Title}/${item.CategoryName}`}>
                  <img src={item.Image} alt='' />
                  <div className='home_section3_flex_items_right'>
                    <h2>{item.Title}</h2>
                    <p>{item.Description.slice(0, 200)}</p>
                    <span>{item.CategoryName} / {item.PublishDate}</span>
                  </div>
                </NavLink>
              )
            }
          })
        }
        {// eslint-disable-next-line
          bollywood.map((item, index) => {
            if(index <= bollywood.length - 5) {
              return(
                <NavLink key={index} className='home_section3_flex_items' to={`/category/article/${item.Title}/${item.CategoryName}`}>
                  <img src={item.Image} alt='' />
                  <div className='home_section3_flex_items_right'>
                    <h2>{item.Title}</h2>
                    <p>{item.Description.slice(0, 200)}</p>
                    <span>{item.CategoryName} / {item.PublishDate}</span>
                  </div>
                </NavLink>
              )
            }
          })
        }
        {// eslint-disable-next-line
          food.map((item, index) => {
            if(index <= food.length - 5) {
              return(
                <NavLink key={index} className='home_section3_flex_items' to={`/category/article/${item.Title}/${item.CategoryName}`}>
                  <img src={item.Image} alt='' />
                  <div className='home_section3_flex_items_right'>
                    <h2>{item.Title}</h2>
                    <p>{item.Description.slice(0, 200)}</p>
                    <span>{item.CategoryName} / {item.PublishDate}</span>
                  </div>
                </NavLink>
              )
            }
          })
        }
      </div>

      <div className='home_section3_right_content'>
        <Topposts />
      </div>
    </div>
    </div>
  )
}

export default HomeSection3;