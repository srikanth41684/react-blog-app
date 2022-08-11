import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { BlogContext } from './Data';


const Topposts = () => {

    const { value1, value2, value3, value4, value5 } = useContext(BlogContext);

    const [tourism] = value1;
    const [fitness] = value2;
    const [technology] = value3;
    const [bollywood] = value4;
    const [food] = value5;

  return (
    <div>
      <h1 className='main_heading'>Top Posts</h1>
      <div className='data_right_container'>
        {// eslint-disable-next-line
          tourism.map((article, index)=>{
          if(index === tourism.length - 5){
            return(
              <NavLink className='data_right_child_container' key={index} to={`/category/article/${article.Title}/${article.CategoryName}`}>
                <img className='data_right_image' src={article.Image} alt='tourism-image1' />
                <div className='data_overlay'>
                  <h3>{article.Title}</h3>
                  <br />
                  <span>{article.CategoryName} / {article.PublishDate}</span>
                </div>
              </NavLink>
            );
          }
        })}
      </div>

      <div className='data_right_container'>
        {// eslint-disable-next-line
          fitness.map((article, index)=>{
          if(index === fitness.length - 5){
            return(
              <NavLink className='data_right_child_container' key={index} to={`/category/article/${article.Title}/${article.CategoryName}`}>
                <img className='data_right_image' src={article.Image} alt='tourism-image1' />
                <div className='data_overlay'>
                  <h3>{article.Title}</h3>
                  <br />
                  <span>{article.CategoryName} / {article.PublishDate}</span>
                </div>
              </NavLink>
            );
          }
        })}
      </div>

      <div className='data_right_container'>
        {// eslint-disable-next-line
          technology.map((article, index)=>{
          if(index === technology.length - 5){
            return(
              <NavLink className='data_right_child_container' key={index} to={`/category/article/${article.Title}/${article.CategoryName}`}>
                <img className='data_right_image' src={article.Image} alt='tourism-image1' />
                <div className='data_overlay'>
                  <h3>{article.Title}</h3>
                  <br />
                  <span>{article.CategoryName} / {article.PublishDate}</span>
                </div>
              </NavLink>
            );
          }
        })}
      </div>

      <div className='data_right_container'>
        {// eslint-disable-next-line
          bollywood.map((article, index)=>{
          if(index === bollywood.length - 5){
            return(
              <NavLink className='data_right_child_container' key={index} to={`/category/article/${article.Title}/${article.CategoryName}`}>
                <img className='data_right_image' src={article.Image} alt='tourism-image1' />
                <div className='data_overlay'>
                  <h3>{article.Title}</h3>
                  <br />
                  <span>{article.CategoryName} / {article.PublishDate}</span>
                </div>
              </NavLink>
            );
          }
        })}
      </div>

      <div className='data_right_container'>
        {// eslint-disable-next-line
          food.map((article, index)=>{
          if(index === food.length - 5){
            return(
              <NavLink className='data_right_child_container' key={index} to={`/category/article/${article.Title}/${article.CategoryName}`}>
                <img className='data_right_image' src={article.Image} alt='tourism-image1' />
                <div className='data_overlay'>
                  <h3>{article.Title}</h3>
                  <br />
                  <span>{article.CategoryName} / {article.PublishDate}</span>
                </div>
              </NavLink>
            );
          }
        })}
      </div>

      <div className='advertisment'>
        
      </div>
    </div>
  )
}

export default Topposts;