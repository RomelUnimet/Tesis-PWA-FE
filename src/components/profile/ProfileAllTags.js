import React from 'react'
import { useSelector } from 'react-redux'
import '../../scss/profile/profile.scss'

export const ProfileAllTags = () => {

    const {tags} = useSelector(state => state.tags)
    

    return (
        <div className="profile-all-tags-container">
            <div className="profile-all-topbar">

                <h3>Tags</h3>

                <div className="number-arrow-container">

                    <h4> {tags.length} </h4>
                    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.83325 13.125L17.4999 24.7917L29.1666 13.125" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>

                </div>
            </div>
            <div className="profile-tag-badge-container">
                {
                    tags.map((tag, index)=>(
                        <div key={index} className="tag-name-number">
                            <svg viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M31.875 4.25C31.875 3.68641 31.6511 3.14591 31.2526 2.7474C30.8541 2.34888 30.3136 2.125 29.75 2.125L20.0048 2.125C19.4412 2.12512 18.9008 2.34908 18.5024 2.74762L3.62737 17.6226C3.229 18.0211 3.0052 18.5615 3.0052 19.125C3.0052 19.6885 3.229 20.2289 3.62737 20.6274L13.3726 30.3726C13.7711 30.771 14.3115 30.9948 14.875 30.9948C15.4385 30.9948 15.9789 30.771 16.3774 30.3726L31.2524 15.4976C31.6509 15.0992 31.8749 14.5588 31.875 13.9952L31.875 4.25ZM24.4375 12.75C23.5921 12.75 22.7814 12.4142 22.1836 11.8164C21.5858 11.2186 21.25 10.4079 21.25 9.5625C21.25 8.71712 21.5858 7.90637 22.1836 7.3086C22.7814 6.71082 23.5921 6.375 24.4375 6.375C25.2829 6.375 26.0936 6.71082 26.6914 7.3086C27.2892 7.90637 27.625 8.71712 27.625 9.5625C27.625 10.4079 27.2892 11.2186 26.6914 11.8164C26.0936 12.4142 25.2829 12.75 24.4375 12.75Z"/>
                            </svg>
                            <h5> {tag.name} </h5>
                            <p> {tag.entries.length} </p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
