import React, { useContext, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import { BlogContext } from './Data';

const FinalPage = () => {

  const { itemTitle, itemCategoryName } = useParams();

  const { value1, value2, value3, value4, value5 } = useContext(BlogContext);

    const [tourism] = value1;
    const [fitness] = value2;
    const [technology] = value3;
    const [bollywood] = value4;
    const [food] = value5;

    useEffect(() => {
      window.scrollTo(0, 0);
    });

  return (
    <div>
      <div>
        {
          tourism.map(
            (item, index) => 
              item.Title === itemTitle && (
                <div className='final_page' key={index}>
                  <h1>{item.Title}</h1>
                  <img src={item.Image} alt='tourism' />
                  <p>{item.Description}</p>
                  <hr className='final_hrline' />
                  <div className='author_section'>
                    <i className="fa-solid fa-circle-user"></i>
                    <div className='author_details'>
                      <p>WRITTEN BY</p>
                      <p className='author_name'>Author Name</p>
                      <p>{item.PublishDate}</p>
                    </div>
                  </div>
                </div>
              )
          )
        }
        {
          fitness.map(
            (item, index) => 
              item.Title === itemTitle && (
                <div className='final_page' key={index}>
                  <h1>{item.Title}</h1>
                  <img src={item.Image} alt='tourism' />
                  <p>{item.Description}</p>
                  <hr className='final_hrline' />
                  <div className='author_section'>
                    <i className="fa-solid fa-circle-user"></i>
                    <div className='author_details'>
                      <p>WRITTEN BY</p>
                      <p className='author_name'>Author Name</p>
                      <p>{item.PublishDate}</p>
                    </div>
                  </div>
                </div>
              )
          )
        }
        {
          technology.map(
            (item, index) => 
              item.Title === itemTitle && (
                <div className='final_page' key={index}>
                  <h1>{item.Title}</h1>
                  <img src={item.Image} alt='tourism' />
                  <p>{item.Description}</p>
                  <hr className='final_hrline' />
                  <div className='author_section'>
                    <i className="fa-solid fa-circle-user"></i>
                    <div className='author_details'>
                      <p>WRITTEN BY</p>
                      <p className='author_name'>Author Name</p>
                      <p>{item.PublishDate}</p>
                    </div>
                  </div>
                </div>
              )
          )
        }
        {
          bollywood.map(
            (item, index) => 
              item.Title === itemTitle && (
                <div className='final_page' key={index}>
                  <h1>{item.Title}</h1>
                  <img src={item.Image} alt='tourism' />
                  <p>{item.Description}</p>
                  <hr className='final_hrline' />
                  <div className='author_section'>
                    <i className="fa-solid fa-circle-user"></i>
                    <div className='author_details'>
                      <p>WRITTEN BY</p>
                      <p className='author_name'>Author Name</p>
                      <p>{item.PublishDate}</p>
                    </div>
                  </div>
                </div>
              )
          )
        }
        {
          food.map(
            (item, index) => 
              item.Title === itemTitle && (
                <div className='final_page' key={index}>
                  <h1>{item.Title}</h1>
                  <img src={item.Image} alt='tourism' />
                  <p>{item.Description}</p>
                  <hr className='final_hrline' />
                  <div className='author_section'>
                    <i className="fa-solid fa-circle-user"></i>
                    <div className='author_details'>
                      <p>WRITTEN BY</p>
                      <p className='author_name'>Author Name</p>
                      <p>{item.PublishDate}</p>
                    </div>
                  </div>
                </div>
              )
          )
        }
        
      </div>

      <div className='final_page_more'>
        <div className='final_page_more_heading'>
          <h1>More From The Siren</h1>
        </div>
        <div className='related_posts_flex'>
          {// eslint-disable-next-line
            tourism.map((item, index) => {
              if(
                item.CategoryName === itemCategoryName &&
                index >= tourism.length - 5 &&
                item.Title !== itemTitle
              ) {
                return(
                  <div key={index}>
                    <NavLink className='related_posts' to={`/category/article/${item.Title}/${item.CategoryName}`}>
                      <img src={item.Image} alt='' />
                      <h2>{item.Title}</h2>
                    </NavLink>
                    <div className='related_posts_author_section'>
                    <i className="fa-solid fa-circle-user"></i>
                    <div className='author_details'>
                      <p>WRITTEN BY</p>
                      <p className='author_name'>Author Name</p>
                      <p>{item.PublishDate}</p>
                    </div>
                  </div>
                  </div>
                )
              }
            })
          }
          {// eslint-disable-next-line
            fitness.map((item, index) => {
              if(
                item.CategoryName === itemCategoryName &&
                index >= tourism.length - 5 &&
                item.Title !== itemTitle
              ) {
                return(
                  <div key={index}>
                    <NavLink className='related_posts' to={`/category/article/${item.Title}/${item.CategoryName}`}>
                      <img src={item.Image} alt='' />
                      <h2>{item.Title}</h2>
                    </NavLink>
                    <div className='related_posts_author_section'>
                    <i className="fa-solid fa-circle-user"></i>
                    <div className='author_details'>
                      <p>WRITTEN BY</p>
                      <p className='author_name'>Author Name</p>
                      <p>{item.PublishDate}</p>
                    </div>
                  </div>
                  </div>
                )
              }
            })
          }
          {// eslint-disable-next-line
            technology.map((item, index) => {
              if(
                item.CategoryName === itemCategoryName &&
                index >= tourism.length - 5 &&
                item.Title !== itemTitle
              ) {
                return(
                  <div key={index}>
                    <NavLink className='related_posts' to={`/category/article/${item.Title}/${item.CategoryName}`}>
                      <img src={item.Image} alt='' />
                      <h2>{item.Title}</h2>
                    </NavLink>
                    <div className='related_posts_author_section'>
                    <i className="fa-solid fa-circle-user"></i>
                    <div className='author_details'>
                      <p>WRITTEN BY</p>
                      <p className='author_name'>Author Name</p>
                      <p>{item.PublishDate}</p>
                    </div>
                  </div>
                  </div>
                )
              }
            })
          }
          {// eslint-disable-next-line
            bollywood.map((item, index) => {
              if(
                item.CategoryName === itemCategoryName &&
                index >= tourism.length - 5 &&
                item.Title !== itemTitle
              ) {
                return(
                  <div key={index}>
                    <NavLink className='related_posts' to={`/category/article/${item.Title}/${item.CategoryName}`}>
                      <img src={item.Image} alt='' />
                      <h2>{item.Title}</h2>
                    </NavLink>
                    <div className='related_posts_author_section'>
                    <i className="fa-solid fa-circle-user"></i>
                    <div className='author_details'>
                      <p>WRITTEN BY</p>
                      <p className='author_name'>Author Name</p>
                      <p>{item.PublishDate}</p>
                    </div>
                  </div>
                  </div>
                )
              }
            })
          }
          {// eslint-disable-next-line
            food.map((item, index) => {
              if(
                item.CategoryName === itemCategoryName &&
                index >= tourism.length - 5 &&
                item.Title !== itemTitle
              ) {
                return(
                  <div key={index}>
                    <NavLink className='related_posts' to={`/category/article/${item.Title}/${item.CategoryName}`}>
                      <img src={item.Image} alt='' />
                      <h2>{item.Title}</h2>
                    </NavLink>
                    <div className='related_posts_author_section'>
                    <i className="fa-solid fa-circle-user"></i>
                    <div className='author_details'>
                      <p>WRITTEN BY</p>
                      <p className='author_name'>Author Name</p>
                      <p>{item.PublishDate}</p>
                    </div>
                  </div>
                  </div>
                )
              }
            })
          }
        </div>
      </div>
    </div>
  )
}

export default FinalPage;
