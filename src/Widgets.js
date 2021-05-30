import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
    const newArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon/>
            </div>

            <div className="widgets_articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon/>
            </div>

            {newArticle("React learning is COOL!",  'Top news -5004 readers')}
            {newArticle("Coronavirus: Ukraine updates",  'Top news -506 readers')}
            {newArticle("Tesla hits new highs",  'Cars & auto -1022 readers')}
            {newArticle("Is Redux too good?",  'Code -400 readers')}
            {newArticle("How  we lean a new staff",  'Practical Logic -56 readers')}
            {newArticle("BOOM! When it  will happends?",  'Funny Stories -9988 readers')}
        </div>
    );
}

export default Widgets;