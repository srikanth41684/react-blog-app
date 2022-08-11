import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { BlogContext } from './Data';
import Topposts from './Topposts';

const Technology = () => {

  const { value3 } = useContext(BlogContext);
  const [technology] = value3;
  return (
    <div className='data_container'>
      <div className='data_left_container'>
        <div className='main_heading'>
          <h1>Technology</h1>
        </div>
        <br />
        {technology.map((article, index)=>{
          return(
            <div key={index}>
              <NavLink className='data_left_child_container' to={`/category/article/${article.Title}/${article.CategoryName}`}>
                <img className='data_left_image' src={article.Image} alt='tourism-image1' />
                <div className='data_left_in_right_child_container'>
                  <h2>{article.Title}</h2>
                  <p>{article.Description}</p>
                  <span>{article.CategoryName} / {article.PublishDate}</span>
                </div>
              </NavLink>
              <br />
              <hr />
            </div>
          );
        })}
      </div>

      <div className='data_right_container'>
        <Topposts />
      </div>
    </div>
  )
}

export default Technology;
