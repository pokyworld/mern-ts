import React, { Dispatch } from "react";
// import { string } from "prop-types";
// import { IncomingMessage } from "http";

export type IDispatch = Dispatch<IAction>;

export interface IState {}

export interface IAction {
    type: string;
    payload: string;
}

export interface IColors {
    backgroundColor: string;
    color: string;
}

export interface IText {
    text: string;
    size: string;
    color: string;
}

export interface IImage {
    url: string;
    alt: string;
    maxWidth: number;
}

export interface IHero {
    title: IText;
    subtitle: IText;
    image: IImage;
    backgroundColor: string;
    fullHeight: boolean;
}

export interface ICard {
    id: number;
    title: string;
    subtitle: string;
    body: string;
    cardColors: IColors;
}

export interface ICards {
    cards: Array<ICard>;
}

export interface IPanel {
    id: number;
    title: string;
    body: string;
    icon: string; // string of all modifiers incl color, size and icon-name
    panelColors: IColors;
}

export interface IPanels {
    panels: Array<IPanel>;
    sectionColors: IColors;
}
