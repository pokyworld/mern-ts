import React, { Fragment } from "react";

export const Card = (props: any) => {
    const { title, subtitle } = props;
    const { cardFooterItem, button, icon } = styles;
    return (
        <Fragment>
            <div className="card">
                <div className="card-content">
                    <h2 className="title">{title}</h2>
                    <h4 className="subtitle">{subtitle}</h4>
                </div>
                <footer className="card-footer is-grouped">
                    <div style={cardFooterItem} className="card-footer-item">
                        <a href="#" style={button} className="button is-success"><i style={icon} className="fa fa-thumbs-up"></i></a>
                    </div>
                    <div style={cardFooterItem} className="card-footer-item">
                        <a href="#" style={button} className="button is-danger"><i style={icon} className="fa fa-thumbs-down"></i></a>
                    </div>
                    <div style={cardFooterItem} className="card-footer-item">
                        <a href="#" style={button} className="button is-info"><i style={icon} className="fa fa-retweet"></i></a>
                    </div>
                </footer>
            </div>
        </Fragment>
    )
};

const styles = {
    cardFooterItem: {
        padding: 0,
    },
    button: {
        margin: 0
    },
    icon: {
        fontSize: "1.5em"
    }
}
export default Card;
