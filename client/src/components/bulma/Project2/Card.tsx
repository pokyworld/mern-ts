import React, { Fragment } from "react";
import { ICard } from "../../../typescript/interfaces";

export const Card = (card: ICard) => {
    const {
        title = "",
        subtitle = "",
        body = "",
        cardColors = { backgroundColor: "white", color: "black" }
    } = card;
    const { backgroundColor, color } = cardColors;
    const { cardFooterItem, icon } = styles;
    return (
        <Fragment>
            <div className={`card has-background-${backgroundColor}`}>
                <div className="card-content">
                    <h2 className={`title is-size-2 has-text-${color}`}>
                        {title}
                    </h2>
                    <h4 className={`subtitle is-size-4 has-text-${color}`}>
                        {" "}
                        {subtitle}
                    </h4>
                    <p className={`is-size-5 has-text-${color}`}>{body}</p>
                </div>
                <footer className="card-footer is-grouped">
                    <div style={cardFooterItem} className="card-footer-item">
                        <a
                            href="#"
                            style={{ margin: 0, borderColor: color }}
                            className="button is-success"
                        >
                            <i style={icon} className="fa fa-thumbs-up"></i>
                        </a>
                    </div>
                    <div style={cardFooterItem} className="card-footer-item">
                        <a
                            href="#"
                            style={{ margin: 0, borderColor: color }}
                            className="button is-danger"
                        >
                            <i style={icon} className="fa fa-thumbs-down"></i>
                        </a>
                    </div>
                    <div style={cardFooterItem} className="card-footer-item">
                        <a
                            href="#"
                            style={{ margin: 0, borderColor: color }}
                            className="button is-info"
                        >
                            <i style={icon} className="fa fa-retweet"></i>
                        </a>
                    </div>
                </footer>
            </div>
        </Fragment>
    );
};

const styles = {
    cardFooterItem: {
        padding: 0
    },
    button: {
        margin: 0
    },
    icon: {
        fontSize: "1.5em"
    }
};
export default Card;
