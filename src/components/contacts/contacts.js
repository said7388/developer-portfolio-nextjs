import emailjs from '@emailjs/browser';
import { IconButton, Snackbar, SnackbarContent } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Image from 'next/image';
import React, { useContext, useRef, useState } from 'react';
import { AiOutlineCheckCircle, AiOutlineSend } from 'react-icons/ai';
import {
    FaFacebook, FaGithub, FaLinkedinIn, FaMediumM,
    FaStackOverflow, FaTwitter
} from 'react-icons/fa';
import { FiAtSign, FiPhone } from 'react-icons/fi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import isEmail from 'validator/lib/isEmail';
import { ThemeContext } from '../../contexts/theme-context';
import { contactsData } from '../../data/contacts-data';
import { socialsData } from '../../data/socials-data';
import styles from '../../styles/contacts.module.css';

function Contacts() {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    const form = useRef();
    const { theme } = useContext(ThemeContext);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const handleContactForm = (e) => {
        e.preventDefault();

        if (name && email && message) {
            if (isEmail(email)) {
                emailjs.sendForm(
                    process.env.REACT_APP_YOUR_SERVICE_ID,
                    process.env.REACT_APP_YOUR_TEMPLATE_ID,
                    form.current, process.env.REACT_APP_YOUR_PUBLIC_KEY)
                    .then((result) => {
                        console.log('success');
                        setSuccess(true);
                        setErrMsg('');
                        setName('');
                        setEmail('');
                        setMessage('');
                        setOpen(false);
                    }, (error) => {
                        console.log(error.text);
                    });
            } else {
                setErrMsg('Invalid email');
                setOpen(true);
            }
        } else {
            setErrMsg('Enter all the fields');
            setOpen(true);
        }
    };

    return (
        <div
            className={styles.contacts}
            id='contacts'
            style={{ backgroundColor: theme.secondary }}
        >
            <div className={styles.contactsContainer}>
                <h1 style={{ color: theme.primary }}>Contacts</h1>
                <div className={styles.contactsBody}>
                    <div className={styles.contactsForm}>
                        <form ref={form} onSubmit={handleContactForm}>
                            <div className={styles.inputContainer}>
                                <label htmlFor='Name'
                                    className="bg-[#15202B] text-[#EFF3F4] 
                                font-semibold text-[0.9rem] py-0 px-[5px] 
                                inline-flex translate-x-[25px] translate-y-[50%]">
                                    Name
                                </label>
                                <input
                                    placeholder='John Doe'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    type='text'
                                    name='user_name'
                                    className={`${styles.formInput}  
                                    border-2 border-[#8B98A5] bg-[#15202B]
                                     text-[#EFF3F4] font-medium transition 
                                     focus:border-[#1D9BF0]`}
                                />
                            </div>
                            <div className={styles.inputContainer}>
                                <label
                                    htmlFor='Email'
                                    className="bg-[#15202B] text-[#EFF3F4] 
                                    font-semibold text-[0.9rem] px-[5px] 
                                    inline-flex translate-x-[25px] 
                                    translate-y-[50%]"
                                >
                                    Email
                                </label>
                                <input
                                    placeholder='John@doe.com'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type='email'
                                    name='user_email'
                                    className={`${styles.formInput}  
                                    border-2 border-[#8B98A5] bg-[#15202B]
                                     text-[#EFF3F4] font-medium transition
                                      focus:border-[#1D9BF0]`}
                                />
                            </div>
                            <div className={styles.inputContainer}>
                                <label
                                    htmlFor='Message'
                                    className="bg-[#15202B] text-[#EFF3F4]
                                     font-semibold text-[0.9rem] px-[5px] 
                                     inline-flex translate-x-[25px] 
                                     translate-y-[50%]"
                                >
                                    Message
                                </label>
                                <textarea
                                    placeholder='Type your message....'
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    type='text'
                                    name='message'
                                    className={`${styles.formMessage} 
                                    border-2 border-[#8B98A5] 
                                    focus:border-[#1D9BF0] bg-[#15202B]
                                     text-[#EFF3F4] font-medium transition`}
                                />
                            </div>

                            <div className={styles.submitBtn}>
                                <button
                                    type='submit'
                                    className="bg-[#1D9BF0] 
                                    hover:bg-[#8B98A5] text-[#15202B]
                                     transition delay-200 ">
                                    <p>{!success ? 'Send' : 'Sent'}</p>
                                    <div className={styles.submitIcon}>
                                        <AiOutlineSend
                                            className={styles.sendIcon}
                                            style={{
                                                animation: !success
                                                    ? 'initial'
                                                    : 'fly 0.8s linear both',
                                                position: success
                                                    ? 'absolute'
                                                    : 'initial',
                                            }}
                                        />
                                        <AiOutlineCheckCircle
                                            className={styles.successIcon}
                                            style={{
                                                display: !success
                                                    ? 'none'
                                                    : 'inline-flex',
                                                opacity: !success ? '0' : '1',
                                            }}
                                        />
                                    </div>
                                </button>
                            </div>
                        </form>
                        <Snackbar
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                            }}
                            open={open}
                            autoHideDuration={4000}
                            onClose={handleClose}
                        >
                            <SnackbarContent
                                action={
                                    <React.Fragment>
                                        <IconButton
                                            size='small'
                                            aria-label='close'
                                            color='inherit'
                                            onClick={handleClose}
                                        >
                                            <CloseIcon fontSize='small' />
                                        </IconButton>
                                    </React.Fragment>
                                }
                                style={{
                                    backgroundColor: theme.primary,
                                    color: theme.secondary,
                                    fontFamily: 'var(--primaryFont)',
                                }}
                                message={errMsg}
                            />
                        </Snackbar>
                    </div>

                    <div className={styles.contactsDetails}>
                        <a
                            href={`mailto:${contactsData.email}`}
                            className={styles.personalDetails}
                        >
                            <div className="w-[45px] h-[45px] 
                            rounded-[50%] flex items-center 
                            justify-center text-2xl transition 
                            ease-in-out text-[#15202B] bg-[#8B98A5]
                             hover:bg-[#1D9BF0] hover:scale-[1.1] 
                             shrink delay-200"
                            >
                                <FiAtSign />
                            </div>
                            <p style={{ color: theme.tertiary }}>
                                {contactsData.email}
                            </p>
                        </a>
                        <a
                            href={`tel:${contactsData.phone}`}
                            className={styles.personalDetails}
                        >
                            <div className="w-[45px] h-[45px] 
                            rounded-[50%] flex items-center 
                            justify-center text-2xl transition 
                            ease-in-out text-[#15202B] bg-[#8B98A5]
                             hover:bg-[#1D9BF0] hover:scale-[1.1] 
                             shrink delay-200"
                            >
                                <FiPhone />
                            </div>
                            <p style={{ color: theme.tertiary }}>
                                {contactsData.phone}
                            </p>
                        </a>
                        <div className={styles.personalDetails}>
                            <div className="w-[45px] h-[45px]
                             rounded-[50%] flex items-center 
                             justify-center text-2xl transition 
                             ease-in-out text-[#15202B] bg-[#8B98A5]
                              hover:bg-[#1D9BF0] hover:scale-[1.1]
                               shrink delay-200"
                            >
                                <HiOutlineLocationMarker />
                            </div>
                            <p style={{ color: theme.tertiary }}>
                                {contactsData.address}
                            </p>
                        </div>

                        <div className={styles.socialmediaIcons}>
                            {socialsData.twitter && (
                                <a
                                    href={socialsData.twitter}
                                    target='_blank'
                                    rel='noreferrer'
                                    className="w-[45px] h-[45px] 
                                    rounded-[50%] flex items-center 
                                    justify-center text-xl transition
                                     ease-in-out text-[#15202B] bg-[#8B98A5]
                                      hover:bg-[#1D9BF0]"
                                >
                                    <FaTwitter aria-label='Twitter' />
                                </a>
                            )}
                            {socialsData.github && (
                                <a
                                    href={socialsData.github}
                                    target='_blank'
                                    rel='noreferrer'
                                    className="w-[45px] h-[45px] 
                                    rounded-[50%] flex items-center justify-center
                                     text-xl transition ease-in-out text-[#15202B]
                                      bg-[#8B98A5] hover:bg-[#1D9BF0]"
                                >
                                    <FaGithub aria-label='GitHub' />
                                </a>
                            )}
                            {socialsData.linkedIn && (
                                <a
                                    href={socialsData.linkedIn}
                                    target='_blank'
                                    rel='noreferrer'
                                    className="w-[45px] h-[45px] rounded-[50%] flex 
                                    items-center justify-center text-xl transition 
                                    ease-in-out text-[#15202B] bg-[#8B98A5] 
                                    hover:bg-[#1D9BF0]"
                                >
                                    <FaLinkedinIn aria-label='LinkedIn' />
                                </a>
                            )}

                            {socialsData.medium && (
                                <a
                                    href={socialsData.medium}
                                    target='_blank'
                                    rel='noreferrer'
                                    className="w-[45px] h-[45px] rounded-[50%] flex 
                                    items-center justify-center text-xl transition 
                                    ease-in-out text-[#15202B] bg-[#8B98A5] 
                                    hover:bg-[#1D9BF0]"
                                >
                                    <FaMediumM aria-label='Medium' />
                                </a>
                            )}



                            {socialsData.stackOverflow && (
                                <a
                                    href={socialsData.stackOverflow}
                                    target='_blank'
                                    rel='noreferrer'
                                    className="w-[45px] h-[45px] rounded-[50%] flex 
                                    items-center justify-center text-xl transition 
                                    ease-in-out text-[#15202B] bg-[#8B98A5] 
                                    hover:bg-[#1D9BF0]"
                                >
                                    <FaStackOverflow aria-label='Stack Overflow' />
                                </a>
                            )}
                            {socialsData.facebook && (
                                <a
                                    href={socialsData.facebook}
                                    target='_blank'
                                    rel='noreferrer'
                                    className="w-[45px] h-[45px] rounded-[50%] flex
                                     items-center justify-center text-xl transition
                                      ease-in-out text-[#15202B] bg-[#8B98A5]
                                       hover:bg-[#1D9BF0]"
                                >
                                    <FaFacebook aria-label='facebook' />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Image
                src={theme.contactsimg}
                alt='contacts'
                className={styles.contactsImg}
            />
        </div>
    );
}

export default Contacts;
