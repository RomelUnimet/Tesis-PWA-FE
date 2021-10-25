import React from 'react'
import '../../scss/settings/settings.scss'
import { useHistory } from 'react-router'
import { motion } from "framer-motion"
import { useSelector } from 'react-redux'
import { useNavAnimation } from '../../hooks/navAnimationHook'


export const SettingsScreen = () => {

    const {settings} = useSelector(state => state.settings)

    const {entries} = useSelector(state => state.entries)

    const [userSettings] = settings

    const trashEntries =  entries.filter((e)=> e.trash)

    //Navigation   
    const history = useHistory()

    const [ variants, setvariants ] = useNavAnimation('profile');

    const navigateTo = (path) => {
        setvariants({
            initial:{x:-40, transition:{duration:0.35} },
            in:{ x:0,transition:{duration:0.35}},
            out:{x:-40,transition:{duration:0.35}}
        })
        history.push(`/${path}` )
    }

    return (
        <motion.div 
            className="settings-container"
            variants={variants}
                initial="initial"
                animate="in"
                exit="out"
                transition={{type:'tween'}}
        >
            <div className="top-bar-left-center">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
                     onClick={()=>{history.push('/profile')}}
                >
                    <path d="M25.3333 14.6667H9.51992L14.3599 8.85338C14.5862 8.58109 14.6951 8.23005 14.6626 7.87748C14.6301 7.52491 14.4589 7.19969 14.1866 6.97338C13.9143 6.74706 13.5633 6.63817 13.2107 6.67068C12.8581 6.70319 12.5329 6.87442 12.3066 7.14671L5.63992 15.1467C5.59507 15.2103 5.55496 15.2772 5.51992 15.3467C5.51992 15.4134 5.51992 15.4534 5.42659 15.52C5.36615 15.6729 5.33451 15.8357 5.33325 16C5.33451 16.1644 5.36615 16.3272 5.42659 16.48C5.42659 16.5467 5.42659 16.5867 5.51992 16.6534C5.55496 16.7229 5.59507 16.7897 5.63992 16.8534L12.3066 24.8534C12.4319 25.0039 12.5889 25.1249 12.7664 25.2079C12.9438 25.2908 13.1374 25.3337 13.3333 25.3334C13.6448 25.334 13.9467 25.2255 14.1866 25.0267C14.3216 24.9148 14.4332 24.7773 14.515 24.6222C14.5968 24.467 14.6472 24.2973 14.6633 24.1227C14.6794 23.948 14.6609 23.7719 14.6088 23.6045C14.5568 23.437 14.4722 23.2814 14.3599 23.1467L9.51992 17.3334H25.3333C25.6869 17.3334 26.026 17.1929 26.2761 16.9429C26.5261 16.6928 26.6666 16.3537 26.6666 16C26.6666 15.6464 26.5261 15.3073 26.2761 15.0572C26.026 14.8072 25.6869 14.6667 25.3333 14.6667Z"/>
                </svg>
                <h1>Settings</h1>
            </div>

            <div className="spacing-div">

                <div className="settings-group-container">
                    <div className="settings-group-container-banner">
                        <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 3.65625C10.5877 3.65625 4.78125 6.99187 4.78125 11.25V24.75C4.78125 29.0081 10.5877 32.3438 18 32.3438C25.4123 32.3438 31.2188 29.0081 31.2188 24.75V11.25C31.2188 6.99187 25.4123 3.65625 18 3.65625ZM18 5.34375C24.2506 5.34375 29.5312 8.04839 29.5312 11.25C29.5312 14.4516 24.2506 17.1562 18 17.1562C11.7494 17.1562 6.46875 14.4516 6.46875 11.25C6.46875 8.04839 11.7494 5.34375 18 5.34375ZM29.5312 24.75C29.5312 27.9516 24.2506 30.6562 18 30.6562C11.7494 30.6562 6.46875 27.9516 6.46875 24.75V21.7673C8.71453 24.0698 12.9901 25.5938 18 25.5938C23.0099 25.5938 27.2855 24.0698 29.5312 21.7673V24.75ZM29.5312 18C29.5312 21.2016 24.2506 23.9062 18 23.9062C11.7494 23.9062 6.46875 21.2016 6.46875 18V15.0173C8.71453 17.3198 12.9901 18.8438 18 18.8438C23.0099 18.8438 27.2855 17.3198 29.5312 15.0173V18Z"/>
                        </svg>
                        <h2> DATA </h2>
                    </div>

                    <hr/>

                    <ul className="settings-item-container">

                        <li onClick={()=>navigateTo('backup-restore')}>
                            <p> Backup / Restore </p>

                            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.83325 13.125L17.4999 24.7917L29.1666 13.125" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </li>

                        <hr/>

                        <li onClick={()=>navigateTo('trash')}>
                            <p> Trash </p>

                            <div className="arrow-and-text">
                                <p> {trashEntries.length} </p> 
                                <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.83325 13.125L17.4999 24.7917L29.1666 13.125" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
    
                        </li>
                        
                        <hr/>
                    </ul>
                    
                </div>

                <div className="settings-group-container">
                    <div className="settings-group-container-banner">

                        <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.60203 16.8748H5.625C5.32663 16.8748 5.04048 16.9933 4.82951 17.2043C4.61853 17.4153 4.5 17.7014 4.5 17.9998C4.5 18.2982 4.61853 18.5843 4.82951 18.7953C5.04048 19.0063 5.32663 19.1248 5.625 19.1248H8.60203C8.8441 19.9375 9.34211 20.6503 10.0219 21.1571C10.7017 21.664 11.527 21.9377 12.375 21.9377C13.223 21.9377 14.0483 21.664 14.7281 21.1571C15.4079 20.6503 15.9059 19.9375 16.148 19.1248H30.375C30.6734 19.1248 30.9595 19.0063 31.1705 18.7953C31.3815 18.5843 31.5 18.2982 31.5 17.9998C31.5 17.7014 31.3815 17.4153 31.1705 17.2043C30.9595 16.9933 30.6734 16.8748 30.375 16.8748H16.148C15.9059 16.0621 15.4079 15.3494 14.7281 14.8425C14.0483 14.3357 13.223 14.0619 12.375 14.0619C11.527 14.0619 10.7017 14.3357 10.0219 14.8425C9.34211 15.3494 8.8441 16.0621 8.60203 16.8748ZM14.0625 17.9998C14.0625 18.3336 13.9635 18.6598 13.7781 18.9373C13.5927 19.2149 13.3291 19.4311 13.0208 19.5589C12.7124 19.6866 12.3731 19.72 12.0458 19.6549C11.7184 19.5898 11.4178 19.4291 11.1818 19.1931C10.9458 18.9571 10.785 18.6564 10.7199 18.329C10.6548 18.0017 10.6882 17.6624 10.816 17.354C10.9437 17.0457 11.16 16.7821 11.4375 16.5967C11.715 16.4113 12.0412 16.3123 12.375 16.3123C12.8224 16.3128 13.2513 16.4908 13.5677 16.8072C13.884 17.1235 14.062 17.5524 14.0625 17.9998ZM23.625 3.93732C22.7774 3.93844 21.9527 4.21261 21.2731 4.7192C20.5935 5.22578 20.0952 5.93783 19.852 6.74982L5.625 6.74968C5.32663 6.74968 5.04048 6.86821 4.82951 7.07919C4.61853 7.29016 4.5 7.57631 4.5 7.87468C4.5 8.17305 4.61853 8.4592 4.82951 8.67018C5.04048 8.88116 5.32663 8.99968 5.625 8.99968L19.852 8.99982C20.0941 9.81249 20.5921 10.5253 21.2719 11.0321C21.9517 11.539 22.777 11.8127 23.625 11.8127C24.473 11.8127 25.2983 11.539 25.9781 11.0321C26.6579 10.5253 27.1559 9.81249 27.398 8.99982L30.375 8.99968C30.6734 8.99968 30.9595 8.88116 31.1705 8.67018C31.3815 8.4592 31.5 8.17305 31.5 7.87468C31.5 7.57631 31.3815 7.29016 31.1705 7.07919C30.9595 6.86821 30.6734 6.74968 30.375 6.74968L27.398 6.74982C27.1548 5.93782 26.6565 5.22576 25.9769 4.71917C25.2973 4.21258 24.4726 3.93842 23.625 3.93732ZM25.3125 7.87482C25.3125 8.20858 25.2135 8.53484 25.0281 8.81235C24.8427 9.08986 24.5791 9.30614 24.2708 9.43387C23.9624 9.56159 23.6231 9.59501 23.2958 9.5299C22.9684 9.46478 22.6678 9.30407 22.4318 9.06806C22.1958 8.83206 22.035 8.53138 21.9699 8.20404C21.9048 7.87669 21.9382 7.53739 22.066 7.22904C22.1937 6.92069 22.41 6.65714 22.6875 6.47172C22.965 6.28629 23.2912 6.18732 23.625 6.18732C24.0724 6.18784 24.5013 6.3658 24.8177 6.68215C25.134 6.99851 25.312 7.42743 25.3125 7.87482ZM15.352 26.9998H5.625C5.32663 26.9998 5.04048 27.1183 4.82951 27.3293C4.61853 27.5403 4.5 27.8264 4.5 28.1248C4.5 28.4232 4.61853 28.7093 4.82951 28.9203C5.04048 29.1313 5.32663 29.2498 5.625 29.2498H15.352C15.5941 30.0625 16.0921 30.7753 16.7719 31.2821C17.4517 31.789 18.277 32.0627 19.125 32.0627C19.973 32.0627 20.7983 31.789 21.4781 31.2821C22.1579 30.7753 22.6559 30.0625 22.898 29.2498H30.375C30.6734 29.2498 30.9595 29.1313 31.1705 28.9203C31.3815 28.7093 31.5 28.4232 31.5 28.1248C31.5 27.8264 31.3815 27.5403 31.1705 27.3293C30.9595 27.1183 30.6734 26.9998 30.375 26.9998H22.898C22.6559 26.1871 22.1579 25.4744 21.4781 24.9675C20.7983 24.4607 19.973 24.1869 19.125 24.1869C18.277 24.1869 17.4517 24.4607 16.7719 24.9675C16.0921 25.4744 15.5941 26.1871 15.352 26.9998ZM20.8125 28.1248C20.8125 28.4586 20.7135 28.7848 20.5281 29.0623C20.3427 29.3398 20.0791 29.5561 19.7708 29.6839C19.4624 29.8116 19.1231 29.845 18.7958 29.7799C18.4684 29.7148 18.1678 29.5541 17.9318 29.3181C17.6958 29.0821 17.535 28.7814 17.4699 28.454C17.4048 28.1267 17.4382 27.7874 17.566 27.479C17.6937 27.1707 17.91 26.9071 18.1875 26.7217C18.465 26.5363 18.7912 26.4373 19.125 26.4373C19.5724 26.4378 20.0013 26.6158 20.3177 26.9321C20.634 27.2485 20.812 27.6774 20.8125 28.1248Z"/>
                        </svg>

                        <h2> SYSTEM </h2>

                    </div>

                    <hr/>

                    <ul className="settings-item-container">

                        <li onClick={()=>navigateTo('lock')}>
                            <p> Lock </p>

                            <div className="arrow-and-text">
                                <p> {userSettings.auth? 'ON' : 'OFF' } </p> 
                                <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.83325 13.125L17.4999 24.7917L29.1666 13.125" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                        </li>

                        <hr/>

                        <li onClick={()=>navigateTo('reminder')}>
                            <p> Reminder </p>

                            <div className="arrow-and-text">
                                <p> {userSettings.notification.active? 'ON' : 'OFF' } </p> 
                                <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.83325 13.125L17.4999 24.7917L29.1666 13.125" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                        </li>

                        <hr/>
                    </ul>
                    
                </div>    
            </div>

        </motion.div>
    )
}
