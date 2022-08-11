import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { BlogContext } from './Data';

const HomeSection2 = () => {

  const { value2, value4, value5 } = useContext(BlogContext);

  const [fitness] = value2;
  const [bollywood] = value4;
  const [food] = value5;

  return (
    <div className='main_home_section2'>
      <h1 className='home_section2_heading'>The Latest</h1>
      <div className='home_section2_flex'>
        {// eslint-disable-next-line
          fitness.map((item, index) => {
            if(index <= fitness.length - 5) {
              return(
                <NavLink key={index} className='home_section2_flex_items' to={`/category/article/${item.Title}/${item.CategoryName}`}>
                  <img src={item.Image} alt='' />
                  <h1>{item.Title}</h1>
                  <p>{item.Description}</p>
                  <span>{item.CategoryName} / {item.PublishDate}</span>
                </NavLink>
              )
            }
          })
        }
        {// eslint-disable-next-line
          bollywood.map((item, index) => {
            if(index <= bollywood.length - 5) {
              return(
                <NavLink key={index} className='home_section2_flex_items' to={`/category/article/${item.Title}/${item.CategoryName}`}>
                  <img src={item.Image} alt='' />
                  <h1>{item.Title}</h1>
                  <p>{item.Description}</p>
                  <span>{item.CategoryName} / {item.PublishDate}</span>
                </NavLink>
              )
            }
          })
        }
        {// eslint-disable-next-line
          food.map((item, index) => {
            if(index <= food.length - 5) {
              return(
                <NavLink key={index} className='home_section2_flex_items' to={`/category/article/${item.Title}/${item.CategoryName}`}>
                  <img src={item.Image} alt='' />
                  <h1>{item.Title}</h1>
                  <p>{item.Description}</p>
                  <span>{item.CategoryName} / {item.PublishDate}</span>
                </NavLink>
              )
            }
          })
        }
      </div>
    </div>
  )
}

export default HomeSection2;