import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import blogthumbnail from '../../public/images/blogs/blog_thumbnail.jpg';
import './blog.css';

export default class BlogList extends Component {
    render() {
        return(
            <div className="blog-page">
                <div className="blog-list">
                    <div className="blog-item">
                        <div className="blog-thumbnail">
                            <img src={blogthumbnail} alt="Blog Image Thumbnail" />
                        </div>
                        <div className="blog-info">
                            <div className="blog-title">5 Reasons lorem ipsum dolor</div>
                            <div className="blog-desc">Duis ornare, est at lobortis mollis, felis libero mollis orci, vitae congue neque lectus vel neque. Aliquam lorem ipsum amet dolor ultrices erat.</div>
                            <div className="blog-action"><Link to="/blog/detail/id">Read More</Link></div>
                        </div>
                    </div>
        <div className="blog-item">
            <div className="blog-thumbnail">
            <img src={blogthumbnail} alt="Blog Image Thumbnail" />
            </div>
            <div className="blog-info">
            <div className="blog-title">5 Reasons lorem ipsum dolor</div>
        <div className="blog-desc">Duis ornare, est at lobortis mollis, felis libero mollis orci, vitae congue neque lectus vel neque. Aliquam lorem ipsum amet dolor ultrices erat.</div>
        <div className="blog-action"><Link to="/blog/detail/id">Read More</Link></div>
        </div>
        </div>
        <div className="blog-item">
            <div className="blog-thumbnail">
            <img src={blogthumbnail} alt="Blog Image Thumbnail" />
            </div>
            <div className="blog-info">
            <div className="blog-title">5 Reasons lorem ipsum dolor</div>
        <div className="blog-desc">Duis ornare, est at lobortis mollis, felis libero mollis orci, vitae congue neque lectus vel neque. Aliquam lorem ipsum amet dolor ultrices erat.</div>
        <div className="blog-action"><Link to="/blog/detail/id">Read More</Link></div>
        </div>
        </div>
        <div className="blog-item">
            <div className="blog-thumbnail">
            <img src={blogthumbnail} alt="Blog Image Thumbnail" />
            </div>
            <div className="blog-info">
            <div className="blog-title">5 Reasons lorem ipsum dolor</div>
        <div className="blog-desc">Duis ornare, est at lobortis mollis, felis libero mollis orci, vitae congue neque lectus vel neque. Aliquam lorem ipsum amet dolor ultrices erat.</div>
        <div className="blog-action"><Link to="/blog/detail/id">Read More</Link></div>
        </div>
        </div>
        <div className="blog-item">
            <div className="blog-thumbnail">
            <img src={blogthumbnail} alt="Blog Image Thumbnail" />
            </div>
            <div className="blog-info">
            <div className="blog-title">5 Reasons lorem ipsum dolor</div>
        <div className="blog-desc">Duis ornare, est at lobortis mollis, felis libero mollis orci, vitae congue neque lectus vel neque. Aliquam lorem ipsum amet dolor ultrices erat.</div>
        <div className="blog-action"><Link to="/blog/detail/id">Read More</Link></div>
        </div>
        </div>
        <div className="blog-item">
            <div className="blog-thumbnail">
            <img src={blogthumbnail} alt="Blog Image Thumbnail" />
            </div>
            <div className="blog-info">
            <div className="blog-title">5 Reasons lorem ipsum dolor</div>
        <div className="blog-desc">Duis ornare, est at lobortis mollis, felis libero mollis orci, vitae congue neque lectus vel neque. Aliquam lorem ipsum amet dolor ultrices erat.</div>
        <div className="blog-action"><Link to="/blog/detail/id">Read More</Link></div>
        </div>
        </div>
        <div className="blog-item">
            <div className="blog-thumbnail">
            <img src={blogthumbnail} alt="Blog Image Thumbnail" />
            </div>
            <div className="blog-info">
            <div className="blog-title">5 Reasons lorem ipsum dolor</div>
        <div className="blog-desc">Duis ornare, est at lobortis mollis, felis libero mollis orci, vitae congue neque lectus vel neque. Aliquam lorem ipsum amet dolor ultrices erat.</div>
        <div className="blog-action"><Link to="/blog/detail/id">Read More</Link></div>
        </div>
        </div>
                </div>
            </div>
    )
    }
}
