import React, { FC, MouseEvent, useEffect, useState } from 'react';
import './style.scss';

interface AccordionProps {
    title: string;
    className?: string;
}

export const Accordion: FC<AccordionProps> = (props) => {
    const [open, setOpen] = useState(false);

    function handleOpen(e: MouseEvent) {
        e.preventDefault();
        setOpen(!open);
    }

    return (
        <div className={`accordion-component ${props.className}`}>
            <div className={`${open ? 'accordion-open' : ''}`}>
                <a className="flex focus:outline-none cursor-pointer" onClick={handleOpen}> 
                    <span className="flex-1 align">{props.title}</span>
                    <span>
                        {
                            open 
                                ? (
                                    <div className="menos">
                                        <div className="menos1">
                                        </div>
                                        
                                    </div> 
                                ) 
                                : (
                                    <div className="mais">
                                        <div className="menos1"></div>
                                        <div className="mais1"></div>
                                    </div>
                                )
                        }
                    </span>
                </a>
                <div className="accordion-content"> 
                   {props.children}
                </div>
            </div>
        </div>
    )
}
