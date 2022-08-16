import React from "react";
import { useState } from "react";

const tabsItems = [
    {
        title: 'ITEM ONE',
        content: <>Item one</>
    },
    {
        title: 'ITEM TWO',
        content: <>Item two</>
    },
    {
        title: 'ITEM THREE',
        content: <>Item three</>
    }
]

export const Tabs = () => {
    const [index, setIndex] = useState(0)

    return (
        <div className="tabs--container">
            <div className="tabs">
                <div className="tabs--list">
                    {tabsItems.map((item, i) => {
                        return (
                            <button className={`tab--title ${index == i ? 'active' : ''}`} onClick={() => setIndex(i)}>{item.title}</button>
                        )
                    })}
                </div>
                <div className="tab--content">
                    {tabsItems[index].content}
                </div>
            </div>
        </div>
    )
}