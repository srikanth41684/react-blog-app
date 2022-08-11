import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { BlogContext } from './Data';

const HomeSection1 = () => {

    const { value1, value2, value5} = useContext(BlogContext);

    const[tourism] = value1;
    const[fitness] = value2;
    const[food] = value5;

  return (
    <div className='home_section'>
        <div className='home_section1'>
            {// eslint-disable-next-line
            tourism.map((item, index) => {
                if(index >= tourism.length - 1){
                    return(
                        <NavLink className='image1' key={index} to="/category/tourism">
                            <img src={item.Image} alt='' />
                            <div className='data_overlay data_overlay_font_style'>
                                <h3>{item.Title}</h3>
                                <br />
                                <span>{item.CategoryName} / {item.PublishDate}</span>
                            </div>
                        </NavLink>
                    )
                }})
            }
        </div>

        <div className='home_section_right'>
            <div className='home_section2'>
                {// eslint-disable-next-line
                fitness.map((item, index) => {
                    if(index >= fitness.length - 1){
                        return(
                            <NavLink className='image2' key={item} to="/category/fitness">
                                <img src={item.Image} alt='' />
                                <div className='data_overlay data_overlay_font_style2'>
                                    <h3>{item.Title}</h3>
                                    <br />
                                    <span>{item.CategoryName} / {item.PublishDate}</span>
                                </div>
                            </NavLink>
                        )
                    }})
                }
            </div>
            <br />
            <div className='home_section3'>
                {// eslint-disable-next-line
                food.map((item, index) => {
                    if(index >= food.length - 1){
                        return(
                            <NavLink className='image3' key={index} to="/category/food">
                                <img src={item.Image} alt='' />
                                <div className='data_overlay data_overlay_font_style2'>
                                    <h3>{item.Title}</h3>
                                    <br />
                                    <span>{item.CategoryName} / {item.PublishDate}</span>
                                </div>
                            </NavLink>
                        )
                    }})
                }
            </div>
        </div>
    </div>
  )
}

export default HomeSection1;
